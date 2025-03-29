import React, { useEffect, useState } from 'react'
import buyze from "../../assets/icons/logo.png"
import { FaHeart } from 'react-icons/fa'
import TopCategories from '../../components/customerHome/TopCategories'
import Explore from '../../components/customerHome/Explore'
import { NavLink } from 'react-router'
import { IoHeart} from 'react-icons/io5'

const Whishes = () => {

    const [likes, setLikes] = useState([])

    useEffect(()=>{
        const like = localStorage.getItem("likes") ? JSON.parse(localStorage.getItem("likes")) : []
        setLikes(like)
    }, [])

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

    return (
        <div>
            {likes.length === 0 ?
            <p className='w-full text-center my-40 font-medium text-[42px]'>
                Sevimli mahsulotlar yo'q
            </p>
            :
            <div className='mt-[30px] w-full flex flex-wrap justify-between items-center gap-5'>
            {likes.map((product) => (
                <div key={product.slug} className='relative w-[262px] h-[406px] rounded-[10px] flex flex-col shadow-md'>
                    <NavLink to={`product/${product.slug}`} className='w-[262px] h-[262px] rounded-md flex justify-center items-center bg-slate-100 overflow-hidden cursor-pointer'>
                        <img src={`https://buyze.uz${product.image_url_list[0]}`} alt="logo"
                            className='w-full h-full object-cover rounded-[10px] transition-transform duration-300 hover:scale-110' />
                    </NavLink>
                    <button onClick={() => toggleLike(product)}
                     className='absolute top-2 right-4 z-40 p-2 rounded-full bg-white'>
                        <IoHeart style={{ fontSize: "24px", color: "#007bff" }} />
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
            ))}
            </div>}
            
            <TopCategories hidden={true} />
            <Explore />
        </div>
    )
}

export default Whishes