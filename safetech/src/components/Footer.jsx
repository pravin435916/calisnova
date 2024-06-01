import React from 'react';

function Footer() {
  return (
    <div className="w-full bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* First Column */}
        <div>
          <h3 className="text-lg font-bold mb-4">Let’s Work Together</h3>
          <p><strong>Phone:</strong> 9067098016</p>
          <p><strong>Email:</strong> skillspace7@gmail.com</p>
          <p><strong>Address:</strong></p>
          <p>Nagpur, Maharashtra, India</p>
        </div>

        {/* Second Column */}
        <div>
          <h3 className="text-lg font-bold mb-4">Get in the Know</h3>
          <form className="flex flex-col space-y-2">
            <label htmlFor="email" className="sr-only">Enter your Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              className="p-2 text-black rounded"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

        {/* Third Column */}
        <div>
          <h3 className="text-lg font-bold mb-4">Stay in Touch</h3>
          <form className="flex flex-col space-y-2">
            <label htmlFor="firstName" className="sr-only">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="p-2 text-black rounded"
            />
            <label htmlFor="lastName" className="sr-only">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="p-2 text-black rounded"
            />
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="p-2 text-black rounded"
            />
            <label htmlFor="subject" className="sr-only">Subject</label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              className="p-2 text-black rounded"
            />
            <label htmlFor="message" className="sr-only">Leave us a message...</label>
            <textarea
              id="message"
              placeholder="Leave us a message..."
              className="p-2 text-black rounded"
              rows="4"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
