import React from 'react'
import { Icon } from '@iconify/react';

const Button = ({text, style, }) => {
  return (
    <button className={` flex items-center gap-1 font-[Eina01Semibold] border border-[#0C1825] text-[#0C1825] rounded-lg py-3 px-5 ${style}`}>
        {text == 'Get on iPhone' && <Icon icon="mdi:apple" color="white" width={25} />}
        {text == 'Get on Android' && <Icon icon="ion:logo-google-playstore" color="white" width={25} />}
        {text}
    </button>
  )
}

export default Button