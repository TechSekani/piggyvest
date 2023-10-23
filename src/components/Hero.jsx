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
import 'animate.css';

const Hero = () => {
  return (

    <section className=" mt-[130px] md:mt-[90px] px-6 md:px-[90px] md:flex justify-between items-center md:h-[80vh]">

      <article className="md:w-[35%] flex flex-col gap-4 md:gap-7 text-center md:text-start">
        <h2 className=" font-[Eina01Bold] text-4xl md:text-5xl leading-[1.2] animate__animated animate__slideInUp">
          The Better Way to Save & Invest
        </h2>
        <p className=" md:text-xl opacity-90 leading-6 md:leading-8 animate__animated animate__slideInUp animate__delay-1s ">
          Piggyvest helps over 4 million customers achieve their financial goals
          by helping them save and invest with ease.
        </p>
        <div className=" mt-3 md:mt-0 flex justify-center md:justify-normal gap-3 md:gap-4">
          <Button text={"Get on iPhone"} style={"bg-[#0C1825] text-white text-sm"} />
          <Button text={"Get on Android"} style={"bg-[#0C1825] text-white text-sm"} />
        </div>
      </article>
      <div className="imgs relative mt-10 md:mt-0 md:w-2/4 flex items-center justify-end animate__animated animate__shakeY animate__slower animate__infinite">
        <img src={heroimg} alt="hero image" className=" md:w-[88%] animate__animated animate__fadeIn animate__faster" />
        <img src={safelock} alt="safelock" className=" absolute w-[40%] top-[25%] -left-5 md:-left-10 animate__animated animate__fadeInUp animate__delay-1s" />
        <img src={flexnaira} alt='flex naira' className=" absolute w-[40%] bottom-[18%] -left-5 md:-left-10 animate__animated animate__fadeInUp animate__delay-3s" />
        <img src={piggybank} alt='piggybank' className=" absolute w-[40%] -bottom-5 md:-bottom-10 left-[28%] md:left-[36%] animate__animated animate__fadeInUp animate__delay-5s" />
        <img src={investify} alt='investify' className=" absolute w-[40%] bottom-[20%] -right-3 md:-right-10 animate__animated animate__fadeInUp animate__delay-3s" />
        <img src={targetsavings} alt="target savings" className=" absolute w-[40%] top-[25%] -right-3 md:-right-10 animate__animated animate__fadeInUp animate__delay-1s" />
      </div>
    </section>
  );
};

export default Hero;
