import React from 'react'

const Messages = ({ messages, setMessages }) => {
    return (
        <div className={`relative h-[85vh] w-full overflow-scroll md:block ${messages ? "block" : "hidden"}`}>
            <p className='font-medium text-[24px] leading-[29px]'>
                Customer Name
            </p>
            <button onClick={() => setMessages(false)}
                className='absolute right-0 top-0 px-3 py-1 rounded-md border md:hidden block'>
                Back
            </button>
            <div className='w-full'>
                <div className='w-full'>
                    <div className='mt-[30px] mr-auto px-[15px] py-2.5 max-w-[397px] bg-[#CFE7F9] rounded-[20px]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>
                </div>

                <div className='w-full mt-[30px]'>
                    <div className='mt-[30px] ml-auto px-[15px] py-2.5 max-w-[397px] bg-[#007BFF] rounded-[20px]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>
                </div>

                <div className='w-full mt-[30px]'>
                    <div className='mr-auto px-[15px] py-2.5 max-w-[397px] bg-[#CFE7F9] rounded-[20px]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>
                </div>

                <div className='w-full mt-[30px]'>
                    <div className='ml-auto px-[15px] py-2.5 max-w-[397px] bg-[#007BFF] rounded-[20px]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>
                </div>

            </div>
            <div className='pb-1 pt-1 pr-2 w-full absolute bottom-0 flex gap-[15px] justify-between bg-white max-w-[700px]'>
                <input className='w-[624px] h-[60px] px-5 rounded-[9px] border border-[#6f6f6f]' type= "search"
                 placeholder='Yozing...' />
                <button className='px-4 bg-[#007BFF] rounded-[9px] text-white'>
                    Jo'natish
                </button>
            </div>
        </div>
    )
}

export default Messages