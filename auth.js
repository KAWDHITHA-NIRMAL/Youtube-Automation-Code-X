// ==========================================
// Project Name: Youtube Automation | Code X
// Creator Info
// {
//   "creator": "Kawdhitha Nirmal",
//   "CodeXSL": "Developer"
// }
// K.NIRMAL | Cyber Yakku | CodexSL Dev
// ==========================================

const fs = require('fs');
const http = require('http');
const url = require('url');
const destroyer = require('server-destroy');
const { google } = require('googleapis');

const SCOPES = [
    'https://www.googleapis.com/auth/youtube.upload',
    'https://www.googleapis.com/auth/youtube.readonly'
];

async function main() {
    console.log('=== Authenticating Channel 1 ===');
    let keys = { redirect_uris: ['http://localhost:8080'] };
    try {
        const content = fs.readFileSync('client_secret.json', 'utf8');
        const credentials = JSON.parse(content);
        keys = credentials.installed || credentials.web;
    } catch (err) {
        console.error('Error loading client_secret.json file. Make sure it exists.');
        process.exit(1);
    }

    const oAuth2Client = new google.auth.OAuth2(
        keys.client_id,
        keys.client_secret,
        keys.redirect_uris[0]
    );

    return new Promise((resolve, reject) => {
        const server = http.createServer(async (req, res) => {
            try {
                if (req.url.indexOf('/?code') > -1) {
                    const qs = new url.URL(req.url, 'http://localhost:8080').searchParams;
                    const code = qs.get('code');
                    res.end('Authentication successful! Please return to the console.');
                    server.destroy();
                    const { tokens } = await oAuth2Client.getToken(code);
                    oAuth2Client.setCredentials(tokens);

                    fs.writeFileSync('token.json', JSON.stringify(tokens, null, 2));
                    console.log('✅ token.json generated successfully!');
                    resolve(oAuth2Client);
                } else {
                    res.end('Listening for Google OAuth response...');
                }
            } catch (e) {
                reject(e);
            }
        }).listen(8080, () => {
            const authorizeUrl = oAuth2Client.generateAuthUrl({
                access_type: 'offline',
                scope: SCOPES,
            });
            console.log('Authorize this app by visiting this url:');
            console.log(authorizeUrl);
        });
        destroyer(server);
    });
}

if (require.main === module) {
    main().catch(console.error);
}

module.exports = { main };
