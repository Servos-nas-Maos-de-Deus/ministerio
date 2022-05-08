import React from 'react';
import { ApresentationText } from './ApresentationText';
import { Header } from './Header';
import { SocialLine } from './Social';

interface IApresentationSectionProps {}

function ApresentationSection({}: IApresentationSectionProps) {
  return(
    <div className='w-screen h-7.2/8 bg-slate-50 bg-background bg-no-repeat bg-cover relative'>
      <SocialLine/>
      <Header/>
      <ApresentationText/>

      <span className='absolute bottom-5 right-5 w-36 text-center text-white opacity-30'>SERVOS NAS MÃOS DE DEUS</span>
    </div>
  );
}

export {ApresentationSection};