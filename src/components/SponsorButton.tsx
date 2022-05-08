import React from 'react';
import { FiHeart } from 'react-icons/fi';

interface ISponsorButtonProps {}

function SponsorButton({}: ISponsorButtonProps) {
  return(
    <button className='p-5 py-2 flex items-center border text-white hover:opacity-60 transition-all duration-300'>
      <FiHeart/>
      <h1 className='ml-2'>AJUDAR</h1>
    </button>
  );
}

export {SponsorButton};