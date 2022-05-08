import React, { ButtonHTMLAttributes } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mt?: string;
  mb?: string;
  children?: string;
}

function Button({ mt, mb, children, ...rest }: IButtonProps) {
  return(
    <button className={`
      px-10 
      py-3 
      bg-white 
      text-black 
      font-istok
      font-bold
      text-sm sm:text-md md:text-lg lg:text-lg
      hover:opacity-75
      transition-all
      duration-300
      ${mt}
      ${mb}
    `} {...rest}>
      {children}
    </button>
  );
}

export {Button};