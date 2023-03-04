import React, { useState } from 'react';
import { MenuItem } from './molecules/Menu/types';
import ButtonSwitch from './molecules/Menu/molecules/ButtonSwitch';
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
    <div id="menu" className='bg-gaiaSecondary py-8 flex overflow-hidden relative w-full'>
      <div className='w-screen'>
        <div className={`flex transition-transform ease-out duration-500`} style={{ transform: `translateX(-${index * 100}vw)`}}>
          {
            menu.map((item,i) => (
              <CardMenu key={`menu-item-${i}`} {...{...item}} />
            ))
          }
        </div>
      </div>
      <div className='absolute inset-0 flex justify-between p-4 z-10'>
        <ButtonSwitch onClick={handlePrev}><IoChevronBack /></ButtonSwitch>
        <ButtonSwitch onClick={handleNext}><IoChevronForward /></ButtonSwitch>
      </div>
    </div>
  )
}

export default Menu