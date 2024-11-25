import React from "react";

export default function Card({ icon, title, desc }) {
  return (
    <div className="p-8 w-[150px] h-[150px] md:w-[200px] md:h-[200px] xl:w-[300px] xl:h-[270px] bg-[#0d1c28] rounded-3xl border-[1px] border-slate-700">
      {/* Icons bg  bg-[#222F3A]  */}
      <div className="p-3 mb-3 bg-[#222f3a] inline-block rounded-full">
        {/* <span>{icon}</span> */}
        <img src={icon} alt="" className="object-cover" />
      </div>
      <div className="text-xl font-bold my-3">{title}</div>
      <div>{desc}</div>
    </div>
  );
}
