import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex item-center justify-between py-3 font-medium'>
        
        <img src={assets.logo} className='w-[60px]' alt="" />

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>Home</p>      
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700'/>
            </NavLink>

        </ul>
    </div>
  )
}

export default Navbar
