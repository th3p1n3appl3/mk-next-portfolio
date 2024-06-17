import React from 'react';
import Image from 'next/image';
import Martin from '/public/martin.png'; 

const HeroPicture = () => {
    return (
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden">
            <Image src={Martin} alt="avatar" layout="fill" objectFit="cover" />
        </div>
    );
};

export default HeroPicture;