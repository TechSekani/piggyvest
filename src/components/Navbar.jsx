import React, { useState } from 'react'
import { logo } from '../assets/images'
import Button from './Button'

const Navbar = () => {

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

  return (
    <nav className={` z-30 font-[Eina01Semibold] fixed  top-0 w-full px-[90px] py-5 flex items-center duration-700 ${colorChange ? ' shadow bg-white' : 'bg-[#F2F7F8]'}`}>
        <img src={logo} alt="PiggyVest" className=' w-[180px] h-[35px] mr-[50px]' />
        <div className=" flex gap-5 text-opacity-0 ">
            <h5 className=' text-[#0C1825] text-opacity-70 cursor-pointer'>Save</h5>
            <h5 className=' text-[#0C1825] text-opacity-70 cursor-pointer'>Invest</h5>
            <h5 className=' text-[#0C1825] text-opacity-70 cursor-pointer'>Stories</h5>
            <h5 className=' text-[#0C1825] text-opacity-70 cursor-pointer'>FAQs</h5>
            <h5 className=' text-[#0C1825] text-opacity-70 cursor-pointer'>Resources</h5>
        </div>
        <div className=" ml-auto flex gap-2">
            <Button text={'Sign in'} />
            <Button text={'Create free account'} style={' bg-[#0C1825] text-white'} />
        </div>
    </nav>
  )
}

export default Navbar