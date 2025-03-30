import React, { useEffect, useState } from 'react'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
import { NavLink } from 'react-router'
import buyze from '../../assets/icons/logo.png'

const CategoryName = ({products}) => {

    console.log(products)

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

    return (
        <div className='mt-5'>
            <p className='mt-32 font-medium text-[20px]'>
                Biznesning tabiati
            </p>
            <p className='mt-2.5 text-base'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <div className='mt-[30px] w-full flex justify-between'>
                <p className='font-medium text-[24px] leading-[29px]'>
                    Kiyim
                </p>
                {/* <button className='font-medium text-[#007bff] underline hover:opacity-60'>
                    Barchasini ko'rish
                </button> */}
            </div>
            <div className='mt-[30px] w-full flex flex-wrap justify-between items-center gap-5'>
            {products &&
                        products.map((product) => (
                            product.sub_category === "Kiyim" && <div key={product.slug} className='relative w-[262px] h-[406px] rounded-[10px] flex flex-col shadow-md'>
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
                }
            </div>
       
        </div>
    )
}

export default CategoryName