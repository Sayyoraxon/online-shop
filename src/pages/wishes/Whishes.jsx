import React from 'react'
import buyze from "../../assets/icons/logo.svg"
import { FaHeart } from 'react-icons/fa'
import TopCategories from '../../components/customerHome/TopCategories'
import Explore from '../../components/customerHome/Explore'

const Whishes = () => {
    return (
        <div>
            <p className='w-full text-center my-40 font-medium text-[42px]'>
                Sevimli mahsulotlar yo'q
            </p>
            {/* <div className='mt-[30px] w-full flex flex-wrap justify-between items-center gap-5'>
                <div className='w-[262px] h-[456px] rounded-[10px] flex flex-col'>
                    <div className='relative w-[262px] h-[262px] rounded-md flex justify-center items-center bg-slate-100'>
                        <img src={buyze} alt="logo" width={162} />
                        <FaHeart style={{ fontSize: "22px", color: "#007bff" }} className='absolute top-3 right-3' />
                    </div>
                    <p className='mt-[14px] font-medium text-[18px] leading-[21px]'>
                        Store name
                    </p>
                    <p className='mt-[5px] font-medium text-[18px] leading-[21px]'>
                        RS.100,000.00
                    </p>
                    <p className='mt-2.5 font-medium text-[14px] leading-4'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                    </p>
                    <button className='mt-5 w-[140px] h-[35px] rounded-[100px] bg-[#007BFF] text-white font-medium text-[14px] leading-4'>
                        Savatga qo'shish
                    </button>
                </div>
                <div className='w-[262px] h-[456px] rounded-[10px] flex flex-col'>
                    <div className='relative w-[262px] h-[262px] rounded-md flex justify-center items-center bg-slate-100'>
                        <img src={buyze} alt="logo" width={162} />
                        <FaHeart style={{ fontSize: "22px", color: "#007bff" }} className='absolute top-3 right-3' />
                    </div>
                    <p className='mt-[14px] font-medium text-[18px] leading-[21px]'>
                        Store name
                    </p>
                    <p className='mt-[5px] font-medium text-[18px] leading-[21px]'>
                        RS.100,000.00
                    </p>
                    <p className='mt-2.5 font-medium text-[14px] leading-4'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                    </p>
                    <button className='mt-5 w-[140px] h-[35px] rounded-[100px] bg-[#007BFF] text-white font-medium text-[14px] leading-4'>
                        Savatga qo'shish
                    </button>
                </div>
                <div className='w-[262px] h-[456px] rounded-[10px] flex flex-col'>
                    <div className='relative w-[262px] h-[262px] rounded-md flex justify-center items-center bg-slate-100'>
                        <img src={buyze} alt="logo" width={162} />
                        <FaHeart style={{ fontSize: "22px", color: "#007bff" }} className='absolute top-3 right-3' />
                    </div>
                    <p className='mt-[14px] font-medium text-[18px] leading-[21px]'>
                        Store name
                    </p>
                    <p className='mt-[5px] font-medium text-[18px] leading-[21px]'>
                        RS.100,000.00
                    </p>
                    <p className='mt-2.5 font-medium text-[14px] leading-4'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                    </p>
                    <button className='mt-5 w-[140px] h-[35px] rounded-[100px] bg-[#007BFF] text-white font-medium text-[14px] leading-4'>
                        Savatga qo'shish
                    </button>
                </div>
                <div className='w-[262px] h-[456px] rounded-[10px] flex flex-col'>
                    <div className='relative w-[262px] h-[262px] rounded-md flex justify-center items-center bg-slate-100'>
                        <img src={buyze} alt="logo" width={162} />
                        <FaHeart style={{ fontSize: "22px", color: "#007bff" }} className='absolute top-3 right-3' />
                    </div>
                    <p className='mt-[14px] font-medium text-[18px] leading-[21px]'>
                        Store name
                    </p>
                    <p className='mt-[5px] font-medium text-[18px] leading-[21px]'>
                        RS.100,000.00
                    </p>
                    <p className='mt-2.5 font-medium text-[14px] leading-4'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                    </p>
                    <button className='mt-5 w-[140px] h-[35px] rounded-[100px] bg-[#007BFF] text-white font-medium text-[14px] leading-4'>
                        Savatga qo'shish
                    </button>
                </div>
                <div className='w-[262px] h-[456px] rounded-[10px] flex flex-col'>
                    <div className='relative w-[262px] h-[262px] rounded-md flex justify-center items-center bg-slate-100'>
                        <img src={buyze} alt="logo" width={162} />
                        <FaHeart style={{ fontSize: "22px", color: "#007bff" }} className='absolute top-3 right-3' />
                    </div>
                    <p className='mt-[14px] font-medium text-[18px] leading-[21px]'>
                        Store name
                    </p>
                    <p className='mt-[5px] font-medium text-[18px] leading-[21px]'>
                        RS.100,000.00
                    </p>
                    <p className='mt-2.5 font-medium text-[14px] leading-4'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                    </p>
                    <button className='mt-5 w-[140px] h-[35px] rounded-[100px] bg-[#007BFF] text-white font-medium text-[14px] leading-4'>
                        Savatga qo'shish
                    </button>
                </div>
                <div className='w-[262px] h-[456px] rounded-[10px] flex flex-col'>
                    <div className='relative w-[262px] h-[262px] rounded-md flex justify-center items-center bg-slate-100'>
                        <img src={buyze} alt="logo" width={162} />
                        <FaHeart style={{ fontSize: "22px", color: "#007bff" }} className='absolute top-3 right-3' />
                    </div>
                    <p className='mt-[14px] font-medium text-[18px] leading-[21px]'>
                        Store name
                    </p>
                    <p className='mt-[5px] font-medium text-[18px] leading-[21px]'>
                        RS.100,000.00
                    </p>
                    <p className='mt-2.5 font-medium text-[14px] leading-4'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                    </p>
                    <button className='mt-5 w-[140px] h-[35px] rounded-[100px] bg-[#007BFF] text-white font-medium text-[14px] leading-4'>
                        Savatga qo'shish
                    </button>
                </div>
                <div className='w-[262px] h-[456px] rounded-[10px] flex flex-col'>
                    <div className='relative w-[262px] h-[262px] rounded-md flex justify-center items-center bg-slate-100'>
                        <img src={buyze} alt="logo" width={162} />
                        <FaHeart style={{ fontSize: "22px", color: "#007bff" }} className='absolute top-3 right-3' />
                    </div>
                    <p className='mt-[14px] font-medium text-[18px] leading-[21px]'>
                        Store name
                    </p>
                    <p className='mt-[5px] font-medium text-[18px] leading-[21px]'>
                        RS.100,000.00
                    </p>
                    <p className='mt-2.5 font-medium text-[14px] leading-4'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                    </p>
                    <button className='mt-5 w-[140px] h-[35px] rounded-[100px] bg-[#007BFF] text-white font-medium text-[14px] leading-4'>
                        Savatga qo'shish
                    </button>
                </div>
                <div className='w-[262px] h-[456px] rounded-[10px] flex flex-col'>
                    <div className='relative w-[262px] h-[262px] rounded-md flex justify-center items-center bg-slate-100'>
                        <img src={buyze} alt="logo" width={162} />
                        <FaHeart style={{ fontSize: "22px", color: "#007bff" }} className='absolute top-3 right-3' />
                    </div>
                    <p className='mt-[14px] font-medium text-[18px] leading-[21px]'>
                        Store name
                    </p>
                    <p className='mt-[5px] font-medium text-[18px] leading-[21px]'>
                        RS.100,000.00
                    </p>
                    <p className='mt-2.5 font-medium text-[14px] leading-4'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                    </p>
                    <button className='mt-5 w-[140px] h-[35px] rounded-[100px] bg-[#007BFF] text-white font-medium text-[14px] leading-4'>
                        Savatga qo'shish
                    </button>
                </div>
            </div> */}
            <TopCategories hidden={true}/>
            <Explore/>
        </div>
    )
}

export default Whishes