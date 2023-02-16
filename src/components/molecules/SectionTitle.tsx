import React from 'react'

function SectionTitle({ children } : { children: JSX.Element | string }) {
  return (
    <h2 className='font-bold text-4xl tracking-wide text-slate-700 text-center lg:text-start'>
      { children }
    </h2>
  )
}

export default SectionTitle