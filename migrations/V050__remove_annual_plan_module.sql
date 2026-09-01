-- V050: Gỡ bỏ hoàn toàn module Kế hoạch năm — cả bảng lẫn ràng buộc.
--
-- Quyết định của PO (2026-09-01, STRATEGY-001 v2.1, QĐ-11 + trả lời CH-1):
--   "bỏ luôn cho tôi cả DB và các ràng buộc"
-- Thay thế bằng module Báo cáo theo năm / from-date to-date (project, product, CR).
--
-- ⚠️ ĐÂY LÀ MIGRATION PHÁ HỦY — ngoại lệ có chủ đích với quy ước
--    "migrations chỉ additive" trong CLAUDE.md, do PO yêu cầu tường minh.
--    Đã sao lưu DB trước khi chạy. Chỉ chạy ở môi trường dev/test.
--
-- Phạm vi: 15 bảng + cột projects.plan_id + toàn bộ khóa ngoại liên quan.
-- Dữ liệu bị mất: 1 kế hoạch năm, 20 sáng kiến, 20 liên kết kế hoạch–dự án,
-- 20 liên kết sáng kiến–dự án, và 5 dòng ngân sách/nguồn lực/KPI/rủi ro/phụ thuộc.
-- Bản thân 20 dự án KHÔNG bị ảnh hưởng — chỉ mất cột tham chiếu tới kế hoạch.

-- ── 1. Gỡ tham chiếu từ bảng projects ────────────────────────────────────────
ALTER TABLE projects DROP CONSTRAINT IF EXISTS projects_plan_id_fkey;
ALTER TABLE projects DROP COLUMN IF EXISTS plan_id;

-- ── 2. Xóa bảng — CASCADE tự gỡ mọi khóa ngoại còn lại giữa chúng ────────────
DROP TABLE IF EXISTS ppg_biz_obj_initiative_map CASCADE;
DROP TABLE IF EXISTS ppg_biz_objectives         CASCADE;
DROP TABLE IF EXISTS ppg_initiative_projects    CASCADE;
DROP TABLE IF EXISTS ppg_plan_budget            CASCADE;
DROP TABLE IF EXISTS ppg_plan_dependencies      CASCADE;
DROP TABLE IF EXISTS ppg_plan_kpis              CASCADE;
DROP TABLE IF EXISTS ppg_plan_resources         CASCADE;
DROP TABLE IF EXISTS ppg_plan_risks             CASCADE;
DROP TABLE IF EXISTS ppg_plan_project_links     CASCADE;
DROP TABLE IF EXISTS ppg_plan_initiatives       CASCADE;
DROP TABLE IF EXISTS ppg_annual_plan_dod_items  CASCADE;
DROP TABLE IF EXISTS ppg_annual_plan_objectives CASCADE;
DROP TABLE IF EXISTS ppg_annual_plans           CASCADE;

-- Hai bảng thế hệ đầu, chưa từng có dữ liệu, router không được đăng ký
DROP TABLE IF EXISTS plan_items   CASCADE;
DROP TABLE IF EXISTS annual_plans CASCADE;
