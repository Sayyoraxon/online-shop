import brand from "../../assets/image/brand.png"
import TopCategories from "./TopCategories"

const CustomerMain = () => {
  return (
    <div>
        <div className="relative w-full h-[450px]">
            <img className="w-full h-full object-cover" src={brand} alt="brand"/>
            <div className="left-[94px] top-[143px] absolute w-[388px] h-[163px]">
                <p className="text-[36px] leading-[43px]">
                Find the Best Products
                with <span className="text-[#007BFF]">Reliability</span>
                </p>
                <div className="mt-[30px] pl-5 pr-[5px] w-[356px] h-[45px] rounded-[100px] bg-gray-400 flex justify-between items-center">
                    <input className="w-full bg-inherit placeholder-white text-white outline-none" placeholder="Search Here Shop or Product"/>
                    <button className="w-[87px] h-[35px] rounded-[100px] bg-[#007BFF] text-white text-[14px] leading-4">
                        Search
                    </button>
                </div>
            </div>
        </div>
        <TopCategories/>
    </div>
  )
}

export default CustomerMain