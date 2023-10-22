import React from "react";
import { motion } from "framer-motion";
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
    <section className="featured px-6 md:px-[90px] py-[70px]">
      <h3 className=" text-3xl md:text-4xl font-[Eina01Bold] text-center">
        As featured in
      </h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 100 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex flex-wrap gap-6 md:gap-16 justify-around md:justify-start items-center mt-10"
      >
        <img src={techpoint} alt="techpoint" className="h-10" />
        <img src={guardian} alt="theguardian" className=" h-6" />
        <img src={techcrunch} alt="techcrunch" className=" h-8" />
        <img src={pymts} alt="pymnts" className=" h-10" />
        <img src={fastcomp} alt="fast company" className=" h-16" />
        <img src={cio} alt="cio" className="" />
      </motion.div>
    </section>
  );
};

export default Featured;
