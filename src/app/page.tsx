"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import HomeBanner from "@/components/HomeBanner";
import Consulting from "../../public/consulting.jpg";

export const metadata = {
  title: "Mavplanz - Home",
  description: "Mavplanz home page",
};

const Home = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const imageElement = document.getElementById("zoomImage");
      if (imageElement) {
        imageElement.classList.remove("scale-125");
        imageElement.classList.add("scale-100");
      }
    }, 100); // Starts after 100ms

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="relative w-[100%] h-screen overflow-hidden cursor-pointer">
        {/* Image */}
        <Image
          src={Consulting}
          id="zoomImage"
          alt="Sample Image"
          className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out scale-125"
        />

        {/* Text on the image */}
        <div className="absolute top-1/2 left-1/2 md:left-10 text-white text-2xl bg-gray-200 bg-opacity-50">Your Text Here Your Text Here<br/>Your Text Here</div>
      </div>

      <HomeBanner />
      <div className="flex bg-gray-100 px-5 md:px-14 pt-16 pb-6">
        <div className="space-y-6">
          <ul className="space-y-4 text-xl">
            <li className="flex">
              <div className="text-blue-500 font-bold text-4xl ">•</div>
              <div className="pl-3 mt-2">
                Planning To Go Into Business Or Grow It?
              </div>
            </li>
            <li className="flex md:ml-8">
              <div className="text-blue-500 font-bold text-4xl ">•</div>
              <div className="pl-3 mt-2">
                Need Help With Your Existing Processes?
              </div>
            </li>
            <li className="flex md:ml-16">
              <div className="text-blue-500 font-bold text-4xl ">•</div>
              <div className="pl-3 mt-2">
                Want Better Placement Than The Competition?
              </div>
            </li>
          </ul>
          <div className="p-4 rounded-lg ">
            <p className="text-2xl leading-10">
              <span className="bg-blue-500 text-white py-2 px-4 rounded-lg font-bold">
                MavPlanz
              </span>
              <span className="pl-2">
                Is Here To Help You Achieve Brilliance In Any & All Of The Above
                Scenarios.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 text-center p-6 mx-auto w-full md:px-28 pb-32">
        <div className="bg-gray-50 py-10 rounded-2xl shadow-2xl mx-2 md:mx-0">
          <h2 className="text-4xl mb-10 font-semibold text-green-600 px-4">
            MavPlanz Provides You With
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mx-auto w-full px-10">
            <div className="py-3">
              <Image
                src={"/idea.png"}
                width={70}
                height={70}
                alt="Logo"
                className="mx-auto mb-5"
              />
              <div className="my_btn1">
                <h3 className="text-2xl font-bold text-blue-500">
                  Apt Strategies
                </h3>
              </div>
            </div>
            <div className="py-3">
              <Image
                src={"/planning.png"}
                width={70}
                height={70}
                alt="Logo"
                className="mx-auto mb-5"
              />
              <div className="my_btn1">
                <h3 className="text-2xl font-bold text-blue-500">
                  Savvy Techniques
                </h3>
              </div>
            </div>
            <div className="py-3">
              <Image
                src={"/bar-chart.png"}
                width={70}
                height={70}
                alt="Logo"
                className="mx-auto mb-5"
              />
              <div className="my_btn1">
                <h3 className="text-2xl font-bold text-blue-500">
                  Modern Tools
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
