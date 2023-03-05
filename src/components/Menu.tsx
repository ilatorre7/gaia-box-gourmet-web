import React, { useState } from 'react';
import { MenuItem } from './molecules/Menu/types';
import CardMenu from './molecules/Menu/CardMenu';
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function Menu({
  menu,
}: {
  menu: MenuItem[] 
}) {
  const [index, setIndex] = useState<number>(0);
  
  const handlePrev = () => {
    setIndex(index === 0 ? menu.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex(index === menu.length - 1 ? 0 : index + 1);
  };

  return (
    <div id="menu" className='bg-gaiaSecondary py-8 flex justify-center overflow-hidden relative w-full'>
      <div className='w-full'>
        <div className={`flex transition-transform ease-out duration-500`} style={{ transform: `translateX(-${index * 100}vw)`}}>
          {
            menu.map((item,i) => (
              <CardMenu key={`menu-item-${i}`} {...{...item}} />
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
  )
}

export default Menu