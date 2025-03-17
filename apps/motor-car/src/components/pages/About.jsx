import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import car2 from "../../assets/car4.jpeg";
import Image from "next/image";
function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.01"
      className="w-full bg-[#E9C46A] rounded-t-3xl py-20 sm:py-32"
    >
      <div className="container w-full">
        <h1 className="sm:text-3xl text-xl sm:leading-normal font-medium mb-10 border-b-[1px] border-zinc-700 pb-10">
        Strategic partner for innovative automotive companies that strive to revolutionize mobility, enhance performance, embrace sustainability, and redefine the driving experience. 🚗✨
        </h1>
        <div className="md:flex justify-center gap-10">
          <div className="about-text mt-24 h-fit">
            <h1 className="text-4xl mb-4">Our approach:</h1>
            <p className="text-base sm:text-xl text-zinc-500 tracking-wide">
            Our approach is designed to empower visionary automotive brands by driving innovation, enhancing market presence, simplifying advanced technologies, and attracting top talent.
            </p>
            <div className="rounded-full flex gap-2 justify-center mt-4 w-fit bg-[#004D43] text-zinc-100 px-10 py-3 text-sm tracking-wider uppercase">
            Read more 🚗✨
              <FaArrowUpLong className="rotate-45 origin-center translate-y-[2px]" />
            </div>
          </div>
          <Image src={car2}  className=" rounded-3xl mt-10 md:mt-0" alt="car" width={800} height={800} />
        </div>
      </div>
    </div>
  );
}

export default About;