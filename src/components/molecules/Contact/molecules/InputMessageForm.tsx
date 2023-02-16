import React from 'react'

function InputMessageForm({ rows, placeholder } : { rows: number, placeholder: string }) {
  return (
    <textarea 
      rows={rows}
      placeholder={placeholder} 
      className='p-2 my-2 mx-4 outline-none rounded-xl text-sm ring-1 ring-slate-700 focus:ring-2 focus:ring-gaiaSecondary'
    >
    </textarea>
  )
}

export default InputMessageForm