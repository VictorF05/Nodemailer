require('dotenv').config();

const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false,  // true para 465, false para outras
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASS,
  },
});

transport.sendMail({
  from: process.env.EMAIL_ADDRESS,
  to: process.env.EMAIL_ADDRESS,
  subject: 'Enviando email com Nodemailer',
  html: '<h1>Olá, Dev!</h1><p>Esse email foi enviado usando o Nodemailer.</p>',
  text: 'texto altenativo caso o html não dê certo.',
})
.then(() => console.log('Email enviado com sucesso!'))
.catch((err) => console.log('Erro ao enviar email: ', err))
