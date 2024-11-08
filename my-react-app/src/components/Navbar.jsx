import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {

    const [visible,setVisible] = useState(false);

  return (
    <>
    <div className='flex item-center justify-between py-3 font-medium'>
        
        <img src={assets.logo} className='w-[60px] filter brightness-0 contrast-200' alt="" />

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700 py-4'>

            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p className='text-lg'>Home</p>      
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700'/>
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p className='text-lg'>Collection</p>      
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700'/>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p className='text-lg'>About</p>      
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700'/>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p className='text-lg'>Contact</p>      
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700'/>
            </NavLink>

        </ul>

        <div className='flex items-center gap-6'>
            <img src={assets.search_icon} className='w-[29px] cursor-pointer' alt="search_icon" />

            <div className='group relative'>
                <img src={assets.profile_icon} className='w-[21px] cursor-pointer' alt="profile_icon" />
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>

            <NavLink to='/cart' className='relative'>
                <img src={assets.cart_icon} className='w-[26px]' alt="cart_icon" />
                <p className='absolute right-[-5px] bottom-[14px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
            </NavLink>

            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-[25px] cursor-pointer sm:hidden' alt="menu_icon" />
        </div>

        {/* small screen menu */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600 '>
                <div onClick={()=>{
                    setVisible(false)
                }} className='flex items-center gap-1 p-3'>
                    <img src={assets.back_icon} className='h-4 rotate' alt="" />
                    <p>Back</p>
                </div>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-5 border' to='/'>Home</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-5 border' to='/collection'>Collection</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-5 border' to='/about'>About</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-5 border' to='/contact'>Contact</NavLink>

            </div>

        </div>

    </div>
    <hr className='h-[0.1px] border-0 bg-gray-300'/>
    <br />
    <Outlet/>
    </>
  )
}

export default Navbar
