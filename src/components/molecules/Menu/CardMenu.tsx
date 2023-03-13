import React from 'react';
import { MenuItem } from './types';
import { VegetarianLogo } from './molecules';
import OptionPriceSwitch from './molecules/OptionPriceSwitch';
import Image from 'next/image';

function CardMenu({
  name,
  image,
  ingredients,
  vegetarian,
  options,
  prices,
} : MenuItem) {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center shrink-0 grow-0 basis-full'>
      <div className='p-4 image w-full lg:w-half flex justify-center items-center'>
        <div className='hidden md:flex w-full justify-center'>
          <Image src={image} alt={name} width={600} height={600} className='rounded-2xl shadow-xl' />
        </div>
        <div className='relative md:hidden w-4/5 h-80 lg:w-full'>
          <Image src={image} alt={name} fill className='object-cover rounded-2xl shadow-xl' />
        </div>
      </div>
      <div className='w-full lg:w-half p-4 flex flex-col justify-center items-center'>
        <h2 className='text-4xl py-4 font-bold text-slate-700 text-center'>{name}</h2>
        <p className='text-lg w-4/5 md:text-xl text-slate-700 text-center'>{ingredients}</p>
        <VegetarianLogo isVegetarian={vegetarian} />
        <OptionPriceSwitch
          {...{
            options,
            prices,
          }}
        />
      </div>
    </div>
  )
}

export default CardMenu