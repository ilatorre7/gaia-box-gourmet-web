import React from 'react'
import { ButtonForm, InputMessageForm, InputTextForm } from './molecules'

function ContactForm() {
  return (
    <form className='w-full lg:w-3/4 flex flex-col mx-4 py-8 px-4 lg:px-12 bg-gaiaTertiary rounded-2xl shadow-lg'>
      <InputTextForm placeholder='Nombre' />
      <InputTextForm placeholder='Dirección de correo electrónico' />
      <InputMessageForm rows={6} placeholder='Mensaje' />
      <ButtonForm label="ENVIAR" />
    </form>
  )
}

export default ContactForm