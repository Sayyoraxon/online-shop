import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const Customerdiv = () => {
    return (
        <div className='mt-[30px] px-[26px]'>
            <div className='w-full text-right'>
                <input className='w-[345px] h-[40px] rounded-[9px] border border-[#6f6f6f] px-[20px] font-medium text-base text-[#636363]'
                    placeholder='Search Customer' />
            </div>

            <div className='mt-8 w-full font-medium text-[14px] leading-4 text-black opacity-60'>
                <div className='px-5 w-full flex'>
                    <p className='w-2/12'>
                        Customer Name
                    </p>
                    <p className='w-2/12'>
                        Customer Email
                    </p>
                    <p className='w-2/12'>
                        Orders Count
                    </p>
                    <p className='w-3/12'>
                        Successful Deliveries
                    </p>
                    <p className='w-2/12'>
                        Total income
                    </p>

                </div>
                <div className='px-5 mt-[19px] h-[50px] w-full flex justify-between items-center rounded-[10px] border'>
                    <p className='w-2/12'>
                        Ahinsa De Silva
                    </p>
                    <p className='w-2/12'>
                        Ahinsa@gmail.com
                    </p>
                    <p className='w-2/12'>
                        30 orders
                    </p>
                    <p className='w-3/12'>
                        30 orders
                    </p>
                    <div className='w-3/12 flex justify-between items-center'>
                        <p>
                            Rs.100,000.00
                        </p>
                        <button>
                            <IoIosArrowForward />
                        </button>
                    </div>
                </div>
       
            </div>
        </div>
    )
}

export default Customerdiv