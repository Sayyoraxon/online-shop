import React, { useEffect, useState } from 'react'
import buyze from "../../assets/icons/logo.png"
import { FaStar } from 'react-icons/fa6'
import chat from "../../assets/icons/shopping-cart.svg"
import AuthService from '../../service/Auth'
import { useParams } from 'react-router'

const ProductDetail = () => {

  const { id } = useParams()

  console.log(id)

  const [product, setProduct] = useState()


  const getProduct = async () => {
    try {
      const res = await AuthService.getProduct(id)
      console.log(res)
      setProduct(res.data.results.product)
    } catch (err) {
      console.log(err)
    }
  }

  console.log(product)

  useEffect(() => {
    getProduct()
  }, [id])



  return (
    <div className='mt-[35px] w-full pb-[50px]'>
      <div className='flex gap-5 md:flex-nowrap flex-wrap'>
        <div>
          <div className='w-[450px] h-[450px] rounded-md bg-gray-200 flex justify-center items-center'>
            <img src={buyze} alt="product" />
          </div>
          <div className='mt-5 flex justify-between'>
            <div className='w-[74px] h-[74px] rounded-sm bg-gray-200 flex justify-center items-center'>
              <img src={buyze} alt="product" width={60} />
            </div>
            <div className='w-[74px] h-[74px] rounded-sm bg-gray-200 flex justify-center items-center'>
              <img src={buyze} alt="product" width={60} />
            </div>
            <div className='w-[74px] h-[74px] rounded-sm bg-gray-200 flex justify-center items-center'>
              <img src={buyze} alt="product" width={60} />
            </div>
            <div className='w-[74px] h-[74px] rounded-sm bg-gray-200 flex justify-center items-center'>
              <img src={buyze} alt="product" width={60} />
            </div>
            <div className='w-[74px] h-[74px] rounded-sm bg-gray-200 flex justify-center items-center'>
              <img src={buyze} alt="product" width={60} />
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-between'>
          <div>
            <p className='font-medium text-[20px]'>
              {product && product.shop_name}
              <span className='ml-4 px-2 py-1 text-base rounded-[5px] bg-[#B3F594]'>
                9.8DR
              </span>
            </p>
            <p className='mt-2 font-medium text-[32px]'>
              {product && product.name}
            </p>
          </div>
          <p className='font-medium text-[32px]'>
            {`${product && product.price} so'm`} <span className='font-normal text-base'>Dona boshiga</span>
          </p>
          <div>
            <p className='font-medium text-base'>
              Mahsulot reytingi
            </p>
            <div className='mt-2.5 flex gap-2.5'>
              <FaStar style={{ fontSize: "25px", color: "#FFC05C" }} />
              <FaStar style={{ fontSize: "25px", color: "#FFC05C" }} />
              <FaStar style={{ fontSize: "25px", color: "#FFC05C" }} />
              <FaStar style={{ fontSize: "25px", color: "#FF9C00", opacity: "0.2" }} />
              <FaStar style={{ fontSize: "25px", color: "#FF9C00", opacity: "0.2" }} />
            </div>
          </div>
          <div>
            <p className='font-medium text-[24px]'>
              Tavsif
            </p>
            <p className='mt-2.5 font-medium text-[14px]'>
              {product && product.description}
            </p>
          </div>
          <div className='flex flex-wrap items-center gap-3'>
            <button className='w-[356px] h-[74px] rounded-md bg-[#FFB644] flex justify-center items-center gap-[25px]'>
              <p className='font-medium text-[24px] text-white'>
                Savatga qo'shish
              </p>
              <img src={chat} alt="chat" />
            </button>
            <button className='font-medium text-base text-[#007bff] hover:underline'>
              Mahsulot haqida xabar berish
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <p className='font-medium text-[24px]'>
          Category Name
        </p>
        <div className='mt-[30px] w-full flex flex-wrap justify-between items-center gap-5'>
          <div className='w-[262px] h-[456px] rounded-[10px] flex flex-col'>
            <div className='w-[262px] h-[262px] rounded-md flex justify-center items-center bg-slate-100'>
              <img src={buyze} alt="logo" width={162} />
            </div>
            <p className='mt-[14px] font-medium text-[18px] leading-[21px]'>
              Store name
            </p>
            <p className='mt-[5px] font-medium text-[18px] leading-[21px]'>
              RS.100,000.00
            </p>
            <button className='mt-5 w-[116px] h-[35px] rounded-[100px] bg-[#007BFF] text-white font-medium text-[14px] leading-4'>
              View the Store
            </button>
          </div>
          <div className='w-[262px] h-[456px] rounded-[10px] flex flex-col'>
            <div className='w-[262px] h-[262px] rounded-md flex justify-center items-center bg-slate-100'>
              <img src={buyze} alt="logo" width={162} />
            </div>
            <p className='mt-[14px] font-medium text-[18px] leading-[21px]'>
              Store name
            </p>
            <p className='mt-[5px] font-medium text-[18px] leading-[21px]'>
              RS.100,000.00
            </p>
            <button className='mt-5 w-[116px] h-[35px] rounded-[100px] bg-[#007BFF] text-white font-medium text-[14px] leading-4'>
              View the Store
            </button>
          </div>
          <div className='w-[262px] h-[456px] rounded-[10px] flex flex-col'>
            <div className='w-[262px] h-[262px] rounded-md flex justify-center items-center bg-slate-100'>
              <img src={buyze} alt="logo" width={162} />
            </div>
            <p className='mt-[14px] font-medium text-[18px] leading-[21px]'>
              Store name
            </p>
            <p className='mt-[5px] font-medium text-[18px] leading-[21px]'>
              RS.100,000.00
            </p>
            <button className='mt-5 w-[116px] h-[35px] rounded-[100px] bg-[#007BFF] text-white font-medium text-[14px] leading-4'>
              View the Store
            </button>
          </div>
          <div className='w-[262px] h-[456px] rounded-[10px] flex flex-col'>
            <div className='w-[262px] h-[262px] rounded-md flex justify-center items-center bg-slate-100'>
              <img src={buyze} alt="logo" width={162} />
            </div>
            <p className='mt-[14px] font-medium text-[18px] leading-[21px]'>
              Store name
            </p>
            <p className='mt-[5px] font-medium text-[18px] leading-[21px]'>
              RS.100,000.00
            </p>
            <button className='mt-5 w-[116px] h-[35px] rounded-[100px] bg-[#007BFF] text-white font-medium text-[14px] leading-4'>
              View the Store
            </button>
          </div>
        </div>
      </div>

      <div>
        <p className='font-medium text-[24px] leading-[29px]'>
          Savdo mahsulotlari
        </p>
        <div className='mt-[30px] flex flex-wrap gap-5'>
          <div className='relative w-[544px] h-[325px] rounded-[15px] bg-[#D9D9D9] overflow-hidden'>
            <p className='w-full absolute bottom-0 px-5 py-[38px] bg-[#A9A9A9]'>
              Product Category
            </p>
          </div>
          <div className='relative w-[544px] h-[325px] rounded-[15px] bg-[#D9D9D9] overflow-hidden'>
            <p className='w-full absolute bottom-0 px-5 py-[38px] bg-[#A9A9A9]'>
              Product Category
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductDetail