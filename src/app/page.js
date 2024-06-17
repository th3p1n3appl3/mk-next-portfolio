"use client";

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroPicture from "../components/HeroPicture";
import AboutMe from "../components/AboutMe";
import Cards from "../components/Cards";
import Portfolio from "../components/Portfolio";
import { useState } from "react";

export default function Home({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <Navbar className="dark:bg-gray-900" />
          <Hero className="dark:bg-gray-900" />
          <HeroPicture className="dark:bg-gray-900" />
        </section>
        <section>
          <AboutMe />
          <Cards />
        </section>
        <section>
          <Portfolio />
        </section>
      </main>
    </div>
  );
}
