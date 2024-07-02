import React from 'react';
import Contact from './Contact';

function Footer() {
  return (
    <div className="w-full bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* First Column */}
        <div>
          <h3 className="text-lg font-bold mb-4">Let’s Work Together</h3>
          <p><strong>Phone:</strong> 9067098016</p>
          <p><strong>Email:</strong> safetech.ceo@gmail.com</p>
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
              className="bg-black text-white font-bold py-2 px-4 rounded"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

        {/* Third Column */}
        <div>
          <h3 className="text-lg font-bold ">Stay in Touch</h3>
          <Contact/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
