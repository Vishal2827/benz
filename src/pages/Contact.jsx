import React from 'react';
import Footer from '../Components/Footer';

const teamMembers = [
  {
    name: 'Vishal ',
    role: 'Manager',
    email: 'vishalparjapatt@mercedes.com',
    phone: '+1 555-101-2020',
    photo: '/assets/IMG_5001.PNG',
  },
  {
    name: 'Suraj  Verma',
    role: 'Customer Relations',
    email: 'suraj.singh@mercedes.com',
    phone: '+1 555-303-4040',
    photo: '/assets/Screenshot 2025-05-21 132609.png',
  },
  {
    name: 'Rajiv kumar',
    role: 'Finance Specialist',
    email: 'rajiv.sharma@mercedes.com',
    phone: '+1 555-505-6060',
    photo: '/assets/rajiv.jpg',
  },
  {
    name: 'Shubham',
    role: 'Technical Advisor',
    email: 'shubham1887@mercedes.com',
    phone: '+1 555-707-8080',
    photo: '/assets/Screenshot 2025-05-21 141901.png',
  },
  {
    name: 'Mayank Negi',
    role: 'Marketing Lead',
    email: 'mayank.negi@mercedes.com',
    phone: '+1 555-909-1010',
    photo: '/assets/Screenshot 2025-05-21 132944.png',
  },
];

const Contact = () => {
  return (
    <div className="bg-zinc-50 pt-20 px-6 pb-16 flex flex-col items-center min-h-screen">
      <h1 className="text-5xl font-serif mb-8 text-center">Contact Us</h1>
      <p className="max-w-3xl text-center text-gray-700 mb-12 px-4">
        Welcome to the official Mercedes-Benz company website. Reach out to us for more information, to book a test drive, or connect with a Mercedes-Benz dealer near you.
        Our expert team is dedicated to providing you with premium service and personalized support.
      </p>

      <h2 className="text-3xl font-serif mb-6">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl w-full mb-16">
        {teamMembers.map(({ name, role, email, phone, photo }) => (
          <div key={email} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
            <img
              src={photo}
              alt={name}
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-500"
            />
            <h3 className="text-xl font-semibold mb-1">{name}</h3>
            <p className="text-blue-600 font-medium mb-2">{role}</p>
            <p className="text-gray-600 text-sm mb-1">{email}</p>
            <p className="text-gray-600 text-sm">{phone}</p>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-4xl bg-white p-8 rounded shadow mb-16">
        <h3 className="text-2xl font-semibold mb-4 text-center">Send Us a Message</h3>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you shortly.');
            e.target.reset();
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
