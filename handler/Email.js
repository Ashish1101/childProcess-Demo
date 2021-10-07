const nodemailer = require('nodemailer')
module.exports = async () => {
      try {
          	//create a transporter object
		const transporter = nodemailer.createTransport({
			host: "smtp.mailgun.org",
			port: 587,
			auth: {
				user: process.env.user,
				pass: process.env.pass,
			},
		});

		//send mails and put options
		// let options = {
		// 	from: "postmaster@sandboxf4f02702678d4ad49db5699563946f44.mailgun.org",
		// 	to: "coderguy98@gmail.com",
		// 	subject: `Testing of Cron Job`,
		// 	text: "Hello from cron job",
		// };

		transporter.sendMail(
			{
				from: process.env.user,
				to: "coderguy98@gmail.com",
				subject: `Testing of Cron Job`,
				text: "Hello from cron job",
			},
			(err, info) => {
				if (err) return console.log("error in message", err.message);
				console.log("mail sent", info.response);
			}
		)
      } catch (err) {
          console.log('err ', err)
      }
}