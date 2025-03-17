"use client";

import Navbar from '../components/pages/Navbar';
import HeroSection from "../components/pages/HeroSection";
import Marquee from "../components/pages/Marquee";
import About from "../components/pages/About";
import Eyes from "../components/pages/Eyes";
import Featured from "../components/pages/Featured";
import Cards from "../components/pages/Cards";
import Footer from "../components/pages/Footer";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from 'react';




export default function Home() {

  useEffect(() => {
    if (typeof window !== "undefined") {
      const locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
          touchMultiplier: 1,
        },
      });

      return () => {
        locomotiveScroll.destroy();
      };
    }
  }, []);


  return (
   <div className=' bg-[#E2F1E7]'>
     <Navbar />
      <HeroSection />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
   </div>
  );
}
