import arr from "../../assets/icons/left.svg"
import useStore from "../../store/useStore"

const Products = () => {

    const {language} = useStore()

  return (
    <div className="mt-[33px] w-full">
        <div className="px-5 w-full flex">
          <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
            {language.ProductId}
          </p>
          <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
            {language.ProductName}
          </p>
          <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
            {language.Category}
          </p>
          <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
            {language.Quantity}
          </p>
          <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
            {language.PerPrice}
          </p>
          <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
            {language.Status}
          </p>
        </div>
        <div className="mt-2.5">
          <div className="px-5 mt-2.5 flex items-center h-[49px] rounded-[10px] border border-gray-400 shadow-md">
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              #231212135612
            </p>
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              Adidas slippers
            </p>
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              Men's Cloth
            </p>
            <p className="w-2/12 text-[14px] leading-[17px] text-gray-500">
              20/11
            </p>
            <p className="w-2/12 text-[14px] leading-[17px] text-gray-500">
              Rs.100,000.00
            </p>
            <div className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500 flex justify-between items-center">
              <div className="w-[94px] h-[29px] rounded-md border border-[#28D764] text-[#28D764] flex justify-center items-center">
                Live
              </div>
              <button>
                <img src={arr} alt="left"/>
              </button>
            </div>
          </div>
          <div className="px-5 mt-2.5 flex items-center h-[49px] rounded-[10px] border border-gray-400 shadow-md">
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              #231212135612
            </p>
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              Adidas slippers
            </p>
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              Men's Cloth
            </p>
            <p className="w-2/12 text-[14px] leading-[17px] text-gray-500">
              20/11
            </p>
            <p className="w-2/12 text-[14px] leading-[17px] text-gray-500">
              Rs.100,000.00
            </p>
            <div className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500 flex justify-between items-center">
              <div className="w-[94px] h-[29px] rounded-md border border-[#28D764] text-[#28D764] flex justify-center items-center">
                Live
              </div>
              <button>
                <img src={arr} alt="left"/>
              </button>
            </div>
          </div>
          <div className="px-5 mt-2.5 flex items-center h-[49px] rounded-[10px] border border-gray-400 shadow-md">
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              #231212135612
            </p>
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              Adidas slippers
            </p>
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              Men's Cloth
            </p>
            <p className="w-2/12 text-[14px] leading-[17px] text-gray-500">
              20/11
            </p>
            <p className="w-2/12 text-[14px] leading-[17px] text-gray-500">
              Rs.100,000.00
            </p>
            <div className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500 flex justify-between items-center">
              <div className="w-[94px] h-[29px] rounded-md border border-[#28D764] text-[#28D764] flex justify-center items-center">
                Live
              </div>
              <button>
                <img src={arr} alt="left"/>
              </button>
            </div>
          </div>
          <div className="px-5 mt-2.5 flex items-center h-[49px] rounded-[10px] border border-gray-400 shadow-md">
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              #231212135612
            </p>
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              Adidas slippers
            </p>
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              Men's Cloth
            </p>
            <p className="w-2/12 text-[14px] leading-[17px] text-gray-500">
              20/11
            </p>
            <p className="w-2/12 text-[14px] leading-[17px] text-gray-500">
              Rs.100,000.00
            </p>
            <div className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500 flex justify-between items-center">
              <div className="w-[94px] h-[29px] rounded-md border border-[#28D764] text-[#28D764] flex justify-center items-center">
                unavailable
              </div>
              <button>
                <img src={arr} alt="left"/>
              </button>
            </div>
          </div>
          <div className="px-5 mt-2.5 flex items-center h-[49px] rounded-[10px] border border-gray-400 shadow-md">
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              #231212135612
            </p>
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              Adidas slippers
            </p>
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              Men's Cloth
            </p>
            <p className="w-2/12 text-[14px] leading-[17px] text-gray-500">
              20/11
            </p>
            <p className="w-2/12 text-[14px] leading-[17px] text-gray-500">
              Rs.100,000.00
            </p>
            <div className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500 flex justify-between items-center">
              <div className="w-[94px] h-[29px] rounded-md border border-[#28D764] text-[#28D764] flex justify-center items-center">
                Live
              </div>
              <button>
                <img src={arr} alt="left"/>
              </button>
            </div>
          </div>
          <div className="px-5 mt-2.5 flex items-center h-[49px] rounded-[10px] border border-gray-400 shadow-md">
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              #231212135612
            </p>
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              Adidas slippers
            </p>
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              Men's Cloth
            </p>
            <p className="w-2/12 text-[14px] leading-[17px] text-gray-500">
              20/11
            </p>
            <p className="w-2/12 text-[14px] leading-[17px] text-gray-500">
              Rs.100,000.00
            </p>
            <div className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500 flex justify-between items-center">
              <div className="w-[94px] h-[29px] rounded-md border border-[#28D764] text-[#28D764] flex justify-center items-center">
                Live
              </div>
              <button>
                <img src={arr} alt="left"/>
              </button>
            </div>
          </div>
          <div className="px-5 mt-2.5 flex items-center h-[49px] rounded-[10px] border border-gray-400 shadow-md">
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              #231212135612
            </p>
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              Adidas slippers
            </p>
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              Men's Cloth
            </p>
            <p className="w-2/12 text-[14px] leading-[17px] text-gray-500">
              20/11
            </p>
            <p className="w-2/12 text-[14px] leading-[17px] text-gray-500">
              Rs.100,000.00
            </p>
            <div className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500 flex justify-between items-center">
              <div className="w-[94px] h-[29px] rounded-md border border-[#28D764] text-[#28D764] flex justify-center items-center">
                Live
              </div>
              <button>
                <img src={arr} alt="left"/>
              </button>
            </div>
          </div>
          <div className="px-5 mt-2.5 flex items-center h-[49px] rounded-[10px] border border-gray-400 shadow-md">
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              #231212135612
            </p>
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              Adidas slippers
            </p>
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              Men's Cloth
            </p>
            <p className="w-2/12 text-[14px] leading-[17px] text-gray-500">
              20/11
            </p>
            <p className="w-2/12 text-[14px] leading-[17px] text-gray-500">
              Rs.100,000.00
            </p>
            <div className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500 flex justify-between items-center">
              <div className="w-[94px] h-[29px] rounded-md border border-[#28D764] text-[#28D764] flex justify-center items-center">
                Live
              </div>
              <button>
                <img src={arr} alt="left"/>
              </button>
            </div>
          </div>
          <div className="px-5 mt-2.5 flex items-center h-[49px] rounded-[10px] border border-gray-400 shadow-md">
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              #231212135612
            </p>
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              Adidas slippers
            </p>
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              Men's Cloth
            </p>
            <p className="w-2/12 text-[14px] leading-[17px] text-gray-500">
              20/11
            </p>
            <p className="w-2/12 text-[14px] leading-[17px] text-gray-500">
              Rs.100,000.00
            </p>
            <div className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500 flex justify-between items-center">
              <div className="w-[94px] h-[29px] rounded-md border border-[#28D764] text-[#28D764] flex justify-center items-center">
                Live
              </div>
              <button>
                <img src={arr} alt="left"/>
              </button>
            </div>
          </div>
          <div className="px-5 mt-2.5 flex items-center h-[49px] rounded-[10px] border border-gray-400 shadow-md">
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              #231212135612
            </p>
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              Adidas slippers
            </p>
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              Men's Cloth
            </p>
            <p className="w-2/12 text-[14px] leading-[17px] text-gray-500">
              20/11
            </p>
            <p className="w-2/12 text-[14px] leading-[17px] text-gray-500">
              Rs.100,000.00
            </p>
            <div className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500 flex justify-between items-center">
              <div className="w-[94px] h-[29px] rounded-md border border-[#28D764] text-[#28D764] flex justify-center items-center">
                Live
              </div>
              <button>
                <img src={arr} alt="left"/>
              </button>
            </div>
          </div>
          <div className="px-5 mt-2.5 flex items-center h-[49px] rounded-[10px] border border-gray-400 shadow-md">
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              #231212135612
            </p>
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              Adidas slippers
            </p>
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              Men's Cloth
            </p>
            <p className="w-2/12 text-[14px] leading-[17px] text-gray-500">
              20/11
            </p>
            <p className="w-2/12 text-[14px] leading-[17px] text-gray-500">
              Rs.100,000.00
            </p>
            <div className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500 flex justify-between items-center">
              <div className="w-[94px] h-[29px] rounded-md border border-[#28D764] text-[#28D764] flex justify-center items-center">
                Live
              </div>
              <button>
                <img src={arr} alt="left"/>
              </button>
            </div>
          </div>
          <div className="px-5 mt-2.5 flex items-center h-[49px] rounded-[10px] border border-gray-400 shadow-md">
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              #231212135612
            </p>
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              Adidas slippers
            </p>
            <p className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500">
              Men's Cloth
            </p>
            <p className="w-2/12 text-[14px] leading-[17px] text-gray-500">
              20/11
            </p>
            <p className="w-2/12 text-[14px] leading-[17px] text-gray-500">
              Rs.100,000.00
            </p>
            <div className="w-2/12 font-medium text-[14px] leading-[17px] text-gray-500 flex justify-between items-center">
              <div className="w-[94px] h-[29px] rounded-md border border-[#28D764] text-[#28D764] flex justify-center items-center">
                Live
              </div>
              <button>
                <img src={arr} alt="left"/>
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Products