import React from 'react'
import { IoLogoWhatsapp, IoLogoInstagram, IoMdMail } from "react-icons/io";
import { whatsApp, instagram, mail } from '@/static/config';

import Title from './molecules/SectionTitle';
import ContentText from './molecules/SectionText';
import ContactForm from './molecules/Contact/ContactForm';

function Contact() {

  return (
    <div id="contact" className='bg-gaia flex flex-col lg:flex-row w-full py-8'>
      <div className='w-full lg:w-1/2 px-8 flex flex-col justify-between'>
        <div>
          <Title>Contáctanos!</Title>
          <ContentText>
            En caso de querer conocer más sobre la empresa, sus productos, precios, promociones y sus servicios 
            o simplemente saludar puede contactarse con nosotros mediante éste formulario. Además pueden escribir por Whatsapp
            o enviar un mensaje directo por Instagram, dónde también nos pueden seguir para conocer todas las novedades.
          </ContentText>
          <div className='space-x-4 flex flex-row items-center'>
            <IoMdMail className='text-slate-700 text-2xl'></IoMdMail>
            <h4 className='text-slate-700 text-lg'>{mail}</h4>
          </div>
        </div>
        <div className='flex space-x-8 py-8 lg:py-0'>
          <a href={whatsApp}><IoLogoWhatsapp className='text-slate-700 text-2xl hover:text-gray-100 duration-150'></IoLogoWhatsapp></a>
          <a href={instagram}><IoLogoInstagram className='text-slate-700 text-2xl hover:text-gray-100 duration-150'></IoLogoInstagram></a>
        </div>
      </div>
      <div className='w-full lg:w-1/2 flex justify-center'>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact