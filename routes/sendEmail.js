const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'akpata.thelma@gmail.com',
        pass: 'dlba qjra ueqj gmju',
        // oowy omdj jwdp qilj
    },
});

async function sendEmail(to, subject, html) {
    try {
        const info = await transporter.sendMail({
            from: 'info@cqh.com',
            to,
            subject,
            html,
            // text,
        });

        console.log('Email sent: ', info.messageId);
        return true;
    } catch (error) {
        console.error('Error sending email: ', error.message);
        return false;
    }
}

module.exports = sendEmail;
