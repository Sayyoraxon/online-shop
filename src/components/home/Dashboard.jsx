import { useState } from "react"
import plus from "../../assets/icons/plus.svg"
import useStore from "../../store/useStore"
import CreateShop from "./CreateShop"

const Dashboard = () => {

    const {language} = useStore()
    const [createshop, setCreateshop] = useState(false)
  return (
    <div className='w-full flex justify-center mt-40'>
        {createshop && <CreateShop setCreateshop={setCreateshop}/>}
        <div>
          <p className='font-medium text-[36px] leading-[43ppx] text-center'>
            {language.YourShops}
          </p>
          <div className='w-[410px] mt-[50px] py-[20px] px-[30px] flex items-center gap-[30px] shadow-md shadow-[rgba(0,0,0,0.19)] rounded-[10px]'>
            <div className='w-[70px] h-[70px] rounded-full bg-[#d9d9d9]'>

            </div>
            <p className='font-medium text-[24px] leading-[29px]'>
              {language.ShopName}
            </p>
          </div>
          <button onClick={()=>setCreateshop(true)}
           className='mt-[10px] w-[410px] rounded-[10px] h-[110px] border-[2px] border-[#a1a1a1] border-dashed flex justify-center items-center gap-5'>
              <p className='font-medium text-[24px] leading-[29px] text-[#a1a1a1]'>
                {language.CreateShop}
              </p>
              <img src={plus} alt="plus" width={30} height={30}/>
          </button>
        </div>
      </div>
  )
}

export default Dashboard