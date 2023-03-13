import React from 'react'

function SectionLayout({
   ref,
   id,
   bgColor,
   children,
  } : { 
    ref: React.LegacyRef<HTMLDivElement> | undefined,
    id: string, 
    bgColor: string,
    children: JSX.Element | JSX.Element[] 
  }) {
  return (
    <div id={id} ref={ref} className={`${bgColor} w-full py-8 flex flex-col lg:flex-row`}>
      { children }
    </div>
  )
}

export default SectionLayout