import { useEffect, useState } from "react"
import close from "../../assets/icons/close.svg"
import AddPhoto from "./AddPhoto"
import AddVideo from "./AddVideo"
import useStore from "../../store/useStore"
import { useLoginSchema } from '../../lib/Validation';
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io"
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import AuthService from "../../service/Auth"
import { useDispatch, useSelector } from "react-redux"
import { addProductSuccess, createShopFailure, createShopStart } from "../../slice/createShop"

const AddProduct = ({ setAddProduct, slug }) => {


    const { language } = useStore()

    const [data, setData] = useState()

    const [productSlug, setProductSlug] = useState("")

    const [text, setText] = useState("product")

    const [open, setOpen] = useState(false)

    const [subCategory, setSubcategory] = useState()

    const [categoryname, setCategoryName] = useState("")

    const { schemaProduct } = useLoginSchema()

    const [product, setProduct] = useState()

    const { isLoading } = useSelector((state) => state.shop)


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schemaProduct),
    });

    const onSubmit = (data) => {
        console.log('Form ma’lumotlari:', data);
        slug === undefined ? submit(data) : edit(data)
        setData(data)
    };

    const getProduct = async () => {

        try {
            const res = await AuthService.getProduct(slug)
            console.log(res)
            setProduct(res.data.results.product)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        slug !== undefined && getProduct()
    }, [slug])


    const dispatch = useDispatch()



    const submit = async (data) => {
        console.log("submit")
        const id = localStorage.getItem("shopId")



        dispatch(createShopStart())
        try {
            const res = await AuthService.addProduct({
                name: data.productName,
                shop: id,
                price: data.price,
                quantity: data.quantity,
                description: data.description,
                sub_category: subCategory
            })
            console.log(res)
            dispatch(addProductSuccess())
            setText("photo")
            setProductSlug(res.data.id)
        } catch (err) {
            dispatch(createShopFailure(err.response.data))
            console.log(err)

        }
    }

    const edit = async (data) => {
        const id = localStorage.getItem("shopId")

        dispatch(createShopStart())
        try {
            const res = await AuthService.updateProduct(slug, {
                name: data.productName,
                shop: id,
                price: data.price,
                quantity: data.quantity,
                description: data.description,
                sub_category: subCategory
            })
            console.log(res)
            dispatch(addProductSuccess())
            setText("photo")
        } catch (err) {
            dispatch(createShopFailure(err.response.data))
            console.log(err)

        }
    }




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
                    {/* <button name="video"
                        className={`font-medium text-base leading-[19px] ${text === "video" ? "text-[#007bff]" : "text-[#000]"}`}>
                        {language.AddVideo}
                    </button> */}
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
                                <input defaultValue={slug !== undefined ? product && product.name : ""} className='mt-4 w-full h-[45px] rounded-[10px] border border-[#a1a1a1] px-4'
                                    {...register('productName')} type="text" placeholder={language.ProductName} />
                                {errors.productName && <p className='text-[12px] text-red-500 text-left'>{errors.productName.message}</p>}
                            </div>
                            <div>
                                <input defaultValue={slug !== undefined ? product && product.quantity : ""}
                                    className='mt-4 h-[45px] rounded-[10px] border border-[#a1a1a1] px-4'
                                    {...register("quantity", { valueAsNumber: true })} type="number" min="0" placeholder="Mahsulot miqdori" />
                                {errors.quantity && <p className='text-[12px] text-red-500 text-left'>{errors.quantity.message}</p>}
                            </div>
                        </div>
                        <div className='mt-4 flex sm:flex-nowrap flex-wrap gap-5'>
                            <div onClick={() => setOpen(!open)} className='w-full relative h-[45px] rounded-[10px] border border-[#a1a1a1] px-4 flex justify-between items-center'>
                                <p className={`${categoryname === "" ? "text-[#BEBEBE]" : "text-black"}`}>
                                    {categoryname === "" ?
                                        language.ProductCategory :
                                        categoryname}
                                </p>
                                <button>
                                    {open ? <IoIosArrowDown style={{ color: "#bebebe" }} /> :
                                        <IoIosArrowForward style={{ color: "#bebebe" }} />}
                                </button>
                                {open &&
                                    <div className="absolute w-full top-11 left-0 px-5 py-3 rounded-md shadow shadow-gray-400 bg-white h-[200px] overflow-scroll">
                                        <button onClick={()=>{
                                            setSubcategory(6)
                                            setCategoryName("Avtotovarlar")
                                        }} className="px-2 py-1 hover:bg-slate-200 rounded-md">
                                            Avtotovarlar
                                        </button>
                                        <br />
                                        <button onClick={()=>{
                                            setSubcategory(7)
                                            setCategoryName("Bolalar tovarlari")
                                        }} className="px-2 py-1 hover:bg-slate-200 rounded-md">
                                            Bolalar tovarlari
                                        </button>
                                        <br />
                                        <button onClick={()=>{
                                            setSubcategory(8)
                                            setCategoryName("Go'zallik va parvarish")
                                        }}  className="px-2 py-1 hover:bg-slate-200 rounded-md">
                                            Go'zallik va parvarish
                                        </button>
                                        <br />
                                        <button onClick={()=>{
                                            setSubcategory(9)
                                            setCategoryName("Elektronika")
                                        }} className="px-2 py-1 hover:bg-slate-200 rounded-md">
                                            Elektronika
                                        </button>
                                        <br />
                                        <button onClick={()=>{
                                            setSubcategory(10)
                                            setCategoryName("Kiyim")
                                        }} className="px-2 py-1 hover:bg-slate-200 rounded-md">
                                            Kiyim
                                        </button>
                                        <br />
                                        <button onClick={()=>{
                                            setSubcategory(6)
                                            setCategoryName("Maishiy texnika")
                                        }} className="px-2 py-1 hover:bg-slate-200 rounded-md">
                                            Maishiy texnika
                                        </button>
                                        <br />
                                        <button onClick={()=>{
                                            setSubcategory(11)
                                            setCategoryName("Oziq-ovqat mahsulotlari")
                                        }} className="px-2 py-1 hover:bg-slate-200 rounded-md">
                                            Oziq-ovqat mahsulotlari
                                        </button>
                                        <br />
                                        <button onClick={()=>{
                                            setSubcategory(12)
                                            setCategoryName("Poyabzallar")
                                        }} className="px-2 py-1 hover:bg-slate-200 rounded-md">
                                            Poyabzallar
                                        </button>
                                        <br />
                                        <button onClick={()=>{
                                            setSubcategory(13)
                                            setCategoryName("Qurilish va ta'mirlash")
                                        }} className="px-2 py-1 hover:bg-slate-200 rounded-md">
                                            Qurilish va ta'mirlash
                                        </button>
                                        <br />
                                        <button onClick={()=>{
                                            setSubcategory(14)
                                            setCategoryName("Salomatlik")
                                        }} className="px-2 py-1 hover:bg-slate-200 rounded-md">
                                            Salomatlik
                                        </button>
                                        <br />
                                        <button onClick={()=>{
                                            setSubcategory(15)
                                            setCategoryName("Sport va hordiq")
                                        }} className="px-2 py-1 hover:bg-slate-200 rounded-md">
                                            Sport va hordiq
                                        </button>
                                        <br />
                                        <button onClick={()=>{
                                            setSubcategory(16)
                                            setCategoryName("Uy-ro'zg'or buyumlari")
                                        }} className="px-2 py-1 hover:bg-slate-200 rounded-md">
                                            Uy-ro'zg'or buyumlari
                                        </button>
                                        <br />
                                        <button onClick={()=>{
                                            setSubcategory(17)
                                            setCategoryName("Xobbi va ijod")
                                        }} className="px-2 py-1 hover:bg-slate-200 rounded-md">
                                            Xobbi va ijod
                                        </button>
                                        <br />
                                    </div>


                                }

                            </div>
                            <div className="w-full">
                                <input defaultValue={slug !== undefined ? product && product.price : ""}
                                    type="number" min="0" step="0.01" maxLength={15}
                                    className=' w-full h-[45px] rounded-[10px] border border-[#a1a1a1] px-4'
                                    {...register('price')} placeholder={language.ProductPrice} />
                                {errors.price && <p className='text-[12px] text-red-500 text-left'>{errors.price.message}</p>}
                            </div>
                        </div>
                        <textarea defaultValue={slug !== undefined ? product && product.description : ""}
                            placeholder={language.ProductDescription} {...register('description')}
                            className='mt-4 w-full h-[223px] p-3 rounded-[10px] border border-[#a1a1a1]' />
                        {errors.description && <p className='text-[12px] text-red-500 text-left'>{errors.description.message}</p>}
                        <div className='mt-[22px] flex items-center justify-end gap-[30px]'>
                            <button onClick={handleSubmit(onSubmit)}
                                className='w-[262px] h-[45px] rounded-[10px] bg-[#007bff] text-white font-bold text-base leading-[19px]'>
                                {isLoading ?
                                    <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                    </svg> :
                                    language.Publish}
                            </button>
                            <button onClick={() => setAddProduct(false)}
                                className='w-[262px] h-[45px] rounded-[10px] border border-[#007bff] text-[#007bff] bg-white font-bold text-base leading-[19px]'>
                                {language.Cancel}
                            </button>
                        </div>
                    </>}
                {text === "photo" && <AddPhoto slug={slug} productSlug={productSlug} setAddProduct={setAddProduct} />}
                {text === "video" && <AddVideo data={data} subCategory={subCategory} slug={slug} setText={setText} setProductSlug={setProductSlug} />}
            </div>
        </div>
    )
}

export default AddProduct