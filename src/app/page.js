import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HeroPicture from "../components/HeroPicture";
import AboutMe from "../components/AboutMe";
import Cards from "../components/Cards";

export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <Navbar />
        <Hero />
        <HeroPicture />
      </section>
      <section>
        <AboutMe />
        <Cards />
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1">Portfolio</h3>
        </div>
      </section>
    </main>
  );
}
