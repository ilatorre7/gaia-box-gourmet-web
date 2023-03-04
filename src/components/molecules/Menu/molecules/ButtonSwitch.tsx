import React from 'react'

function ButtonSwitch({ 
  onClick,
  label,
  className,
  children,
}: { 
  onClick: () => void,
  label?: string,
  className?: string,
  children?: React.ReactNode,
}) {
  return <button className={`${className} px-4 text-slate-700 text-lg`} onClick={onClick}>{label ? label : children }</button>
}

export default ButtonSwitch