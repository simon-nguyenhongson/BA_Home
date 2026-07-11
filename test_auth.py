from datetime import datetime, timedelta, timezone
import jwt

JWT_SECRET = "change-me-in-production"
now = datetime.now(timezone.utc)
payload = {
    "sub": "admin",
    "name": "Admin",
    "iat": int(now.timestamp()),
    "exp": int((now + timedelta(hours=8)).timestamp()),
}
token = jwt.encode(payload, JWT_SECRET, algorithm="HS256")
print(token)
