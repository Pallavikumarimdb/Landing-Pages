'use client';
import { motion } from "framer-motion";
import React from "react";

const Navbar = () => {
  return (
    <div
      className=" fixed z-[999] w-full px-[4.5vw] py-5 font-['Neue Montreal'] flex justify-end itema-center  
      backdrop-blur  bg-transparent "
    >
      <div className="links flex gap-5">
        {["Services", "Our Work", "About Us", "Insights", "Contact Us"].map(
          (item, index) => (
            <motion.a
              whileHover={{ scale: 1.1 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              key={index}
              className={`text-[1.2vw] capitalize cursor-pointer font-normal ${
                index === 4 && "ml-32"
              }`}
            >
              {item}
            </motion.a>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;