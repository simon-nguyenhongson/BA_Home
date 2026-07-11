import json

found = False
with open("/Users/nguyenhongson/.gemini/antigravity-ide/brain/518c4d01-1e93-4e96-956e-d0b33dcbd08c/.system_generated/logs/transcript_full.jsonl") as f:
    for line in f:
        data = json.loads(line)
        if data.get("type") == "USER_INPUT":
            content = data.get("content", "")
            if "AIza" in content or "gemini" in content.lower() or "key" in content.lower():
                print(f"Match: {content[:200]}")
                found = True
if not found:
    print("No key found.")
