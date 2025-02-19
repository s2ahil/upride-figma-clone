"use client"
import { useState } from "react";
import Image from "next/image";
import uprideLogo from "../public/uprideLogo.png";
import uprideNetwork from "../public/uprideNetwork.png";

const Navbar = () => {
  const NavbarItems = ["Services", "About Us", "Resources", "FAQs", "Contact Us"];
  const [active, setActive] = useState("About Us");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Image src={uprideLogo} className="h-[41px] w-[41px]" alt="Upride Logo" />
            <Image src={uprideNetwork} className="h-[41px] w-[103.02px]" alt="Upride Network" />
          </div>

          {/* Center: Menu Items - Hidden on mobile */}
          <ul className="hidden md:flex space-x-6">
            {NavbarItems.map((item, index) => (
              <li
                key={index}
                onClick={() => setActive(item)}
                className="relative text-[#1E1E1E] font-[400] hover:text-red-500 cursor-pointer transition-colors"
              >
                {item}
                <span
                  className={`absolute z-10 left-0 top-12 bottom-0 h-[2px] w-full bg-red-500 transition-transform duration-300 ${
                    active === item ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </li>
            ))}
          </ul>

          {/* Right: Icons */}
          <div className="flex space-x-4 items-center">
            <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.70911 11.6597C2.70911 6.96673 6.42859 3.14923 10.9996 3.14923C15.5695 3.14923 19.2889 6.96673 19.2889 11.6597C19.2889 16.3527 15.5695 20.1714 10.9996 20.1714C6.42859 20.1714 2.70911 16.3527 2.70911 11.6597ZM24.4925 24.3069L19.0758 18.7603C20.6729 16.8485 21.6445 14.3708 21.6445 11.6597C21.6445 5.63417 16.8686 0.730789 10.9996 0.730789C5.12948 0.730789 0.353516 5.63417 0.353516 11.6597C0.353516 17.6865 5.12948 22.5899 10.9996 22.5899C13.3811 22.5899 15.5754 21.7724 17.3503 20.4096L22.8294 26.0192L24.4925 24.3069Z"
                fill="#FF5757"
              />
            </svg>

            <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.6673 19.8709C16.4995 16.1776 13.3614 14.0615 9.05431 14.0615H9.02328C4.70471 14.0373 1.55055 16.1684 0.380389 19.8709L0.244751 20.3008L0.628675 20.5353C2.87934 21.9078 5.68636 22.6032 8.96925 22.6032C9.00604 22.6032 9.04282 22.6032 9.07845 22.6032C12.4073 22.6032 15.1362 21.9261 17.419 20.5353L17.803 20.3008L17.6673 19.8709Z"
                fill="#FF5757"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.02388 11.5002C12.1539 11.5002 14.7011 8.95413 14.7011 5.82411C14.7011 2.69295 12.1539 0.146862 9.02388 0.146862C5.89386 0.146862 3.34778 2.69295 3.34778 5.82411C3.34778 8.95413 5.89386 11.5002 9.02388 11.5002Z"
                fill="#FF5757"
              />
            </svg>

            {/* Hamburger Menu Button - Visible only on mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          } mt-4 transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col space-y-4">
            {NavbarItems.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setActive(item);
                  setIsMenuOpen(false);
                }}
                className="text-[#1E1E1E] font-[400] hover:text-red-500 cursor-pointer transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;