import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Jane Doe',
    role: 'Product Manager',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote:
      'Rohan did an amazing job building our company website. The design is sleek, and the user experience is flawless!',
  },
  {
    id: 2,
    name: 'John Smith',
    role: 'CEO, TechCorp',
    photo: 'https://randomuser.me/api/portraits/men/45.jpg',
    quote:
      'Professional, timely, and detail-oriented. Highly recommend Rohan for any web development project.',
  },
  {
    id: 3,
    name: 'Emily Johnson',
    role: 'UX Designer',
    photo: 'https://randomuser.me/api/portraits/women/22.jpg',
    quote:
      'Working with Rohan was a breeze. The UI/UX improvements made a huge impact on our app engagement.',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="bg-indigo-50 py-16">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl font-semibold mb-10 text-gray-800">Testimonials</h2>
        <div className="relative bg-white p-8 rounded-lg shadow-lg">
          <p className="text-gray-700 italic mb-6 text-lg">
            “{testimonials[current].quote}”
          </p>
          <div className="flex items-center justify-center space-x-4">
            <img
              src={testimonials[current].photo}
              alt={testimonials[current].name}
              className="w-16 h-16 rounded-full object-cover border-2 border-indigo-600"
            />
            <div>
              <p className="font-semibold text-gray-900">{testimonials[current].name}</p>
              <p className="text-indigo-600 text-sm">{testimonials[current].role}</p>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="text-indigo-600 hover:text-indigo-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="text-indigo-600 hover:text-indigo-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
