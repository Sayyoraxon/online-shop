import React from 'react'
import { NavLink } from 'react-router'
import buyze from '../../assets/icons/logo.png'

const DepartmentStores = ({ products, search }) => {

    console.log(products)

    return (
        <div className='w-full mt-[30px]'>
            <p className='font-medium text-[24px] leading-[29px]'>
                Univermaklar
            </p>
            <div className='mt-[30px] w-full flex flex-wrap justify-between items-center gap-5'>
                {
                    search === "" ? products &&
                    products.map((product) => (
                        <NavLink to={`product/${product.slug}`} key={product.slug} className='w-[262px] h-[406px] rounded-[10px] flex flex-col shadow-md'>
                            <div className='w-[262px] h-[262px] rounded-md flex justify-center items-center bg-slate-100 overflow-hidden'>
                                <img src={`https://buyze.uz${product.image_url_list[0]}`} alt="logo"
                                    className='w-full h-full object-cover rounded-[10px] transition-transform duration-300 hover:scale-110' />
                            </div>
                            <p className='mt-[14px] font-medium text-[18px] leading-[21px] px-4'>
                                {product.name}
                            </p>
                            <p className='mt-[5px] font-medium text-[18px] leading-[21px] px-4'>
                                {product.price}
                            </p>
                            {/* <p className='mt-2.5 font-medium text-[14px] leading-4'>
                        {product.name}
                    </p> */}
                            <button className='mt-5 mx-4 w-[130px] h-[35px] rounded-[100px] bg-[#007BFF] text-white font-medium text-[14px] leading-4'>
                                Do'konga o'ting
                            </button>
                        </NavLink>
                    ))
                    :
                    
                        products
                        .filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
                        .map((product) => (
                            <NavLink to={`product/${product.slug}`} key={product.slug} className='w-[262px] h-[406px] rounded-[10px] flex flex-col shadow-md'>
                            <div className='w-[262px] h-[262px] rounded-md flex justify-center items-center bg-slate-100 overflow-hidden'>
                                <img src={`https://buyze.uz${product.image_url_list[0]}`} alt="logo"
                                    className='w-full h-full object-cover rounded-[10px] transition-transform duration-300 hover:scale-110' />
                            </div>
                            <p className='mt-[14px] font-medium text-[18px] leading-[21px] px-4'>
                                {product.name}
                            </p>
                            <p className='mt-[5px] font-medium text-[18px] leading-[21px] px-4'>
                                {product.price}
                            </p>
                            {/* <p className='mt-2.5 font-medium text-[14px] leading-4'>
                        {product.name}
                    </p> */}
                            <button className='mt-5 mx-4 w-[130px] h-[35px] rounded-[100px] bg-[#007BFF] text-white font-medium text-[14px] leading-4'>
                                Do'konga o'ting
                            </button>
                        </NavLink>
                        ))
                }

            </div>
        </div>
    )
}

export default DepartmentStores