import Image from 'next/image'
import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from "gsap";

function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.image', { scale: 0.2, duration: 2 })
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className='w-full h-screen overflow-hidden relative bg-black'>
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