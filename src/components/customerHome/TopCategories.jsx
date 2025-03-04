import React from 'react'
import laptop from '../../assets/image/laptop.png'
import watch from '../../assets/image/watch.png'
import beaty from '../../assets/image/Cosmetics-Mockup.png'
import fashion from '../../assets/image/fasion.png'
import furniture from '../../assets/image/furniture.png'
import sport from '../../assets/image/sport.png'

const TopCategories = () => {
  return (
    <div className='w-full mt-10'>
        <p className='font-medium text-[24px] leading-[29px]'>
            Shop Our Top Categories
        </p>
        <div className='mt-[30px] w-full flex justify-between items-center'>
            <div style={{backgroundImage: "linear-gradient(#64F5FD, #007BFF)"}} className='py-5 w-[168px] h-[232px] rounded-[10px] flex flex-col'>
                <p className='text-center font-medium text-base leading-[19px]'>
                    Tech
                </p>
                <img className='w-full object-cover mt-auto' src={laptop} alt="laptop"/>
            </div>
            <div style={{backgroundImage: "radial-gradient(#007BFF, #64F5FD)"}} className='py-5 w-[168px] h-[232px] rounded-[10px] flex flex-col'>
                <p className='text-center font-medium text-base leading-[19px]'>
                    Elctronics
                </p>
                <img className='mt-auto w-full object-cover' src={watch} alt="laptop"/>
            </div>
            <div className='py-5 w-[168px] h-[232px] rounded-[10px] flex flex-col'>
                <p className='text-center font-medium text-base leading-[19px]'>
                Health &
                Beauty
                </p>
                <img className='mt-auto w-full object-cover' src={beaty} alt="laptop"/>
            </div>
            <div className='relative w-[168px] h-[232px] rounded-[10px] overflow-hidden'>
                <p className='absolute top-5 w-full text-center font-medium text-base leading-[19px]'>
                    Fashion
                </p>
                <img className='w-[168px] h-[232px] object-cover' src={fashion} alt="laptop"/>
            </div>
            <div className='relative w-[168px] h-[232px] rounded-[10px] overflow-hidden'>
                <p className='absolute top-5 w-full text-center font-medium text-base leading-[19px]'>
                Furniture
                </p>
                <img className='w-[168px] h-[232px] object-cover' src={furniture} alt="laptop"/>
            </div>
            <div className='relative w-[168px] h-[232px] rounded-[10px] overflow-hidden'>
                <p className='absolute top-5 w-full text-center font-medium text-base leading-[19px]'>
                Sports
                </p>
                <img className='w-[168px] h-[232px] object-cover' src={sport} alt="laptop"/>
            </div>
        </div>
    </div>
  )
}

export default TopCategories