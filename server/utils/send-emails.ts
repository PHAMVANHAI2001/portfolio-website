import * as nodemailer from "nodemailer";

interface IEmailData {
  source: string;
  head: { from: string; to: string; subject: string };
  body: any;
}

export default async (data: IEmailData): Promise<void> => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: data.head.from,
    to: data.head.to,
    subject: data.head.subject,
    html: data.body,
  };
  await transporter.sendMail(mailOptions);
};
