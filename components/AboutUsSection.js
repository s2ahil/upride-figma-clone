"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Cloud from "../public/cloud.png";
import customerBlue from "../public/customer_blue.png";
import customerDriving from "../public/customer_driving_car.png";
import ladyBike from "../public/lady_bike.png";
import trainerCar from "../public/trainer_car.png";
import Traffic from "../public/svg/traffic.svg"

const AboutUsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const timelineData = [
        {
            year: "2023",
            title: "The Idea Takes Shape",
            description: "Frustrated by outdated driving schools and unsafe practices, our founders came together with a bold vision—to make learning to drive safer, smarter, and more accessible."
        },
        {
            year: "Early 2024",
            title: "Upride is Born",
            description: "Frustrated by outdated driving schools and unsafe practices, our founders came together with a bold vision—to make learning to drive safer, smarter, and more accessible."
        },
        {
            year: "Early 2024",
            title: "Upride is Born",
            description: "Frustrated by outdated driving schools and unsafe practices, our founders came together with a bold vision—to make learning to drive safer, smarter, and more accessible."
        }
    ];

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % timelineData.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + timelineData.length) % timelineData.length);
    };

    return (
        <div className="bg-[#F3ECE3] relative overflow-hidden pt-8 md:pt-16">
            <div className='px-4 md:px-8'>
                {/* Cloud Background */}
                <Image
                    src={Cloud}
                    alt="Cloud Background"
                    className="absolute top-[14rem] left-0 w-[12rem] md:w-[20rem] opacity-60"
                />
                <Image
                    src={Cloud}
                    alt="Cloud Background"
                    className="absolute top-[5rem] right-4 md:right-20 w-[12rem] md:w-[20rem] opacity-60"
                />

                {/* Content Section */}
                <div className="flex flex-col items-center text-center relative z-10">
                    <h1
                        style={{
                            background: "linear-gradient(90deg, #E42525 0%, #FFBFB2 50%, #E42525 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            display: "inline-block",
                            fontWeight: "700"
                        }}
                        className="text-lg md:text-xl"
                    >
                        ABOUT US
                    </h1>

                    <h1 className="text-black font-bold text-2xl md:text-4xl w-full md:w-[50%] px-4">
                        Transforming Driving Education Across India
                    </h1>

                    <p className="w-full md:w-3/4 text-gray-700 mt-4 px-4 text-sm md:text-base arimo-font">
                        Upride began with a simple yet powerful idea: to redefine how India learns to drive.
                        Born from the belief that every individual deserves access to safe, reliable, and empowering driver education,
                        Upride has grown into a movement that's transforming lives across the country.
                    </p>
                </div>
            </div>

            {/* Image Grid */}
            <div className="flex justify-center mt-6 md:mt-10 px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 max-w-5xl items-center">
                    <Image
                        src={customerDriving}
                        alt="Customer Driving"
                        className="rounded-xl shadow-lg"
                    />
                    <Image
                        src={trainerCar}
                        alt="Trainer Car"
                        className="rounded-xl shadow-lg"
                    />
                    <Image
                        src={ladyBike}
                        alt="Lady on Bike"
                        className="rounded-xl shadow-lg"
                    />
                    <Image
                        src={customerBlue}
                        alt="Customer with Instructor"
                        className="rounded-xl shadow-lg"
                    />
                </div>
            </div>

            <div className='bg-[#F2EAEA] w-full mt-8'>
                <div className='flex flex-col md:flex-row justify-between py-8 md:py-20 px-4 md:px-24 space-y-6 md:space-y-0'>
                    <div className='flex flex-col justify-between gap-2'>
                        <h1 style={{
                            background: "linear-gradient(90deg, #E42525 0%, #FFBFB2 50%, #E42525 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            display: "inline-block",
                            fontWeight: "700"
                        }}>OUR STORY</h1>
                        <h2 className='text-2xl md:text-4xl w-full md:w-[90%] font-[700]'>Milestones that Define our Success</h2>
                    </div>

                    <div className='w-full md:w-[95%] font-[400] arimo-font text-sm md:text-base'>
                        At Upride, we realized driving education in India was stuck in reverse. From unprofessional instructors to outdated methods and a lack of focus on safety, traditional driving schools were failing learners. In 2023, our founders set out to rewrite the rules of driver education. That's how Upride was born—with a mission to make learning to drive smarter, safer, and accessible to all.
                    </div>
                </div>

                <div className="relative w-full px-4 md:px-24 py-8 md:py-16">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {timelineData.map((item, index) => (
                                <div
                                    key={index}
                                    className={`relative transition-all duration-500 ${
                                        index === activeIndex
                                            ? 'opacity-100'
                                            : index === (activeIndex + 1) % timelineData.length
                                                ? 'opacity-60'
                                                : 'opacity-30'
                                    }`}
                                >
                                    {/* Traffic Light */}
                                    <div className="flex items-center mb-4">
                                        <div className={`w-24 h-24 md:w-36 md:h-36 flex items-center justify-center rounded-full bg-[#EBD5D5] shadow-md p-3 transition-all duration-500 ${
                                            index === activeIndex ? 'scale-105' : 'scale-100'
                                        }`}>
                                            <Image src={Traffic} alt="Traffic Light" width={30} height={30} className="md:w-[40px] md:h-[40px]" />
                                        </div>
                                        <div className="flex-1 border-t-2 border-dotted border-[#000000] mx-2"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-2">
                                        <p className="text-red-500 text-xs md:text-sm">{item.year}</p>
                                        <h3 className="text-lg md:text-xl font-bold text-gray-800">{item.title}</h3>
                                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center md:justify-end mt-8 space-x-4">
                            <button
                                onClick={handlePrev}
                                className="text-[#EDBDBD] hover:scale-110 transition-transform"
                            >
                                <svg width="28" height="18" viewBox="0 0 36 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[36px] md:h-[22px]">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2 12.5833C6.876 12.5833 11.32 16.0998 11.32 19.9616L11.32 21.5449L15.32 21.5449L15.32 19.9616C15.32 17.1528 13.764 14.5181 11.322 12.5833L36 12.5833L36 9.41659L11.322 9.41659C13.764 7.48176 15.32 4.84709 15.32 2.03826L15.32 0.454922L11.32 0.454922L11.32 2.03826C11.32 5.90001 6.876 9.41659 2 9.41659L2.7544e-06 9.41659L3.03124e-06 12.5833L2 12.5833Z" fill="#EDBDBD" />
                                </svg>
                            </button>
                            <button
                                onClick={handleNext}
                                className="text-[#EDBDBD] hover:scale-110 transition-transform"
                            >
                                <svg width="28" height="18" viewBox="0 0 36 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[36px] md:h-[22px]">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M34 9.41675C29.124 9.41675 24.68 5.90016 24.68 2.03841V0.455078H20.68V2.03841C20.68 4.84725 22.236 7.48191 24.678 9.41675H0V12.5834H24.678C22.236 14.5182 20.68 17.1529 20.68 19.9617V21.5451H24.68V19.9617C24.68 16.1 29.124 12.5834 34 12.5834H36V9.41675H34Z" fill="#FF5757" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;