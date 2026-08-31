#!/bin/bash
echo "Starting BA_Home on Mac..."

ROOT="$(cd "$(dirname "$0")" && pwd)"

# Activate virtual environment if it exists, or suggest creating one
if [ -d "$ROOT/venv" ]; then
    source "$ROOT/venv/bin/activate"
else
    echo "Virtual environment 'venv' not found! Please create one and install requirements."
    # Optionally create one automatically:
    # python3 -m venv venv && source venv/bin/activate
fi

(cd "$ROOT/backend/ppg" && python3 -m uvicorn app.main:app --port 8001 --reload) &
(cd "$ROOT/backend/ba-workflow" && python3 -m uvicorn app.main:app --port 8002 --reload) &
(cd "$ROOT/backend/test-platform" && python3 -m uvicorn app.main:app --port 8003 --reload) &
(cd "$ROOT/frontend" && npm run dev) &
(cd "$ROOT/automation-test" && npm run studio) &

echo "Services started in background."
wait
