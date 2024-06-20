import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendThankYouEmail = async () => {
    try {
      const response = await emailjs.sendForm(
        'service_njsxbyh', // Replace with your service ID
        'template_xuhfz3b', // Replace with your thank you email template ID
        formRef.current,
        'HN1dqDeT0BuX3JY1C' // Your public key from EmailJS
      );
      toast.success('Thank You Email SUCCESS!');
      console.log('Thank You Email SUCCESS!', response.status, response.text);
    } catch (error) {
        toast.error('Email Not sent!');
      console.log('Thank You Email FAILED...', error);
    }
  };

  const sendAdminNotificationEmail = async () => {
    try {
      const response = await emailjs.sendForm(
        'service_njsxbyh', // Replace with your service ID
        'template_x9750ys', // Replace with your admin notification template ID
        formRef.current,
        'HN1dqDeT0BuX3JY1C' // Your public key from EmailJS
      );

    //   console.log('Admin Notification Email SUCCESS!', response.status, response.text);
    } catch (error) {
      console.log('Admin Notification Email FAILED...', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send thank you email to the user
    await sendThankYouEmail();

    // Send notification email to the admin
    await sendAdminNotificationEmail();

    // Clear form after sending emails
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className='h-[90vh] flex justify-center items-center'>
    <div className="w-96 p-6 bg-white border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm "
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white font-bold rounded-md shadow-md"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Contact;
