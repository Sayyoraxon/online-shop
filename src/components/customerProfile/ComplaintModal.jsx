import React from 'react'
import useStore from '../../store/useStore'
import { IoClose } from 'react-icons/io5'
import { FaTelegramPlane } from 'react-icons/fa'

const ComplaintModal = ({setModal}) => {

    const { language } = useStore()

    return (
        <div className='fixed top-0 left-0 w-full px-3 min-h-screen backdrop-blur-md z-20 flex items-center justify-center'>
            <div className='px-[50px] py-10 m-auto lg:w-[1088px] w-full h-[700px] rounded-lg bg-white shadow-md shadow-gray-400'>
                <div className='flex justify-between items-start'>
                    <div>
                        <p className='text-base font-medium text-[#6B6A6E]'>
                            {language.Subject}
                        </p>
                        <p className='mt-1 font-medium text-[24px]'>
                            This shop is fake
                        </p>
                    </div>
                    <button onClick={()=>setModal(false)}>
                        <IoClose style={{ fontSize: "25px" }} />
                    </button>
                </div>

                <div className='mt-10 flex justify-between items-start'>
                    <div>
                        <p className='text-base font-medium text-[#6B6A6E]'>
                            {language.ComplaintID}
                        </p>
                        <p className='mt-1 font-medium text-[20px]'>
                            #123456789
                        </p>
                    </div>
                    <div>
                        <p className='text-base font-medium text-[#6B6A6E]'>
                            {language.SentDate}
                        </p>
                        <p className='mt-1 font-medium text-[20px]'>
                            12/12/2023
                        </p>
                    </div>
                    <div>
                        <p className='text-base font-medium text-[#6B6A6E]'>
                            {language.KindOf}
                        </p>
                        <p className='mt-1 font-medium text-[20px]'>
                            {language.Shop}
                        </p>
                    </div>
                </div>

                <hr className='mt-7 mb-5' />

                <div className='flex gap-2 justify-between'>
                    <div className='w-[350px]'>
                        <p className='text-base font-medium text-[#6B6A6E]'>
                            {language.MyMessage}
                        </p>
                        <p className='text-[14px] font-medium'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                        </p>
                        <p className='mt-2 text-base font-medium text-[#6B6A6E]'>
                            {`${language.Shop} ID`}
                        </p>
                    </div>

                    <div className='relative h-[420px] w-[586px] p-5 pt-2.5 rounded-[15px] bg-[#F4F4F4] shadow-inner overflow-scroll'>
                        <p className='mt-2.5 p-2.5 max-w-[397px] rounded-[20px] bg-[#CFE7F9] text-base float-left'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </p>
                        <p className='mt-2.5 p-2.5 max-w-[397px] rounded-[20px] bg-[#007BFF] text-base float-right'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </p>
                       <div className='absolute w-full h-12 p-1 left-0 bottom-0 bg-inherit'>
                        <div className='w-full h-full flex gap-2'>
                            <input type="search" placeholder='Yozing...'
                            className='w-full h-full px-2 bg-white rounded-[9px] border border-[#6F6F6F]'/>
                            <button className='h-full w-[50px] rounded-[9px] bg-[#007BFF] flex justify-center items-center'>
                                <FaTelegramPlane style={{fontSize: "30px", color: "white"}}/>
                            </button>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComplaintModal