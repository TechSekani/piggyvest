import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const Security = () => {
  return (
    <section className=" flex flex-col md:flex-row items-center gap-6 px-8 md:px-[90px] py-[80px] md:py-[120px]">
      <div className=" bg-white p-10 rounded-3xl">
        <Icon icon="material-symbols:lock" width={35} />
      </div>
      <div className=" md:w-[58%] text-center md:text-start flex items-center md:items-start flex-col gap-4">
        <motion.h4
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className=" font-[Eina01Bold] text-2xl"
        >
          Your Security is our priority
        </motion.h4>
        <p>
          PiggyVest uses the highest level of Internet Security and it is
          secured by 256 bits SSL security encryption to ensure that your
          information is comepletely protected from fraud.
        </p>
        <div className="seclink link w-fit flex gap-1 font-[Eina01Bold]">
          <Icon icon="fluent:arrow-turn-down-right-20-filled" width={23} />
          <span className=" cursor-pointer relative duration-100">
            More on our security measures
          </span>
        </div>
      </div>
    </section>
  );
};

export default Security;
