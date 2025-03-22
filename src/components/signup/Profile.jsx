import React from 'react'
import useStore from '../../store/useStore'
import { useLoginSchema } from '../../lib/Validation'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import AuthService from '../../service/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { signUserFailure, signUserStart } from '../../slice/auth';
import { loggedIn } from '../../helpers/storage';
import { useNavigate } from 'react-router';

const Profile = ({ setStep }) => {

    const { isLoading, error } = useSelector((state) => state.auth)

    const dispatch = useDispatch()

    const { language } = useStore()

    const { schemaProfile } = useLoginSchema()

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schemaProfile),
    });

    const onSubmit = async (data) => {
        console.log('Form ma’lumotlari:', data);
        dispatch(signUserStart())
        try {
            const res = await AuthService.updateProfile({
                first_name: data.firstName,
                last_name: data.lastName,
                birthday: data.birthday,
                gender: data.gender,
                nic_number: data.nickName,
                mobile_number: data.mobileNumber,
                street_address: data.streed,
                city: data.city,
                zip_code: data.zipCode
            })
            console.log(res)
            // dispatch(updateUserSuccess())
            setStep(5)
        } catch (err) {
            console.log(err)
            dispatch(signUserFailure(err.response.data))
        }
    };



    return (
        <div className='relative z-20 max-w-[644px] h-[690px] rounded-[15px] flex flex-col items-center justify-around py-10 sm:px-[50px] px-3'
            style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}>
            <p className='font-medium text-[32px] leading-[38px]'>
                {language.YourProfile}
            </p>
            <p className='font-medium text-[18px] leading-[21px] w-full text-left'>
                {language.YourInformations}
            </p>
            {error && <p className='h-5 text-[12px] text-red-500 text-left'>{error[0]}</p>}
            <div className='flex justify-between gap-5'>
                <div className='w-full'>
                    <input {...register('firstName')} type='text' placeholder={language.FirstName}
                        className='w-full h-[45px] rounded-[10px] bg-[#fff] backdrop-blur-[20px] border border-[#a1a1a1] px-3 outline-none' />
                    {errors.firstName && <p className='h-5 text-[12px] text-red-500 text-left'>{errors.firstName.message}</p>}
                    {error && <p className='h-5 text-[12px] text-red-500 text-left'>{error.first_name}</p>}

                </div>

                <div className='w-full'>
                    <input {...register('lastName')} type='text' placeholder={language.LastName}
                        className='w-full h-[45px] rounded-[10px] bg-[#fff] backdrop-blur-[20px] border border-[#a1a1a1] px-3 outline-none' />
                    {errors.lastName && <p className='h-5 text-[12px] text-red-500 text-left'>{errors.lastName.message}</p>}
                    {error && <p className='h-5 text-[12px] text-red-500 text-left'>{error.last_name}</p>}

                </div>

            </div>
            <div className='w-full'>
                <input {...register('nickName')} type='text' placeholder={language.FullName}
                    className='w-full h-[45px] rounded-[10px] bg-[#fff] backdrop-blur-[20px] border border-[#a1a1a1] px-3 outline-none' />
                {errors.nickName && <p className='h-5 text-[12px] text-red-500 text-left'>{errors.nickName.message}</p>}
                {error && <p className='h-5 text-[12px] text-red-500 text-left'>{error.nic_number}</p>}
            </div>
            <div className='w-full'>
                <input {...register('mobileNumber')} type='text' placeholder="Telefon raqam"
                    className='w-full h-[45px] rounded-[10px] bg-[#fff] backdrop-blur-[20px] border border-[#a1a1a1] px-3 outline-none' />
                {errors.mobileNumber && <p className='h-5 text-[12px] text-red-500 text-left'>{errors.mobileNumber.message}</p>}
                {error && <p className='h-5 text-[12px] text-red-500 text-left'>{error.mobile_number}</p>}
            </div>
            <div className='w-full flex justify-between gap-5'>
                <div className='w-full'>
                    <input {...register('birthday')} type='date' placeholder={language.Birthday}
                        onChange={(e) => console.log(typeof e.target.value)}
                        className='w-full h-[45px] rounded-[10px] bg-[#fff] backdrop-blur-[20px] border border-[#a1a1a1] px-3 outline-none' />
                    {errors.birthday && <p className='h-5 text-[12px] text-red-500 text-left'>{errors.birthday.message}</p>}
                    {error && <p className='h-5 text-[12px] text-red-500 text-left'>{error.birthday}</p>}
                </div>
                <div className='w-full'>
                    <select value={undefined} {...register('gender')}
                        className='w-full h-[45px] rounded-[10px] bg-[#fff] backdrop-blur-[20px] border border-[#a1a1a1] px-3 outline-none'>
                        <option value="male">
                            {language.Man}
                        </option>
                        <option value="female">
                            {language.Woman}
                        </option>
                    </select>
                    {errors.gender && <p className='h-5 text-[12px] text-red-500 text-left'>{errors.gender.message}</p>}
                </div>
            </div>
            <p className='font-medium text-[18px] leading-[21px] w-full text-left'>
                {language.HomeAddress}
            </p>
            <div className='w-full'>
                <input  {...register('streed')} type='text' placeholder={language.StreetAddress}
                    className='w-full h-[45px] rounded-[10px] bg-[#fff] backdrop-blur-[20px] border border-[#a1a1a1] px-3 outline-none' />
                {errors.streed && <p className='h-5 text-[12px] text-red-500 text-left'>{errors.streed.message}</p>}
            </div>
            <div className='flex justify-between gap-5'>
                <div className='w-full'>
                    <input  {...register('city')} type='text' placeholder={language.City}
                        className='w-full h-[45px] rounded-[10px] bg-[#fff] backdrop-blur-[20px] border border-[#a1a1a1] px-3 outline-none' />
                    {errors.city && <p className='h-5 text-[12px] text-red-500 text-left'>{errors.city.message}</p>}
                </div>
                <div className='w-full'>
                    <input  {...register('zipCode')} type='text' placeholder={language.ZipCode}
                        className='w-full h-[45px] rounded-[10px] bg-[#fff] backdrop-blur-[20px] border border-[#a1a1a1] px-3 outline-none' />
                    {errors.zipCode && <p className='h-5 text-[12px] text-red-500 text-left'>{errors.zipCode.message}</p>}
                </div>
            </div>
            <button onClick={handleSubmit(onSubmit)} disabled={isLoading}
                className='w-full h-[45px] rounded-[10px] bg-[#007bff] text-white font-semibold text-base leading-[19px]'>
                {isLoading ?
                    <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                    </svg> :
                    language.Continue}
            </button>
        </div>
    )
}

export default Profile