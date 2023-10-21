import React from "react";
import { investment1 } from "../assets/images";
import { Icon } from "@iconify/react";

const Investment = () => {
  return (
    <section className=" px-[90px] py-20">
      <h2>Diverse ways to Invest</h2>
      <p>Grow your money and invest for your future confidently.</p>
      <div className=" flex bg-[purple] px-12 pt-12 rounded-3xl">
        <div className="">
          <h3>Earn Up to 25% returns</h3>
          <p>
            Invest securely and confidently on the go. Grow your money
            confidently by investing in pre-vetted investment opportunities.zz
          </p>

          <div className=" text-[color] flex gap-1 font-[Eina01Semibold]">
            <Icon icon="fluent:arrow-turn-down-right-20-filled" width={23} />
            <span className=" cursor-pointer duration-100 hover:border-b-2 border-gray-400">
              Learn about investments
            </span>
          </div>
        </div>
        <img src={investment1} className='w-[35%]' alt="" />
      </div>
    </section>
  );
};

export default Investment;
