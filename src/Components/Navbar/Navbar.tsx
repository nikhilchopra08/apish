"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import NavLinks from './NavLinks';
import { signIn, signOut, useSession } from 'next-auth/react';

const navLinks = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Generate Key",
        path: "/apikey",
    },    {
      title: "Chatbot",
      path: "/Chatbot",
  },    {
    title: "Test context",
    path: "/chat",
},
]

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const { data: session } = useSession(); 


    return (
        <nav className='z-10 bg-gray-900 bg-opacity-100'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <Link href="/" className='text-2xl md:text-5xl text-white font-semiBold'>Nikhil</Link>
                <div className='mobile-menu block md:hidden'>
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className='flex item-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <Bars3Icon className='h-5 w-5' />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className='flex item-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <XMarkIcon className='h-5 w-5' />
                        </button>
                    )}
                </div>
                <div className='menu hidden md:block md:w-auto' id='navBar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLinks href={link.path} title={link.title} />
                            </li>
                        ))}
                        {session ? (
            <button onClick={() => signOut()} className="block text-white hover:text-blue-600 transition p-2">
              Logout
            </button>
          ) : (
            <button onClick={() => signIn()} className="block text-white hover:text-blue-600 transition p-2">
              Login
            </button>
          )}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
}

export default NavBar;
