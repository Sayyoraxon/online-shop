import React from 'react'
import { NavLink } from 'react-router'
import logo from "../../assets/icons/logo.png"

const Footer = () => {
    return (
        <div className='w-full bg-[#393434] pb-20'>
            <div className='max-w-[1148px] px-5 mx-auto pt-4 flex flex-wrap justify-between gap-4'>
                <div className='w-[286px]'>
                    <img src={logo} alt="logo" width={186} />
                    <p className='mt-2 font-bold text-[18px] text-[#007BFF]'>
                        Biz bilan bog'lanish
                    </p>
                    <p className='mt-5 text-base text-white'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <p className='mt-2.5 text-base text-white'>
                        info@sanakin.lk
                    </p>
                    <p className='mt-2.5 text-base text-white'>
                        +011 2 345 678
                    </p>
                </div>
                <div>
                    <p className='mt-20 font-bold text-[18px] text-[#007BFF]'>
                        Sahifalar
                    </p>
                    <NavLink to="/" className='block mt-2.5 text-base text-white'>
                        Asosiy
                    </NavLink>
                    <NavLink to="/shop" className='block mt-2.5 text-base text-white'>
                        Online harid
                    </NavLink>
                    <NavLink to="/news" className='block mt-2.5 text-base text-white'>
                        Yangiliklar
                    </NavLink>
                    <NavLink to="/contact" className='block mt-2.5 text-base text-white'>
                        Kontakt
                    </NavLink>
                    <NavLink to="/about" className='block mt-2.5 text-base text-white'>
                        Biz haqimizda
                    </NavLink>
                </div>
                <div>
                    <p className='mt-20 font-bold text-[18px] text-[#007BFF]'>
                        Kategoriyalar
                    </p>
                    <p className='mt-5 text-base text-white'>
                        Category 1
                    </p>
                    <p className='mt-2.5 text-base text-white'>
                        Category 2
                    </p>
                    <p className='mt-2.5 text-base text-white'>
                        Category 3
                    </p>
                    <p className='mt-2.5 text-base text-white'>
                        Category 4
                    </p>
                    <p className='mt-2.5 text-base text-white'>
                        Category 5
                    </p>
                </div>
             
            </div>
        </div>
    )
}

export default Footer