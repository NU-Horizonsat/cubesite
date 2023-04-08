import { useState } from "react";
import Layout from "@/components/layout";
import JSXStyle from "styled-jsx/style";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Error sending message.");
      }
    } catch (error) {
      console.error(error);
    }

    setIsSubmitting(false);
  };
  return (
    <Layout>
      <div className="relative col-span-1 my-10 mx-10 flex flex-col items-center justify-center overflow-hidden rounded-lg bg-black bg-opacity-50 md:mx-20 lg:mx-32 xl:mx-32 2xl:mx-32">
        {isSubmitted ? (
          <div className="m-20 flex h-full w-full flex-col items-center justify-center">
            <h2 className="mb-5 text-4xl font-bold text-white">
              Message sent!
            </h2>
            <p className="text-2xl text-white">
              We will get back to you in 1-3 business days.
            </p>
            <button
              className="transition-bg my-2 mt-10 rounded-2xl bg-blue-800 p-2 text-white duration-300 hover:outline-none focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Go back home
            </button>
          </div>
        ) : (
          <form
            className="m-20 flex h-full w-full flex-col items-center justify-center"
            onSubmit={handleSubmit}
          >
            <h1 className="mb-10 pt-10 text-6xl font-bold text-white">
              Contact
            </h1>

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
              className="transition-bg my-2 w-1/2 rounded-lg p-2 text-white duration-300 hover:bg-blue-800 hover:outline-none focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div role="status">
                  <svg aria-hidden="true" className="mb-1 inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
                  <span className="inline">Loading...</span>
                </div>
              ) : (
                "Send"
              )}
            </button>
          </form>
        )}
      </div>
    </Layout>
  );
};

export default Contact;
