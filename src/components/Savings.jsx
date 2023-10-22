import React from "react";
import { Icon } from "@iconify/react";
import { motion } from 'framer-motion'
import {
  savings01,
  savings02,
  savings03,
  savings04,
  savings05,
} from "../assets/images";
import "../styles/savings.css";

const DATA = [
  {
    id: 1,
    title: "Automated Savings",
    text: "Build a dedicated savings faster on your terms, automatically or manually.",
    linkText: "Piggybank",
    img: savings01,
  },
  {
    id: 2,
    title: "Fixed Savings",
    text: "Lock money away for a fixed duration without having access to it until maturity. It's like having a custom fixed deposit.",
    linkText: "Safelock",
    img: savings02,
  },
  {
    id: 3,
    title: "Goal-oriented Savings",
    text: "Reach all your savings goals faster. Save towards multiple goals on your own or with a group.",
    linkText: "Target Savings",
    img: savings03,
  },
  {
    id: 4,
    title: "Flex Naira",
    text: "Save, transfer, manage, organise, and withdraw your money at any time.",
    linkText: "Flex Naira",
    img: savings04,
    color: "#E5489B",
  },
  {
    id: 5,
    title: "Flex Dollar",
    text: "Save and grow your money in foreign currencies such as Dollars.",
    linkText: "Flex Dollar",
    img: savings05,
  },
];

const Savings = () => {
  return (
    <section className=" px-3 md:px-[90px] py-5 pb-24 flex flex-wrap justify-between gap-10">
      <article className=" md:w-[40%] md:p-10 text-center flex flex-col items-center justify-center ">
        <h2 className=" font-[Eina01Bold] text-3xl md:text-5xl leading-tight">
          5 ways to build your savings
        </h2>
        <p className=" md:text-2xl leading-normal mt-3 px-5">
          Earn 5%-15% when you save with any of these PiggyVest plans.
        </p>
      </article>
      {DATA.map(({ id, title, text, linkText, img, color }) => {
        return (
          <motion.article
          initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 100 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            key={id}
            className="savingsCard text-center md:text-start overflow-hidden relative md:w-[48.2%] h-[45vh] md:h-[60vh] px-5 md:px-10 pt-10 pb-7 bg-white rounded-3xl flex flex-col justify-between"
          >
            <div className="">
              <h3 className={`title text-3xl md:text-4xl font-[Eina01Bold]`}>
                {title}
              </h3>
              <p className=" md:text-xl md:w-[65%] mt-4">{text}</p>
            </div>

            <div className="link w-fit flex gap-1 font-[Eina01Semibold]">
              <Icon icon="fluent:arrow-turn-down-right-20-filled" width={23} />
              <span className=" cursor-pointer relative duration-100 ">
                {linkText}
              </span>
            </div>
            <img
              src={img}
              alt={linkText}
              className=" w-[45%] md:w-[40%] absolute right-6 bottom-0"
            />
          </motion.article>
        );
      })}
    </section>
  );
};

export default Savings;
