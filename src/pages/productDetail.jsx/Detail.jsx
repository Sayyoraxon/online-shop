import { FaBars } from "react-icons/fa6";
import ProductDetail from "../../components/productDetail/ProductDetail";
import { useEffect, useState } from "react";
import Comments from "./Comments";
import { useParams } from "react-router";
import AuthService from "../../service/Auth";

const Detail = () => {

    const [categories, setCategories] = useState(false)
    const { id } = useParams()

    console.log(id)

    const [product, setProduct] = useState()
    const [productImage, setProductImage] = useState()
    const [comments, setComments] = useState()
    const [commentsOpen, setCommentsOpen] = useState(false)

    const getProduct = async () => {
        try {
            const res = await AuthService.getProduct(id)
            console.log(res)
            setProduct(res.data.results.product)
            setComments(res.data.results.comments)
            setProductImage(res.data.results.product.image_url_list[0])
        } catch (err) {
            console.log(err)
        }
    }

    console.log(product)

    useEffect(() => {
        getProduct()
    }, [id])

    return (
        <div className='w-full'>
            {commentsOpen && <Comments comments={comments} product={product} setCommentsOpen={setCommentsOpen}/>}
            <div className='w-full mt-2.5 h-[45px] flex justify-between items-center'>
                <div className='relative flex items-center gap-5'>
                    <button onClick={() => setCategories(!categories)}>
                        <FaBars style={{ fontSize: "30px" }} />
                    </button>

                    <p className='text-[18px]'>
                        Turkumlar
                    </p>
                    {categories &&
                        <div className="absolute w-[220px] top-10 px-5 py-3 rounded-md shadow shadow-gray-400 bg-white">
                            <button className="px-2 py-1 hover:bg-slate-200 rounded-md">
                                Elektronika
                            </button>
                            <br />
                            <button className="px-2 py-1 hover:bg-slate-200 rounded-md">
                                Maishiy texnika
                            </button>
                            <br />
                            <button className="px-2 py-1 hover:bg-slate-200 rounded-md">
                                Kiyim
                            </button>
                            <br />
                            <button className="px-2 py-1 hover:bg-slate-200 rounded-md">
                                Poyabzallar
                            </button>
                            <br />
                            <button className="px-2 py-1 hover:bg-slate-200 rounded-md">
                                Go'zallik va parvarish
                            </button>
                            <br />
                            <button className="px-2 py-1 hover:bg-slate-200 rounded-md">
                                Salomatlik
                            </button>
                            <br />
                            <button className="px-2 py-1 hover:bg-slate-200 rounded-md">
                                Uy-ro'rg'or buyumlari
                            </button>
                            <br />
                            <button className="px-2 py-1 hover:bg-slate-200 rounded-md">
                                Qurilish va ta'mirlash
                            </button>
                            <br />
                            <button className="px-2 py-1 hover:bg-slate-200 rounded-md">
                                Qurilish va ta'mirlash
                            </button>
                            <br />
                            <button className="px-2 py-1 hover:bg-slate-200 rounded-md">
                                Avtotovarlar
                            </button>
                            <br />
                            <button className="px-2 py-1 hover:bg-slate-200 rounded-md">
                                Bolalar tovarlari
                            </button>
                            <br />
                            <button className="px-2 py-1 hover:bg-slate-200 rounded-md">
                                Xobbi va ijod
                            </button>
                            <br />
                            <button className="px-2 py-1 hover:bg-slate-200 rounded-md">
                                Sport va hordiq
                            </button>
                            <br />
                        </div>}
                </div>
                <div className='p-[5px] flex justify-between w-[544px] h-[45px] rounded-[100px]' style={{ backgroundColor: "rgba(0,0,0,0.2)" }}>
                    <input type='search' placeholder='Doʻkon yoki mahsulotni qidiring'
                        className='w-full bg-transparent px-3 text-[14px] text-white placeholder:text-white' />
                    <button className='w-[100px] h-[35px] rounded-[100px] bg-[#007BFF] text-[14px] text-white'>
                        Qidiring
                    </button>
                </div>
            </div>
            <ProductDetail product={product} productImage={productImage} setProductImage={setProductImage} setCommentsOpen={setCommentsOpen}/>
        </div>
    )
}

export default Detail