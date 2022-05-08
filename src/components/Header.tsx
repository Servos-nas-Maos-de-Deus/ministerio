import React from 'react';
import { SponsorButton } from './SponsorButton';

interface IHeaderProps {}

function Header({}: IHeaderProps) {
  return(
    <div className='w-screen h-20 p-5 py-2 flex items-center'>
      <SponsorButton/>
    </div>
  );
}

export {Header};