#!/bin/bash
echo "Starting DevOps Ecosystem Platform on Mac..."

# Activate virtual environment if it exists, or suggest creating one
if [ -d "venv" ]; then
    source venv/bin/activate
else
    echo "Virtual environment 'venv' not found! Please create one and install requirements."
    # Optionally create one automatically:
    # python3 -m venv venv && source venv/bin/activate
fi

cd backend/ppg && python3 -m uvicorn app.main:app --port 8001 --reload &
cd ../ba-workflow && python3 -m uvicorn app.main:app --port 8002 --reload &
cd ../test-platform && python3 -m uvicorn app.main:app --port 8003 --reload &
cd ../../frontend && npm run dev &

echo "Services started in background."
wait
