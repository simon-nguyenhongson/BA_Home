import os
from pathlib import Path
import sys

_default_uploads = Path("backend/ppg/app/routers/files.py").resolve().parent.parent.parent.parent / "uploads"
UPLOADS_DIR  = Path(os.getenv("UPLOADS_DIR", str(_default_uploads))).resolve()
file_path = UPLOADS_DIR / "RETAIL/PRJ-01/BRD/69fba198_v0.2_OMS_1.0_System_Documentation.md"

print(f"UPLOADS_DIR = {UPLOADS_DIR}")
print(f"file_path = {file_path}")
print(f"file_path.exists() = {file_path.exists()}")
print(f"file_path.resolve() = {file_path.resolve()}")
print(f"UPLOADS_DIR.resolve() = {UPLOADS_DIR.resolve()}")

try:
    print(file_path.resolve().relative_to(UPLOADS_DIR.resolve()))
except Exception as e:
    print(f"Exception: {type(e).__name__} - {e}")
