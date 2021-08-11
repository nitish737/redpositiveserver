const Users = require("../../models/users");

const nodemailer = require("nodemailer");

const username = process.env.mail_username;
const password = process.env.mail_password;

console.log(username);
console.log(password);

const sendMail = async (req, res) => {

  let emails = req.body.list

  for (let i = 0; i < emails.length; i++) {
    let data = await Users.findOne({ email: emails[i] });

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: username,
        pass: password,
      },
    });

    let mailOptions = {
      from: username,
      to: "nitishnitishnitish111@gmail.com",
      subject: "testing and testing",
      text: `name - ${data.name}
        email - ${data.email}
        phone - ${data.phone},
        hobbies - ${data.hobbies}`,
    };

    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log(err);
        return res.status(400).json({
          error: "mail cant be sent",
        });
      } else {
          if(i == emails.length-1){
        return res.status(200).json({
          message: "mail sent successfully",
        });
    }
      }
    });
  }

};

module.exports = sendMail;
