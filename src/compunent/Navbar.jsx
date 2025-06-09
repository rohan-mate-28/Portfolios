import React, { useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setopen] = useState(false);

  return (
    <nav className=" sticky top-0 z-50 bg-white shadow-md flex justify-between items-center px-6 py-4 bg-white shadow-md relative">
      <div className='text-2xl font-bold text-gray-800'>
        Zenvio Tech
      </div>

      {/* Nav Links */}
      <ul className={`text-gray-700 font-medium gap-6 
        ${open ? 'block' : 'hidden'} 
        md:flex flex-col md:flex-row absolute md:static bg-white md:bg-transparent top-16 left-0 w-full md:w-auto px-6 md:px-0 py-4 md:py-0 shadow-md md:shadow-none z-10`}>
        <li><a className='cursor-pointer hover:text-gray-400 transition' href="#home">Home</a></li>
        <li><a className='cursor-pointer hover:text-gray-400 transition' href="#Projects">Projects</a></li>
        <li><a className='cursor-pointer hover:text-gray-400 transition' href="#services">Services</a></li>
        <li><a className='cursor-pointer hover:text-gray-400 transition' href="#testimonials">Testimonials</a></li>
        <li><a className='cursor-pointer hover:text-gray-400 transition' href="#contact">Contact</a></li>
      </ul>

      {/* Burger Icon */}
      <div className="md:hidden" onClick={() => setopen(!open)}>
        {open ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>
    </nav>
  )
}

export default Navbar
