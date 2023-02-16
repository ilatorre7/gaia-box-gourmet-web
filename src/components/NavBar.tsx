import Link from 'next/link';
import React, { useState } from 'react'
import { IoMenuSharp, IoClose } from "react-icons/io5";

interface LinkItem {
  name: string
  link: string
}

function NavBar() {

  const items: LinkItem[] = [
    { name: "QUIÉNES SOMOS?", link: '#about' }, 
    { name: "MENÚ", link: '#menu' }, 
    { name: "EVENTOS", link: '#events' }, 
    { name: "CONTACTO", link: '#contact' },
  ];
  const [open, setOpen] = useState<boolean>(false);

  const Logo = () => (
    <div>
      <h1 className='text-xl text-slate-700'>GBG</h1>
    </div>
  );

  const LinkList = ({ list }: { list: LinkItem[] }) => (
    <ul className={`bg-gaia block md:hidden ${open ? 'h-auto' : 'h-0' } transition-all duration-500 ease-in`}>
      {
        list.map((item,i) => (
          <Link key={`item-${i}`} href={item.link}>
            <li className="ml-8 text-md tracking-widest md:my-0 my-8 text-slate-700 hover:text-gray-100 hover:underline duration-100">{item.name}</li>
          </Link>
        ))
      }
    </ul>
  );

  return (
    <>
      <div className='flex flex-col'>
        <div className='flex md:hidden bg-gaia py-4 px-8 justify-between items-center'>
          <Logo />
          <div onClick={() => setOpen(!open)} className='text-3xl cursor-pointer'>
            {open ? (<IoClose></IoClose>) : (<IoMenuSharp></IoMenuSharp>)}
          </div>
        </div>
        <LinkList
          list={items}
        />
      </div>
      <div className="w-full shadow-md hidden md:block">
        <div className='md:flex bg-gaia py-4 md:px-10 px-8 justify-between'>
          <Logo />
          <ul className='md:flex md:items-center'>
            {
              items.map((item,i) => (
                <Link key={`item-${i}`} href={item.link}>
                  <li className="ml-8 text-md tracking-widest md:my-0 my-8 text-slate-700 hover:text-gray-100 hover:underline duration-100">{item.name}</li>
                </Link>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavBar