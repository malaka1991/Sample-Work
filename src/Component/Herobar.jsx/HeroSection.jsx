import React from "react";
import "./HeroSection.css";
import Icons from "../images/Vector.png";
import Person from "../images/1606100995360 1.png";

export default function HeroSection() {
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-slate-100">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 ">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <img className="mb-5" src={Icons} alt="" />
            <p className="text-xl text-gray-500">Life & Wellness Coach</p>
            <h1 className="text-4xl py-2 font-bold tracking-tight text-gray-900 sm:text-6xl">
              Elevate Your Life with Expert Life Coaching!
            </h1>
            <p className="mt-9 text-lg leading-8 text-gray-600">
              In a society that rewards fitting in, standing out is a risk. But
              it&apos;s a risk worth taking to feel the thrill of living a life
              on your terms. I am here to inspire you, empower you, and guide
              you.  Let&apos;s make magic.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <button class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-full btn">
                Get Started
              </button>
            </div>
          </div>
          <div className="mx-auto mt-16 flex items-end max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-56">
            <figure class="max-w-lg">
              <img
                class="h-auto max-w-full rounded-lg img-size"
                src={Person}
                alt="image description"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
