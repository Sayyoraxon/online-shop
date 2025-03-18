import { useState } from "react"
import close from "../../assets/icons/close.svg"
import AddPhoto from "./AddPhoto"
import AddVideo from "./AddVideo"
import useStore from "../../store/useStore"
import { useLoginSchema } from '../../lib/Validation';
import { IoIosArrowDown } from "react-icons/io"
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const AddProduct = ({ setAddProduct, slug }) => {


    const { language } = useStore()

    const [data, setData] = useState()

    const [text, setText] = useState("product")

    const [open, setOpen] = useState(false)

    const [subCategory, setSubcategory] = useState()

    const [categoryname, setCategoryName] = useState("")

    const { schemaProduct } = useLoginSchema()


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schemaProduct),
    });

    const onSubmit = (data) => {
        console.log('Form ma’lumotlari:', data);
        setText("video")
        setData(data)
    };

    console.log(errors)


    return (
        <div className='w-screen h-screen absolute top-0 left-0 backdrop-blur-[20px] z-20 flex justify-center items-center'>
            <div className='relative w-[1088px] h-auto rounded-[15px] bg-white shadow-md shadow-gray-400 py-8 px-[54px]'>
                <button onClick={() => setAddProduct(false)}
                    className="absolute right-[54px]">
                    <img
                        src={close} alt="close" width={25} height={25} />
                </button>
                <div className='pl-[30px] w-full flex gap-[30px]'>
                    <button
                        className={`font-medium text-base leading-[19px] ${text === "product" ? "text-[#007bff]" : "text-[#000]"}`}>
                        {slug !== undefined ? language.EditProduct : language.AddProduct}
                    </button>
                    <button name="video"
                        className={`font-medium text-base leading-[19px] ${text === "video" ? "text-[#007bff]" : "text-[#000]"}`}>
                        {language.AddVideo}
                    </button>
                    <button name="photo"
                        className={`font-medium text-base leading-[19px] ${text === "photo" ? "text-[#007bff]" : "text-[#000]"}`}>
                        {language.AddPhoto}
                    </button>
                </div>
                {text === "product" &&
                    <>
                        <p className='mt-[57px] font-medium text-[32px] leading-[38px] text-center'>
                        {slug !== undefined ? language.EditProduct : language.AddProduct}
                        </p>
                        <div className="w-full flex sm:flex-nowrap flex-wrap gap-4">
                            <div className="w-full">
                                <input className='mt-4 w-full h-[45px] rounded-[10px] border border-[#a1a1a1] px-4'
                                    {...register('productName')} type="text" placeholder={language.ProductName} />
                                {errors.productName && <p className='text-[12px] text-red-500 text-left'>{errors.productName.message}</p>}
                            </div>
                            <div>
                                <input className='mt-4 h-[45px] rounded-[10px] border border-[#a1a1a1] px-4'
                                    {...register("quantity", { valueAsNumber: true })} type="number" placeholder="Mahsulot miqdori" />
                                {errors.quantity && <p className='text-[12px] text-red-500 text-left'>{errors.quantity.message}</p>}
                            </div>
                        </div>
                        <div className='mt-4 flex sm:flex-nowrap flex-wrap gap-5'>
                            <div className='w-full relative h-[45px] rounded-[10px] border border-[#a1a1a1] px-4 flex justify-between items-center'>
                                <p className={`${categoryname === "" ? "text-[#BEBEBE]" : "text-black"}`}>
                                    {categoryname === "" ?
                                        language.ProductCategory :
                                        categoryname}
                                </p>
                                <button onClick={() => setOpen(!open)}>
                                    <IoIosArrowDown style={{ color: "#bebebe" }} />
                                </button>
                                {open &&
                                    <div className="absolute left-0 top-[44px] px-5 py-3 rounded-md shadow-md shadow-gray-400 bg-white flex flex-col gap-1">
                                        <button onClick={() => {
                                            setOpen(false)
                                            setSubcategory(1)
                                            setCategoryName("Maishiy texnika")
                                        }} className="text-left">
                                            Maishiy texnika
                                        </button>
                                        <button onClick={() => {
                                            setOpen(false)
                                            setSubcategory(2)
                                            setCategoryName("Elektronika")
                                        }} className="text-left">
                                            Elektronika
                                        </button>
                                        <button onClick={() => {
                                            setOpen(false)
                                            setSubcategory(3)
                                            setCategoryName("Kiyim")
                                        }} className="text-left">
                                            Kiyim
                                        </button>
                                    </div>}

                            </div>
                            <div className="w-full">
                                <input className=' w-full h-[45px] rounded-[10px] border border-[#a1a1a1] px-4'
                                    {...register('price')} type="text" placeholder={language.ProductPrice} />
                                {errors.price && <p className='text-[12px] text-red-500 text-left'>{errors.price.message}</p>}
                            </div>
                        </div>
                        <textarea placeholder={language.ProductDescription} {...register('description')}
                            className='mt-4 w-full h-[223px] p-3 rounded-[10px] border border-[#a1a1a1]' />
                        {errors.description && <p className='text-[12px] text-red-500 text-left'>{errors.description.message}</p>}
                        <div className='mt-[22px] flex items-center justify-end gap-[30px]'>
                            <button onClick={handleSubmit(onSubmit)}
                                className='w-[262px] h-[45px] rounded-[10px] bg-[#007bff] text-white font-bold text-base leading-[19px]'>
                                {language.Publish}
                            </button>
                            <button className='w-[262px] h-[45px] rounded-[10px] border border-[#007bff] text-[#007bff] bg-white font-bold text-base leading-[19px]'>
                                {language.Cancel}
                            </button>
                        </div>
                    </>}
                {text === "photo" && <AddPhoto slug={slug}/>}
                {text === "video" && <AddVideo data={data} subCategory={subCategory} slug={slug}  setText={setText}/>}
            </div>
        </div>
    )
}

export default AddProduct