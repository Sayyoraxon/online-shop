import React from 'react'
import { NavLink } from 'react-router'
import logo from "../../assets/icons/logo.png"

const Footer = () => {
    return (
        <div className='w-full bg-[#393434] pb-20'>
            <div className='max-w-[1108px] mx-auto pt-4 flex justify-between gap-4'>
                <div className='w-[286px]'>
                    <img src={logo} alt="logo" width={286} />
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
                    <p className='mt-2 font-bold text-[18px] text-[#007BFF]'>
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
                    <p className='mt-2 font-bold text-[18px] text-[#007BFF]'>
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
                <div className='w-[356px]'>
                    <p className='mt-2 font-bold text-[18px] text-[#007BFF]'>
                        Axborot byulleteniga obuna
                    </p>
                    <p className='mt-5 text-base text-white'>
                        Birinchi shaxs sifatida kiruvchi qutingizga eng soʻnggi mahsulotlar va eng yaxshi takliflarni oling
                    </p>
                    <div className='mt-[30px] pl-5 pr-1 w-[356px] h-[45px] rounded-[100px] bg-black flex justify-between items-center'>
                        <input className='pr-5 w-full bg-inherit placeholder-white text-white outline-none' type="search" placeholder='Elektron pochtangiz' />
                        <button className='w-[87px] h-[35px] rounded-[100px] bg-[#007BFF] text-white text-[14px]'>
                            Jo'natish
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer