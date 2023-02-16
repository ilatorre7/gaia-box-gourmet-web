import React from 'react'
import OptionPriceSwitch from './molecules/OptionPriceSwitch'
import VegetarianLogo from './molecules/VegetarianLogo'
import { MenuItem } from './types'


function DescriptionMenu({
  name,
  ingredients,
  vegetarian,
  options,
  prices,
} : MenuItem) {
  return (
    <div className='menu w-full lg:w-1/2 p-4 flex flex-col justify-center items-center'>
        <h2 className='text-4xl py-4 font-bold text-slate-700 text-center'>{name}</h2>
        <p className='text-lg md:text-xl text-slate-700 text-center'>{ingredients}</p>
        <VegetarianLogo isVegetarian={vegetarian} />
        <OptionPriceSwitch
          {...{
            options,
            prices,
          }}
        />
      </div>
  )
}

export default DescriptionMenu