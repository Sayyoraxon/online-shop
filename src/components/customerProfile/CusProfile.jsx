import React, { useState } from 'react'
import useStore from '../../store/useStore'
import AccountSettings from '../accountSettings/AccountSettings'

const CusProfile = ({data}) => {

    const {language} = useStore()
    const [account, setAccount] = useState(false)

  return (
    <div className='mt-10 pl-[21px] w-full'>
        {account && <AccountSettings setAccount={setAccount}/>}
        <div className='w-full flex flex-wrap gap-12 items-start'>
            <div>
                <div className='w-[250px] h-[250px] rounded-[10px] bg-[#d9d9d9] overflow-hidden'>
                    {data && data.profile_picture && <img className='w-full h-full object-cover' src={`https://buyze.uz${data.profile_picture}`} alt="picturer"/>}
                </div>
                <p className='mt-6 font-medium text-[14px] leading-4 text-[#3DB39E] text-center'>
                    {language.VerifiedAccount}
                </p>
            </div>
            <div>
                <p className='font-medium text-base leading-[19px] text-[#6B6A6E]'>
                    {language.Name}
                </p>
                <p className='mt-1 font-medium text-[32px] leading-[38px]'>
                    {data && data.first_name}
                </p>
                <p className='mt-[30px] font-medium text-base leading-[19px] text-[#6B6A6E]'>
                    {language.NickName}
                </p>
                <p className='mt-1 font-medium text-[20px] leading-6'>
                    {data && data.nic_number}
                </p>
                <p className='mt-[30px] font-medium text-base leading-[19px] text-[#6B6A6E]'>
                    {language.Birthday}
                </p>
                <p className='mt-1 font-medium text-[20px] leading-6'>
                    {data && data.birthday}
                </p>
                <p className='mt-[30px] font-medium text-base leading-[19px] text-[#6B6A6E]'>
                    {language.ContactNumber}
                </p>
                <p className='mt-1 font-medium text-[20px] leading-6'>
                    {data && data.mobile_number}
                </p>
                <p className='mt-[30px] font-medium text-base leading-[19px] text-[#6B6A6E]'>
                    {language.Address}
                </p>
                <p className='mt-1 font-medium text-[20px] leading-6'>
                    {data && data.street_address}
                </p>
                <p className='mt-[30px] font-medium text-base leading-[19px] text-[#6B6A6E]'>
                    {language.City}
                </p>
                <p className='mt-1 font-medium text-[20px] leading-6'>
                    {data && data.city}
                </p>
                <button onClick={()=>setAccount(true)} className='mt-40 w-[250px] h-[45px] rounded-[10px] bg-[#007bff] font-semibold text-base text-white'>
                    {language.Settings}
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default CusProfile