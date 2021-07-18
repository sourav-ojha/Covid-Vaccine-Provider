import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const mail = (message, email) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
       user: process.env.MAIL,
      pass: process.env.PASS,
    },
  });

  var mailOptions = {
    from: ' "covid-vaccine-provider" payboxpaytm7@gmail.com',
    to: email,
    subject: "Reply to Your Feedback",
    text: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
