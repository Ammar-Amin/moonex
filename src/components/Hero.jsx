import React from "react";
import star1 from "../assets/1star.png";
import star from "../assets/star-img.png";
import starTwo from "../assets/star-img2.png";
import texture from "../assets/Texture.png";

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto">
          <h1 className="text-7xl font-bold">
            Trusted Multi-Chain <br></br> <span className="text-yel">DEX</span>{" "}
            Platform
          </h1>
          <p className="my-2 text-2xl font-medium tracking-wider text-slate-500">
            Trade, earn and own crypto on the all-in-one DEX
          </p>
          <div className="mt-8 font-semibold flex gap-6">
            <button className="px-6 py-2 rounded-full bg-gradient-to-br from-[#E4B40D] to-[#FBD966] text-black">
              Connect Wallet
            </button>
            <button className="px-6 py-2 rounded-full text-[#E4B40D] border-2 border-[#E4B40D]">
              Trade Crypto
            </button>
          </div>
        </div>

        <img src={texture} alt="" className="absolute bottom-0 right-0" />

        {/* Spear  */}
        <div className="w-72 h-72 absolute top-10 right-0 bg-gradient-to-tl from-[#E4B40D] via-[#ffd640] to-[#FFF6D7] rounded-full"></div>

        {/* Stars  */}
        <img src={star} alt="" className="absolute top-0 left-0" />
        <img src={starTwo} alt="" className="absolute bottom-0 right-0" />
        <img src={star1} alt="" className="absolute top-0 right-0" />
      </div>
      <div className="w-[1187px] h-[514px] rotate-180 border-2 border-yel rounded-[100%] absolute z-50 top-1 left-1"></div>
      <div className="w-[1724px] h-[748px] border-2 border-yel rounded-[100%] absolute z-50 top-1 left-1"></div>
      <div className="w-[2378px] h-[1032px] border-2 border-yel rounded-[100%] absolute z-50 top-1 left-1"></div>
    </div>
  );
}
