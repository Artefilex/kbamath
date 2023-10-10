const app = require("express");
const mailsend = require("../helpers/mailsend");
const config = require("../config");

const router = app.Router();

router.post("/", async (req, res) => {
  const form = req.body.form;

  try {
    const messagesendto = ` ${form.email},feedback`;
    const option = {
      from: form.email,
      to: config.email.from,
      subject: messagesendto,
      html: form.message,
    };
    mailsend(option, (info) => {
      console.log("Email sent successfully");
      console.log("MESSAGE ID: ", info.messageId);
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
