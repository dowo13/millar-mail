const nodeMailer = require('../node_modules/nodemailer'); 
const dotenv = require('dotenv')
dotenv.config();

async function mailer(){
    
    console.log('hello from mailer');

    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const message = {
        from: process.env.EMAIL_USERNAME,
        to: process.env.EMAIL_TO, // switch to laras email address
        subject: 'Hello from my code!',
        text: 'This is a test message, please reply so i know whether its working. thanks',
      };
      
      await transporter.sendMail(message, (err) => {
        if(err){
            console.log(err);
        }else{
            console.log('email has been sent!')
        }
      })

    // const transporter = nodeMailer.createTransport({
    //     service : process.env.EMAIL_SERVICE,
    //     auth : {
    //         user : process.env.EMAIL_USERNAME,
    //         pass : process.env.EMAIL_PASSWORD
    //     }
    // })

    // const options = {
    //     from : '', 
    //     to: dataObj.to,
    //     subject: dataObj.subject,
    //     text: dataObj.text,
    //     content: dataObj.content
    // }

    // await transporter.sendMail(options, (error, info) =>{
    //     if(error) console.log(error)
    //     else console.log('sent')
    // })

}

module.exports = mailer;