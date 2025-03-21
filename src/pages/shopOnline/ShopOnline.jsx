import React from 'react'
import brand from "../../assets/image/brand.png"
import logo from "../../assets/icons/logo.png"
import { FaStar } from 'react-icons/fa6'
import CategoryName from '../../components/shopOnline/CategoryName'
import ChoosByShops from '../../components/shopOnline/ChoosByShops'
import ExploreMore from '../../components/shopOnline/ExploreMore'

const ShopOnline = () => {
  return (
    <div className='max-w-[1108px] mx-auto'>
        <img src={brand} alt="brand"/>
        <div className='relative mt-5 w-1/2 flex justify-between ml-auto'>
        <div className='absolute w-[265px] h-[265px] rounded-full bg-gray-200 -left-[320px] -bottom-[100px] flex justify-center items-center'>
            <img src={logo} alt="logo" width={180}/>
        </div>
            <div>
                <p className='font-medium text-[32px]'>
                    Store Name 
                    <span className='ml-4 px-2 py-1 text-base rounded-[5px] bg-[#B3F594]'>
                        9.8DR
                    </span>
                </p>
                <div className='mt-2.5 flex gap-2.5'>
                    <FaStar style={{fontSize: "25px", color: "#FFC05C"}}/>
                    <FaStar style={{fontSize: "25px", color: "#FFC05C"}}/>
                    <FaStar style={{fontSize: "25px", color: "#FFC05C"}}/>
                    <FaStar style={{fontSize: "25px", color: "#FF9C00", opacity: "0.2"}}/>
                    <FaStar style={{fontSize: "25px", color: "#FF9C00", opacity: "0.2"}}/>
                </div>
            </div>
            <button className='font-medium text-[20px] text-[#007BFF] underline'>
                Bu haqda xabar bering
            </button>
        </div>
        <CategoryName/>
        <ChoosByShops/>
        <ExploreMore/>
    </div>
  )
}

export default ShopOnline