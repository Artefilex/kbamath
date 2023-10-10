const nodemail = require("nodemailer");
const config = require("../config");

let transporter = nodemail.createTransport({
  service: "gmail",

  auth: {
    user: config.email.username,
    pass: config.email.password,
  },
});

const mailsend = async (mailDetails, cb) => {
  try {
    const info = await transporter.sendMail(mailDetails);
    cb(info);
  } catch (err) {
    console.log(err);
  }
};

module.exports = mailsend;
