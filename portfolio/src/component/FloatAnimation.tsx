"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
  "/img7.jpg",
  "/img8.jpg",
];

export default function StickyImageReveal() {
  const [currentImage, setCurrentImage] = useState(-1);
  const [lockScroll, setLockScroll] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Sequentially reveal images
    images.forEach((_, i) => {
      setTimeout(() => {
        setCurrentImage(i);
        if (i === images.length - 1) {
          // unlock scroll after last image
          setTimeout(() => setLockScroll(false), 500);
        }
      }, i * 500); // 0.5s delay between each
    });
  }, []);

  useEffect(() => {
    if (lockScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [lockScroll]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full bg-black text-white overflow-hidden"
    >
      {/* Fixed background */}
      <div className="absolute inset-0">
        <img
          src="/bg.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image reveal */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: index <= currentImage ? 1 : 0,
              y: index <= currentImage ? 0 : 50,
            }}
            transition={{ duration: 0.5 }}
            className="w-40 h-40 object-cover rounded-lg shadow-lg mb-4"
          />
        ))}
      </div>
    </section>
  );
}
