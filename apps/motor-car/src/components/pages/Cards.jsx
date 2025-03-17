import React from "react";
import car1 from "../../assets/badge3.png"
import badge2 from "../../assets/badge2.jpeg"
import badge3 from "../../assets/badge1.jpeg"
import Image from "next/image";


function Cards() {
  return (
    <div className="container w-full flex flex-col md:flex-row gap-5 py-20">
      <div className="card relative flex items-center justify-center lg:w-1/2 md:w-full h-96 bg-[#004D43] rounded-xl">
      <Image src={car1} className="rounded-full object-cover hover:scale-105 transition-all" alt="car"  width={300} height={300} />

        <button className="absolute left-5 bottom-5 px-5 py-2 rounded-full border text-xs sm:text-base font-NueueMontreal border-zinc-200">
          © 2019–2022
        </button>
      </div>
      <div className="cardcontainer flex gap-5 lg:w-1/2 md:w-full">
        <div className="card relative flex items-center justify-center w-1/2 h-96 bg-[#293231] rounded-xl">
        <Image src={badge2} className="rounded-full object-cover hover:scale-105 transition-all" alt="car"  width={200} height={200} />
          <button className="absolute left-5 bottom-5 px-5 py-2 rounded-full border text-xs sm:text-base font-NueueMontreal border-zinc-200">
            © 2019–2022
          </button>
        </div>
        <div className="card relative flex items-center justify-center w-1/2 h-96 bg-[#293231] rounded-xl">
        <Image src={badge3} className="rounded-full object-cover hover:scale-105 transition-all" alt="car"  width={150} height={150} />
          <button className="absolute left-5 bottom-5 px-5 py-2 rounded-full border text-xs sm:text-base font-NueueMontreal border-zinc-200">
            © 2019–2022
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;