import React from 'react';
import { Button } from './Button';

interface IApresentationTextProps {}

function ApresentationText({}: IApresentationTextProps) {
  return(
    <div className='w-screen flex-1 flex justify-center items-center flex-col p-12 pt-36'>
      <h3 className='mb-5 font-cookie text-[1.5rem] sm:text-[1.7rem] md:text-[1.8rem] lg:text-[2rem] text-dourado tracking-widest text-center'>Ministério</h3>
      <h1 className='mb-5 font-istok text-3xl sm:text-5xl md:text-6xl lg:text-8xl text-white antialiased font-light text-center'>O LEGADO DE DEUS</h1>
      <span className='md:w-[50%] text-center font-istok text-md sm:text-md md:text-lg lg:text-lg text-white antialiased italic'>Vocês, porém, são geração eleita, sacerdócio real, nação santa, povo exclusivo de Deus, para anunciar as grandezas daquele que os chamou das trevas para a sua maravilhosa luz. </span>
      <Button mt='mt-5'>QUERO CONHECER MAIS DE DEUS</Button>
    </div>
  );
}

export {ApresentationText};