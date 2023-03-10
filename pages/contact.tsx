import { useState } from "react";
import Layout from "@/components/layout";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

      
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailerSend = new MailerSend({
      apiKey: process.env.API_KEY!,
    });
    // sender is email from form
    const sentFrom = new Sender(email, name);
    
    const recipients = [
      new Recipient("kapa.m@northeastern.edu", "Madhav Kapa")
    ];
    
    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setSubject("This is a Subject")
      // html content that has email, name and message 
      .setHtml(`<p>From: ${name} <${email}></p><p>${message}</p>`)
      .setText(`From: ${name} <${email}> ${message}`);
    
    await mailerSend.email.send(emailParams);

    setIsSubmitted(true);

    setIsSubmitting(false);

    setName("");
    setEmail("");
    setMessage("");

  };
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center relative col-span-1 my-10 overflow-hidden rounded-lg border border-gray-200 bg-white mx-10 md:mx-20 lg:mx-32 xl:mx-32 2xl:mx-32">
        <h1 className="text-6xl font-bold">Contact</h1>
        {isSubmitted ? (
          <p>Thank you for your message!</p>
        ) : (
          <form className="flex flex-col items-center justify-center w-full h-full m-20" onSubmit={handleSubmit}>
            <input
              className="w-1/2 p-2 my-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="w-1/2 p-2 my-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              className="w-1/2 p-2 my-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button
              className="w-1/2 p-2 my-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
        )}
      </div>
    </Layout>
    );
};

export default Contact;