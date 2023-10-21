import React from "react";
import { stories } from "../assets/images";
import Button from "./Button";

const Stories = () => {
  return (
    <section className=" px-[90px] py-14 flex items-center gap-12">
      <img src={stories} alt="" className=" w-[40%]" />
      <div className="">
        <h3 className=" text-[33px] font-[Eina01Bold] w-[90%]">Join 4+ million people who save and invest with us</h3>
        <div className=" flex gap-5 mt-6">
            <Button text={'Get on iPhone'} style=' text-sm hover:-translate-y-2 duration-1000'/>
            <Button text={'Get on Android'} style=' text-sm hover:-translate-y-2 duration-1000'/>
        </div>
      </div>
    </section>
  );
};

export default Stories;
