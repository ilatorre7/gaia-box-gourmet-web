import React, { useState, useRef } from 'react'
import { useIsomorphicLayoutEffect } from '@/utilities/useIsomorpficEffect';
import Image from 'next/image'
import { onPrev, onNext } from './molecules/Menu/SwitcherEvents'
import gsap from 'gsap'

interface WineType {
  name: string,
  type: string,
  image: string,
  price: string
}

function Wine({
  wines
} : { 
  wines: WineType[]
}) {
  const wineRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const handlePrev = () => onPrev(index, wines, setIndex);
  const handleNext = () => onNext(index, wines, setIndex);

  const {
    name,
    type,
    image,
    price
  } = wines[index];

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.wineName', { opacity: 0, ease: 'power3.in' })
      gsap.from('.image', { opacity: 0, ease: 'power3.in' })
    }, wineRef);
    return () => ctx.revert();
  }, [index]);

  return (
    <div className='bg-wine w-full flex flex-col items-center py-16'>
      <h1 className='text-gray-100 text-2xl font-bold pb-8 text-center md:text-left px-4 md:px-0'>{'Podemos agregar un vino a cualquiera de los boxes!'}</h1>
      <div ref={wineRef} className='flex flex-col md:flex-row items-center md:space-x-8'>
        <Image src={image} height={480} width={320} alt={name} className="image rounded-xl m-2 shadow-lg" />
        <div className='w-full md:w-auto flex justify-between items-center px-4 md:px-0'>
          <button className='py-4 px-6 rounded-full bg-gray-100 text-wine' onClick={handlePrev}>{'<'}</button>
          <div className='wineName flex flex-col items-center md:mx-8 mx-4'>
            <p className='text-gray-100 my-2 text-center font-bold text-3xl'>{name}</p>
            <p className='text-gray-100 mb-4 text-center text-md'>{type}</p>
            <p className='ring-1 ring-gray-100 text-gray-100 font-bold rounded-xl px-4 py-2'>{price}</p>
          </div>
          <button className='py-4 px-6 rounded-full bg-gray-100 text-wine' onClick={handleNext}>{'>'}</button>
        </div>
      </div>
    </div>
  )
}

export default Wine