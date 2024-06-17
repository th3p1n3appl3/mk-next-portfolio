import React from 'react';
import { AiFillDiscord, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Hero = () => {
    return (
        <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
                Martin Kosel
            </h2>
            <h3 className="text-2xl py-2">Front-end Web Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
                Bridging the gap between technology and human connection, I craft
                intuitive and impactful web experiences
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
                <AiFillDiscord />
                <AiFillGithub />
                <AiFillLinkedin />
            </div>
        </div>
    );
};

export default Hero;