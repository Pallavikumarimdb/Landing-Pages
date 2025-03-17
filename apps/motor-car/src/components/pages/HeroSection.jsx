'use client';
import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import car1 from "../../assets/car1.jpeg"
import Image from "next/image";


function HeroSection() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.3"
      className=" container w-full"
    >
      <div className="textstructure pt-[14vh] pb-[10vh]">
        {["Designed", "for Speed", "Built for You"].map((item, index) => (
          <div key={index} className="masker ">
            <div className="w-fit flex items-center overflow-hidden pr-2">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "12vw" }}
                  transition={{
                    ease: [0.76, 0, 0.24, 1],
                    duration: 1,
                    delay: 1,
                  }}
                  className=" mt-4 ml-2 rounded-md"
                >
                  <Image src={car1} className="rounded-md" alt="car" width={150} height={100} />
                </motion.div>
              )}
              <h1
                key={index}
                className="font-semibold  md:text-[8vw] sm:text-[10vw] text-[14vw] uppercase whitespace-nowrap leading-none h-full tracking-[-0.08em]"
              >
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t-[1px] border-zinc-800 py-12 font-NueueMontreal">
  {[
    "From Concept to Open Road",
    "Innovation at Every Turn",
  ].map((item, index) => (
    <p
      key={index}
      className="text-base font-semibold leading-none hidden sm:block relative overflow-hidden px-3 py-2 rounded-md"
    >
      {item}
    </p>
  ))}
  <div className="start flex items-center gap-4">
    <div className="relative overflow-hidden rounded-full border-[1px] font-NueueMontreal border-zinc-500 px-5 py-2 text-sm font-semibold whitespace-nowrap uppercase 
                before:absolute before:top-0 before:left-0 before:h-full before:w-0 
                before:bg-zinc-900 before:transition-all before:duration-300 hover:text-white 
                hover:before:w-full">
      <span className="relative z-10">Start Your Journey 🚗✨</span>
    </div>
    <div className="relative overflow-hidden flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-zinc-500 
                before:absolute before:top-0 before:left-0 before:h-full before:w-0 
                before:bg-zinc-900 before:transition-all before:duration-300 hover:text-white 
                hover:before:w-full">
      <span className="rotate-45 relative z-10">
        <FaArrowUpLong />
      </span>
    </div>
  </div>
</div>

    </div>
  );
}

export default HeroSection;