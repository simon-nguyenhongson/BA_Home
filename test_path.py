from pathlib import Path
import os

_default_uploads = Path(__file__).resolve().parent / "uploads"
UPLOADS_DIR  = Path(os.getenv("UPLOADS_DIR", str(_default_uploads))).resolve()
file_path = UPLOADS_DIR / "RETAIL/PRJ-01/BRD/69fba198_v0.2_OMS_1.0_System_Documentation.md"
print("exists:", file_path.exists())
try:
    print(file_path.resolve().relative_to(UPLOADS_DIR.resolve()))
except Exception as e:
    print("Error:", e)
