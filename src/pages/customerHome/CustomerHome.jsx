import React from 'react'
import { NavLink, Outlet } from 'react-router'
import logo from "../../assets/icons/logo.svg"
import bucket from "../../assets/icons/savat.svg"
import { useSelector } from 'react-redux'

const CustomerHome = () => {

    const loggedIn = localStorage.getItem("loggedIn")

    return (
        <div className='w-full'>
            <div className='max-w-[1108px] mx-auto'>
                <div className='w-full flex justify-between items-center mb-[27px]'>
                    <img src={logo} alt="logo" width={146}/>
                    <div className='flex gap-10'>
                        <NavLink to="/" className="font-medium text-[14px] leading-4">
                            Home
                        </NavLink>
                        <NavLink to="/shop" className="font-medium text-[14px] leading-4">
                            Shop Online
                        </NavLink>
                        <NavLink to="/news" className="font-medium text-[14px] leading-4 ">
                            What's New
                        </NavLink>
                        <NavLink to="/contact" className="font-medium text-[14px] leading-4 ">
                            Contact
                        </NavLink>
                        <NavLink to="/about" className="font-medium text-[14px] leading-4">
                            About us
                        </NavLink>
                    </div>
                   {loggedIn 
                   ?
                   <button>
                        <img src={bucket} alt="bucket"/>
                   </button>
                   :
                   <div className='flex gap-10'>
                        <NavLink to="/register" className="px-5 py-[9px] rounded-[100px] bg-[#007BFF] font-medium text-sm leading-4 text-white">
                            Sign Up
                        </NavLink>
                        <NavLink to="/login" className="px-5 py-[9px] rounded-[100px] border border-[#007BFF] font-medium text-sm leading-4 text-[#007BFF]">
                            Sign In
                        </NavLink>
                    </div>}
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default CustomerHome