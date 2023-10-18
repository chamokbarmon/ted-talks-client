"use client"
import React from 'react';
import Lottie from "lottie-react";
import animation  from "../../../public/metting.json"
import Image from 'next/image';
const Baner = () => {
    return (
         <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 bg-[#ffefa3]'>
            <div className='align-middle items-center  m-auto ml-10'>
                <h1 className='text-4xl  font-bold w-full '>
                The podcast where science meets  business
                </h1>
                <p className='font-bold text-sm text-justify w-full mt-4'>
                From fixing meetings to finding a mentor, get new insights to help you enjoy your time at  work and thrive in your career.
                </p>
                <button className=' p-3 rounded-lg bg-red-600 text-white mt-4'>
                    Listen Now
                </button>
            </div>
            <div className=''>
            <Lottie className='h-[500px] ' animationData={animation} loop={true} />
        
            </div>
            <div className='align-middle items-center m-auto justify-center'>
                <Image width={300} height={100} alt='' className="mr-5" src="https://i.ibb.co/9ZdNtp9/WL-S4-TED-com-thumbnail-Ep-Why-it-Pays-to-Raise-Pay-removebg-preview.png"/>
            </div>
           
         </div>
    );
};

export default Baner;