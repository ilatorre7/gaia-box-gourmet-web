import React, { useState, useRef } from 'react';
import { MenuItem } from './molecules/Menu/types';
import CardMenu from './molecules/Menu/CardMenu';

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useIsomorphicLayoutEffect } from '@/utilities/useIsomorpficEffect';
import { prefix } from '@/utilities/prefix';

function Menu({
  menu,
}: {
  menu: MenuItem[] 
}) {
  gsap.registerPlugin(ScrollTrigger);
  const menuRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState<number>(0);
  
  const handlePrev = () => {
    setIndex(index === 0 ? menu.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex(index === menu.length - 1 ? 0 : index + 1);
  };

  useIsomorphicLayoutEffect(() => {
    let ctxMenu = gsap.context(() => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: '#menu' }});
      tl.from('.titleMenu', { y: 100, opacity: 0, duration: 1 })
      .from('.contentMenu', { y: 100, opacity: 0, duration: 1 })
    }, menuRef)

    return () => ctxMenu.revert();
  }, []);

  return (
    <div ref={menuRef}>
      <div id='menu' className='bg-gaiaSecondary'>
        <div className='titleMenu bg-gaiaSecondary flex justify-center items-center pt-8 pb-4'>
          <h1 className='text-slate-700 text-2xl font-bold text-center md:text-left px-4 md:px-0'>{'Estos son nuestros productos'}</h1>
        </div>
        <div className='contentMenu bg-gaiaSecondary pb-8 flex justify-center overflow-hidden relative w-full'>
          <div className='w-full'>
            <div className={`flex transition-transform ease-out duration-500`} style={{ transform: `translateX(-${index * 100}vw)`}}>
              {
                menu.map((item,i) => (
                  <CardMenu 
                      key={`menu-item-${i}`} 
                      {...{
                        ...item,
                        image: `https://ilatorre7.github.io/gaia-box-gourmet-web${item.image}`
                      }} 
                      />
                ))
              }
            </div>
          </div>
          <button onClick={handlePrev} className='absolute flex justify-center items-center inset-y-1/2 left-4 py-4 px-2 rounded-full bg-gray-100'>
            <IoChevronBack />
          </button>
          <button onClick={handleNext} className='absolute flex justify-center items-center inset-y-1/2 right-4 py-4 px-2 rounded-full bg-gray-100'>
            <IoChevronForward />
          </button>
          <div className='absolute bottom-4 right-0 left-0'>
            <div className='flex items-center justify-center gap-2'>
              {
                menu.map((_,i) => (
                  <div
                    key={`nav-item-${i}`} 
                    className={`transition-all w-3 h-3 bg-gaiaTertiary rounded-full ${index === i ? 'p-2' : 'bg-opacity-50'}`}
                  >
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu