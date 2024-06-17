"use client";

import React from "react";
import Image from "next/image";
import Bootstrapportfolio from "/public/bootstrapportfolio.png";
import Passwordgenerator from "/public/passwordgenerator.png";
import Recipebook from "/public/recipebook.png";
import Readmegenerator from "/public/readmegenerator.png";
import { useState } from "react";

const Portfolio = () => {
  return (
    <div>
      <h3 className="text-3xl py-1">Portfolio</h3>
      <p className="text-md py-2 leading-8 text-gray-800">
        As a <span className="text-teal-500">front-end developer</span>, my
        journey began with a passion for creating visually appealing and
        user-friendly web interfaces. Over the years, I&apos;ve honed my skills
        in <span className="text-teal-500">HTML, CSS and Javascript</span>,
        transforming concepts into dynamic, responsive websites. My dedication
        to <span className="text-teal-500">continuous learning</span> and
        staying updated with the latest technologies has allowed me to craft
        exceptional digital experiences, blending{" "}
        <span className="text-teal-500">
          creativity with technical expertise
        </span>{" "}
        to bring ideas to life.
      </p>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1">
          <Image
            src={Bootstrapportfolio}
            alt="Bootstrap Portfolio"
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={Passwordgenerator}
            alt="Password Generator"
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3flex-1">
          <Image
            src={Recipebook}
            alt="Recipe Book"
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={Readmegenerator}
            alt="Readme Generator"
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};



export default Portfolio;
