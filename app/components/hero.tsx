'use client'

import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
/*
    <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <h1 className="text-5xl font-bold mb-4">Un engagement fort</h1>
            <p className="text-xl mb-8">Entreprise générale de batiment</p>
            <a href="#contact" className="bg-blue-500 text-white px-8 py-3 rounded-full">Contact Us</a>
        </div>
    </section> 
*/
 <section>
    <div className="bg-violet-400">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">Kenn Services</h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
                Entreprise générale de batiment qui intervient sur le gros-oeuvre, le géniecivil et la rénovation.
            </p>
            <div className="flex flex-wrap justify-center">
                <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 text-gray-50">Get started</button>
                <button type="button" className="px-8 py-3 m-2 text-lg border rounded border-gray-700 text-gray-900">Learn more</button>
            </div>
        </div>
    </div>
    <Image width={200} height={200} src="/tuyau.jpg" alt="" className="w-5/6 mx-auto mb-12 -mt-20 bg-gray-500 rounded-lg shadow-md lg:-mt-40" />
</section>
  );
};

export default HeroSection;
