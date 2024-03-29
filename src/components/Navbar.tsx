"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../public/logo.png";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="relative">
      <nav
        className="translate-y-0 
        fixed left-0 top-0 z-50 h-24 w-full bg-white bg-opacity-50 backdrop-blur-md md:h-[8.5rem] lg:h-24 pb-8"
        style={{ transition: `transform 500ms ease-in-out` }}
      >
        <div className="justify-between px-6 md:items-center md:flex">
          <div className="flex items-center justify-between py-3">
            <Link href="/" className="flex items-center">
              <Image src={Logo} alt="Logo" className="mr-3" height={70} />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div>
            <div
              className={`flex-1 justify-self-center pb-4 mt-4 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-6 md:flex md:space-x-10 md:space-y-0">
                <li className="text-sky-900 text-lg">
                  <Link href={"/"}>Home</Link>
                </li>
                <li className="text-sky-900 text-lg">
                  <Link href={"/services"}>Services</Link>
                </li>
                <li className="text-sky-900 text-lg">
                  <Link href={"/about_us"}>About Us</Link>
                </li>
                <li className="text-sky-900 text-lg">
                  <Link href={"/contact_us"}>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
