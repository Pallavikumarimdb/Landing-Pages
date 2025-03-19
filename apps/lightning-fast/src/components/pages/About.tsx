
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";


const accordionData = [
  { content: "Creative" },
  { content: "Design" },
  { content: "Animation" },
  { content: "Technology" },
  { content: "Project Delivery" },
  { content: "Exanple Products" },
  { content: "Motion Designs" },
  { content: "3D Art" },
];

export default function About() {

  const controls = useAnimation();
  const ref = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          controls.start({ opacity: 1, y: 0 });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);


  return (
    <div className="mt-96">
      {/* Heading */}
      <div className="ml-[15%] w-[40%] mb-56">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-thin text-left mb-10"
        >
          OUR SERVICES
        </motion.h2>

        {/* Subheading with Scroll Animation */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.2 }}
          className=" text-left text-3xl mb-6"
        >
          We provide you with captivating design, interactive animations, reliable code, and immaculate project coordination.
          Whether you need a campaign built from scratch or assistance at a specific phase, we’ve got you covered.
        </motion.p>
      </div>
      <div className="mt-10 border-gray-200 rounded-lg overflow-hidden">
  {accordionData.map((item, index) => (
    <div key={index} className="border-b border-gray-200">
      <button className="w-full px-[13%] text-left px-6 py-4 hover:bg-black hover:text-white transition-colors duration-300 flex items-center">
        <span className="flex-1">{item.content}</span> 
        <span className=" text-right">✔</span>
      </button>
    </div>
  ))}
</div>


    </div>
  );
}
