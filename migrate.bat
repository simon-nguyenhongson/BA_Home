@echo off
echo ============================================
echo  BA_Home — Run All Migrations
echo ============================================
echo.

set PSQL=psql -h 127.0.0.1 -U devops -d devops_hub

echo [0] Initializing base schema...
%PSQL% -f infra/init.sql
if errorlevel 1 echo [WARN] init.sql had errors (may be ok if tables exist)

echo [0b] Creating ppg_annual_plans v2 base tables...
%PSQL% -f infra/migrate_annual_plans_v2.sql
if errorlevel 1 echo [WARN] migrate_annual_plans_v2.sql had errors (may be ok if tables exist)

REM  LUU Y thu tu cac cap trung version (KHONG duoc dao):
REM  V030 seed_internal_webapps TRUOC V031 product_domain_fk (seed INSERT cot `domain`, V031 DROP cot do);
REM  V041 test_documents TRUOC V042 test_documents_updated_by.
echo [1] Running migrations V017 - V053...
for %%f in (
  migrations\V017__publish_jobs.sql
  migrations\V018__annual_plan_extended.sql
  migrations\V019__project_management_extended.sql
  migrations\V020__contract_terms_payments_appstandard.sql
  migrations\V021__catalog_module.sql
  migrations\V022__ba_test_milestones_track.sql
  migrations\V023__fix_projects_plan_id_fk.sql
  migrations\V024__project_brief.sql
  migrations\V025__fix_annual_plan_related_systems.sql
  migrations\V026__catalog_product_extended.sql
  migrations\V027__catalog_seed_standard.sql
  migrations\V028__project_domains.sql
  migrations\V029__project_activity_tasks.sql
  migrations\V030__catalog_seed_internal_webapps.sql
  migrations\V030__catalog_user_domains.sql
  migrations\V031__catalog_product_domain_fk.sql
  migrations\V031__catalog_seed_users.sql
  migrations\V032__annual_plan_2026_seed.sql
  migrations\V033__projects_from_2026_initiatives.sql
  migrations\V034__project_seed_milestones_members_tasks.sql
  migrations\V035__test_defects.sql
  migrations\V036__fix_einvoice_oracle_domain_to_fs.sql
  migrations\V037__request_management.sql
  migrations\V038__pcr_implementing_status.sql
  migrations\V039__pcr_remove_draft_status.sql
  migrations\V040__request_history.sql
  migrations\V041__sr_update_statuses.sql
  migrations\V041__test_documents.sql
  migrations\V042__request_attachments.sql
  migrations\V042__test_documents_updated_by.sql
  migrations\V043__project_todos.sql
  migrations\V044__project_todos_status.sql
  migrations\V045__ba_documents_and_project_objects.sql
  migrations\V046__rename_pcr_to_cr.sql
  migrations\V047__master_doc_versioning.sql
  migrations\V048__ai_skills_brs_automation.sql
  migrations\V049__fix_audit_log_table.sql
  migrations\V050__remove_annual_plan_module.sql
  migrations\V051__diagrams.sql
  migrations\V052__cr_product_ownership.sql
  migrations\V053__diagrams_referential_integrity.sql
) do (
  echo   Running %%f ...
  %PSQL% -f %%f
)

echo.
echo ============================================
echo  Migration complete!
echo ============================================
pause
