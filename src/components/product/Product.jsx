import { useState } from "react"
import arr from "../../assets/icons/left.svg"
import AddProduct from "./AddProduct"

const Product = ({ product }) => {

    const [open, setOpen] = useState(false)
    const [addProduct, setAddProduct] = useState(false)

    return (
        <>
            {addProduct && <AddProduct setAddProduct={setAddProduct} slug={product.slug}/>}
            <div key={product.slug} className=" relative px-5 mt-2.5 flex items-center h-[49px] rounded-[10px] border border-gray-400 shadow-md">
                <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
                    {product.id}
                </p>
                <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
                    {product.name}
                </p>
                <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
                    {product.sub_category}
                </p>
                <p className="w-2/12 text-[14px] leading-[17px] text-gray-500">
                    {product.quantity}
                </p>
                <p className="w-2/12 text-[14px] leading-[17px] text-gray-500">
                    {product.price}
                </p>
                <div className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500 flex justify-between items-center">
                    <div className="w-[94px] h-[29px] rounded-md border border-[#28D764] text-[#28D764] flex justify-center items-center">
                        Live
                    </div>
                    <button onClick={() => setOpen(!open)}>
                        <img src={arr} alt="left" />
                    </button>

                    {open && <div className="absolute bg-white top-10 -right-6 z-10 rounded-md p-2 shadow-md shadow-gray-400">
                        <button onClick={()=>{
                            setAddProduct(true)
                            setOpen(false)
                            }} className="text-[14px] text-black">
                            Tahrirlash
                        </button>
                        <br />
                        <button className="mt-2 text-[14px] text-black">
                            Fikr mulohazalar
                        </button>
                    </div>}

                </div>
            </div>
        </>
    )
}

export default Product