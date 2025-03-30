import React, { useEffect, useState } from 'react'
import buyze from '../../assets/icons/logo.png'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from 'react-router';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';

const NewsSeccion = ({products, search}) => {

    const [price, setPrice] = useState(1000000)

    const [category, setCategory] = useState("")

    const [categories, setCategories] = useState(true)
    //const [city, setCity] = useState(true)

    const [likes, setLikes] = useState([]);

    // LocalStorage dan like qilingan mahsulotlarni olish
    useEffect(() => {
        const storedLikes = JSON.parse(localStorage.getItem("likes")) || [];
        setLikes(storedLikes);
    }, []);

    const toggleLike = (product) => {
        let updatedLikes = [...likes];

        if (likes.some(item => item.id === product.id)) {
            // Agar mahsulot oldin like qilingan bo‘lsa, uni o‘chirish
            updatedLikes = updatedLikes.filter(item => item.id !== product.id);
        } else {
            // Aks holda, mahsulotni qo‘shish
            updatedLikes.push(product);
        }

        setLikes(updatedLikes);
        localStorage.setItem("likes", JSON.stringify(updatedLikes));
    };

    const check = (e) => {
        const children = Array.from(e.parentElement.parentElement.children)
        children.forEach((el)=>{
            el.children[0].checked = false
        })

        e.checked = true

        setCategory(e.value)
    }

    console.log(category)

    const maxPrice = price ? parseInt(price) : Infinity;


    return (
        <div className='mt-[30px] w-full flex flex-wrap gap-5'>
            <div className='p-5 w-[262px] h-full rounded-[15px] shadow-md shadow-gray'>
                <div className=' flex justify-between items-center'>
                    <p className='font-bold text-base'>
                        Filtr
                    </p>
                    <button className='w-[110px] h-[25px] rounded-[5px] border border-[#007BFF]'>
                        Qayta tiklash
                    </button>
                </div>
                <div className='mt-5 bg-[#DCDCDC] w-full h-px'>
                </div>
                <p className='mt-[11px] semi-bold text-base'>
                    Narxi
                </p>
                <div className='mt-5 w-full h-2 rounded-[13px] bg-[#FF9C0026] flex'>
                    <div className='relative w-[128px] h-2 rounded-[13px] bg-[#007BFF]'>
                        <div className='h-2.5 w-4 bg-white rounded-[4px] absolute -right-px -top-px'>
                            <div className='h-2.5 w-2.5 absolute right-[3px] rounded-full bg-[#007BFF]'>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='mt-2 text-[12px]'>
                    Maksimal narx {price} so'm
                </p>
                <div className='mt-2.5 w-[168px] h-[25px] p-2 rounded-[5px] border border-[#007BFF] flex justify-between items-center'>
                    <input onChange={(e)=>setPrice(e.target.value)} type="number" placeholder='max narxni kiriting' className='w-[154px] h-[20px] text-[14px]'/>
                </div>
                <div className='mt-5 w-full h-px bg-[#DCDCDC]'>
                </div>
                <div className='mt-2.5 w-full p-2 flex justify-between items-center'>
                    <p className='font-bold text-base'>
                        Kategoriyalar
                    </p>
                    <button onClick={() => setCategories(!categories)}>
                        {!categories ? <IoIosArrowForward style={{ fontSize: "15px", color: "#007BFF" }} /> :
                            <IoIosArrowDown style={{ fontSize: "15px", color: "#007BFF" }} />}
                    </button>
                </div>
                {categories &&
                    <div>
                        <label className='font-medium text-[14px] block'>
                            <input onChange={(e)=>check(e.target)}
                            type="checkbox" value="" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Barchasi
                        </label>
                        <label className='font-medium text-[14px] block'>
                            <input onChange={(e)=>check(e.target)}
                            type="checkbox" value="Avtotovarlar" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Avtotovarlar
                        </label>
                        <label className='font-medium text-[14px] block'>
                            <input onChange={(e)=>check(e.target)} 
                            type="checkbox" value="Bolalar tovarlari" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Bolalar tovarlari
                        </label>
                        <label className='font-medium text-[14px] block'>
                            <input onChange={(e)=>check(e.target)} 
                            type="checkbox" value="Go'zallik va parvarish" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Go'zallik va parvarish
                        </label>
                        <label className='font-medium text-[14px] block'>
                            <input onChange={(e)=>check(e.target)} 
                            type="checkbox" value="Elektronika" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Elektronika
                        </label>
                        <label className='font-medium text-[14px] block'>
                            <input onChange={(e)=>check(e.target)} 
                            type="checkbox" value="Kiyim" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Kiyim
                        </label>
                        <label className='font-medium text-[14px] block'>
                            <input onChange={(e)=>check(e.target)}
                             type="checkbox" value="Maishiy texnika" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Maishiy texnika
                        </label>
                        <label className='font-medium text-[14px] block'>
                            <input onChange={(e)=>check(e.target)}
                             type="checkbox" value="Oziq-ovqat mahsulotlari" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Oziq-ovqat mahsulotlari
                        </label>
                        <label className='font-medium text-[14px] block'>
                            <input onChange={(e)=>check(e.target)}
                             type="checkbox" value="Salomatlik" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Salomatlik
                        </label>
                        <label className='font-medium text-[14px] block'>
                            <input onChange={(e)=>check(e.target)}
                             type="checkbox" value="Sport va hordiq" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Sport va hordiq
                        </label>
                        <label className='font-medium text-[14px] block'>
                            <input onChange={(e)=>check(e.target)}
                             type="checkbox" value="Uy-ro'zg'or buyumlari" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Uy-ro'zg'or buyumlari
                        </label>
                        <label className='font-medium text-[14px] block'>
                            <input onChange={(e)=>check(e.target)}
                             type="checkbox" value="Xobbi va ijod" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Xobbi va ijod
                        </label>

                    </div>}

                {/* <div className='mt-5 w-full h-px bg-[#DCDCDC]'>
                </div> */}

                {/* <div className='mt-2.5 w-full p-2 flex justify-between items-center'>
                    <p className='font-bold text-base'>
                        Shahar
                    </p>
                    <button onClick={() => setCity(!city)}>
                        {!city ? <IoIosArrowForward style={{ fontSize: "15px", color: "#007BFF" }} /> :
                            <IoIosArrowDown style={{ fontSize: "15px", color: "#007BFF" }} />}
                    </button>
                </div>
                {city &&
                    <div>

                        <label className='font-medium text-[14px]'>
                            <input type="checkbox" value="Category1" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Category 1
                        </label><br />
                        <label className='font-medium text-[14px]'>
                            <input type="checkbox" value="Category1" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Category 1
                        </label><br />
                        <label className='font-medium text-[14px]'>
                            <input type="checkbox" value="Category1" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Category 1
                        </label><br />
                        <label className='font-medium text-[14px]'>
                            <input type="checkbox" value="Category1" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Category 1
                        </label><br />
                        <label className='font-medium text-[14px]'>
                            <input type="checkbox" value="Category1" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Category 1
                        </label><br />
                        <label className='font-medium text-[14px]'>
                            <input type="checkbox" value="Category1" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Category 1
                        </label>

                    </div>} */}
            </div>
            <div className='w-full flex flex-wrap justify-between items-center gap-5'>
            {
                    search === "" ? products &&
                        products.map((product) => (
                            category === "" ? 
                            product.price < maxPrice &&
                            <div key={product.slug} className='relative w-[262px] h-[406px] rounded-[10px] flex flex-col shadow-md'>
                                <NavLink to={`product/${product.slug}`} className='w-[262px] h-[262px] rounded-md flex justify-center items-center bg-slate-100 overflow-hidden cursor-pointer'>
                                    <img src={`https://buyze.uz${product.image_url_list[0]}`} alt="logo"
                                        className='w-full h-full object-cover rounded-[10px] transition-transform duration-300 hover:scale-110' />
                                </NavLink>
                                <button onClick={() => toggleLike(product)}
                                    className='absolute top-2 right-4 z-40 p-2 rounded-full bg-white'>

                                    {
                                        likes.some(item => item.id === product.id) ?
                                            <IoHeart style={{ fontSize: "24px", color: "#007bff" }} /> :
                                            <IoHeartOutline style={{ fontSize: "24px" }} />
                                    }

                                </button>
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
                            </div> :
                            product.sub_category === category && <div key={product.slug} className='relative w-[262px] h-[406px] rounded-[10px] flex flex-col shadow-md'>
                            <NavLink to={`product/${product.slug}`} className='w-[262px] h-[262px] rounded-md flex justify-center items-center bg-slate-100 overflow-hidden cursor-pointer'>
                                <img src={`https://buyze.uz${product.image_url_list[0]}`} alt="logo"
                                    className='w-full h-full object-cover rounded-[10px] transition-transform duration-300 hover:scale-110' />
                            </NavLink>
                            <button onClick={() => toggleLike(product)}
                                className='absolute top-2 right-4 z-40 p-2 rounded-full bg-white'>

                                {
                                    likes.some(item => item.id === product.id) ?
                                        <IoHeart style={{ fontSize: "24px", color: "#007bff" }} /> :
                                        <IoHeartOutline style={{ fontSize: "24px" }} />
                                }

                            </button>
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
                        </div>
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

export default NewsSeccion