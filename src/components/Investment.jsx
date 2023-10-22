import React from "react";
import { investment1 } from "../assets/images";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const Investment = () => {
  return (
    <section className=" px-4 md:px-[90px] bg-white py-[90px] md:py-[160px]">
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className=" text-3xl md:text-5xl text-center font-[Eina01Bold]"
      >
        Diverse ways to Invest
      </motion.h2>
      <p className=" md:text-2xl text-center mt-4 mb-16">
        Grow your money and invest for your future confidently.
      </p>
      <div className=" md:flex bg-[#7913E5] px-6 md:px-16 pt-16 rounded-3xl">
        <div className=" flex flex-col text-center md:text-start items-center md:items-start justify-between pb-10">
          <div className="">
            <motion.h3
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className=" text-2xl md:text-4xl font-[Eina01Bold] text-white"
            >
              Earn Up to 25% returns
            </motion.h3>
            <p className=" text-[#fed6f1] md:text-xl md:w-2/4 mt-8">
              Invest securely and confidently on the go. Grow your money
              confidently by investing in pre-vetted investment opportunities.zz
            </p>
          </div>

          <div className="link mt-6 md:mt-0 w-fit text-[white] flex gap-1 font-[Eina01Semibold]">
            <Icon
              icon="fluent:arrow-turn-down-right-20-filled"
              width={23}
              height={25}
            />
            <span className=" w-fit relative cursor-pointer duration-100 ">
              Learn about investments
            </span>
          </div>
        </div>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          src={investment1}
          className="md:w-[40%]"
          alt=""
        />
      </div>
    </section>
  );
};

export default Investment;
