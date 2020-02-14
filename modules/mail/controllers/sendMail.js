// const express = require('express');
const nodemailer = require('nodemailer');
const template = require('./mailTemplete');

async function sendMail(payload) {
  console.log('---->payload', payload);
  const mailTempleteData = template({ otp: '1234' });
  const mailOptions = {
    from: 'manduvasravani@gmail.com', // sender address
    to: 'shravani.manduva@laalsa.com', // list of receivers
    subject: 'Test mail', // Subject line
    html: mailTempleteData,// plain text body
  };

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'manduvasravani@gmail.com',
      pass: 'radhakrishnan1994',
    },
  });

  console.log('transporter-->', transporter);

  console.log('-->mailOptions', mailOptions);

  transporter.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log("---->error", error);
      throw new Error('MAIL_ERROR');
    } else {
      console.log("--->", response);
      return Promise.resolve(global.messages.success('MAIL_SEND', '', response));
    }
  });

}

module.exports = { sendMail };
