import React from 'react'

function SectionLayout({
   ref,
   id,
   bgColor,
   children,
  } : { 
    ref: HTMLDivElement | undefined,
    id: string, 
    bgColor: string,
    children: JSX.Element | JSX.Element[] 
  }) {
  return (
    {/* <div id={id} ref={ref} className=''>
      { children }
    </div> */}
  )
}

export default SectionLayout