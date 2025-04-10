'use client';
import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.1"
      className="w-full py-8 rounded-t-3xl bg-[#0D7C66]"
    >
      <div className="text text-[14vw] font-bold leading-none uppercase border-t-[1px] border-b-[1px] border-zinc-400 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
          className="font-FoundersGroteskCondensed mb-[3vw] pr-4"
        >
          Innovation in Motion .
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
          className="font-FoundersGroteskCondensed mb-[3vw] pr-4"
        >
          Innovation in Motion .
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
          className="font-FoundersGroteskCondensed mb-[3vw]"
        >
          Innovation in Motion .
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;