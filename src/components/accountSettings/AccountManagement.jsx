import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import useStore from '../../store/useStore'
import { IoIosArrowDown } from 'react-icons/io'

const AccountManagement = ({setAccountManagement, setMainWindow}) => {

    const {language} = useStore()
    const [name, setName] = useState(false)
    const [fullName, setFullName] = useState(false)
    const [birthday, setBirthday] = useState(false)
    const [number, setNumber] = useState(false)
    const [address, setAddress] = useState(false)
    const [city, setCity] = useState(false)


  return (
    <div className='relative w-[644px] h-[760px] pt-5 px-[94px] rounded-[15px] shadow-md shadow-gray-400 bg-white'>
            <button onClick={()=>{
                setAccountManagement(false)
                setMainWindow(true)
            }}
                className='absolute top-5 right-5'>
                <IoClose style={{ fontSize: "25px" }} />
            </button>
            <p className='font-medium text-[32px] text-center'>
                {language.AccountManagement}
            </p>
            <p className='mt-8 font-medium text-[24px] text-center'>
                {language.WhoCanSee}
            </p>

            <div className='mt-10 h-[85px] flex justify-between items-start'>
                <p className='font-medium text-[24px]'>
                    Ism
                </p>
                <div className={`w-[122px] ${name ? "h-auto" : "h-[22px]"} px-2.5 rounded-[5px] border border-[rgba(0,0,0,0.5)] flex justify-between items-start overflow-hidden`}>
                    <div>
                        <p className='py-1 font-medium text-[10px]'>
                          Hammasi  
                        </p>
                        <p className='py-1 font-medium text-[10px]'>
                            Hech qaysi
                        </p>
                        <p className='py-1 font-medium text-[10px]'>
                            Kontaktlarim
                        </p>
                    </div>
                    <button onClick={()=>setName(!name)}>
                        <IoIosArrowDown/>
                    </button>
                </div>
            </div>

            <div className='h-[85px] flex justify-between items-start'>
                <p className='font-medium text-[24px]'>
                    To'liq ism
                </p>
                <div className={`w-[122px] ${fullName ? "h-auto" : "h-[22px]"} px-2.5 rounded-[5px] border border-[rgba(0,0,0,0.5)] flex justify-between items-start overflow-hidden`}>
                    <div>
                        <p className='py-1 font-medium text-[10px]'>
                          Hammasi  
                        </p>
                        <p className='py-1 font-medium text-[10px]'>
                            Hech qaysi
                        </p>
                        <p className='py-1 font-medium text-[10px]'>
                            Kontaktlarim
                        </p>
                    </div>
                    <button onClick={()=>setFullName(!fullName)}>
                        <IoIosArrowDown/>
                    </button>
                </div>
            </div>

            <div className='h-[85px] flex justify-between items-start'>
                <p className='font-medium text-[24px]'>
                    Tug'ilgan kun
                </p>
                <div className={`w-[122px] ${birthday ? "h-auto" : "h-[22px]"} px-2.5 rounded-[5px] border border-[rgba(0,0,0,0.5)] flex justify-between items-start overflow-hidden`}>
                    <div>
                        <p className='py-1 font-medium text-[10px]'>
                          Hammasi  
                        </p>
                        <p className='py-1 font-medium text-[10px]'>
                            Hech qaysi
                        </p>
                        <p className='py-1 font-medium text-[10px]'>
                            Kontaktlarim
                        </p>
                    </div>
                    <button onClick={()=>setBirthday(!birthday)}>
                        <IoIosArrowDown/>
                    </button>
                </div>
            </div>

            <div className='h-[85px] flex justify-between items-start'>
                <p className='font-medium text-[24px]'>
                    Telefon raqam
                </p>
                <div className={`w-[122px] ${number ? "h-auto" : "h-[22px]"} px-2.5 rounded-[5px] border border-[rgba(0,0,0,0.5)] flex justify-between items-start overflow-hidden`}>
                    <div>
                        <p className='py-1 font-medium text-[10px]'>
                          Hammasi  
                        </p>
                        <p className='py-1 font-medium text-[10px]'>
                            Hech qaysi
                        </p>
                        <p className='py-1 font-medium text-[10px]'>
                            Kontaktlarim
                        </p>
                    </div>
                    <button onClick={()=>setNumber(!number)}>
                        <IoIosArrowDown/>
                    </button>
                </div>
            </div>

            <div className='h-[85px] flex justify-between items-start'>
                <p className='font-medium text-[24px]'>
                    Manzil
                </p>
                <div className={`w-[122px] ${address ? "h-auto" : "h-[22px]"} px-2.5 rounded-[5px] border border-[rgba(0,0,0,0.5)] flex justify-between items-start overflow-hidden`}>
                    <div>
                        <p className='py-1 font-medium text-[10px]'>
                          Hammasi  
                        </p>
                        <p className='py-1 font-medium text-[10px]'>
                            Hech qaysi
                        </p>
                        <p className='py-1 font-medium text-[10px]'>
                            Kontaktlarim
                        </p>
                    </div>
                    <button onClick={()=>setAddress(!address)}>
                        <IoIosArrowDown/>
                    </button>
                </div>
            </div>

            <div className='h-[85px] flex justify-between items-start'>
                <p className='font-medium text-[24px]'>
                    Shahar
                </p>
                <div className={`w-[122px] ${city ? "h-auto" : "h-[22px]"} px-2.5 rounded-[5px] border border-[rgba(0,0,0,0.5)] flex justify-between items-start overflow-hidden`}>
                    <div>
                        <p className='py-1 font-medium text-[10px]'>
                          Hammasi  
                        </p>
                        <p className='py-1 font-medium text-[10px]'>
                            Hech qaysi
                        </p>
                        <p className='py-1 font-medium text-[10px]'>
                            Kontaktlarim
                        </p>
                    </div>
                    <button onClick={()=>setCity(!city)}>
                        <IoIosArrowDown/>
                    </button>
                </div>
            </div>
            <button className='w-full h-[45px] rounded-[10px] bg-[#007bff] font-bold text-base text-white'>
                {language.Save}
            </button>
        </div>
  )
}

export default AccountManagement