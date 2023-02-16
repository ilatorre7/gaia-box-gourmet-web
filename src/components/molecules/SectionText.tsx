import React from 'react';

function SectionText(
  { children } : { children: JSX.Element | string } 
) {
  return (
    <p className='text-center lg:text-start text-xl py-4 text-slate-700'>
      { children }
    </p>
  )
}

export default SectionText