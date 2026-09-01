@echo off
echo Starting BA_Home...

REM Bi mat chia se cho endpoint service-to-service (/sync-doc, /sync-test).
REM Ba service phai dung CUNG mot gia tri. Moi truong that: dat o noi quan ly cau hinh.
if "%INTERNAL_SYNC_TOKEN%"=="" (
  for /f %%i in ('powershell -NoProfile -Command "[guid]::NewGuid().ToString()"') do set INTERNAL_SYNC_TOKEN=%%i
  echo INTERNAL_SYNC_TOKEN chua duoc dat - da sinh gia tri tam cho phien chay nay.
)

start "Project :8001" cmd /k "cd backend\ppg && python -m uvicorn app.main:app --port 8001 --reload"
timeout /t 5 /nobreak > nul

start "BA Workflow :8002" cmd /k "cd backend\ba-workflow && python -m uvicorn app.main:app --port 8002 --reload"
timeout /t 3 /nobreak > nul

start "Test Platform :8003" cmd /k "cd backend\test-platform && python -m uvicorn app.main:app --port 8003 --reload"
timeout /t 3 /nobreak > nul

start "Frontend :5173" cmd /k "cd frontend && npm run dev"

start "Capture Studio :4700" cmd /k "cd automation-test && npm run studio"

echo.
echo All services starting...
echo Project:  http://localhost:8001/docs
echo BA:       http://localhost:8002/docs
echo Test:     http://localhost:8003/docs
echo Frontend: http://localhost:5173
echo Studio:   http://localhost:4700
echo.
echo Default login: admin / admin123