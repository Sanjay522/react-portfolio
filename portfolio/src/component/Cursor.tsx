import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updatePosition = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updatePosition);
    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] w-8 h-8 rounded-full  bg-black"
      animate={{ x: position.x - 16, y: position.y - 16 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
};

export default CustomCursor;
