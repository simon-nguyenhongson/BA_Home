"""
Catalog — Products Router
Org-wide product catalog: Web App / Mobile / Job / ETL / API
Includes: environments, licenses, type-specific details,
          and 6 common metadata sections per product.
"""
from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException
import asyncpg

from app.auth import CurrentUser
from app.database import get_db
from app.models.catalog import (
    CatalogProductCreate, CatalogProductUpdate, CatalogProductOut,
    EnvCreate, EnvUpdate, EnvOut,
    ProductLicenseCreate, ProductLicenseUpdate, ProductLicenseOut,
    ProductDetailsUpsert, ProductDetailsOut,
)

router = APIRouter(prefix="/catalog/products", tags=["catalog-products"])

# ── JSONB section column names ────────────────────────────────────────────
_JSONB_SECTIONS = (
    "architecture_info", "deployment_info", "security_info",
    "monitoring_info", "resource_info", "business_metadata",
)


# ── helpers ──────────────────────────────────────────────────────────────────

def _prod(row) -> dict:
    """Convert asyncpg row to plain dict. JSONB cols are decoded by the codec."""
    return dict(row)


def _env(row) -> dict:
    return dict(row)


def _details(row) -> dict:
    return dict(row)


_PRODUCT_SELECT = """
    SELECT p.*, pd.name AS domain_name,
           op.code AS origin_project_code, op.name AS origin_project_name
    FROM catalog_products p
    LEFT JOIN project_domains pd ON pd.code = p.domain_code
    LEFT JOIN projects op       ON op.id   = p.origin_project_id
"""

async def _assert_project_free(
    db: asyncpg.Connection, project_id: UUID, exclude_product: UUID | None = None,
) -> None:
    """
    Dự án tồn tại và chưa khai sinh sản phẩm nào khác (V052: tối đa 1 sản phẩm/dự án).
    """
    prj = await db.fetchrow("SELECT code, name FROM projects WHERE id = $1", project_id)
    if not prj:
        raise HTTPException(404, f"Dự án '{project_id}' không tồn tại")

    taken = await db.fetchrow(
        "SELECT id, product_code, product_name FROM catalog_products "
        "WHERE origin_project_id = $1 AND ($2::uuid IS NULL OR id <> $2)",
        project_id, exclude_product,
    )
    if taken:
        raise HTTPException(
            409,
            detail={
                "code": "PROJECT_ALREADY_HAS_PRODUCT",
                "message": f"Dự án {prj['code']} đã khai sinh sản phẩm "
                           f"{taken['product_code']} — {taken['product_name']}. "
                           "Mỗi dự án bàn giao đúng một sản phẩm (V052). Bỏ gắn sản phẩm "
                           "cũ trước, hoặc tạo sản phẩm không gắn dự án.",
            },
        )


async def _get_product_or_404(product_id: UUID, db: asyncpg.Connection) -> asyncpg.Record:
    row = await db.fetchrow(
        _PRODUCT_SELECT + " WHERE p.id = $1", product_id
    )
    if not row:
        raise HTTPException(404, "Product not found")
    return row


# ── Products ─────────────────────────────────────────────────────────────────

@router.get("", response_model=list[CatalogProductOut])
async def list_products(
    user: CurrentUser,
    product_type: str | None = None,
    status: str | None = None,
    department: str | None = None,
    domain: str | None = None,
    q: str | None = None,
    # Sản phẩm khai sinh từ một dự án cụ thể (tab Sản phẩm trong trang dự án)
    origin_project_id: UUID | None = None,
    db: asyncpg.Connection = Depends(get_db),
):
    conditions = ["1=1"]
    params: list = []
    i = 1
    if product_type:
        conditions.append(f"p.product_type = ${i}"); params.append(product_type); i += 1
    if status:
        conditions.append(f"p.status = ${i}"); params.append(status); i += 1
    if department:
        conditions.append(f"p.department = ${i}"); params.append(department); i += 1
    if domain:
        conditions.append(f"p.domain_code = ${i}"); params.append(domain); i += 1
    if origin_project_id:
        conditions.append(f"p.origin_project_id = ${i}")
        params.append(origin_project_id); i += 1
    if q:
        conditions.append(f"(p.product_name ILIKE ${i} OR p.product_code ILIKE ${i} OR p.description ILIKE ${i})")
        params.append(f"%{q}%"); i += 1
    where = " AND ".join(conditions)
    rows = await db.fetch(
        _PRODUCT_SELECT + f" WHERE {where} ORDER BY p.product_type, p.product_name",
        *params,
    )
    return [_prod(r) for r in rows]


@router.post("", response_model=CatalogProductOut, status_code=201)
async def create_product(
    user: CurrentUser,
    body: CatalogProductCreate,
    db: asyncpg.Connection = Depends(get_db),
):
    # V052: một dự án khai sinh TỐI ĐA một sản phẩm. Kiểm trước khi INSERT để trả câu
    # nói rõ sản phẩm nào đang chiếm chỗ — nếu để UNIQUE index bắt thì thông báo chỉ là
    # "already exists" và người dùng tưởng trùng mã sản phẩm.
    if body.origin_project_id:
        await _assert_project_free(db, body.origin_project_id)

    try:
        ins = await db.fetchrow(
            """INSERT INTO catalog_products
               (product_code, product_name, product_type, description,
                domain_code, business_owner, technical_owner, owner_team, department,
                status, tags, notes, origin_project_id,
                architecture_info, deployment_info, security_info,
                monitoring_info, resource_info, business_metadata,
                created_by)
               VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,
                       $14,$15,$16,$17,$18,$19,$20) RETURNING id""",
            body.product_code, body.product_name, body.product_type,
            body.description, body.domain_code,
            body.business_owner, body.technical_owner,
            body.owner_team, body.department, body.status,
            body.tags,       # TEXT[] — pass list directly
            body.notes,
            body.origin_project_id,
            body.architecture_info.model_dump(),
            body.deployment_info.model_dump(),
            body.security_info.model_dump(),
            body.monitoring_info.model_dump(),
            body.resource_info.model_dump(),
            body.business_metadata.model_dump(),
            user.sub,
        )
    except asyncpg.UniqueViolationError:
        raise HTTPException(409, f"Product code '{body.product_code}' already exists")
    except asyncpg.ForeignKeyViolationError:
        raise HTTPException(400, f"domain_code '{body.domain_code}' không tồn tại")
    row = await _get_product_or_404(ins["id"], db)
    return _prod(row)


@router.get("/{product_id}", response_model=CatalogProductOut)
async def get_product(
    user: CurrentUser,
    product_id: UUID,
    db: asyncpg.Connection = Depends(get_db),
):
    row = await _get_product_or_404(product_id, db)
    return _prod(row)


@router.put("/{product_id}", response_model=CatalogProductOut)
async def update_product(
    user: CurrentUser,
    product_id: UUID,
    body: CatalogProductUpdate,
    db: asyncpg.Connection = Depends(get_db),
):
    updates: dict = {}
    dumped = body.model_dump(exclude_none=True)

    for k, v in dumped.items():
        if k in _JSONB_SECTIONS:
            # v is already a dict (model_dump of sub-model)
            updates[k] = v
        else:
            updates[k] = v

    if not updates:
        raise HTTPException(400, "No fields to update")

    if updates.get("origin_project_id"):
        await _assert_project_free(db, updates["origin_project_id"], exclude_product=product_id)

    set_parts = [f"{k} = ${i+2}" for i, k in enumerate(updates.keys())]
    result = await db.fetchrow(
        f"UPDATE catalog_products SET {', '.join(set_parts)}, updated_at = NOW() "
        f"WHERE id = $1 RETURNING id",
        product_id, *updates.values(),
    )
    if not result:
        raise HTTPException(404, "Product not found")
    row = await _get_product_or_404(product_id, db)
    return _prod(row)


@router.delete("/{product_id}/origin-project", status_code=200,
               response_model=CatalogProductOut)
async def unlink_origin_project(
    user: CurrentUser,
    product_id: UUID,
    db: asyncpg.Connection = Depends(get_db),
):
    """
    Bỏ gắn dự án khai sinh khỏi sản phẩm.

    Phải là endpoint riêng vì PUT dùng model_dump(exclude_none=True): gửi
    origin_project_id=null sẽ bị loại khỏi payload, không phân biệt được "không sửa
    trường này" với "xoá về NULL". Không có endpoint này thì gắn sai một lần là kẹt
    vĩnh viễn — mà UNIQUE index chỉ cho mỗi dự án đúng một sản phẩm.
    """
    await _get_product_or_404(product_id, db)
    await db.execute(
        "UPDATE catalog_products SET origin_project_id = NULL, updated_at = NOW() "
        "WHERE id = $1",
        product_id,
    )
    return _prod(await _get_product_or_404(product_id, db))


@router.delete("/{product_id}", status_code=204)
async def delete_product(
    user: CurrentUser,
    product_id: UUID,
    db: asyncpg.Connection = Depends(get_db),
):
    result = await db.execute(
        "UPDATE catalog_products SET status = 'deprecated', updated_at = NOW() WHERE id = $1",
        product_id,
    )
    if result == "UPDATE 0":
        raise HTTPException(404, "Product not found")


# ── Environments ──────────────────────────────────────────────────────────────

@router.get("/{product_id}/environments", response_model=list[EnvOut])
async def list_envs(
    user: CurrentUser,
    product_id: UUID,
    db: asyncpg.Connection = Depends(get_db),
):
    await _get_product_or_404(product_id, db)
    rows = await db.fetch(
        "SELECT * FROM catalog_product_environments WHERE product_id = $1 "
        "ORDER BY CASE env_name WHEN 'DEV' THEN 1 WHEN 'SIT' THEN 2 WHEN 'UAT' THEN 3 "
        "WHEN 'STAGING' THEN 4 WHEN 'PROD' THEN 5 WHEN 'DR' THEN 6 ELSE 9 END",
        product_id,
    )
    return [_env(r) for r in rows]


@router.post("/{product_id}/environments", response_model=EnvOut, status_code=201)
async def create_env(
    user: CurrentUser,
    product_id: UUID,
    body: EnvCreate,
    db: asyncpg.Connection = Depends(get_db),
):
    await _get_product_or_404(product_id, db)
    try:
        row = await db.fetchrow(
            """INSERT INTO catalog_product_environments
               (product_id, env_name, url, infra_type, region,
                server_info, deploy_date, version, status, notes)
               VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *""",
            product_id, body.env_name, body.url,
            body.infra_type, body.region,
            body.server_info,    # JSONB — pass dict directly
            body.deploy_date, body.version, body.status, body.notes,
        )
    except asyncpg.UniqueViolationError:
        raise HTTPException(409, f"Environment '{body.env_name}' already exists for this product")
    return _env(row)


@router.put("/{product_id}/environments/{env_id}", response_model=EnvOut)
async def update_env(
    user: CurrentUser,
    product_id: UUID,
    env_id: UUID,
    body: EnvUpdate,
    db: asyncpg.Connection = Depends(get_db),
):
    updates = body.model_dump(exclude_none=True)
    if not updates:
        raise HTTPException(400, "No fields to update")
    set_parts = [f"{k} = ${i+3}" for i, k in enumerate(updates.keys())]
    row = await db.fetchrow(
        f"UPDATE catalog_product_environments SET {', '.join(set_parts)}, updated_at = NOW() "
        f"WHERE id = $1 AND product_id = $2 RETURNING *",
        env_id, product_id, *updates.values(),
    )
    if not row:
        raise HTTPException(404, "Environment not found")
    return _env(row)


@router.delete("/{product_id}/environments/{env_id}", status_code=204)
async def delete_env(
    user: CurrentUser,
    product_id: UUID,
    env_id: UUID,
    db: asyncpg.Connection = Depends(get_db),
):
    result = await db.execute(
        "DELETE FROM catalog_product_environments WHERE id = $1 AND product_id = $2",
        env_id, product_id,
    )
    if result == "DELETE 0":
        raise HTTPException(404, "Environment not found")


# ── Licenses ──────────────────────────────────────────────────────────────────

@router.get("/{product_id}/licenses", response_model=list[ProductLicenseOut])
async def list_licenses(
    user: CurrentUser,
    product_id: UUID,
    db: asyncpg.Connection = Depends(get_db),
):
    await _get_product_or_404(product_id, db)
    rows = await db.fetch(
        "SELECT * FROM catalog_product_licenses WHERE product_id = $1 ORDER BY license_name",
        product_id,
    )
    return [dict(r) for r in rows]


@router.post("/{product_id}/licenses", response_model=ProductLicenseOut, status_code=201)
async def create_license(
    user: CurrentUser,
    product_id: UUID,
    body: ProductLicenseCreate,
    db: asyncpg.Connection = Depends(get_db),
):
    await _get_product_or_404(product_id, db)
    row = await db.fetchrow(
        """INSERT INTO catalog_product_licenses
           (product_id, license_name, license_type, vendor, quantity,
            start_date, expiry_date, cost_amount, currency,
            auto_renewal, compliance_status, notes)
           VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING *""",
        product_id, body.license_name, body.license_type, body.vendor,
        body.quantity, body.start_date, body.expiry_date, body.cost_amount,
        body.currency, body.auto_renewal, body.compliance_status, body.notes,
    )
    return dict(row)


@router.put("/{product_id}/licenses/{license_id}", response_model=ProductLicenseOut)
async def update_license(
    user: CurrentUser,
    product_id: UUID,
    license_id: UUID,
    body: ProductLicenseUpdate,
    db: asyncpg.Connection = Depends(get_db),
):
    updates = body.model_dump(exclude_none=True)
    if not updates:
        raise HTTPException(400, "No fields to update")
    set_parts = [f"{k} = ${i+3}" for i, k in enumerate(updates.keys())]
    row = await db.fetchrow(
        f"UPDATE catalog_product_licenses SET {', '.join(set_parts)}, updated_at = NOW() "
        f"WHERE id = $1 AND product_id = $2 RETURNING *",
        license_id, product_id, *updates.values(),
    )
    if not row:
        raise HTTPException(404, "License not found")
    return dict(row)


@router.delete("/{product_id}/licenses/{license_id}", status_code=204)
async def delete_license(
    user: CurrentUser,
    product_id: UUID,
    license_id: UUID,
    db: asyncpg.Connection = Depends(get_db),
):
    result = await db.execute(
        "DELETE FROM catalog_product_licenses WHERE id = $1 AND product_id = $2",
        license_id, product_id,
    )
    if result == "DELETE 0":
        raise HTTPException(404, "License not found")


# ── Type-specific Details (upsert) ────────────────────────────────────────────

@router.get("/{product_id}/details", response_model=ProductDetailsOut | None)
async def get_details(
    user: CurrentUser,
    product_id: UUID,
    db: asyncpg.Connection = Depends(get_db),
):
    await _get_product_or_404(product_id, db)
    row = await db.fetchrow(
        "SELECT * FROM catalog_product_details WHERE product_id = $1", product_id,
    )
    return _details(row) if row else None


@router.put("/{product_id}/details", response_model=ProductDetailsOut)
async def upsert_details(
    user: CurrentUser,
    product_id: UUID,
    body: ProductDetailsUpsert,
    db: asyncpg.Connection = Depends(get_db),
):
    await _get_product_or_404(product_id, db)
    row = await db.fetchrow(
        """INSERT INTO catalog_product_details (product_id, details)
           VALUES ($1, $2)
           ON CONFLICT (product_id) DO UPDATE
           SET details = $2, updated_at = NOW()
           RETURNING *""",
        product_id, body.details,    # JSONB — pass dict directly
    )
    return _details(row)
