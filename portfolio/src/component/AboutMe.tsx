import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import pic from "../assets/images/20250311_073546.jpg";

const AboutMe: React.FC = () => {
  //   const targetRef = useRef<HTMLDivElement>(null);

  //   const { scrollYProgress } = useScroll({
  //     target: targetRef,
  //     offset: ["start end", "end start"], // begins when section hits bottom, ends when leaving top
  //   });

  //   const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  //   const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // starts sticking when section hits top, stops when ends
  });

  // zoom from 1 to 1.2
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  // move up 0 to -100px
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <div className="relative min-h-[200vh]">
      {/* Decorative Line */}
      <div
        style={{
          position: "absolute",
          top: "660%",
          left: "0",
          right: "0",
          height: "1.5px",
          backgroundColor: "#B2BEB5",
        }}
      />

      {/* Header Section */}
      <div className="relative flex justify-between px-4 py-8">
        <p className="hidden sm:block">03</p>
        <p>//WHO AM I</p>
        <p>SINCE 2024</p>
      </div>

      {/* Title Text */}
      <div className="sticky flex flex-col justify-center items-center sm:my-20 my-10 space-y-2">
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

      {/* Sticky Zooming Image */}
      <div ref={ref} className="sticky min-w-[40vw] top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
                <motion.img
                    src={pic}
                    alt="Zooming About Me"
                    style={{ scale, y }}
                    className="w-96 h-96 object-cover rounded-xl shadow-xl"
                />
                            </div>
      {/* <div ref={ref} className="relative h-[200vh] bg-gray-50">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <motion.img
            src={pic}
            alt="Zooming Image"
            style={{ scale, y }}
            className="w-96 h-96 object-cover rounded-xl shadow-xl"
          />
        </div>

        <div className="h-[100vh] flex items-center justify-center">
          <p className="text-2xl">I'm now back to normal flow!</p>
        </div>
      </div> */}

      {/* Description Section */}
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
  );
};

export default AboutMe;
