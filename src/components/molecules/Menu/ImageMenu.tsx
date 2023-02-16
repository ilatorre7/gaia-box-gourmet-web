import Image from 'next/image'
import React from 'react'
import ButtonSwitch from './molecules/ButtonSwitch'

function ImageMenu({
  name,
  image,
  onPrev,
  onNext,
} : {
  name: string,
  image: string,
  onPrev: () => void
  onNext: () => void
}) {
  return (
    <div className='image w-full lg:w-1/2 flex justify-between items-stretch'>
      <ButtonSwitch breakpoint='sm' onClick={onPrev} label="<" />
      {/* <button className='block md:hidden px-4 text-slate-700 text-lg hover:bg-gray-300 duration-150' onClick={onPrev}>{'<'}</button> */}
      <div className='hidden md:flex w-full justify-center'>
        <Image src={image} alt={name} width={600} height={600} className='rounded-2xl shadow-xl' />
      </div>
      <div className='relative md:hidden w-4/5 h-80 lg:w-full'>
        <Image src={image} alt={name} fill className='object-cover rounded-2xl shadow-xl' />
      </div>
      <ButtonSwitch breakpoint='sm' onClick={onNext} label=">" />
      {/* <button className='block md:hidden justify-end px-4 text-slate-700 text-lg hover:bg-gray-300 duration-150' onClick={onNext}>{'>'}</button> */}
    </div>
  )
}

export default ImageMenu