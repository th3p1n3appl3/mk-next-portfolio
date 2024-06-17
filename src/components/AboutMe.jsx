import React from 'react';

const AboutMe = () => {
    return (
        <div>
            <h3 className="text-3xl font-medium py-5">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
                As a front-end web developer, I am driven by a passion for crafting
                intuitive and impactful web experiences. With a foundation built
                through an <span className="text-teal-500">edX bootcamp</span> and
                enriched by my background in{" "}
                <span className="text-teal-500">Social Sciences and education</span>,
                I bring a unique perspective to{" "}
                <span className="text-teal-500">every project</span>.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
                Currently thriving as a freelance developer, I am always eager for
                new opportunities to innovate and make a difference. Let&apos;s
                create something extraordinary together!
            </p>
        </div>
    );
};

export default AboutMe;