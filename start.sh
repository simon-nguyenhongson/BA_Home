#!/bin/bash
echo "Starting DevOps Ecosystem Platform on Mac..."

cd backend/ppg && python -m uvicorn app.main:app --port 8001 --reload &
cd ../ba-workflow && python -m uvicorn app.main:app --port 8002 --reload &
cd ../test-platform && python -m uvicorn app.main:app --port 8003 --reload &
cd ../../frontend && npm run dev &

echo "Services started in background."
wait
