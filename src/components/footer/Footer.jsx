import React from 'react'
import logo from "../../assets/icons/logo.svg"

const Footer = () => {
    return (
        <div className='w-full bg-[#393434] pb-20'>
            <div className='max-w-[1108px] mx-auto pt-4 flex justify-between gap-4'>
                <div className='w-[286px]'>
                    <img src={logo} alt="logo" width={286} />
                    <p className='mt-2 font-bold text-[18px] text-[#007BFF]'>
                        Contact Us
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
                        Pages
                    </p>
                    <p className='mt-5 text-base text-white'>
                        Home
                    </p>
                    <p className='mt-2.5 text-base text-white'>
                        Shop Online
                    </p>
                    <p className='mt-2.5 text-base text-white'>
                        Shop Online
                    </p>
                    <p className='mt-2.5 text-base text-white'>
                        Contact Us
                    </p>
                    <p className='mt-2.5 text-base text-white'>
                        About Us
                    </p>
                    <p className='mt-2.5 text-base text-white'>
                        What's News
                    </p>
                    <p className='mt-2.5 text-base text-white'>
                        Most Popular
                    </p>
                    <p className='mt-2.5 text-base text-white'>
                        Best Selling
                    </p>
                </div>
                <div>
                    <p className='mt-2 font-bold text-[18px] text-[#007BFF]'>
                        Categories
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
                        News Latter Subscription
                    </p>
                    <p className='mt-5 text-base text-white'>
                        Get the Latest Products & Best
                        Deals
                        in Your Inbox as First Person
                    </p>
                    <div className='mt-[30px] pl-5 pr-1 w-[356px] h-[45px] rounded-[100px] bg-black flex justify-between items-center'>
                        <input className='w-full bg-inherit placeholder-white text-white outline-none' placeholder='Your Email Address'/>
                        <button className='w-[87px] h-[35px] rounded-[100px] bg-[#007BFF] text-white text-[14px]'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer