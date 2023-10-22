import React, { useState } from "react";
import { logo } from "../assets/images";
import Button from "./Button";
import MobileMenuBar from "./MobileMenuBar";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  //   console.log(menuActive)

  return (
    <nav
      className={` overflow-x-hidden z-30 font-[Eina01Semibold] fixed top-0 w-full px-8 md:px-[90px] py-5 flex items-center justify-between md:justify-normal duration-700 ${
        colorChange ? " shadow bg-white" : "bg-[#F2F7F8]"
      }`}
    >
      <img
        src={logo}
        alt="PiggyVest"
        className=" z-50 w-[180px] md:h-[35px] mr-[50px]"
      />
      <div
        className={`${
          !menuActive && "hidden "
        } fixed md:static md:flex flex-col md:flex-row left-0 top-0 px-8 md:px-0 pt-36 md:pt-0 bg-inherit w-full h-[100vh] md:h-fit`}
      >
        <div className=" flex flex-col md:flex-row items-center gap-10 md:gap-5 text-opacity-0 ">
          <h5 className=" text-[#0C1825] text-opacity-70 cursor-pointer">
            Save
          </h5>
          <h5 className=" text-[#0C1825] text-opacity-70 cursor-pointer">
            Invest
          </h5>
          <h5 className=" text-[#0C1825] text-opacity-70 cursor-pointer">
            Stories
          </h5>
          <h5 className=" text-[#0C1825] text-opacity-70 cursor-pointer">
            FAQs
          </h5>
          <h5 className=" text-[#0C1825] text-opacity-70 cursor-pointer">
            Resources
          </h5>
        </div>
        <div className=" mt-10 md:mt-0 md:ml-auto flex flex-col md:flex-row gap-7 md:gap-2">
          <Button text={"Sign in"} />
          <Button
            text={"Create free account"}
            style={" bg-[#0C1825] text-white"}
          />
        </div>
      </div>
      <MobileMenuBar onClick={() => setMenuActive(!menuActive)} />
    </nav>
  );
};

export default Navbar;
