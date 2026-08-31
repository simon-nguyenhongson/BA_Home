@echo off
echo Installing BA_Home dependencies...

echo [1/5] PPG System...
cd backend\ppg && pip install -r requirements.txt
cd ..\..

echo [2/5] BA Workflow...
cd backend\ba-workflow && pip install -r requirements.txt
cd ..\..

echo [3/5] Test Platform...
cd backend\test-platform && pip install -r requirements.txt
cd ..\..

echo [4/5] Frontend...
cd frontend && npm install
cd ..

echo [5/5] Automation Test (Capture Studio)...
cd automation-test && npm ci && npx playwright install chromium
cd ..

echo.
echo Done!
echo Next step: psql -U postgres -f infra/init.sql
echo Then run:  start.bat
