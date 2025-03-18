import React from 'react'
import laptop from '../../assets/image/laptop.png'
import watch from '../../assets/image/watch.png'
import beaty from '../../assets/image/Cosmetics-Mockup.png'
import fashion from '../../assets/image/fasion.png'
import furniture from '../../assets/image/furniture.png'
import sport from '../../assets/image/sport.png'

const TopCategories = ({hidden}) => {
    return (
        <div className='w-full mt-10'>
            {!hidden &&
            <p className='font-medium text-[24px] leading-[29px]'>
                Bizning eng yaxshi toifalarimizni harid qiling
            </p>}
            <div className='mt-[30px] w-full flex justify-between flex-wrap gap-y-5 items-center'>
                <div style={{ backgroundImage: "linear-gradient(#64F5FD, #007BFF)" }} className='py-5 w-[168px] h-[232px] rounded-[10px] flex flex-col'>
                    <p className='text-center font-medium text-base leading-[19px]'>
                        Texnologiya
                    </p>
                    <img className='w-full object-cover mt-auto' src={laptop} alt="laptop" />
                </div>
                <div style={{ backgroundImage: "radial-gradient(#007BFF, #64F5FD)" }} className='py-5 w-[168px] h-[232px] rounded-[10px] flex flex-col'>
                    <p className='text-center font-medium text-base leading-[19px]'>
                        Elektronika
                    </p>
                    <img className='mt-auto w-full object-cover' src={watch} alt="laptop" />
                </div>
                <div className='py-5 w-[168px] h-[232px] rounded-[10px] flex flex-col'>
                    <p className='text-center font-medium text-base leading-[19px]'>
                        Salomatlik & Go'zallik
                    </p>
                    <img className='mt-auto w-full object-cover' src={beaty} alt="laptop" />
                </div>
                <div className='relative w-[168px] h-[232px] rounded-[10px] overflow-hidden'>
                    <p className='absolute top-5 w-full text-center font-medium text-base leading-[19px]'>
                        Moda
                    </p>
                    <img className='w-[168px] h-[232px] object-cover' src={fashion} alt="laptop" />
                </div>
                <div className='relative w-[168px] h-[232px] rounded-[10px] overflow-hidden'>
                    <p className='absolute top-5 w-full text-center font-medium text-base leading-[19px]'>
                    Mebel
                    </p>
                    <img className='w-[168px] h-[232px] object-cover' src={furniture} alt="laptop" />
                </div>
                <div className='relative w-[168px] h-[232px] rounded-[10px] overflow-hidden'>
                    <p className='absolute top-5 w-full text-center font-medium text-base leading-[19px]'>
                        Sport
                    </p>
                    <img className='w-[168px] h-[232px] object-cover' src={sport} alt="laptop" />
                </div>
            </div>
        </div>
    )
}

export default TopCategories