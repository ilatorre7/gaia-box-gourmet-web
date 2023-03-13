import React, { useRef } from 'react'
import { IoLogoWhatsapp, IoLogoInstagram, IoMdMail } from "react-icons/io";
import { whatsApp, instagram, mail } from '@/static/config';

import { gsap } from "gsap";

import Title from './molecules/SectionTitle';
import ContentText from './molecules/SectionText';
import ContactForm from './molecules/Contact/ContactForm';
import { useIsomorphicLayoutEffect } from '@/utilities/useIsomorpficEffect';

function Contact() {
  const contactRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: '#contact', toggleActions: 'restart none restart none' } });
      tl.from('.form', { x: '-50vw', opacity: 0, duration: 1.5 })
      .from('.text', { x: '50vw', opacity: 0, duration: 1.5 }, "-=1")
    }, contactRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={contactRef}>
      <div id="contact" className='bg-gaia w-full py-8 flex flex-col-reverse lg:flex-row items-stretch'>
        <div className='form w-full lg:w-1/2 flex justify-center'>
          <ContactForm />
        </div>
        <div className='text w-full lg:w-1/2 px-8 flex flex-col justify-between'>
          <div>
            <Title>Contáctanos!</Title>
            <ContentText>
              En caso de querer conocer más sobre la empresa, sus productos, precios, promociones y sus servicios 
              o simplemente saludar puede contactarse con nosotros mediante éste formulario. Además pueden escribir por Whatsapp
              o enviar un mensaje directo por Instagram, dónde también nos pueden seguir para conocer todas las novedades.
            </ContentText>
            {/* <div className='space-x-4 flex flex-row items-center'>
              <IoMdMail className='text-slate-700 text-2xl'></IoMdMail>
              <h4 className='text-slate-700 text-lg'>{mail}</h4>
            </div> */}
          </div>
          <div className='flex flex-col py-8 lg:py-0 space-y-4'>
            <a href={whatsApp} className='bg-gray-100 flex justify-center items-center gap-2 py-4 px-8 rounded-xl shadow-lg'>
              <IoLogoWhatsapp className='text-slate-700 text-3xl duration-150' />
              <p className='text-slate-700 text-xl font-bold'>Hacé tu pedido por Whatsapp!</p>
            </a>
            <a href={instagram} className='bg-gaiaTertiary flex justify-center items-center gap-2 py-4 px-8 rounded-xl shadow-lg hover:text-4xl'>
              <IoLogoInstagram className='text-gray-100 text-3xl hover:text-gray-100 duration-150' />
              <p className='text-gray-100 text-xl font-bold'>Seguinos en Instagram!</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact