import React from "react";

export default function Card({ icon, title, desc }) {
  return (
    <div className="p-4 md:p-6 lg:p-8 w-[200px] md:w-[270px] xl:w-[300px] xl:h-[270px] mx-auto bg-[#0d1c28] rounded-3xl border-[1px] border-slate-700">
      {/* Icons bg  bg-[#222F3A]  */}
      <div className="p-3 md:mb-3 bg-[#222f3a] inline-block rounded-full">
        {/* <span>{icon}</span> */}
        <img src={icon} alt="" className="w-5 h-5 object-cover" />
      </div>
      <div className="text-sm md:text-xl font-bold my-2 md:my-3">{title}</div>
      <div className="text-xs md:text-base">{desc}</div>
    </div>
  );
}
