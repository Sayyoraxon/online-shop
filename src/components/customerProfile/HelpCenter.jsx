import React from 'react'
import useStore from '../../store/useStore'
import { FaTelegramPlane } from 'react-icons/fa'

const HelpCenter = () => {

  const { language } = useStore()

  return (
    <div className='relative h-screen py-[38px] px-[23px]'>
      <p className='font-medium text-[24px]'>
        {language.HelpCenter}
      </p>
      <div className='mt-2.5'>
        <p className='font-medium text-[24px] text-center'>
          Client Name
        </p>
        <div className='mt-[34px] w-full overflow-scroll'>
          <div className='w-full'>
            <p className='mt-2.5 p-2.5 max-w-[397px] rounded-[20px] bg-[#CFE7F9] text-base'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className='w-full'>
            <p className='ml-auto mt-2.5 p-2.5 max-w-[397px] rounded-[20px] bg-[#007BFF] text-base '>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          
          
          <div className='absolute w-full h-12 px-[23px] pb-1 left-0 bottom-0 bg-inherit'>
            <div className='w-full h-full flex gap-2'>
              <input type="search" placeholder='Yozing...'
                className='w-full h-full px-2 bg-white rounded-[9px] border border-[#6F6F6F]' />
              <button className='h-full w-[50px] rounded-[9px] bg-[#007BFF] flex justify-center items-center'>
                <FaTelegramPlane style={{ fontSize: "30px", color: "white" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpCenter