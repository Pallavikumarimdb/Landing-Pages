import { useEffect, useState, useRef } from "react";
import Canvas from "./Canvas";
import data from "./data";
import Navbar from "./Navbar";
import About from "./About";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import Footer from "./Footer";

function HeroSection() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingRef = useRef(null);
  const growingSpan = useRef(null);
  const mouseRef = useRef(null);
  const mainRef = useRef(null);

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hideButton = () => setVisible(false);
    document.addEventListener("click", hideButton);
    return () => document.removeEventListener("click", hideButton);
  }, []);

  

  const text = "FOR ALL DIGITAL DESIGNS";
  const characters = text.split("");

  useEffect(() => {
    new LocomotiveScroll();
  }, [showCanvas]);

  // Text animation
  useEffect(() => {
    const header = headingRef.current;
    const text = header.textContent;
    header.innerHTML = text
      .split("")
      .map((letter) => `<span class="letter inline-block">${letter === " " ? "&nbsp;" : letter}</span>`)
      .join("");

    gsap.fromTo(
      ".letter",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.05,
      }
    );
  }, []);

  // Growing span animation
  useEffect(() => {
    const handleClick = (e) => {
      gsap.to(mouseRef.current, {
        backgroundColor: "white"
      });

      setShowCanvas((prevShowCanvas) => {
        if (!prevShowCanvas) {
          gsap.set(growingSpan.current, {
            top: e.clientY - 20,
            left: e.clientX - 20,
          });

          gsap.to("body", {
            color: "#000",
            backgroundColor: "#fd2c2a",
            duration: 1.2,
            ease: "power2.inOut",
          });

          gsap.to(growingSpan.current, {
            scale: 1000,
            duration: 1.2,
            ease: "power2.inOut",
            omplete: () => {
              gsap.set(growingSpan.current, {
                scale: 0,
                clearProps: "all",
              });
            },
          });
        } else {
          gsap.to("body", {
            color: "#fff",
            backgroundColor: "#000",
            duration: 1.2,
            ease: "power2.inOut",
          });

          gsap.to(mouseRef.current, {
            backgroundColor: "#fd2c2a"
          });
        }

        return !prevShowCanvas;
      });
    };

    const targetElement = mainRef.current;
    targetElement.addEventListener("click", handleClick);

    return () => targetElement.removeEventListener("click", handleClick);
  }, []);

  // Mouse animation
  useEffect(() => {
    const mainElement = mainRef.current;
    let mouseStopTimeout;

    const handleMouseMove = (e) => {
      clearTimeout(mouseStopTimeout);

      gsap.to(mouseRef.current, {
        x: e.clientX + 10,
        y: e.clientY + 10,
        duration: 1,
        ease: "back.out",
        overwrite: "auto",
      });

      gsap.to(mouseRef.current, {
        scale: 1,
        backgroundImage: "none",
      });

      mouseStopTimeout = setTimeout(() => {
        gsap.to(mouseRef.current, {
          scale: 4,
          backgroundImage: "url('https://thirtysixstudio.com/peppers/pepperA/57.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        });
      }, 500);
    };

    mainElement.addEventListener("mousemove", handleMouseMove);

    return () => {
      mainElement.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(mouseStopTimeout);
    };
  }, []);

  return (
    <main
      data-scroll-container
      ref={mainRef}
      className="w-full min-h-screen"
    >
      <span
        ref={growingSpan}
        className="bg-red-600 block rounded-full fixed top-[-20px] left-[-20px] w-5 h-5"
      />

      <span
        ref={mouseRef}
        className="bg-customRed rounded-full fixed w-5 h-5 top-[-20px] left-[-20px] z-10"
      />

      <div className="relative">
        {showCanvas && data[0].map((canvasdets, index) => <Canvas key={index} details={canvasdets} />)}
        <div className="w-full relative h-screen">
          <Navbar />

          <div className="w-full flex flex-col lg:flex-row px-1 lg:px-[15%] py-12 items-center justify-between mt-20">
            <div className="w-[40%] mr-20 flex flex-col gap-6">
              <h3 className="text-3xl">
                At Thirtysixstudio, we build immersive digital experiences for brands with a purpose.
              </h3>
              <p className="text-sm">
                {`We're a boutique production studio focused on design, motion, and creative technology, constantly reimagining what digital craft can do for present-time ads and campaigns.`}
              </p>
              <p>Scroll</p>
            </div>

            <div className="circle-container flex justify-center items-center">
              <div className="rotating-circle">
                {characters.map((char, index) => {
                  return (
                    <span
                      key={index}
                      className="char"
                      style={{
                        transform: `rotate(${index * 14.5}deg)`,
                      }}
                    >
                      {char}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          {visible && (  <div className="flex items-center justify-center">
            <button className="relative px-4 py-2 text-lg md:text-xl font-semibold text-black bg-red-500 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-red-500/50 focus:ring-4 focus:ring-red-400 animate-pulse">
              Click to See Heat
              <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 text-red-500 text-2xl animate-bounce">
                ↓
              </span>
            </button>
          </div>
           )}


          <div className="w-full lg:pt-40 lg:pl-6 border-b border-slate-800 xl:pb-12">
            <h1 ref={headingRef} className="text-[8rem] lg:text-[9rem] xl:text-[13rem] leading-none justify-center text-center">
              Thirtysixstudio
            </h1>
          </div>
        </div>
      </div>

      <div className="relative mt-60 px-1 lg:px-10">
        {showCanvas && data[1].map((canvasdets, index) => <Canvas key={index} details={canvasdets} />)}
        <About />
      </div>

      <div className="relative mt-60 px-1 lg:px-10">
        {showCanvas && data[1].map((canvasdets, index) => <Canvas key={index} details={canvasdets} />)}
        <Footer />
      </div>
    </main>
  );
}

export default HeroSection;