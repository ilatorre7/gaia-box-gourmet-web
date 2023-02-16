import React from 'react'

function ButtonForm({ label }: { label: string }) {
  return (
    <button className="bg-gaia hover:bg-gaiaSecondary ease-in duration-200 text-white hover:text-slate-700 py-2 mx-4 my-2 rounded-xl">{label}</button>
  )
}

export default ButtonForm