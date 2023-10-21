import React from "react";
import {
  cio,
  fastcomp,
  guardian,
  pymts,
  techcrunch,
  techpoint,
} from "../assets/images";

const Featured = () => {
  return (
    <section className="featured px-[90px] py-[70px]">
      <h3 className=" text-4xl font-[Eina01Bold] text-center">
        As featured in
      </h3>
      <div className=" flex gap-16 items-center mt-10">
        <img src={techpoint} alt="techpoint" className=" h-10" />
        <img src={guardian} alt="theguardian" className=" h-6" />
        <img src={techcrunch} alt="techcrunch" className=" h-8" />
        <img src={pymts} alt="pymnts" className=" h-10" />
        <img src={fastcomp} alt="fast company" className=" h-16" />
        <img src={cio} alt="cio" className="" />
      </div>
    </section>
  );
};

export default Featured;
