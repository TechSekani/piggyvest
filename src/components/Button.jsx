import React from 'react'
import { Icon } from '@iconify/react';

const Button = ({text, style, }) => {
  return (
    <button className={` flex items-center justify-center gap-1 font-[Eina01Bold] border border-[#0C1825] text-[#0C1825] rounded-lg py-3 md:py-3 px-3 md:px-5 ${style}`}>
        {text == 'Get on iPhone' && <Icon icon="mdi:apple" width={20} />}
        {text == 'Get on Android' && <Icon icon="ion:logo-google-playstore" width={20} />}
        {text}
    </button>
  )
}

export default Button
