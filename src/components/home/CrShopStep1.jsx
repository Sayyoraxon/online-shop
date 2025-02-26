import React from 'react'
import useStore from '../../store/useStore'

const CrShopStep1 = ({setStep}) => {

    const {language} = useStore()

    const createShop = () => {
        setStep(2)
    }

  return (
    <div className='mt-4 w-full px-[50px] py-[40px] bg-white shadow-md shadow-gray-400 rounded-[10px] flex flex-col gap-4'>
        <p className='font-medium text-[32px] leading-[38px] text-center'>
            {language.YourNewShop}
        </p>
        <p className='mt-2.5 font-medium text-[18px] leading-[21px]'>
            {language.ShopInformations}
        </p>
        <input className='w-full h-[45px] rounded-[10px] border border-[#a1a1a1] px-[14px]'
        type="text" placeholder={language.ShopName}/>
        <input className='w-full h-[45px] rounded-[10px] border border-[#a1a1a1] px-[14px]'
        type="text" placeholder='BusinessCategory'/>
        <input className='w-[262px] h-[45px] rounded-[10px] border border-[#a1a1a1] px-[14px]'
        type="text" placeholder={language.RegNum}/>
        <p className='mt-2.5 font-medium text-[18px] leading-[21px]'>
            {language.Contact}
        </p>
        <div className='flex gap-5'>
        <input className='w-full h-[45px] rounded-[10px] border border-[#a1a1a1] px-[14px]'
        type="text" placeholder={language.EmailAddress}/>
        <input className='w-full h-[45px] rounded-[10px] border border-[#a1a1a1] px-[14px]'
        type="text" placeholder={language.PhoneNumber}/>
        </div>
        <p className='mt-2.5 font-medium text-[18px] leading-[21px]'>
            {language.ShopAddress}
        </p>
        <input className='w-full h-[45px] rounded-[10px] border border-[#a1a1a1] px-[14px]'
        type="text" placeholder={language.StreetAddress}/>
        <div className='flex gap-5'>
        <input className='w-full h-[45px] rounded-[10px] border border-[#a1a1a1] px-[14px]'
        type="text" placeholder={language.City}/>
        <input className='w-full h-[45px] rounded-[10px] border border-[#a1a1a1] px-[14px]'
        type="text" placeholder={language.ZipCode}/>
        </div>
        <button onClick={createShop}
        className='w-full h-[45px] rounded-[15px] bg-[#007bff] text-white font-semibold text-base leading-[19px]'>
            {language.CreateShop}
        </button>
    </div>
  )
}

export default CrShopStep1