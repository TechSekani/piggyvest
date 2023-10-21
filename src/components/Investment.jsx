import React from "react";
import { investment1 } from "../assets/images";
import { Icon } from "@iconify/react";

const Investment = () => {
  return (
    <section className=" px-[90px] bg-white py-[160px]">
      <h2 className=" text-5xl text-center font-[Eina01Bold]">
        Diverse ways to Invest
      </h2>
      <p className=" text-2xl text-center mt-4 mb-16">
        Grow your money and invest for your future confidently.
      </p>
      <div className=" flex bg-[#7913E5] px-16 pt-16 rounded-3xl">
        <div className=" flex flex-col justify-between pb-10">
          <div className="">
            <h3 className=" text-4xl font-[Eina01Bold] text-white">
              Earn Up to 25% returns
            </h3>
            <p className=" text-[#fed6f1] text-xl w-2/4 mt-8">
              Invest securely and confidently on the go. Grow your money
              confidently by investing in pre-vetted investment opportunities.zz
            </p>
          </div>

          <div className="link w-fit text-[white] flex gap-1 font-[Eina01Semibold]">
            <Icon icon="fluent:arrow-turn-down-right-20-filled" width={23} height={25} />
            <span className=" w-fit relative cursor-pointer duration-100 ">
              Learn about investments
            </span>
          </div>
        </div>
        <img src={investment1} className="w-[40%]" alt="" />
      </div>
    </section>
  );
};

export default Investment;
