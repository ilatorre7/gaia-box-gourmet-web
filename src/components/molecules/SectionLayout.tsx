import React from 'react'

function SectionLayout({ children } : { children: JSX.Element | JSX.Element[] }) {
  return (
    <div>
      { children }
    </div>
  )
}

export default SectionLayout