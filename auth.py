# ==========================================
# Project Name: Youtube Automation | Code X
# Creator Info
# {
#   "creator": "Kawdhitha Nirmal",
#   "CodeXSL": "Developer"
# }
# K.NIRMAL | Cyber Yakku | CodexSL Dev
# ==========================================
import os
from google_auth_oauthlib.flow import InstalledAppFlow

SCOPES = [
    "https://www.googleapis.com/auth/youtube.upload",
    "https://www.googleapis.com/auth/youtube.readonly"
]

def main():
    print("=== Authenticating Channel 1 ===")
    flow = InstalledAppFlow.from_client_secrets_file(
        "client_secret.json",
        SCOPES
    )
    creds = flow.run_local_server(port=8080, prompt="consent")
    with open("token.json", "w") as token:
        token.write(creds.to_json())
    print("✅ token.json generated successfully!")

if __name__ == "__main__":
    main()