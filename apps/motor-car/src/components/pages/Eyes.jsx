'use client';
import React, { useEffect, useState } from "react";
import car5 from "../../assets/car5.jpeg"
function Eyes() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      // Mouse position from the window
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      // Mouse position from the center of the window
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      // Calculate the angle (convert from radians to degrees) => 1 radian = 180 / Math.PI
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      // Update the rotation
      setRotate(angle - 180);
    });
  });

  return (
    <div className="eyes w-full h-[300px] bg-[#E2F1E7] md:h-[800px] overflow-hidden">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.5"
        className="w-full relative h-[300px] sm:h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${car5.src})` }}
      >
        <div className="absolute bg-[#0D7C66] rounded-2xl bg-opacity-80 p-14 flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-white">
          <div className="w-[24vw] md:w-[15vw] h-[24vw] md:h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
            <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-[3vw] h-[3vw] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="w-[24vw] md:w-[15vw] h-[24vw] md:h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
            <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-[3vw] h-[3vw] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;