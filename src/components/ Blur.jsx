import React from "react";

export default function Blur({
  h = "100",
  w = "100",
  top,
  left,
  right,
  bottom,
}) {
  return (
    <div
      className={`${h} ${w} absolute z-50 ${top} ${left} ${right} ${bottom} bg-[#EDD955] blur-3xl rounded-full opacity-20`}
    ></div>
  );
}
