# Chặn pytest thu thập script debug ngoài tests/backend
# (chạy `pytest .` sẽ không đụng vào script ở root/backend/venv)
collect_ignore_glob: list[str] = ["scripts/*", "backend/*", "venv/*", "test_*.py"]
