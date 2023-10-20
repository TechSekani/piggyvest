import React from "react";
import { Icon } from '@iconify/react';

const Security = () => {
  return (
    <section className=" flex items-center gap-6 px-[90px] py-[120px]">
      <div className=" bg-white p-8 rounded-3xl">
      <Icon icon="material-symbols:lock" width={35}/>
      </div>
      <div className=" w-[58%] flex flex-col gap-4">
        <h4 className=" font-[Eina01Bold] text-2xl">Your Security is our priority</h4>
        <p>
          PiggyVest uses the highest level of Internet Security and it is
          secured by 256 bits SSL security encryption to ensure that your
          information is comepletely protected from fraud.
        </p>
        <div className=" flex gap-1 font-[Eina01Bold]">
        <Icon icon="fluent:arrow-turn-down-right-20-filled" width={23}/>
        <span className=" cursor-pointer duration-100 hover:border-b-2 border-gray-400">More on our security measures</span>
        </div>
      </div>
    </section>
  );
};

export default Security;
