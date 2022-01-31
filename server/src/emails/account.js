const sgMail = require('@sendgrid/mail')
const sendGridAPI = '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'

sgMail.setApiKey(sendGridAPI)

const mail = {
    to: 'thronerush748_7@yahoo.com', 
    from: 'hassan748_7@hotmail.com', 
    subject: '1M JACKPOT',
    text: 'This is a jackpot mail',
    html: '<strong>Hey! You have just won one million dollars in our community event. Write your bank account number along with the 3-digits on back of your card, and also your pin-code in reply to this mail.</strong>',
  }
  sgMail.send(mail).then(() => {
      console.log('Email sent')
    }).catch((error) => {
      console.error(error)
    })