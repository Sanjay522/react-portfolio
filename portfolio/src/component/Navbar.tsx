import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hovered, setHovered] = useState(false);

  // Check if animation has already run
  const [hasAnimated, setHasAnimated] = useState(() => {
    return sessionStorage.getItem("navbarAnimated") === "true";
  });

  // Store in sessionStorage so it persists until browser tab is closed
  useEffect(() => {
    if (!hasAnimated) {
      sessionStorage.setItem("navbarAnimated", "true");
      setHasAnimated(true);
    }
  }, [hasAnimated]);

  const isMenuPage = location.pathname === "/menu";

  return (
    <motion.div
      initial={hasAnimated ? false : { y: -150, opacity: 0, zIndex: 10 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
      className="relative flex justify-between items-center h-[15svh] px-6 sm:text-[20px]"
    >
      {/* Left: Logo */}
      <h1 className="font-bold">LOCAL</h1>

      {/* Middle: Menu Button */}
      <button
        onClick={() => {
          if (isMenuPage) {
            navigate("/"); // Go back to home
          } else {
            navigate("/menu"); // Go to menu page
          }
        }}
        className="font-semibold ml-25"
      >
        {isMenuPage ? "CANCEL" : "MENU"}
      </button>

      {/* Right: CONTACT Button */}
      <motion.button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => navigate("/contact")}
        className="relative overflow-hidden border-2 border-white rounded-full font-semibold px-4 sm:px-10 py-1 sm:py-2 text-white"
      >
        {/* Background Fill */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 bg-white origin-left"
        />
        {/* Text */}
        <span
          className="relative z-10"
          style={{ color: hovered ? "black" : "white" }}
        >
          CONTACT
        </span>
      </motion.button>
    </motion.div>
  );
};

export default Navbar;
