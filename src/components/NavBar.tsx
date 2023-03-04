import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import React, { useState } from 'react'
import { IoMenuSharp, IoClose } from "react-icons/io5";

interface LinkItem {
  name: string
  link: string
}

function NavBar() {
  gsap.registerPlugin(ScrollToPlugin);

  const items: LinkItem[] = [
    { name: "QUIÉNES SOMOS?", link: '#about' }, 
    { name: "MENÚ", link: '#menu' }, 
    { name: "EVENTOS", link: '#events' }, 
    { name: "CONTACTO", link: '#contact' },
  ];
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (id: string) => {
    gsap.to(window, { duration: 2, scrollTo: id })
  } 

  const Logo = () => (
    <div className='cursor-pointer' onClick={() => handleClick('#hero')}>
      <h1 className='text-xl text-slate-700'>GBG</h1>
    </div>
  );

  return (
    <div className="shadow-md w-full fixed z-10 top-0 left-0">
      <div className='md:flex items-center justify-between bg-gaia py-4 md:px-10 px-8'>
        <Logo />
        <div onClick={() => setOpen(!open)} className='text-3xl text-slate-700 cursor-pointer absolute right-8 top-4 md:hidden'>
          {open ? (<IoClose />) : (<IoMenuSharp />)}
        </div>
        <ul className={`md:flex md:items-center absolute md:static bg-gaia md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-8 
        transition-all duration-500 ease-in ${open ? 'top-10' : 'top-[-490px]' }`}>
          {
            items.map((item,i) => (
              <div className='cursor-pointer' key={`item-${i}`} onClick={() => handleClick(item.link)}>
                <li className="md:ml-8 text-md tracking-widest md:my-0 my-8 text-slate-700 hover:text-gray-100 hover:underline duration-100">{item.name}</li>
              </div>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default NavBar