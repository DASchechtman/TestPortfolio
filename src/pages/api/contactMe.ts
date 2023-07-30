import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const AUTH_USER = process.env.AUTH_USER
const AUTH_PASS = process.env.AUTH_PASSWORD
const CONTACT_EMAIL = process.env.CONTACT_EMAIL

const TRANSPONDER = nodemailer.createTransport({
    service: "hotmail",
    port: 587,
    auth: {
        user: AUTH_USER,
        pass: AUTH_PASS,
    }
})

function EmailSendStatus(err: Error | null, info: SMTPTransport.SentMessageInfo) {
    if (err) {
        console.log(err)
        return
    }

    console.log("Sent: "+info.response)
}

function ToSeconds(ms: number) {
    return ms * 1000
}

function SendMail(timeout_seconds: number, email_options: Mail.Options) {
    setTimeout(() => {
        TRANSPONDER.sendMail(email_options, EmailSendStatus)
    }, ToSeconds(timeout_seconds))
}

export default function ContactMe(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        console.log(req.body)
        res.status(400).json({ message: "Can't handle request" })
    }

    const CONTACT_MAIL_OPTIONS = {
        from: AUTH_USER,
        to: CONTACT_EMAIL,
        subject: req.body.subject,
        text: `
from: ${req.body.name}
email: ${req.body.email}
${req.body.message}
        `
    }

    const CONFIRMATION_MAIL_OPTIONS = {
        from: AUTH_USER,
        to: req.body.email,
        subject: "Thank you for reaching out!",
        text: `Hey ${req.body.name.split(" ")[0]}, thank you for taking the time to contact me. I will get back to you as soon as possible. I hope you have a great day! And looking forward to talking with you`
    }

    SendMail(1, CONTACT_MAIL_OPTIONS)
    SendMail(10, CONFIRMATION_MAIL_OPTIONS)

    return res.status(200).json({ message: "OK" })
}