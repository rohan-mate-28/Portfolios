import React from 'react';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description:
      'Building fast, responsive, and scalable websites with modern technologies like React, Node.js, and more.',
    icon: (
 <svg
  className="w-12 h-12 text-indigo-600 mb-4"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M8 6l-6 6 6 6" />
</svg>

    ),
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description:
      'Designing intuitive and engaging user interfaces focused on usability and aesthetics.',
    icon: (
<svg
  className="w-12 h-12 text-indigo-600 mb-4"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M9 9l6 6M9 15v-6h6"
  />
</svg>


    ),
  },
  {
    id: 3,
    title: 'SEO Optimization',
    description:
      'Improving your website’s visibility and ranking on search engines to attract more visitors.',
    icon: (
      <svg
        className="w-12 h-12 text-indigo-600 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12h18" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
          Services
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map(({ id, title, description, icon }) => (
            <div
              key={id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center">{icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-900">
                {title}
              </h3>
              <p className="text-gray-600 text-center">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
