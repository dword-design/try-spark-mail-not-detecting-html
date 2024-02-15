import html from './html-not-working.js'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const transport = nodemailer.createTransport(JSON.parse(process.env.MAIL_CONFIG))

transport.sendMail({
  from: 'sebastianlandw@gmail.com',
  to: 'sebastianlandw@gmail.com',
  html: html,
  subject: 'eBay Kleinanzeigen Alarm: Deine neuesten Anzeigen',
})