import React from "react";
import { motion } from "framer-motion";

const Spotlight = () => {
  return (
    <section className=" px-4 md:px-[90px] py-[80px] md:py-[150px] text-center">
      <motion.h3
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className=" text-3xl md:text-5xl font-[Eina01Bold]"
      >
        Meet Our Saver Of The Month
      </motion.h3>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className=" md:text-2xl mt-6 md:w-[70%] leading-relaxed md:mx-auto"
      >
        Every month, we shine a spotlight on one saver, asking them about their
        savings culture and how piggyvest has helped them.
      </motion.p>
      <iframe
        className=" mt-14 md:mt-20 mx-auto h-[350px] md:h-[465px] w-full md:w-[60%] border-8 border-white rounded-3xl"
        src="https://www.youtube.com/embed/8XzCzC9pFGM?si=6V7PLhAQyZQ3ZTJQ?autoplay=1"
      ></iframe>
    </section>
  );
};

export default Spotlight;
