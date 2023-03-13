import Image from 'next/image'
import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useIsomorphicLayoutEffect } from '@/utilities/useIsomorpficEffect';

function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.image', { opacity: 0, y: '-100%' , rotate: 180, duration: 2 })
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} id='hero' className='w-full h-screen overflow-hidden relative bg-black'>
      <Image 
        src='/hero-image.png' 
        alt='Box Gaia con un rio de fondo' 
        fill
        className='object-cover bg-black opacity-60'
      />
      <div className='relative flex flex-col justify-center items-center h-full p-4'>
        <Image src="/logo-hero.png" alt="Gaia Logo" width={442.5} height={442.5} className='image' />
        {/* <h1 className='px-4 lg:px-0 text-6xl text-center font-bold text-gray-100'>Gaia Box Gourmet</h1> */}
      </div>
    </div>
  )
}

export default Hero