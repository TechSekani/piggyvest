import React from "react";
import '../styles/mobileMenuBar.css'

const MobileMenuBar = ({onClick}) => {
  return (
    <label className="burger md:hidden block z-50" htmlFor="burger" >
      <input type="checkbox" id="burger" onClick={onClick} />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};

export default MobileMenuBar;
