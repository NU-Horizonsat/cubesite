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

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error('Error sending message.');
      }
    } catch (error) {
      console.error(error);
    }

    setIsSubmitting(false);
  };
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center relative col-span-1 my-10 overflow-hidden rounded-lg bg-black bg-opacity-50 mx-10 md:mx-20 lg:mx-32 xl:mx-32 2xl:mx-32">
        <h1 className="text-6xl text-white pt-10 font-bold">Contact</h1>
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
                className="w-1/2 p-2 my-2 transition-bg duration-300 text-white rounded-lg hover:outline-none hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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