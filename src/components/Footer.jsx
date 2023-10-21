import React from "react";
import { compliance, logo } from "../assets/images";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className=" bg-white py-[70px] px-[90px]">
      <div className=" flex gap-14 text-[14px] border-b pb-14">
        <div className=" flex flex-col gap-6 items-center">
          <img src={logo} alt="piggyvest" className=" w-[60%]" />
          <img src={compliance} alt="" className=" w-[40%]" />
        </div>
        <div className=" flex flex-col gap-2">
          <h3 className=" font-[Eina01Bold]">Products</h3>
          <h3>Piggybank</h3>
          <h3>Invest</h3>
          <h3>Safelock</h3>
          <h3>Target Savings</h3>
          <h3>Flex Naira</h3>
          <h3>Flex Dollar</h3>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className=" font-[Eina01Bold]">Company</h3>
          <h3>About</h3>
          <h3>FAQs</h3>
          <h3>Blog</h3>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className=" font-[Eina01Bold]">Legal</h3>
          <h3>Terms</h3>
          <h3>Privacy</h3>
          <h3>Security</h3>
        </div>
        <div className=" flex flex-col gap-4 text-right ml-auto">
          <div className=" flex gap-3 w-fit ml-auto mb-3">
            <Icon icon="typcn:social-facebook" width={22} />
            <Icon icon="simple-line-icons:social-instagram" width={22} />
            <Icon icon="mingcute:social-x-line" width={22} />
            <Icon icon="ic:outline-tiktok" width={22} />
            <Icon icon="typcn:social-youtube" width={22} />
          </div>
          <p>
            Tesmot house, Abdulrahman Okene close,
            <br /> Victoria Island, Lagos, Nigeria.
          </p>
          <p>contact@piggyvest.com</p>
          <p>+234 700 933 933 933</p>
        </div>
      </div>
      <div className=" pt-8 text-sm text-[#6d6d6d]">
        <small>
          Piggyvest (formerly piggybank.ng) is the leading online savings &
          investing platform in Nigeria. For over 7 years, our customers have
          <br /> saved and invested billions of Naira that they would normally
          be tempted to spend.
        </small>
        <br />
        <br />
        <br />
        <small>
          PV Capital Limited is a fund manager duly licensed by the Securities
          and Exchange<br/> Commission (SEC) of Nigeria.
        </small>
        <br/>
        <br/>
        <small>2016 - 2023 PiggyTech Global Limited - RC 1405222</small>
      </div>
    </footer>
  );
};

export default Footer;
