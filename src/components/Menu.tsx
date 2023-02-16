import React, { useLayoutEffect, useRef, useState } from 'react'
import { onPrev, onNext } from './molecules/Menu/SwitcherEvents';
import { gsap } from "gsap";
import { MenuItem } from './molecules/Menu/types';
import DescriptionMenu from './molecules/Menu/DescriptionMenu';
import ImageMenu from './molecules/Menu/ImageMenu';
import ButtonSwitch from './molecules/Menu/molecules/ButtonSwitch';

function Menu({
  menu,
}: {
  menu: MenuItem[] 
}) {
  const [index, setIndex] = useState<number>(0);
  const [direction, setDirection] = useState<string>('right');
  const menuRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setDirection('left');
    onPrev(index, menu, setIndex);
  };

  const handleNext = () => {
    setDirection('right');
    onNext(index, menu, setIndex);
  };

  const {
    name,
    image
  } = menu[index];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (direction === 'right') {
        gsap.from('.menu', { x: '-100vw', ease: 'power3.in' })
        gsap.from('.image', { x: '-50vw', ease: 'power3.in' })
      }
      else {
        gsap.from('.menu', { x: '100vw', ease: 'power3.in' })
        gsap.from('.image', { x: '50vw', ease: 'power3.in' })
      }
    }, menuRef);
    return () => ctx.revert();
  }, [index, direction]);

  return (
    <div id="menu" ref={menuRef} className='bg-gaiaSecondary flex flex-col md:flex-row md:items-stretch py-8'>
      <ButtonSwitch breakpoint='md' onClick={handlePrev} label="<" />
      <ImageMenu 
        {...{
          name,
          image,
          onPrev: handlePrev,
          onNext: handleNext,
        }}
      />
      <DescriptionMenu
        {...{
          ...menu[index],
        }} 
      />
      <ButtonSwitch breakpoint='md' onClick={handleNext} label=">" />
    </div>
  )
}

export default Menu