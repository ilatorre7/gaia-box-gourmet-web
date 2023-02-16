import React from 'react'

function ButtonSwitch({ 
  breakpoint,
  onClick,
  label,
}: { 
  breakpoint: string,
  onClick: () => void,
  label: string,
}) {
  const buttonStyle = (() => {
    if (breakpoint === 'md') {
      return 'hidden md:block'
    }
    if (breakpoint === 'sm') {
      return'block md:hidden'
    }
    return ''
  })();

  return <button className={`${buttonStyle} px-4 text-slate-700 text-lg hover:bg-gray-300 duration-150`} onClick={onClick}>{label}</button>
}

export default ButtonSwitch