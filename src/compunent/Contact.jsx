import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });
  const [notification, setNotification] = useState('');

  const toggleForm = () => setShowForm((prev) => !prev);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      setNotification('Please fill in all required fields.');
      return;
    }

    emailjs
      .send(
        'service_v1jt0vh',     // Replace with your EmailJS service ID
        'template_fez7wss',    // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          mobile: formData.mobile,
          message: formData.message,
          to_email: 'rohanmate157@gmail.com',
        },
        'O4YCnTTt5kUrIiZqW'      // Replace with your EmailJS public key
      )
      .then(() => {
        setNotification('Thanks for reaching out! I will get back to you soon.');
        setFormData({ name: '', email: '', mobile: '', message: '' });
        setShowForm(false);

        // Optional: show a browser notification (see below)
        if ('Notification' in window) {
          if (Notification.permission === 'granted') {
            new Notification('Message sent!', {
              body: 'Thank you for contacting me.',
            });
          } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then((permission) => {
              if (permission === 'granted') {
                new Notification('Message sent!', {
                  body: 'Thank you for contacting me.',
                });
              }
            });
          }
        }
      })
      .catch((error) => {
        setNotification('Oops! Something went wrong. Please try again later.');
        console.error('EmailJS error:', error);
      });
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-lg text-center">
        <button
          onClick={toggleForm}
          className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
        >
          Hire Me
        </button>

        {notification && (
          <div className="mt-6 text-indigo-700 font-medium">{notification}</div>
        )}

        {showForm && (
          <form onSubmit={handleSubmit} className="mt-8 space-y-6 text-left">
            <label className="block">
              <span className="text-gray-700">Name *</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </label>

            <label className="block">
              <span className="text-gray-700">Email *</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </label>

            <label className="block">
              <span className="text-gray-700">Mobile Number (Optional)</span>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </label>

            <label className="block">
              <span className="text-gray-700">Message *</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </label>

            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
