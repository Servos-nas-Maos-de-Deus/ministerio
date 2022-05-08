import React from 'react';
import { FiFacebook } from 'react-icons/fi'

interface ISocialLineProps {}

function SocialLine({}: ISocialLineProps) {
  return(
    <div className='w-screen flex h-10 border-b border-gray.2 px-5 items-center'>
      <span className='text-white'>Nos siga</span>
      <button className='ml-2 text-white hover:opacity-75 transition-all duration-300'>
        <FiFacebook/>
      </button>
    </div>
  );
}

export {SocialLine};