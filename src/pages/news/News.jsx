import { useState } from "react"
import brand from "../../assets/image/brand.png"
import ChooseByShopss from "../../components/News/ChooseByShopss"
import ExploreMoree from "../../components/News/ExploreMoree"
import NewsSeccion from "../../components/News/NewsSeccion"

const News = ({products}) => {

  const [search, setSearch] = useState("")

  return (
    <div>
        <div className="relative w-full h-[450px]">
            <img className="w-full h-full object-cover" src={brand} alt="brand"/>
            <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[544px] h-[163px]">
                <p className="text-[36px] leading-[43px] text-center">
                Onlayn xarid qilish
                </p>
                <p className="mt-1 text-[14px] text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </p>
                <div className="mt-5 pl-5 pr-[5px] mx-auto max-w-[544px] h-[45px] rounded-[100px] bg-gray-400 flex justify-between items-center">
                    <input onChange={(e)=>setSearch(e.target.value)}
                     className="w-full bg-inherit placeholder-white text-white outline-none" placeholder="Doʻkon yoki mahsulotni qidiring"/>
                    <button className="w-[87px] h-[35px] rounded-[100px] bg-[#007BFF] text-white text-[14px] leading-4">
                    Qidiruv
                    </button>
                </div>
            </div>
        </div>
        <NewsSeccion products={products} search={search}/>
        <ChooseByShopss/>
        <ExploreMoree/>
    </div>
  )
}

export default News