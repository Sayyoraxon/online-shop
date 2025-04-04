import { useState } from "react"
import brand from "../../assets/image/brand.png"
import BestDeals from "./BestDeals"
import ChooseByShops from "./ChooseByShops"
import DepartmentStores from "./DepartmentStores"
import Explore from "./Explore"
import MostPopular from "./MostPopular"
import TopCategories from "./TopCategories"

const CustomerMain = ({ products }) => {

    const [search, setSearch] = useState("")

    return (
        <div>
            <div className="relative w-full h-[450px]">
                <img className="w-full h-full object-cover" src={brand} alt="brand" />
                <div className="sm:left-[94px] left-0 top-[143px] absolute sm:w-[378px] w-full h-[163px]">
                    <p className="text-[36px] leading-[43px]">
                        <span className="text-[#007BFF]">Ishonchliligi </span> bilan eng yaxshi mahsulotlarni toping
                    </p>
                    <div className="mt-[30px] pl-5 pr-[5px] sm:w-[356px] w-full h-[45px] rounded-[100px] bg-gray-400 flex justify-between items-center">
                        <input className="w-full bg-inherit placeholder-white text-white outline-none"
                            type="search" placeholder="Doʻkon yoki mahsulotni qidiring"
                            onChange={(e) => setSearch(e.target.value)} />
                        <button className="w-[97px] h-[35px] rounded-[100px] bg-[#007BFF] text-white text-[14px] leading-4">
                            Qidiring
                        </button>
                    </div>
                </div>
            </div>

            {search === "" && <TopCategories />}
            <DepartmentStores products={products} search={search} />
            <ChooseByShops products={products} />
            <MostPopular products={products} />
            <BestDeals products={products} />
            <Explore />
        </div>

    )
}

export default CustomerMain