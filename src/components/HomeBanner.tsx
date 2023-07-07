import React from "react";
import { IoMdSettings } from "react-icons/io";
import Logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <div className="w-full h-[60vh] md:h-[90vh] min-h-full flex items-center justify-center bg-slate-50">
      <div className="relative">
        <div className="leading-3 flex items-center justify-center w-full">
          <div className="absolute -left-12 -right-12 md:-left-24 md:-right-24">
            <Image src={Logo} alt="Logo" />
          </div>
          <IoMdSettings
            className="mx-auto text-[8rem] md:text-[12rem] z-10 text-blue-500 opacity-30"
            style={{
              animation: "spin-slow 5s linear infinite",
            }}
          />
        </div>
        <div className="absolute text-center -rotate-12 -top-14 md:-top-12 -left-12 md:-left-36 transform -translate-x-1/2 -translate-y-1/2 pop_up">
          <Link
            href={"/maverick_growth"}
            className="text-xl md:text-2xl uppercase font-medium tracking-wide px-2 py-1"
          >
            <span className="text-[#00acec]">Maverick </span>
            <span className="text-[#33a457] pl-3 sm:pl-0">Growth</span>
          </Link>
        </div>
        <div className="absolute text-center -rotate-12 -bottom-14 md:-bottom-12 -right-12 md:-right-36 transform translate-x-1/2 translate-y-1/2 pop_up">
          <Link
            href={"/maverick_cars"}
            className="text-xl md:text-2xl uppercase font-medium tracking-wide text-black px-2 py-1"
          >
            <span className="text-[#00acec]">Maverick </span>
            <span className="text-[#33a457] pl-3 sm:pl-0">Cars</span>
          </Link>
        </div>
        <div className="absolute text-center rotate-12 -bottom-14 md:-bottom-12 -left-12 md:-left-36 transform -translate-x-1/2 translate-y-1/2 pop_up">
          <Link
            href={"/maverick_events"}
            className="text-xl md:text-2xl uppercase font-medium tracking-wide text-black px-2 py-1"
          >
            <span className="text-[#00acec]">Maverick </span>
            <span className="text-[#33a457] pl-3 sm:pl-0">Events</span>
          </Link>
        </div>
        <div className="absolute text-center rotate-12 -top-14 md:-top-12 -right-12 md:-right-36 transform translate-x-1/2 -translate-y-1/2 pop_up">
          <Link
            href={"/maverick_travels"}
            className="text-xl md:text-2xl uppercase font-medium tracking-wide text-black px-2 py-1"
          >
            <span className="text-[#00acec]">Maverick </span>
            <span className="text-[#33a457] pl-3 sm:pl-0">Travels</span>
          </Link>
        </div>
      </div>

      <style>
        {`
          @keyframes spin-slow {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default HomeBanner;
