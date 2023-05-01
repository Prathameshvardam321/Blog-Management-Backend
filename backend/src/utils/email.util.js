const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const CLIENT_ID = '639717843604-ltq5f9p7c80e1p6420p57vd7t8jtfu8h.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//041FM0GKMkmKSCgYIARAAGAQSNwF-L9Ir4gTg2-e0i1gC1kNIu5Wp4uBQTHQ_ryTSddqZa4pxUxW22TipIkGDT874BvEfaCLNnPo'
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })
 export async function sendEmail(authorEmail,comment,commentAuthor) {
    try {
        const accesstoken = await oAuth2Client.getAccessToken()
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'prathameshvardam321@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accesstoken
            }
        })
    
        const mailOptions = {
            from: 'PrathmeshVardam321📧 <Prathameshvardam321@gmail.com>',
            to: authorEmail,
            subject: `Comment from ${commentAuthor}`,
            text: 'Heloow from API',
            html: `<h1>${comment}</h1>`
        }
        const result = await transport.sendMail(mailOptions)
        return result
    } catch (error) {
        return error
    }
}