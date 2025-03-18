import React, { useState } from 'react'
import useStore from '../../store/useStore'
import { IoIosArrowDown } from 'react-icons/io'
import { useLoginSchema } from '../../lib/Validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import AuthService from '../../service/Auth'
import { useDispatch, useSelector } from 'react-redux'
import { createShopFailure, createShopStart, createShopSuccess } from '../../slice/createShop'

const CrShopStep1 = ({ setStep }) => {

    const { language } = useStore()

    const { isLoading, error } = useSelector((state) => state.shop)

    const [category, setCategory] = useState("")
    const [regNumber, setRegNumber] = useState("")
    const [open, setOpen] = useState(false)

    const { schemaShop } = useLoginSchema()

    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schemaShop),
    });

    const onSubmit = async (data) => {
        console.log('Form ma’lumotlari:', data);
        dispatch(createShopStart())
        try {
            const response = await AuthService.createShop({
                reg_number: regNumber,
                name: data.shopName,
                status: category,
                email: data.email,
                phone_number: data.mobileNumber,
                street_address: data.streed,
                city: data.city,
                zip_code: data.zipCode
            })
            dispatch(createShopSuccess(response.data))
            localStorage.setItem("shopId", response.data.id)
            console.log(response)
        } catch (err) {
            dispatch(createShopFailure(err.response.data))
            console.log(err)
        }
    };


    console.log(error)

    return (
        <div className='mt-4 w-full px-[50px] py-[20px] bg-white shadow-md shadow-gray-400 rounded-[10px] flex flex-col gap-3'>
            <p className='font-medium text-[32px] leading-[38px] text-center'>
                {language.YourNewShop}
            </p>
            {error && <p className='h-5 text-[12px] text-red-500 text-center'>{error.detail}</p>}
            <p className='mt-2.5 font-medium text-[18px] leading-[21px]'>
                {language.ShopInformations}
            </p>
            <div>
                <input className='w-full h-[45px] rounded-[10px] border border-[#a1a1a1] px-[14px]'
                    {...register('shopName')} type="text" placeholder={language.ShopName} />
                {errors.shopName && <p className='h-5 text-[12px] text-red-500 text-left'>{errors.shopName.message}</p>}
            </div>

            <div className='relative w-full h-[45px] rounded-[10px] border border-[#a1a1a1] px-[14px] flex justify-between items-center'>
                <p className={`text-base ${category === "" ? "text-[#BEBEBE]" : "text-black"}`}>
                    {category !== "" ? category : "Business Category"}
                </p>
                <button onClick={() => setOpen(!open)}>
                    <IoIosArrowDown style={{ color: "#BEBEBE" }} />
                </button>
                {open && <div className='absolute left-0 -bottom-11 w-full p-2 rounded-md shadow-md shadow-gray-400 bg-white'>
                    <button onClick={() => {
                        setCategory("business")
                        setOpen(false)
                    }} className='text-base'>
                        business
                    </button>
                </div>}
            </div>
            <input className='w-[262px] h-[45px] rounded-[10px] border border-[#a1a1a1] px-[14px]'
                onChange={(e) => setRegNumber(e.target.value)} type="text" placeholder={language.RegNum} />
            <p className='mt-2.5 font-medium text-[18px] leading-[21px]'>
                {language.Contact}
            </p>
            <div className='flex gap-5'>
                <div className='w-full'>
                    <input className='w-full h-[45px] rounded-[10px] border border-[#a1a1a1] px-[14px]'
                        {...register('email')} type="text" placeholder={language.EmailAddress} />
                    {errors.email && <p className='h-5 text-[12px] text-red-500 text-left'>{errors.email.message}</p>}
                </div>
                <div className='w-full'>
                    <input className='w-full h-[45px] rounded-[10px] border border-[#a1a1a1] px-[14px]'
                        {...register('mobileNumber')} type="text" placeholder={language.PhoneNumber} />
                    {errors.mobileNumber && <p className='h-5 text-[12px] text-red-500 text-left'>{errors.mobileNumber.message}</p>}

                </div>

            </div>
            <p className='mt-2.5 font-medium text-[18px] leading-[21px]'>
                {language.ShopAddress}
            </p>
            <div>
                <input className='w-full h-[45px] rounded-[10px] border border-[#a1a1a1] px-[14px]'
                    {...register('streed')} type="text" placeholder={language.StreetAddress} />
                {errors.streed && <p className='h-5 text-[12px] text-red-500 text-left'>{errors.streed.message}</p>}

            </div>
            <div className='flex gap-5'>
                <div className='w-full'>
                    <input className='w-full h-[45px] rounded-[10px] border border-[#a1a1a1] px-[14px]'
                        {...register('city')} type="text" placeholder={language.City} />
                    {errors.city && <p className='h-5 text-[12px] text-red-500 text-left'>{errors.city.message}</p>}

                </div>

                <div className='w-full'>
                    <input className='w-full h-[45px] rounded-[10px] border border-[#a1a1a1] px-[14px]'
                        {...register('zipCode')} type="text" placeholder={language.ZipCode} />
                    {errors.zipCode && <p className='h-5 text-[12px] text-red-500 text-left'>{errors.zipCode.message}</p>}

                </div>
            </div>
            <button onClick={handleSubmit(onSubmit)} disabled={isLoading}
                className='w-full h-[45px] rounded-[15px] bg-[#007bff] text-white font-semibold text-base leading-[19px]'>
                {isLoading ?
                    <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                    </svg> :
                    language.CreateShop}
            </button>
        </div>
    )
}

export default CrShopStep1