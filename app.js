const express = require('express');
const cors = require('cors');
const env = require('dotenv');
const nodemailer = require('./node_modules/nodemailer');


// import mailer func
const mailSender = require('./models/mailer');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())



// app.post('/', (req, res) => {
//     console.log(req.body);

//     // mailSender(dataToSend );
//     res.status(200).send({status: 'success'});
// })

app.get('/', (req, res) => {
    mailSender()
    return res.send({staus: 'success baby'});
})




app.listen(port, () => {
    console.log(`Server running on http://localhost: ${port}`);
})


