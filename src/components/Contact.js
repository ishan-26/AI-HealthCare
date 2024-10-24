import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [fname, setFname] = useState('');
  const [femail, setFemail] = useState('');
  const [fmessage, setFmessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state

  // Function to send email
  const sendMail = (e) => {
    e.preventDefault(); // Prevent the default form submission
    setIsLoading(true); // Start loading spinner

    const params = {
      fname,
      user_email: femail,
      message: fmessage,
    };

    const serviceID = "service_5an8loo";
    const templateID = "template_stkakf3";

    emailjs.send(serviceID, templateID, params)
      .then(res => {
        // Clear the fields after sending
        setFname('');
        setFemail('');
        setFmessage('');
        console.log(res);
        alert("Message sent successfully");
      })
      .catch(err => {
        console.log(err);
        alert("Error sending message");
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false); // Stop loading spinner after 3 seconds
        }, 3000);
      });
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <form onSubmit={sendMail} className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="user_name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            className="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="John Doe"
            required
          />
        </div>
         <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={femail}
            onChange={(e) => setFemail(e.target.value)}
            className="border-2 border-gray-300 p-2 rounded-lg w-full"
            placeholder="johndoe@example.com"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            value={fmessage}
            onChange={(e) => setFmessage(e.target.value)}
            className="border-2 border-gray-300 p-2 rounded-lg w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Your message"
            required
          ></textarea>
        </div>

        {/* Button with loading spinner */}
        <button
          type="submit"
          className="bg-indigo-500 text-white p-2 rounded-lg font-semibold w-full hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          style={{ height: '40px', minWidth: '100px' }} // Ensuring button height and width
          disabled={isLoading} // Disable button when loading
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 11-8-8z"></path>
              </svg>
              Loading...
            </div>
          ) : (
            'Send Message'
          )}
        </button>

        <div className="mt-4 text-sm text-gray-600">
          If you prefer not to use web forms, you can reveal your email address on <a href="mailto:ishandhotre26@gmail.com" className="underline" target="_blank" rel="noopener noreferrer">ishandhotre26@gmail.com</a>.
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
