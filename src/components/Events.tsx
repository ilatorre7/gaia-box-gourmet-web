import Image from 'next/image'
import React, { useRef } from 'react'
import { useIsomorphicLayoutEffect } from '@/utilities/useIsomorpficEffect';

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import ContentText from './molecules/SectionText'
import Title from './molecules/SectionTitle'


function Events() {
  gsap.registerPlugin(ScrollTrigger);
  const eventsRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: '#events', /* scrub: true, markers:true, end: '+=90%' */ } })
      tl.from('.imageEvents', { opacity: 0, x: '-50vw', ease: 'power3.in', duration: 1 })
      .from('.textEvents', { opacity: 0, x: '50vw', ease: 'power3.in', duration: 1 })
    }, eventsRef)
    return () => ctx.revert();
  }, []);

  return (
    <div ref={eventsRef} id="events" className='bg-gaiaSecondary w-full py-8 flex flex-col lg:flex-row'>
      <div className='textEvents w-full lg:w-1/2 flex flex-col justify-center px-8'>
        <Title>Eventos</Title>
        <ContentText>
          Ofrecemos servicio de catering para eventos de muchas personas! 
          Ademas tenemos delivery a domicilio para que disfrutes muestros productos en cualquier momento y lugar.
          Asegurate de contactarnos con tiempo de anticipacion para armar el pedido
        </ContentText>
      </div>
      <div className='imageEvents w-full lg:w-1/2 flex justify-center p-4'>
        <Image src='/events.png' alt='eventos' height={512} width={384} className='block lg:hidden rounded-xl shadow-xl' />
        <Image src='/events-lg.png' alt='eventos' height={733} width={662} className='hidden lg:block rounded-xl shadow-xl' />
      </div>
    </div>
  )
}

export default Events;
