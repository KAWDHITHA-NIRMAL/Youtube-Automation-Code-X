# 🚀 Youtube Automation | Code X

> **⭐ If you find this project useful, please consider giving it a star on GitHub! ⭐**

## 👨‍💻 Creator Info
```json
{
  "creator": "Kawdhitha Nirmal",
  "CodeXSL": "Developer"
}
```
**K.NIRMAL | Cyber Yakku | CodexSL Dev**

---

## 📌 Project Overview
This project provides automated backend scripts to authenticate and upload videos to YouTube using the official YouTube Data API v3. 
It includes ready-to-use authentication scripts in both **Python (`auth.py`)** and **Node.js (`auth.js`)** to generate the required OAuth 2.0 tokens (`token.json`).

## ⚙️ Prerequisites

### 1️⃣ How to Get `client_secret.json`
To use these scripts, you must generate Google OAuth 2.0 credentials from the Google Cloud Console.

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing one.
3. Navigate to **APIs & Services > Library** and enable the **YouTube Data API v3**.
4. Go to **APIs & Services > OAuth consent screen** and configure it. Add your email as a test user if your app is in testing mode.
5. Go to **APIs & Services > Credentials**.
6. Click **Create Credentials** -> **OAuth client ID**.
7. Set the Application type to **Desktop app** (for Python) or **Web application** (for Node.js). 
   - *Note: If using Web Application for Node, add `http://localhost:8080` as an Authorized redirect URI.*
8. Download the JSON file and rename it to `client_secret.json`.
9. Place `client_secret.json` in the root directory of this project.

---

## 🐍 Python Setup (`auth.py`)

### Installation
Install the required Python packages using `requirements.txt`:
```cmd
pip install -r requirements.txt
```

### Usage
Run the script to authenticate:
```cmd
python auth.py
```
A browser window will open asking you to log in to your Google Account and grant access. Once allowed, a `token.json` file will be created in your directory. You can use this token for subsequent programmatic YouTube Uploads without manual intervention.

---

## 🟢 Node.js Setup (`auth.js`)

### Installation
Install the required Node.js packages:
```cmd
npm install googleapis server-destroy
```

### Usage
Run the script to authenticate:
```cmd
node auth.js
```
The console will display an authorization URL. Depending on your setup, it will either open your browser automatically or print a URL for you to visit. Log in to your Google Account and authorize the app. After authorizing, you will be redirected to `http://localhost:8080`, and a `token.json` file will be securely saved in your directory.

---

## 📝 Files Included
- `auth.py` - Python script to handle Google OAuth2 flow and generate credentials.
- `auth.js` - Node.js equivalent to handle OAuth2 flow.
- `requirements.txt` - Python dependencies list.
- `client_secret.json` - Google API credentials *(You must provide this)*.
- `token.json` - Saves your session token to avoid logging in every time *(Auto-generated)*.

---

## ⚖️ Copyright Claim
**© 2026 Kawdhitha Nirmal (K.NIRMAL | Cyber Yakku | CodexSL Dev). All Rights Reserved.**

This project, **"Youtube Automation | Code X"**, and all of its original source code, scripts, and documentation are the intellectual property of **Kawdhitha Nirmal**. 

Unauthorized copying, modification, distribution, or commercial use of this material, via any medium, is strictly prohibited without explicit written permission from the creator. If you wish to use, fork, or adapt this project, please ensure you have the appropriate consent.
