import Image from 'next/image'
import React,{ useRef } from 'react'
import { useIsomorphicLayoutEffect } from '@/utilities/useIsomorpficEffect';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SectionText from './molecules/SectionText';
import SectionTitle from './molecules/SectionTitle';
import { prefix } from '@/utilities/prefix';

function About() {
  gsap.registerPlugin(ScrollTrigger);
  const aboutRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: '#about', /* scrub: true, markers:true, end: '+=90%' */ } });
      tl.from('.text', { x: '-50vw', opacity: 0, ease: 'power3.in', duration: 1 })
      .from('.image', { x: '50vw', opacity: 0, ease: 'power3.in', duration: 1 })
    }, aboutRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={aboutRef} id="about" className='bg-gaia flex flex-col md:flex-row md:items-stretch py-8'>
      <div className='text w-full lg:w-1/2 px-8 flex flex-col justify-center'>
        <SectionTitle>Quiénes somos?</SectionTitle>
        <SectionText>
          Fundada en 2022, Gaia Box Gourmet es una empresa que se dedica a la venta de una amplia variedad de picadas,
          desde las mas tradicionales hasta las mas innovadoras, todas hechas con ingredientes frescos y de alta calidad.
        </SectionText>
      </div>
      <div className='image w-full lg:w-1/2 px-4 flex justify-center items-center'>
        <Image src={`${prefix}/about.png`} alt="Productos de Gaia Box" width={884} height={590} className='rounded-xl shadow-xl' />
      </div>
    </div>
  )
}

export default About