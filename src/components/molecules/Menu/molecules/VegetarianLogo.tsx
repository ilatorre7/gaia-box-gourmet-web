import React from 'react'
import { IoIosLeaf } from 'react-icons/io';

function VegetarianLogo({ isVegetarian } : { isVegetarian: boolean | undefined }) {
  return (
    <div>
      {
        isVegetarian && (
          <div className='space-x-2 flex flex-row items-center py-4'>
            <IoIosLeaf className='text-2xl text-slate-700'></IoIosLeaf>
            <p className='text-md text-slate-700'>{'Apto para vegetarianos'}</p>
          </div>
        )
      }
    </div>
  )
}

export default VegetarianLogo