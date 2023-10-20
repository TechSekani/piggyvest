import React from "react";
import {
  heroimg,
  safelock,
  flexnaira,
  piggybank,
  investify,
  targetsavings,
} from "../assets/images";
import Button from "./Button";

const Hero = () => {
  return (
    <section className=" mt-[90px] px-[90px] flex justify-between items-center h-[80vh]">
      <article className="w-[35%] flex flex-col gap-7">
        <h2 className=" font-[Eina01Bold] text-5xl leading-[1.2]">
          The Better Way to Save & Invest
        </h2>
        <p className=" text-xl opacity-90 leading-8 ">
          Piggyvest helps over 4 million customers achieve their financial goals
          by helping them save and invest with ease.
        </p>
        <div className=" flex gap-4">
          <Button text={"Get on iPhone"} style={"bg-[#0C1825] text-white"} />
          <Button text={"Get on Android"} style={"bg-[#0C1825] text-white"} />
        </div>
      </article>
      <div className=" relative w-2/4 flex items-center justify-end">
        <img src={heroimg} alt="hero image" className=" w-[88%]" />
        <img src={safelock} alt="safelock" className=" absolute w-[40%] top-[25%] -left-10" />
        <img src={flexnaira} alt='flex naira' className=" absolute w-[40%] bottom-[18%] -left-10" />
        <img src={piggybank} alt='piggybank' className=" absolute w-[40%] -bottom-10 left-[36%]" />
        <img src={investify} alt='investify' className=" absolute w-[40%] bottom-[20%] -right-10" />
        <img src={targetsavings} alt="target savings" className=" absolute w-[40%] top-[25%] -right-10" />
      </div>
    </section>
  );
};

export default Hero;
