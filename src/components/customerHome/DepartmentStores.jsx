import React from 'react'
import { NavLink } from 'react-router'
import buyze from '../../assets/icons/logo.png'

const DepartmentStores = ({ products }) => {

    console.log(products)

    return (
        <div className='w-full mt-[30px]'>
            <p className='font-medium text-[24px] leading-[29px]'>
                Univermaklar
            </p>
            <div className='mt-[30px] w-full flex flex-wrap justify-between items-center gap-5'>
                {
                    products &&
                    products.map((product) => (
                        <NavLink to={`product/${product.slug}`} key={product.slug} className='w-[262px] h-[456px] rounded-[10px] flex flex-col'>
                            <div className='w-[262px] h-[262px] rounded-md flex justify-center items-center bg-slate-100'>
                                <img src={buyze} alt="logo" width={162} />
                            </div>
                            <p className='mt-[14px] font-medium text-[18px] leading-[21px]'>
                                {product.name}
                            </p>
                            <p className='mt-[5px] font-medium text-[18px] leading-[21px]'>
                                {product.price}
                            </p>
                            {/* <p className='mt-2.5 font-medium text-[14px] leading-4'>
                        {product.name}
                    </p> */}
                            <button className='mt-5 w-[130px] h-[35px] rounded-[100px] bg-[#007BFF] text-white font-medium text-[14px] leading-4'>
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