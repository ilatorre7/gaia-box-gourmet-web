import gsap from 'gsap';
import React, { useState, useRef } from 'react'
import { useIsomorphicLayoutEffect } from '@/utilities/useIsomorpficEffect';

import { onPrev, onNext } from '../SwitcherEvents'

interface OptionPriceSwitchType {
  options?: string[]
  prices: string[]
}

function OptionPriceSwitch({
  options,
  prices,
}: OptionPriceSwitchType) {
  const priceRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState<number>(0);

  const handlePrev = () => onPrev(index, options, setIndex);

  const handleNext = () => onNext(index, options, setIndex);

  const enableButtons = options?.length !== 1 || false;

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.options', {
        opacity: 0,
        duration: 1,
      })
    }, priceRef);
    return () => ctx.revert();
  }, [index]);

  return (
    options ? (
      <div ref={priceRef} className='py-4 w-full flex flex-row justify-center items-center space-x-8'>
        {enableButtons && (<button className='bg-gaia py-4 px-6 text-lg rounded-full text-slate-700' onClick={handlePrev}>{'<'}</button>)}
        <div className='options flex py-4 md:py-0 flex-col md:flex-row space-x-2 items-center space-y-2 md:space-y-0'>
          <p className='text-md md:text-lg text-slate-700'>{!enableButtons  ? options[0] : options[index]}</p>
          <p className='text-lg text-slate-700 hidden md:block'>-</p>
          <p className='text-lg bg-gaiaTertiary text-white font-bold px-4 py-2 rounded-xl'>{!enableButtons ? prices[0] : prices[index]}</p>
        </div>
        {enableButtons && (<button className='bg-gaia py-4 px-6 text-lg rounded-full text-slate-700' onClick={handleNext}>{'>'}</button>)}
      </div>
    ) : (
      <p className='text-lg bg-gaiaTertiary text-white font-bold px-4 py-2 rounded-xl'>{prices[0]}</p>
    )
  )
}

export default OptionPriceSwitch