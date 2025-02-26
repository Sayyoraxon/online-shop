import vector from "../../assets/icons/vector.svg"
import plus from "../../assets/icons/plus1.svg"
import { useState } from "react"
import Products from "../../components/product/Products"
import AddProduct from "../../components/product/AddProduct"
import useStore from "../../store/useStore"
import { late } from "zod"

const Product = () => {

  const [category, setCategory] = useState(false)
  const [addProduct, setAddProduct] = useState(false)

  const {language} = useStore()

  return (
    <>
      {addProduct && <AddProduct setAddProduct={setAddProduct}/>}
      <div className='py-8 px-6 h-screen overflow-scroll'>
        <p className='font-medium text-[24px] leading-[29px]'>
          {language.Products}
        </p>
        <div className='mt-[29px] flex gap-10 justify-end items-end'>
          <input type="text" placeholder={language.SearchProduct}
            className='w-[335px] h-10 px-5 rounded-[9px] border border-[#6f6f6f] text-base leading-[19px] text-[#6f6f6f]' />
          <div className='relative flex px-5 justify-between gap-5 items-center h-[42px] rounded-[9px] border border-[#6f6f6f]'>
            <p className='font-medium text-base leading-[19px] text-[#6f6f6f]'>
              {language.FilterByCategory}
            </p>
            <button onClick={() => setCategory(!category)}>
              <img src={vector} alt="vector" width={15} height={7} />
            </button>
            {category && <div className="absolute left-0 top-12 rounded-md p-2 shadow-md bg-white">
              <p className="p-1 border-b text-[#6f6f6f]">
              {language.FilterByCategory}
              </p>
              <p className="p-1 border-b text-[#6f6f6f]">
              {language.FilterByCategory}
              </p>
              <p className="p-1 border-b text-[#6f6f6f]">
              {language.FilterByCategory}
              </p>
            </div>}
          </div>
          <button onClick={()=>setAddProduct(true)}
           className=" h-11 flex px-5 justify-between items-center gap-5 rounded-[9px] bg-[#007BFF] text-white font-medium text-base leading-[19px]">
            {language.AddNewProduct}
            <img src={plus} alt="ALT" />
          </button>
        </div>
        <Products />
      </div>
    </>
  )
}

export default Product