import { useState } from "react"
import plus from "../../assets/icons/plus1.svg"
import close from "../../assets/icons/close.svg"
import AddPhoto from "./AddPhoto"
import AddVideo from "./AddVideo"
import useStore from "../../store/useStore"

const AddProduct = ({setAddProduct}) => {

    const {language} = useStore()

    const [text, setText] = useState("product") 

    console.log(text)


    return (
        <div className='w-screen h-screen absolute top-0 left-0 backdrop-blur-[20px] z-20 flex justify-center items-center'>
            <div className='relative w-[1088px] h-[646px] rounded-[15px] bg-white shadow-md shadow-gray-400 py-8 px-[54px]'>
                <button onClick={()=>setAddProduct(false)}
                className="absolute right-[54px]">
                <img
                src={close} alt="close" width={25} height={25}/>
                </button>
                <div className='pl-[30px] w-full flex gap-[30px]'>
                    <button name="product" onClick={(e)=>setText(e.target.name)}
                    className={`font-medium text-base leading-[19px] ${text==="product" ? "text-[#007bff]" : "text-[#000]"}`}>
                        {language.AddProduct}
                    </button>
                    <button name="photo" onClick={(e)=>setText(e.target.name)}
                    className={`font-medium text-base leading-[19px] ${text==="photo" ? "text-[#007bff]" : "text-[#000]"}`}>
                        {language.AddPhoto}
                    </button>
                    <button name="video" onClick={(e)=>setText(e.target.name)}
                    className={`font-medium text-base leading-[19px] ${text==="video" ? "text-[#007bff]" : "text-[#000]"}`}>
                        {language.AddVideo}
                    </button>
                </div>
                {text==="product" && 
                <>
                    <p className='mt-[57px] font-medium text-[32px] leading-[38px] text-center'>
                        {language.AddProduct}
                    </p>
                    <input className='mt-5 w-full h-[45px] rounded-[10px] border border-[#a1a1a1] px-4'
                        type="text" placeholder={language.ProductName} />
                    <div className='mt-[28px] flex gap-5'>
                        <input className=' w-full h-[45px] rounded-[10px] border border-[#a1a1a1] px-4'
                            type="text" />
                        <input className=' w-full h-[45px] rounded-[10px] border border-[#a1a1a1] px-4'
                            type="text" />
                    </div>
                    <textarea placeholder={language.ProductDescription}
                        className='mt-[26px] w-full h-[223px] p-3 rounded-[10px] border border-[#a1a1a1]' />
                    <div className='mt-[22px] flex items-center justify-end gap-[30px]'>
                        <button className='w-[45px] h-[45px] rounded-[10px] bg-[#007bff]'>
                            <img className="mx-auto"
                                src={plus} alt="plus" width={21} height={21} />
                        </button>
                        <button className='w-[262px] h-[45px] rounded-[10px] bg-[#007bff] text-white font-bold text-base leading-[19px]'>
                            {language.Publish}
                        </button>
                        <button className='w-[262px] h-[45px] rounded-[10px] border border-[#007bff] text-[#007bff] bg-white font-bold text-base leading-[19px]'>
                            {language.Cancel}
                        </button>
                    </div>
                </>}
                {text === "photo" && <AddPhoto/>}
                {text === "video" && <AddVideo/>}
            </div>
        </div>
    )
}

export default AddProduct