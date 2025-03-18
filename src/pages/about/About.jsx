import React from 'react'
import ladies from "../../assets/image/ladies.png"

const About = () => {
    return (
        <div className='pb-[50px]'>
            <p className='mt-20 font-medium text-[80px] text-center'>
                About Us
            </p>
            <p className='mt-5 text-base mb-[80px] text-center'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </p>

            <div className='py-[50px] px-6 maz-w-[1108px] rounded-[30px] shadow-md shadow-gray-400'>
                <div className='flex justify-between'>
                    <p className='font-semibold text-[36px]'>
                        We Makes Online Shopping Easier For You
                    </p>
                    <p className='w-[225px] font-light text-[10px]'>
                        Learn More About The Company ,The Team Behind It & How We Think
                    </p>
                </div>
                <div className='mt-[66px] px-5 flex flex-wrap gap-y-4 justify-between'>
                    <div className='w-[180px] text-center'>
                        <p className='font-semibold text-[40px] text-[#EF8A2D]'>
                            200+
                        </p>
                        <p className='font-semibold text-[20px] mt-[5px]'>
                            Orders completed
                        </p>
                        <p className='mt-[9px] font-light text-[10px]'>
                            Learn More About The Company ,The
                            Team Behind It & How We Think
                        </p>
                    </div>
                    <div className='w-[180px] text-center'>
                        <p className='font-semibold text-[40px] text-[#EF8A2D]'>
                            400%
                        </p>
                        <p className='font-semibold text-[20px] mt-[5px]'>
                            Successful Orders
                        </p>
                        <p className='mt-[9px] font-light text-[10px]'>
                            Learn More About The Company ,The
                            Team Behind It & How We Think
                        </p>
                    </div>
                    <div className='w-[180px] text-center'>
                        <p className='font-semibold text-[40px] text-[#EF8A2D]'>
                            8k
                        </p>
                        <p className='font-semibold text-[20px] mt-[5px]'>
                            User Accounts
                        </p>
                        <p className='mt-[9px] font-light text-[10px]'>
                            Learn More About The Company ,The
                            Team Behind It & How We Think
                        </p>
                    </div>
                    <div className='w-[180px] text-center'>
                        <p className='font-semibold text-[40px] text-[#EF8A2D]'>
                            100+
                        </p>
                        <p className='font-semibold text-[20px] mt-[5px]'>
                            5 Stars Reviews
                        </p>
                        <p className='mt-[9px] font-light text-[10px]'>
                            Learn More About The Company ,The
                            Team Behind It & How We Think
                        </p>
                    </div>
                </div>
            </div>

            <div className='mt-10 flex justify-between gap-[22px] sm:flex-nowrap flex-wrap'>
                <div className='py-10 px-[80px] text-center rounded-[30px] shadow-md shadow-gray-400'>
                    <p className='font-medium text-[32px]'>
                        Our Mission
                    </p>
                    <p className='mt-[30px] font-light text-base'>
                        Our mission to create a good market place for local sellers & to create a good online shopping store
                    </p>
                </div>
                <div className='py-10 px-[80px] text-center rounded-[30px] shadow-md shadow-gray-400'>
                    <p className='font-medium text-[32px]'>
                        Our Vision
                    </p>
                    <p className='mt-[30px] font-light text-base'>
                        Our vision is to build a trustable online store for both customers and sellers
                    </p>
                </div>
            </div>

            <div className='mt-10 max-w-[1108px] py-10 px-[80px] rounded-[30px] shadow-md shadow-gray-400 text-center'>
                <p className='font-semibold text-[36px]'>
                    We are the best local online shopping store
                </p>
                <p className='mt-5 text-base'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                </p>
                <img className='mt-[30px]' src={ladies} alt="ladies"/>
            </div>

            <div className='mt-10 max-w-[1108px] py-10 px-[80px] rounded-[30px] shadow-md shadow-gray-400 text-center'>
                <p className='text-[24px] italic'>
                “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.”
                </p>
                <div className='mt-10 w-[60px] h-[60px] rounded-full bg-[#BEB8B8] mx-auto'>

                </div>
                <p className='mt-[15px] font-semibold text-base'>
                Amishka Amarasignhe
                </p>
                <p className='mt-2 font-semibold text-base text-[#007BFF]'>
                    Customer
                </p>
            </div>
        </div>
    )
}

export default About