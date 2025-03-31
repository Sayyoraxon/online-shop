import vector from "../../assets/icons/vector.svg"
import plus from "../../assets/icons/plus1.svg"
import { useState } from "react"
import Products from "../../components/product/Products"
import AddProduct from "../../components/product/AddProduct"
import useStore from "../../store/useStore"

const Product = ({products}) => {

  const [category, setCategory] = useState(false)
  const [addProduct, setAddProduct] = useState(false)
  const [search, setSearch] = useState("")
  const [subcategory, setSubcategory] = useState(null)

  const {language} = useStore()

  console.log(products)

  return (
    <>
      {addProduct && <AddProduct setAddProduct={setAddProduct}/>}
      <div className='py-8 px-6 h-screen overflow-scroll'>
        <p className='font-medium text-[24px] leading-[29px]'>
          {language.Products}
        </p>
        <div className='mt-[29px] flex sm:flex-nowrap flex-wrap gap-x-10 gap-y-5 justify-end items-end'>
          <input onChange={(e)=>setSearch(e.target.value)} type="search" placeholder={language.SearchProduct}
            className='sm:w-[335px] w-full h-10 px-5 rounded-[9px] border border-[#6f6f6f] text-base leading-[19px] text-[#6f6f6f]' />
          <div onClick={() => setCategory(!category)} className='sm:w-auto w-full relative flex px-5 justify-between gap-5 items-center h-[42px] rounded-[9px] border border-[#6f6f6f] bg-white'>
            <p className='font-medium text-base leading-[19px] text-[#6f6f6f]'>
              {language.FilterByCategory}
            </p>
            <button>
              <img src={vector} alt="vector" width={15} height={7} />
            </button>
            {category && <div className="absolute left-0 top-12 rounded-md p-2 shadow-md bg-white z-30">
            <button onClick={()=>setSubcategory(null)} className="w-full text-left p-1 border-b text-[#6f6f6f]">
                Barchasi
              </button>
              <button onClick={()=>setSubcategory(6)} className="w-full text-left p-1 border-b text-[#6f6f6f]">
                Avtotovarlar
              </button>
              <button onClick={()=>setSubcategory(7)}  className="w-full text-left p-1 border-b text-[#6f6f6f]">
                Bolalar tovarlari
              </button>
              <button onClick={()=>setSubcategory(8)}  className="w-full text-left p-1 border-b text-[#6f6f6f]">
                Go'zallik va parvarish
              </button>
              <button onClick={()=>setSubcategory(9)} className="w-full text-left p-1 border-b text-[#6f6f6f]">
                Elektronika
              </button>
              <button onClick={()=>setSubcategory(10)}  className="w-full text-left p-1 border-b text-[#6f6f6f]">
                Kiyim
              </button>
              <button onClick={()=>setSubcategory(11)} className="w-full text-left p-1 border-b text-[#6f6f6f]">
                Maishiy texnika
              </button>
              <button onClick={()=>setSubcategory(12)} className="w-full text-left p-1 border-b text-[#6f6f6f]">
                Oziq-ovqat mahsulotlari
              </button>
              <button onClick={()=>setSubcategory(13)} className="w-full text-left p-1 border-b text-[#6f6f6f]">
                Poyabzallar
              </button>
              <button onClick={()=>setSubcategory(14)} className="w-full text-left p-1 border-b text-[#6f6f6f]">
                Qurilish va ta'mirlash
              </button>
              <button onClick={()=>setSubcategory(15)} className="w-full text-left p-1 border-b text-[#6f6f6f]">
                Salomatlik
              </button>
              <button onClick={()=>setSubcategory(16)} className="w-full text-left p-1 border-b text-[#6f6f6f]">
                Sport va hordiq
              </button>
              <button onClick={()=>setSubcategory(17)} className="w-full text-left p-1 border-b text-[#6f6f6f]">
                Uy-ro'zg'or buyumlari
              </button>
              <button onClick={()=>setSubcategory(18)} className="w-full text-left p-1 text-[#6f6f6f]">
                Xobbi va ijod
              </button>
            </div>}
          </div>
          <button onClick={()=>setAddProduct(true)}
           className="sm:w-auto w-full h-11 flex px-5 justify-between items-center gap-5 rounded-[9px] bg-[#007BFF] text-white font-medium text-base leading-[19px]">
            {language.AddNewProduct}
            <img src={plus} alt="ALT" />
          </button>
        </div>
        <Products products={products} search={search} subcategory={subcategory}/>
      </div>
    </>
  )
}

export default Product