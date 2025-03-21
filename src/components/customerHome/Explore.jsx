import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import fon from "../../assets/image/fon.png"

const Explore = () => {
    return (
        <div className='mt-[40px] mb-[55px]'>
            <div className='w-full'>
                <button className='font-medium text-base text-[#007BFF] flex justify-center items-center gap-2 mx-auto'>
                    Koʻproq oʻrganing
                    <FaArrowRightLong />
                </button>
            </div>
            <div className='relative mt-2'>
                <img className='mx-auto' src={fon} alt="fon"/>
            </div>
            <p className='mt-5 font-medium text-[24px] leading-[29px]'>
                Savdo mahsulotlari
            </p>
            <div className='mt-[30px] flex flex-wrap gap-5'>
                <div className='relative w-[544px] h-[325px] rounded-[15px] bg-[#D9D9D9] overflow-hidden'>
                    <p className='w-full absolute bottom-0 px-5 py-[38px] bg-[#A9A9A9]'>
                        Product Category
                    </p>
                </div>
                <div className='relative w-[544px] h-[325px] rounded-[15px] bg-[#D9D9D9] overflow-hidden'>
                    <p className='w-full absolute bottom-0 px-5 py-[38px] bg-[#A9A9A9]'>
                        Product Category
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Explore