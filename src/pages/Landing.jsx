import React from "react";
import { FAQ, Feature, Footer, Hero, Navbar, WhyUs } from "../components";

export default function Landing() {
  return (
    <main>
      <Navbar />
      <section className="font-raleway">
        <Hero />
        <WhyUs />
        <Feature />
        <FAQ />
      </section>
      <Footer />
    </main>
  );
}
