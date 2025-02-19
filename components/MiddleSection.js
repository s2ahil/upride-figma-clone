"use client"

import React, { useState } from 'react'
import stearingImage from "../public/stearingImage.png"
import ladyDrivingCar from "../public/LadyDrivingCar.png"
import Image from 'next/image'
import video from "../public/video.png"
import FemaleDriver from "../public/tired_woman.png"
import gallery1 from "../public/gallery_1.png"
import gallery2 from "../public/gallery_2.png"
import gallery3 from "../public/gallery_3.png"

const MiddleSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const features = [
        {
            title: "Instructor On Demand",
            description: "At Upride, we don't just teach driving—we redefine it. Here's how we make your learning journey exceptional",
            icon: (
                <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45.0968 33.9555C42.2649 31.1237 38.8942 29.0274 35.2167 27.7583C39.1555 25.0455 41.7432 20.5054 41.7432 15.3716C41.7432 7.08337 35.0001 0.340332 26.7119 0.340332C18.4237 0.340332 11.6807 7.08337 11.6807 15.3716C11.6807 20.5054 14.2684 25.0455 18.2072 27.7585C14.5296 29.0274 11.1589 31.1237 8.32707 33.9556C3.41642 38.8663 0.711914 45.3955 0.711914 52.3403H4.77441C4.77441 44.5306 8.87734 37.6619 15.0401 33.7739L20.3633 40.1737L24.6807 36.5378V52.3403H28.7432V36.4917L33.18 40.1672L38.4252 33.7999C44.565 37.6925 48.6494 44.5481 48.6494 52.3403H52.7119C52.7119 45.3955 50.0074 38.8663 45.0968 33.9555ZM15.7432 15.3716C15.7432 9.32343 20.6638 4.40283 26.7119 4.40283C32.7601 4.40283 37.6807 9.32343 37.6807 15.3716C37.6807 21.4197 32.7601 26.3403 26.7119 26.3403C20.6638 26.3403 15.7432 21.4197 15.7432 15.3716Z" fill="#FF5757" />
                </svg>
            )
        },
        {
            title: "Learn on Your Own Vehicle",
            description: "Get personalized training on your car or bike to build confidence with the vehicle you'll use daily.",
            icon: (
                <svg width="78" height="53" viewBox="0 0 78 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M75.1979 11.7315H67.7645V17.5734L66.8429 18.9694L62.673 7.80145C61.0564 3.46174 56.8563 0.533203 52.2482 0.533203H26.3523C21.7291 0.533203 17.5441 3.44657 15.9275 7.80145L11.7576 18.9694L10.8359 17.5734V11.7315H3.40259C2.04283 11.7315 0.924805 12.8391 0.924805 14.22V16.7085C0.924805 18.0741 2.02772 19.197 3.40259 19.197H8.93228L10.005 20.8206C7.60274 21.6855 5.88037 23.9615 5.88037 26.6625V39.0898C5.88037 42.5191 8.66033 45.3111 12.0748 45.3111H13.3137V49.0438C13.3137 51.1074 14.9757 52.7766 17.0304 52.7766H24.4638C26.5185 52.7766 28.1804 51.1074 28.1804 49.0438V45.3111H50.4654V49.0438C50.4654 51.1074 52.1273 52.7766 54.1821 52.7766H61.6154C63.6702 52.7766 65.3321 51.1074 65.3321 49.0438V45.3111H66.571C69.9855 45.3111 72.7654 42.5191 72.7654 39.0898V26.6473C72.7654 23.9464 71.028 21.6703 68.6408 20.8054L69.7135 19.1818H75.2432C76.603 19.1818 77.721 18.0741 77.721 16.6933V14.2048C77.6757 12.8391 76.5728 11.7315 75.1979 11.7315ZM8.35816 16.7085H3.40259V14.22H8.35816V16.7085ZM18.2391 8.66635C19.4931 5.2826 22.7565 3.0217 26.3523 3.0217H52.2331C55.8289 3.0217 59.0923 5.29777 60.3463 8.66635L64.7429 20.426H13.8576L18.2391 8.66635ZM25.6875 49.0286C25.6875 49.7115 25.1285 50.2729 24.4486 50.2729H17.0153C16.3354 50.2729 15.7764 49.7115 15.7764 49.0286V45.2959H25.6724V49.0286H25.6875ZM62.8241 49.0286C62.8241 49.7115 62.2651 50.2729 61.5852 50.2729H54.1518C53.472 50.2729 52.9129 49.7115 52.9129 49.0286V45.2959H62.809V49.0286H62.8241ZM70.2423 26.6473V39.0746C70.2423 41.1383 68.5804 42.8074 66.5257 42.8074H12.0597C10.005 42.8074 8.34305 41.1383 8.34305 39.0746V26.6473C8.34305 24.5837 10.005 22.9145 12.0597 22.9145H66.5257C68.5804 22.9145 70.2423 24.5837 70.2423 26.6473ZM70.2423 16.7085V14.22H75.1979V16.7085H70.2423Z" fill="#FF5757" />
                    <path d="M19.4936 26.647C16.0791 26.647 13.2991 29.4389 13.2991 32.8682C13.2991 36.2975 16.0791 39.0895 19.4936 39.0895C22.9081 39.0895 25.6881 36.2975 25.6881 32.8682C25.6881 29.4389 22.9081 26.647 19.4936 26.647ZM19.4936 36.5858C17.4388 36.5858 15.7769 34.9167 15.7769 32.8531C15.7769 30.7894 17.4388 29.1203 19.4936 29.1203C21.5483 29.1203 23.2103 30.7894 23.2103 32.8531C23.2103 34.9167 21.5483 36.5858 19.4936 36.5858Z" fill="black" />
                    <path d="M59.1069 26.647C55.6924 26.647 52.9124 29.4389 52.9124 32.8682C52.9124 36.2975 55.6924 39.0895 59.1069 39.0895C62.5214 39.0895 65.3013 36.2975 65.3013 32.8682C65.3013 29.4389 62.5214 26.647 59.1069 26.647ZM59.1069 36.5858C57.0521 36.5858 55.3902 34.9167 55.3902 32.8531C55.3902 30.7894 57.0521 29.1203 59.1069 29.1203C61.1616 29.1203 62.8236 30.7894 62.8236 32.8531C62.8236 34.9167 61.1616 36.5858 59.1069 36.5858Z" fill="black" />
                    <path d="M29.4052 31.6245H49.2123V34.113H29.4052V31.6245Z" fill="black" />
                </svg>

            )
        },
        {
            title: "Comprehensive Training",
            description: "From beginner-friendly courses to refresher sessions, we cater to all skill levels with two-wheeler training, four-wheeler training, and everything in between.",
            icon: (
                <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_551)">
                        <path d="M39.1342 30.0289H37.3935V23.3912C37.3935 20.7693 35.2746 18.6025 32.6048 18.6025H19.546C16.9294 18.6025 14.7573 20.7162 14.7573 23.3912V30.0289H13.0167C12.175 30.0289 11.4927 30.7113 11.4927 31.5529C11.4927 32.3946 12.175 33.0769 13.0167 33.0769H14.7573V47.8765C14.7573 50.5 16.8775 52.6651 19.546 52.6651H32.6048C35.2207 52.6651 37.3935 50.5517 37.3935 47.8765V33.0769H39.1342C39.9759 33.0769 40.6582 32.3946 40.6582 31.5529C40.6582 30.7113 39.9759 30.0289 39.1342 30.0289ZM34.3456 47.8765C34.3456 48.8376 33.5675 49.6172 32.6048 49.6172H19.546C18.5869 49.6172 17.8053 48.8412 17.8053 47.8765V44.5034H34.3456V47.8765ZM34.3456 41.4554H17.8053V29.8122H34.3456V41.4554ZM34.3456 26.7643H17.8053V23.3912C17.8053 22.4301 18.5834 21.6505 19.546 21.6505H19.6543V21.7588C19.6543 22.6005 20.3366 23.2828 21.1783 23.2828C22.0199 23.2828 22.7023 22.6005 22.7023 21.7588V21.6505H29.4484V21.7588C29.4484 22.6005 30.1308 23.2828 30.9724 23.2828C31.814 23.2828 32.4964 22.6005 32.4964 21.7588V21.6505H32.6047C33.5638 21.6505 34.3455 22.4265 34.3455 23.3912V26.7643H34.3456Z" fill="#FF5757" />
                        <path d="M23.8892 6.51274L24.5523 5.84961V10.3322C24.5523 11.1739 25.2347 11.8562 26.0763 11.8562C26.9179 11.8562 27.6003 11.1739 27.6003 10.3322V5.84961L28.2634 6.51274C28.8585 7.10791 29.8235 7.10791 30.4186 6.51274C31.0138 5.91758 31.0138 4.9527 30.4186 4.35753L27.1539 1.09286C26.5588 0.497693 25.5938 0.497693 24.9986 1.09286L21.734 4.35753C21.1388 4.9527 21.1388 5.91758 21.734 6.51274C22.329 7.10791 23.294 7.10791 23.8892 6.51274Z" fill="black" />
                        <path d="M3.2232 23.4995C2.38156 23.4995 1.69922 24.1818 1.69922 25.0235V28.2882C1.69922 29.1298 2.38156 29.8121 3.2232 29.8121C4.06484 29.8121 4.74718 29.1298 4.74718 28.2882V25.0235C4.74718 24.1817 4.06484 23.4995 3.2232 23.4995Z" fill="black" />
                        <path d="M3.2232 34.9258C2.38156 34.9258 1.69922 35.6081 1.69922 36.4498V39.7144C1.69922 40.5561 2.38156 41.2384 3.2232 41.2384C4.06484 41.2384 4.74718 40.5561 4.74718 39.7144V36.4498C4.74718 35.6081 4.06484 34.9258 3.2232 34.9258Z" fill="black" />
                        <path d="M3.2232 46.3521C2.38156 46.3521 1.69922 47.0344 1.69922 47.876V51.1407C1.69922 51.9823 2.38156 52.6647 3.2232 52.6647C4.06484 52.6647 4.74718 51.9823 4.74718 51.1407V47.876C4.74718 47.0344 4.06484 46.3521 3.2232 46.3521Z" fill="black" />
                        <path d="M3.2232 12.0732C2.38156 12.0732 1.69922 12.7556 1.69922 13.5972V16.8619C1.69922 17.7035 2.38156 18.3859 3.2232 18.3859C4.06484 18.3859 4.74718 17.7035 4.74718 16.8619V13.5972C4.74718 12.7556 4.06484 12.0732 3.2232 12.0732Z" fill="black" />
                        <path d="M3.2232 0.646484C2.38156 0.646484 1.69922 1.32882 1.69922 2.17047V5.43514C1.69922 6.27678 2.38156 6.95912 3.2232 6.95912C4.06484 6.95912 4.74718 6.27678 4.74718 5.43514V2.17047C4.74718 1.32882 4.06484 0.646484 3.2232 0.646484Z" fill="black" />
                        <path d="M48.9294 0.646484C48.0877 0.646484 47.4054 1.32882 47.4054 2.17047V51.1411C47.4054 51.9827 48.0877 52.665 48.9294 52.665C49.771 52.665 50.4534 51.9827 50.4534 51.1411V2.17047C50.4534 1.32882 49.7711 0.646484 48.9294 0.646484Z" fill="#FF5757" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_551">
                            <rect width="52.0186" height="52.0186" fill="white" transform="translate(0.0673828 0.646484)" />
                        </clipPath>
                    </defs>
                </svg>

            )
        }
    ];
    return (
        <div className="bg-gray-50">
            {/* Mission & Vision Section */}
            <div className='px-4 md:px-8 lg:px-24 py-8 md:py-16 flex flex-col gap-8 md:gap-16 mx-auto bg-[#F4F4F4]'>
                {/* Mission Section */}
                <div className='flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16'>
                    <div className='w-full md:w-1/2'>
                        <Image
                            src={ladyDrivingCar}
                            alt="Lady Driving Car"
                            className='rounded-2xl w-full'
                        />
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col gap-2 text-center md:text-left'>
                        <h3 className='text-red-500 text-lg md:text-xl font-bold'>Mission</h3>
                        <h2 className='text-lg md:text-xl font-bold text-gray-900 arimo-font'>
                            Empowering Confident and Responsible Drivers
                        </h2>
                        <p className='text-gray-600 leading-relaxed text-base md:text-lg arimo-font'>
                            Empower learners through innovative training techniques,
                            expert guidance, and a commitment to road safety,
                            ensuring every journey begins with confidence.
                        </p>
                    </div>
                </div>

                {/* Vision Section */}
                <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-16'>
                    <div className='w-full md:w-1/2 flex flex-col gap-2 text-center md:text-left'>
                        <h3 className='text-red-500 text-lg md:text-xl font-bold'>Vision</h3>
                        <h2 className='text-lg md:text-xl font-bold text-gray-900 arimo-font'>
                            Driving Education, Reinvented for India
                        </h2>
                        <p className='text-gray-600 leading-relaxed text-base md:text-lg arimo-font'>
                            Our dream is big: Revolutionizing driver education across India by
                            blending technology, expertise, and a customer-first approach.
                            Starting in Bangalore, we're creating a movement where every
                            learner becomes a responsible, skilled, and confident driver.
                        </p>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <Image
                            src={stearingImage}
                            alt="Steering Wheel"
                            className='rounded-2xl w-full'
                        />
                    </div>
                </div>
            </div>

            {/* Founder Section */}
            <div className='flex flex-col gap-2 justify-center items-center px-4 md:px-8 lg:px-24 py-8 md:py-16'>
                <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#E42525] via-[#FFBFB2] to-[#E42525] bg-clip-text text-transparent">
                    Founder Perspective
                </h1>
                <h1 className="text-black font-bold text-2xl md:text-4xl w-full md:w-[50%] text-center px-4">
                    From the Founder's Wheel – The Vision Behind Upride
                </h1>
                <Image src={video} className='mt-4 w-full md:w-auto' alt="Founder Video" />
            </div>

            {/* Features Section */}
            <div className='bg-[#F4F4F4] px-4 md:px-8 lg:px-24 py-8'>
                <div className='bg-[#F2EAEA] rounded-2xl flex flex-col gap-2 justify-center items-center p-4 md:p-16'>
                    <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#E42525] via-[#FFBFB2] to-[#E42525] bg-clip-text text-transparent">
                        Our Unique Approach
                    </h1>
                    <h1 className="text-black font-bold text-2xl md:text-4xl w-full md:w-[70%] text-center">
                        Driving Smarter, Learning Better
                    </h1>
                    <p className="w-full md:w-[50%] text-gray-700 mt-4 arimo-font text-center">
                        At Upride, we don't just teach driving—we redefine it. Here's how we make your learning journey exceptional
                    </p>

                    <div className="w-full py-8 md:py-16 arimo-font">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-[#F0E1E1] p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="flex flex-col gap-4">
                                        <div className="h-14">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-lg md:text-xl font-bold text-gray-900">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Speciality Section */}
                <div className='flex flex-col justify-center items-center gap-2 py-8 arimo-font'>
                    <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#E42525] via-[#FFBFB2] to-[#E42525] bg-clip-text text-transparent">
                        OUR SPECIALITY
                    </h1>
                    <h2 className="text-black font-bold text-2xl md:text-4xl mt-2 w-full md:w-[50%] text-center px-4">
                        Why Choose Upride for your Driving Journey?
                    </h2>
                        <div className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-16 gap-12">
                            {/* Left Section */}


                            <div className="lg:w-1/2">


                                {/* Accordion List */}
                                <div className="mt-6 space-y-4">
                                    <AccordionItem
                                        title="GPS-Enabled Vehicles"
                                        content="Stay safe and track your progress with our cutting-edge technology that ensures every journey is monitored and secure."
                                        isOpen={openIndex === 0}
                                        onClick={() => handleToggle(0)}
                                    />
                                    <AccordionItem
                                        title="Expert Instructors"
                                        content="Learn from experienced professionals who ensure you master the art of driving safely and confidently."
                                        isOpen={openIndex === 1}
                                        onClick={() => handleToggle(1)}
                                    />
                                    <AccordionItem
                                        title="Personalized Classes"
                                        content="Tailored lessons to fit your schedule and skill level, ensuring you get the best learning experience."
                                        isOpen={openIndex === 2}
                                        onClick={() => handleToggle(2)}
                                    />
                                    <AccordionItem
                                        title="Why Wait"
                                        content="Start your driving journey today with Upride and gain the confidence to hit the road!"
                                        isOpen={openIndex === 3}
                                        onClick={() => handleToggle(3)}
                                    />
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 flex justify-center">
                            <div className="rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src={FemaleDriver}
                                    alt="Female Driver"
                                    className="rounded-xl w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery Section */}
                <div className="bg-[#F2EAEA] rounded-2xl py-8 px-4 md:px-8">
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#E42525] via-[#FFBFB2] to-[#E42525] bg-clip-text text-transparent">
                            OUR GALLERY
                        </h1>
                        <h2 className="text-black font-bold text-2xl md:text-4xl mt-2 text-center">
                            Moments That Drive Us Forward
                        </h2>
                        <p className="w-full md:w-[60%] text-gray-700 arimo-font text-center">
                            Take a glimpse into our journey! From empowering first-time drivers to celebrating milestones, our gallery captures the essence of what we do.
                        </p>
                        <button className="border-[#FF5757] rounded-full border px-4 py-2 mt-4 text-[#FF5757] text-center">
                            Visit Our Instagram
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                        <div className="col-span-1 md:col-span-1">
                            <Image src={gallery1} className="w-full h-full object-cover rounded-lg" alt="Gallery 1" />
                        </div>
                        <div className="col-span-1">
                            <Image src={gallery2} className="w-full h-full object-cover rounded-lg" alt="Gallery 2" />
                        </div>
                        <div className="col-span-1">
                            <Image src={gallery3} className="w-full h-full object-cover rounded-lg" alt="Gallery 3" />
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <FAQSection />
            </div>
        </div>
    )
}

const AccordionItem = ({ title, content, isOpen, onClick }) => (
    <div className="border-b border-gray-300 py-3 cursor-pointer" onClick={onClick}>

        <div className="flex  gap-2 items-center ">
            <span className="text-2xl">{isOpen ? "−" : "+"}</span>
            <h2 className={`font-semibold text-lg ${isOpen ? "text-black" : "text-gray-600"}`}>
                {title}
            </h2>

        </div>
        {isOpen && <p className="text-gray-500 mt-2 pl-6">{content}</p>}
    </div>
);

const FAQSection = () => {
    const faqs = [
        {
            question: "How long does it take to learn driving?",
            answer: "The time it takes to learn depends on your experience and the course you choose. On average, it takes around 10 to 20 lessons to become a confident driver. Our flexible courses cater to all levels, so you can learn at your own pace."
        },
        { question: "How does Upride work?", answer: "" },
        { question: "How do I book a class?", answer: "" },
        { question: "How can I pay for lessons?", answer: "" },
        { question: "Can I reschedule my lesson?", answer: "" },
        { question: "Can I learn with my own car?", answer: "" }
    ];
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="bg-[#F2ECEC] py-10 px-6 md:px-16 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                Frequently Asked Questions?
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border-b border-gray-300 pb-4"
                    >
                        <button
                            className="w-full flex justify-between items-center text-left text-lg font-semibold py-3"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            {faq.question}
                            {openIndex === index ? (
                                <svg width="22" height="3" viewBox="0 0 22 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.9307 1.86266H0.116455" stroke="#FF5757" stroke-width="1.8" stroke-linejoin="round" />
                                </svg>

                            ) : (
                                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.9307 11.1351H0.116455" stroke="#BFA5A5" stroke-width="1.8" stroke-linejoin="round" />
                                    <path d="M11.0266 22.0437V0.229492" stroke="#BFA5A5" stroke-width="1.8" stroke-linejoin="round" />
                                </svg>

                            )}
                        </button>
                        {openIndex === index && (
                            <p className="text-gray-600 text-sm leading-relaxed arimo-font">
                                {faq.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default MiddleSection