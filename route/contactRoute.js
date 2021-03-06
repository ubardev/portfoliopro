const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "모든 항목을 입력해주세요!" });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: process.env.EMAIL_SENDER_EMAIL,
      pass: process.env.EMAIL_SENDER_PASSWORD,
    },
  });
  let mailOptions = {
    from: data.email,
    to: process.env.EMAIL_RECIPIENT_EMAIL,
    subject: `포트폴리오 보고 연락드립니다. ${data.name}`,
    html: `
      <h3>발신자 정보<h3/>
      <ul>
        <li>Name: ${data.name}<li/>
        <li>Email: ${data.email}<li/>
      </ul>
      <h3>Message</h3>
      <p>${data.message}<p/>
    `,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return res.status(400).json({ msg: "모든 항목을 입력해주세요!" });
      res.status(200).json({ msg: "연락 주셔서 감사합니다." });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "There is server error" });
    }
  });
});
module.exports = router;
