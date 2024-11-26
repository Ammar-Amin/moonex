import React from "react";
import Card from "./Card";
import phone from "../assets/Phone_Off.svg";
import option from "../assets/Options_3.svg";
import dollar from "../assets/Dollar.svg";
import shield from "../assets/Shield.svg";

export default function Feature() {
  const features = [
    {
      id: 1,
      icon: dollar,
      title: "Cheapest TXs",
      desc: "Exchange popular digital currencies at the cheapest possible transaction price",
    },
    {
      id: 2,
      icon: shield,
      title: "Certik",
      desc: "We are Audited by Certik. Certik is the leading security focused leading platform",
    },
    {
      id: 3,
      icon: phone,
      title: "No Contract Sells",
      desc: "No contract sells to fund the marketing wallets",
    },
    {
      id: 4,
      icon: option,
      title: "CrossDex Support",
      desc: "Exchange popular digital currencies at the cheapest possible transaction price",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto pt-20 lg:pb-20">
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        Our <span className="text-yel">Features</span>
      </h2>
      <div className="mt-8 md:mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 place-items-center">
        {features.map((f) => (
          <Card key={f.id} icon={f.icon} title={f.title} desc={f.desc} />
        ))}
      </div>
    </div>
  );
}
