import { NextApiRequest, NextApiResponse } from 'next';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailer-send-ts';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = req.body;

  const mailerSend = new MailerSend({ apiKey: process.env.MAILER_SEND_API_KEY! });

  const sentFrom = new Sender(process.env.EMAIL_FROM!, process.env.EMAIL_FROM_NAME);
  const recipients = [new Recipient(process.env.EMAIL_TO!, process.env.EMAIL_TO_NAME)];

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setSubject(`New message from ${name} (${email})`)
    .setText(message);

  try {
    const response = await mailerSend.email.send(emailParams);
    console.log(response);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending message.' });
  }
}
