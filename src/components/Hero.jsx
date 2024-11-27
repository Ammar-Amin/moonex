import React from "react";
import star1 from "../assets/1star.png";
import star from "../assets/star-img.png";
import starTwo from "../assets/star-img2.png";
import texture from "../assets/Texture.png";
import Blur from "./ Blur";

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Blur h="h-[200px]" w="w-[300px]" left="left-[7%]" top="top-[-7%]" />
      <Blur
        h="h-[200px]"
        w="w-[300px]"
        left="left-[7%]"
        top="top-[19%] max-sm:hidden"
      />
      <div className="relative min-h-screen flex items-center">
        <div className="relative z-40 pl-4 md:pl-0 w-full max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto mt-14">
          <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold">
            Trusted Multi-Chain <br></br> <span className="text-yel">DEX</span>{" "}
            Platform
          </h1>
          <p className="my-2 text-sm lg:text-xl xl:text-2xl font-medium tracking-wider text-slate-500">
            Trade, earn and own crypto on the all-in-one DEX
          </p>
          <div className="mt-4 lg:mt-8 text-xs lg:text-base font-semibold flex gap-6 relative">
            <button className="px-6  py-2 rounded-full bg-gradient-to-br from-[#E4B40D] to-[#FBD966] text-black">
              Connect Wallet
            </button>
            <button className="px-6 py-2 rounded-full text-[#E4B40D] border-2 border-[#E4B40D]">
              Trade Crypto
            </button>
          </div>
        </div>

        <img src={texture} alt="" className="absolute bottom-0 right-0" />

        {/* Spear  */}
        <div className="w-20 h-20 md:w-32 md:h-32 lg:w-48 lg:h-48 xl:w-72 xl:h-72 absolute z-40 top-[22%] right-[13%] md:top-[30%] md:right-[10%] lg:top-[25%] xl:top-[20%] lg:right-[6%] xl:right-[16%] bg-gradient-to-tl from-[#E4B40D] via-[#ffd640] to-[#FFF6D7] rounded-full"></div>

        {/* Stars  */}
        <img
          src={star}
          alt=""
          className="w-8 md:w-10 lg:w-auto absolute z-40 top-[22%] left-[15%]"
        />
        <img
          src={star1}
          alt=""
          className="w-6 md:w-8 lg:w-auto absolute z-40 md:top-[14%] lg:top-[10%] right-[19%]"
        />
        <img
          src={starTwo}
          alt=""
          className="w-8 md:w-10 lg:w-auto absolute z-40 bottom-[14%] right-[22%]"
        />
      </div>
      <div className="w-[300px] h-[120px] md:w-[587px] md:h-[240px] lg:w-[987px] lg:h-[400px] xl:w-[1187px] xl:h-[514px] rotate-[22deg] md:rotate-[12deg] border border-slate-600 rounded-[100%] absolute z-30 top-32 md:top-20 left-20"></div>
      <div className="w-[587px] h-[230px] md:w-[924px] md:h-[388px] lg:w-[1224px] lg:h-[588px] xl:w-[1524px] xl:h-[648px] rotate-[22deg] md:rotate-[12deg] border border-slate-600 rounded-[100%] absolute z-30 top-[12%] md:top-[4%] left-[-14%] lg:left-[-4%]"></div>
      <div className="w-[787px] h-[350px] md:w-[1178px] md:h-[602px] lg:w-[1578px] lg:h-[852px] xl:w-[2078px] xl:h-[852px] rotate-[22deg] md:rotate-[12deg] border border-slate-600 rounded-[100%] absolute z-30 top-[3%] md:top-[-8%] left-[-50%] md:left-[-30%] lg:left-[-20%]"></div>
    </div>
  );
}
