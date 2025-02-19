import uprideLogo from "../public/uprideLogo.png";
import uprideNetwork from "../public/uprideNetwork.png";
import Image from "next/image";

export default function Footer() {
    return (
        <div className="bg-gray-100">
            <footer className="bg-[#FFFFFF] px-6 md:px-16 py-10 md:mx-24 mx-2 mb-10 border rounded-3xl flex flex-col justify-center items-center ">
                <div className="flex flex-col md:flex-row md:justify-around border-b pb-4 gap-4">
                    {/* Left Section - Logo & Description */}
                    <div className="max-w-sm">
                        <div className="flex items-center space-x-2">
                            <Image src={uprideLogo} width={41} height={41} alt="Upride Logo" />
                            <Image src={uprideNetwork} width={103} height={41} alt="Upride Network" />
                        </div>
                        <p className="text-gray-600 text-sm mt-2 w-1/2">
                            Learn Driving and get a driving license. Find top-rated driving schools near you.
                        </p>
                    </div>

                    {/* Center Section - Navigation Links */}
                    <div className="grid grid-cols-2 md:flex gap-8 text-sm text-gray-700">
                        <div>
                            <h4 className="font-semibold">Services</h4>
                        </div>
                        <div className=" flex flex-col ">
                            <h4 className="font-semibold flex ">About Us</h4>
                            <ul className="text-gray-500  text-sm flex flex-col gap-2">
                                <li>Our Story</li>
                                <li>Our Team</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold">Resources</h4>
                            <ul className="text-gray-500  text-sm flex flex-col gap-2">
                                <li>Articles</li>
                                <li>Blogs</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold">FAQs</h4>
                        </div>
                        <div>
                            <h4 className="font-semibold">Contact Us</h4>
                        </div>
                    </div>

                    {/* Right Section - Subscription Form */}
                    <div className="max-w-sm md:ml-4">
                        <h4 className="font-semibold text-black">Join the Upride Community Today!</h4>
                        <p className="text-gray-500 text-sm mb-3">
                            Subscribe now and never miss an update on all things driving.
                        </p>
                        <div className="flex items-center bg-gray-100  rounded-full border border-gray-300">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full outline-none text-sm px-2 bg-transparent"
                            />
                            <button className="bg-red-500 text-white px-6 py-1 rounded-full text-sm">
                                Subscribe Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="text-center text-gray-500 text-xs mt-2  pt-4">
                    <a href="#" className="hover:text-gray-700">Privacy Policy</a> | 
                    <a href="#" className="hover:text-gray-700"> Terms & Conditions</a>
                </div>
            </footer>
        </div>
    );
}
