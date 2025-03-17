'use client';
import { motion, useAnimation } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import car1 from "../../assets/car2.jpeg"
import car6 from "../../assets/car6.jpeg"
import car7 from "../../assets/car7.jpeg"
import car8 from "../../assets/car8.jpeg"
import Image from "next/image";
function Featured() {
  // array to animate two cards
  const cards = [useAnimation(), useAnimation()];
  // receives index and animates that card only
  const handleHoverStart = (index) => {
    cards[index].start({
      y: "0",
    });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({
      y: "100%",
    });
  };
  return (
    <div className="container w-full sm:pt-20 pt-10">
      <div className="w-full border-b-[1px] border-zinc-700 pb-5">
        <h1 className="text-4xl sm:text-6xl">Featured Projects</h1>
      </div>
      <div className="py-20 cards w-full flex flex-col md:flex-row gap-10">
        <motion.div
          onHoverStart={() => handleHoverStart(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="cardcontainer cursor-pointer relative md:w-1/2 w-full h-full"
        >
          <h1 className="mb-4 flex gap-2 items-center tracking-wide">
            <span className="w-2 h-2 bg-zinc-50 rounded-full"></span> Revolutionizing the Road Ahead
          </h1>
          <h1 className="absolute text-[#CDEA68] flex overflow-hidden left-1/2 sm:left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl font-NueueMontreal leading-none tracking-tighter">
            {"Elevating Drive".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-[300px] flex items-center rounded-xl overflow-hidden">
            <Image src={car1} className="w-full h-auto object-cover hover:scale-105 transition-all" alt="car" width={400} height={400} />
          </div>
          <button className="mt-10 relative overflow-hidden rounded-full border-[1px] font-NueueMontreal border-zinc-500 px-5 py-2 text-sm font-semibold whitespace-nowrap uppercase 
                before:absolute before:top-0 before:left-0 before:h-full before:w-0 
                before:bg-zinc-900 before:transition-all before:duration-300 hover:text-white 
                hover:before:w-full">
            <span className="relative z-10">Start Your Journey</span>
          </button>
          <button className="mt-10 ml-10 relative overflow-hidden rounded-full border-[1px] font-NueueMontreal border-zinc-500 px-5 py-2 text-sm font-semibold whitespace-nowrap uppercase 
                before:absolute before:top-0 before:left-0 before:h-full before:w-0 
                before:bg-zinc-900 before:transition-all before:duration-300 hover:text-white 
                hover:before:w-full">
            <span className="relative z-10">Start Your Journey</span>
          </button>
        </motion.div>
        <motion.div
          onHoverStart={() => handleHoverStart(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className="cardcontainer cursor-pointer relative md:w-1/2 w-full h-full"
        >
          <h1 className="mb-4 flex gap-2 items-center tracking-wide">
            <span className="w-2 h-2 bg-zinc-50 rounded-full"></span> Where Power Meets Precision
          </h1>
          <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-1/2 sm:right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl font-NueueMontreal leading-none tracking-tighter">
            {"Unleashing Performance".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-[300px] flex items-center rounded-xl overflow-hidden">
            <Image src={car6} className="w-full h-auto object-cover hover:scale-105 transition-all" alt="car" width={400} height={400} />
          </div>
          <button className="mt-10 relative overflow-hidden rounded-full border-[1px] font-NueueMontreal border-zinc-500 px-5 py-2 text-sm font-semibold whitespace-nowrap uppercase 
                before:absolute before:top-0 before:left-0 before:h-full before:w-0 
                before:bg-zinc-900 before:transition-all before:duration-300 hover:text-white 
                hover:before:w-full">
            <span className="relative z-10">Start Your Journey</span>
          </button>
          <button className="mt-10 ml-10 relative overflow-hidden rounded-full border-[1px] font-NueueMontreal border-zinc-500 px-5 py-2 text-sm font-semibold whitespace-nowrap uppercase 
                before:absolute before:top-0 before:left-0 before:h-full before:w-0 
                before:bg-zinc-900 before:transition-all before:duration-300 hover:text-white 
                hover:before:w-full">
            <span className="relative z-10">Start Your Journey</span>
          </button>
        </motion.div>
      </div>



      <div className="py-20 cards w-full flex flex-col md:flex-row gap-10">
        <motion.div
          onHoverStart={() => handleHoverStart(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="cardcontainer cursor-pointer relative md:w-1/2 w-full h-full"
        >
          <h1 className="mb-4 flex gap-2 items-center tracking-wide">
            <span className="w-2 h-2 bg-zinc-50 rounded-full"></span> Revolutionizing the Road Ahead
          </h1>
          <h1 className="absolute text-[#CDEA68] flex overflow-hidden left-1/2 sm:left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl font-NueueMontreal leading-none tracking-tighter">
            {"Experience the Thrill".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-[800px] flex items-center rounded-xl overflow-hidden">
            <Image src={car7} className="w-full h-auto object-cover hover:scale-105 transition-all" alt="car" width={800} height={800} />
          </div>
          <button className="mt-10 relative overflow-hidden rounded-full border-[1px] font-NueueMontreal border-zinc-500 px-5 py-2 text-sm font-semibold whitespace-nowrap uppercase 
                before:absolute before:top-0 before:left-0 before:h-full before:w-0 
                before:bg-zinc-900 before:transition-all before:duration-300 hover:text-white 
                hover:before:w-full">
            <span className="relative z-10">Start Your Journey</span>
          </button>
          <button className="mt-10 ml-10 relative overflow-hidden rounded-full border-[1px] font-NueueMontreal border-zinc-500 px-5 py-2 text-sm font-semibold whitespace-nowrap uppercase 
                before:absolute before:top-0 before:left-0 before:h-full before:w-0 
                before:bg-zinc-900 before:transition-all before:duration-300 hover:text-white 
                hover:before:w-full">
            <span className="relative z-10">Start Your Journey</span>
          </button>
        </motion.div>
        <motion.div
          onHoverStart={() => handleHoverStart(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className="cardcontainer cursor-pointer relative md:w-1/2 w-full h-full"
        >
          <h1 className="mb-4 flex gap-2 items-center tracking-wide">
            <span className="w-2 h-2 bg-zinc-50 rounded-full"></span> Where Power Meets Precision
          </h1>
          <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-1/2 sm:right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl font-NueueMontreal leading-none tracking-tighter">
            {"Own the Road".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-[800px] flex items-center rounded-xl overflow-hidden">
            <Image src={car8} className=" object-cover hover:scale-105 transition-all" alt="car" width={800} height={800} />
          </div>
          <button className="mt-10 relative overflow-hidden rounded-full border-[1px] font-NueueMontreal border-zinc-500 px-5 py-2 text-sm font-semibold whitespace-nowrap uppercase 
                before:absolute before:top-0 before:left-0 before:h-full before:w-0 
                before:bg-zinc-900 before:transition-all before:duration-300 hover:text-white 
                hover:before:w-full">
            <span className="relative z-10">Start Your Journey</span>
          </button>
          <button className="mt-10 ml-10 relative overflow-hidden rounded-full border-[1px] font-NueueMontreal border-zinc-500 px-5 py-2 text-sm font-semibold whitespace-nowrap uppercase 
                before:absolute before:top-0 before:left-0 before:h-full before:w-0 
                before:bg-zinc-900 before:transition-all before:duration-300 hover:text-white 
                hover:before:w-full">
            <span className="relative z-10">Start Your Journey</span>
          </button>
        </motion.div>
      </div>



      <div className="m-auto rounded-full flex gap-2 justify-center w-fit bg-[#004D43] font-NueueMontreal text-zinc-100 px-10 py-3 text-sm tracking-wider uppercase">
        See all Projects
        <FaArrowUpLong className="rotate-45 origin-center translate-y-[2px]" />
      </div>
    </div>
  );
}

export default Featured;