import React, { useState } from 'react';
import { motion } from "framer-motion";

const Navhead = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -150, opacity: 0, zIndex: 10 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
      className="relative flex justify-between items-center h-[15svh] px-6"
    >
      {/* Left Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="text-lg font-semibold"
      >
        {isOpen ? "CANCEL" : "MENU"}
      </button>

      {/* Spacer / Logo (optional) */}
      <p className="font-bold text-xl">LOGO</p>

      {/* Right Button */}
      <button  
        className="py-1 px-4 border-2 border-black rounded-full sm:py-2 sm:px-10"
      >
        Contact
      </button>
    </motion.div>
  );
};

export default Navhead;
