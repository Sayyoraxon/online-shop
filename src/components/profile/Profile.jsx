import React, { useState } from 'react'
import useStore from '../../store/useStore'
import AccountSettings from '../accountSettings/AccountSettings'

const ProfileDiv = ({data}) => {

    const {language} = useStore()

    const [account, setAccount] = useState(false)
  return (
    <div className='mt-10 pl-[21px] w-full'>
        {account && <AccountSettings setAccount={setAccount}/>}
        <div className='w-full flex justify-between flex-wrap gap-3 items-start'>
            <div>
                <div className='w-[250px] h-[250px] rounded-[10px] bg-[#d9d9d9] overflow-hidden'>
                    {data && data.profile_picture !== null && <img className='w-full h-full object-cover' src={`http://167.172.107.65:8000${data.profile_picture}`} alt="picturer"/>}
                </div>
                <p className='mt-6 font-medium text-[14px] leading-4 text-[#3DB39E] text-center'>
                    {language.VerifiedAccount}
                </p>
            </div>
            <div className='w-[300px]'>
                <p className='font-medium text-base leading-[19px] text-[#6B6A6E]'>
                    {language.Name}
                </p>
                <p className='mt-1 font-medium text-[32px] leading-[38px]'>
                    {data.first_name}
                </p>
                <p className='mt-[30px] font-medium text-base leading-[19px] text-[#6B6A6E]'>
                    {language.NickName}
                </p>
                <p className='mt-1 font-medium text-[20px] leading-6'>
                    {data.nic_number}
                </p>
                <p className='mt-[30px] font-medium text-base leading-[19px] text-[#6B6A6E]'>
                    {language.Birthday}
                </p>
                <p className='mt-1 font-medium text-[20px] leading-6'>
                    {data.birthday}
                </p>
                <p className='mt-[30px] font-medium text-base leading-[19px] text-[#6B6A6E]'>
                    {language.ContactNumber}
                </p>
                <p className='mt-1 font-medium text-[20px] leading-6'>
                    {data.mobile_number}
                </p>
                <p className='mt-[30px] font-medium text-base leading-[19px] text-[#6B6A6E]'>
                    {language.Address}
                </p>
                <p className='mt-1 font-medium text-[20px] leading-6'>
                    {data.street_address}
                </p>
                <p className='mt-[30px] font-medium text-base leading-[19px] text-[#6B6A6E]'>
                    {language.City}
                </p>
                <p className='mt-1 font-medium text-[20px] leading-6'>
                    {data.city}
                </p>

                <button onClick={()=>setAccount(true)} className='mt-32 w-[250px] h-[45px] rounded-[10px] bg-[#007bff] font-semibold text-base text-white'>
                    {language.Settings}
                </button>
            </div>
            <div className='w-[300px] h-[625px] p-5 rounded-[10px] bg-[#FBF9F9] shadow-inner'>
                <p className='font-medium text-[20px] leading-6 text-center'>
                    Sizning do'konlaringiz
                </p>
                {data.shops.length !== 0 &&
                data.shops.map((shop)=>(
                    <div className='mt-5 w-full h-[80px] bg-white rounded-[10px] flex shadow-md px-5 py-2.5 items-center gap-5'>
                    <div className='w-[60px] h-[60px] rounded-full bg-[#d9d9d9]'>

                    </div>
                    <p className='font-medium text-[14px] leading-6'>
                        {shop.name}
                    </p>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProfileDiv