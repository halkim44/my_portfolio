var express = require("express");
var router = express.Router();
var nodeMailer = require("nodemailer");
var cors = require("cors");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

var transport = {
  host: "smtp.gmail.com",
  port: "587",
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
};

var transporter = nodeMailer.createTransport(transport);
transporter.verify((err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is ready to take messages");
  }
});
router.post("/send", (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${message}`;

  console.log(content);
  var mail = {
    from: name,
    to: "halkimrajan@gmail.com",
    subject: req.body.subject,
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(process.env.PORT || 3000);
