import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import pic from "../assets/images/20250311_073546.jpg";

const AboutMe: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <>
    <div
                    style={{
                        position: 'absolute',
                        top: '662.5%',
                        left: '0',
                        right: '0',
                        height: '1px',
                        width:"96%",
                        margin:"auto",
                        //   borderTop: '0.5px solid white', // Use a very thin border (less than 1px) 
                        backgroundColor: '#232023',
                    }}
                ></div>
    <div className="relative z-10">
       

      {/* Header Section */}
      <div className="relative flex justify-between px-4 py-8">
        <p className="hidden sm:block">03</p>
        <p>//WHO AM I</p>
        <p>SINCE 2024</p>
      </div>

      {/* Title Section */}
      <div className="flex flex-col justify-center items-center sm:my-20 my-10 space-y-2">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true, amount: 0.6 }}
          className="sm:text-7xl text-4xl"
        >
          MORE ABOUT
        </motion.h1>
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          className="sm:text-8xl text-4xl"
        >
          SANJAY
        </motion.h1>
      </div>

      {/* Scroll Zoom Section */}
      <div ref={ref} className="relative h-[120vh] overflow-hidden">
        <motion.div
          style={{ scale, y }}
          className="h-screen flex justify-center items-center"
        >
          <img
            src={pic}
            alt="About Me"
            className="w-96 h-96 object-cover rounded-xl shadow-xl"
          />
        </motion.div>
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center items-center mb-20 px-4">
        <div className="text-2xl text-center py-10">
          <p>
            I'M A VISIONARY FRONTEND WEB DEVELOPER BASED IN INDIA, SPECIALIZING
            IN CREATING ENGAGING,
          </p>
          <p>
            HIGH-PERFORMANCE USER INTERFACES THAT SEAMLESSLY BLEND AESTHETICS
            WITH FUNCTIONALITY.
          </p>
        </div>
        <div className="text-gray-600 text-center">
          <p>
            With a strong foundation in modern web technologies and a keen eye
            for design, I bring digital experiences to life
          </p>
          <p>that are both visually compelling and intuitively interactive.</p>
        </div>
        <button className="border-2 rounded-full px-8 py-3 my-10 cursor-pointer">
          DOWNLOAD RESUME
        </button>
      </div>
    </div>
        </>

  );
};

export default AboutMe;
