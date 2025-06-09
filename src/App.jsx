import React from 'react';
import Navbar from './compunent/Navbar';
import Testimonials from './compunent/Testimonials';
import { motion } from 'framer-motion';
import Hero from './compunent/Hero';
import Projects from './compunent/Projects';
import Services from './compunent/Services';
import Contact from './compunent/Contact';
 const App = () => {
  return (
      
 
        <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="min-h-screen bg-white"
    >
    <Navbar/>
    <Hero/>
    <Projects/>
    <Services/>
    <Testimonials/>
    <Contact/>
    </motion.div>
     
 
   );
};

export default App;
