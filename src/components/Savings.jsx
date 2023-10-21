import React from "react";
import { Icon } from "@iconify/react";
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
    <section className=" px-[90px] py-5 flex flex-wrap justify-between gap-10">
      <article className=" w-[40%] p-10 text-center flex flex-col items-center justify-center ">
        <h2 className=" font-[Eina01Bold] text-5xl leading-tight">
          5 ways to build your savings
        </h2>
        <p className=" text-2xl leading-normal mt-3 px-5">
          Earn 5%-15% when you save with any of these PiggyVest plans.
        </p>
      </article>
      {DATA.map(({ id, title, text, linkText, img, color }) => {
        return (
          <article
            key={id}
            className="savingsCard overflow-hidden relative w-[48.2%] h-[60vh] px-10 pt-10 pb-7 bg-white rounded-3xl flex flex-col justify-between"
          >
            <div className="">
              <h3 className={`title text-4xl font-[Eina01Bold]`}>
                {title}
              </h3>
              <p className=" text-xl w-[65%] mt-4">{text}</p>
            </div>

            <div className="link relative w-fit flex gap-1 font-[Eina01Semibold]">
              <Icon icon="fluent:arrow-turn-down-right-20-filled" width={23} />
              <span className=" cursor-pointer duration-100 ">
                {linkText}
              </span>
            </div>
            <img
              src={img}
              alt={linkText}
              className="w-[40%] absolute right-6 bottom-0"
            />
          </article>
        );
      })}
    </section>
  );
};

export default Savings;
