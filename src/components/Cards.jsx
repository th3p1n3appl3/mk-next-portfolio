import React from "react";
import Design from "/public/design.png";
import Image from "next/image";
import Code from "/public/code.png";
import Consulting from "/public/consulting.png";
import Nextlogo from "/public/nextlogo.png";

const Cards = () => {
  return (
    <div>
      <div className="text-center shadow-lg p-10 rounded-xl my-10">
        <Image src={Design} alt="design" className="h-28 w-28 mx-auto" />
        <h3 className="text-lg font-medium pt-8 pb-2">
          Beautiful & simple designs
        </h3>
        <p className="py-2">
          Transforming ideas into stunning visual masterpieces.
        </p>
        <h4 className="py-4 text-teal-600">Tools I use:</h4>
        <p className="text-gray-800 py-1">Figma</p>
        <p className="text-gray-800 py-1">Photoshop</p>
      </div>
      <div className="text-center shadow-lg p-10 rounded-xl my-10">
        <Image src={Code} alt="code" className="h-28 w-28 mx-auto" />
        <h3 className="text-lg font-medium pt-8 pb-2">Code that works</h3>
        <p className="py-2">
          Building robust, clean, and efficient code up to the latest web
          standards.
        </p>
        <h4 className="py-4 text-teal-600">Frameworks & Libraries:</h4>
        <p className="text-gray-800 py-1">NextJS</p>
        <p className="text-gray-800 py-1">TailwindCSS</p>
        <p className="text-gray-800 py-1">React</p>
      </div>
      <div className="text-center shadow-lg p-10 rounded-xl my-10">
        <Image
          src={Consulting}
          alt="consulting"
          className="h-28 w-28 mx-auto"
        />
        <h3 className="text-lg font-medium pt-8 pb-2">Consulting & Strategy</h3>
        <p className="py-2">
          Providing expert advice and guidance to help you achieve your goals.
        </p>
      </div>
    </div>
  );
};

export default Cards;
