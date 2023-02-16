import React from 'react'

function InputTextForm({ placeholder } : { placeholder: string }) {
  return (
    <input type="text" placeholder={placeholder} className='p-2 my-2 mx-4 outline-none rounded-xl text-sm ring-1 ring-slate-700 focus:ring-2 focus:ring-gaiaSecondary'></input>
  )
}

export default InputTextForm