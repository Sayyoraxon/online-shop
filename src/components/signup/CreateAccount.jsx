import React, { useState } from 'react'
import useStore from '../../store/useStore'
import { useLoginSchema } from '../../lib/Validation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import AuthService from '../../service/Auth'
import { registerUserFailure, signUserStart, registerUserSuccess } from '../../slice/auth'
import { useDispatch, useSelector } from 'react-redux'
import { token } from '../../helpers/storage'

const CreateAccount = ({ setStep, setEmail }) => {

  const [accountType, setAccounttype] = useState("customer")

  const { language } = useStore()

  const { schemaSignUp } = useLoginSchema()

  const { isLoading, error } = useSelector((state) => state.auth)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaSignUp),
  });

  const dispatch = useDispatch()

  const onSubmit = async (data) => {
    console.log('Form ma’lumotlari:', data);

    setEmail(data.email)
    dispatch(signUserStart())
    try {
      const res = await AuthService.userRegister({
        "email": data.email,
        "password": data.createPassword,
        "confirm_password": data.confirmPassword,
        "account_type": accountType
      })
      console.log(res.detail)
      dispatch(registerUserSuccess(res.detail))
      token(res.detail.access_token)
  
      setStep(2)
    } catch (err) {
      console.log(err.response.data)
      dispatch(registerUserFailure(err.response.data))
    }
  };

  const handleClick = (e) => {

    const children = Array.from(e.parentElement.children)
    children.forEach((i) => {
      i.style.backgroundColor = "inherit"
    })

    e.style.backgroundColor = "white"
    e.style.color = "#007bff"

    setAccounttype(e.name)
  }

  console.log(accountType)


  return (
    <div className='relative z-20 w-[456px] h-[484px] rounded-[15px] flex flex-col items-center justify-around py-2.5 sm:px-[50px] px-3'
      style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}>
      <p className='font-medium text-[32px] leading-[38px]'>
        {language.CreateAccount}
      </p>
      <div className='flex p-[5px] bg-[#f3f3f3] backdrop-blur-[40px] rounded-[12px] shadow'>
        <button name='customer' onClick={(e) => handleClick(e.target)}
          className='w-[173px] h-[45px] rounded-[12px] font-medium text-[14px] bg-white text-[#007bff]'>
          {language.CustomerAccount}
        </button>
        <button name='shopper' onClick={(e) => handleClick(e.target)}
          className='w-[173px] h-[45px] rounded-[9px] font-medium text-[14px]'>
          {language.ShopperAccount}
        </button>
      </div>
      {error && <p className='w-full h-5 text-[12px] text-red-500 text-left'>{error}</p>}
      <input type='text' {...register('email')} placeholder={language.EmailAddress}
        className='w-full h-[45px] rounded-[10px] bg-[#fff] backdrop-blur-[20px] border border-[#a1a1a1] px-3 outline-none' />
      {errors.email && <p className='w-full h-5 text-[12px] text-red-500 text-left'>{errors.email.message}</p>}
      <input type='text' {...register('createPassword')} placeholder={language.CreatePassword}
        className='w-full h-[45px] rounded-[10px] bg-[#fff] backdrop-blur-[20px] border border-[#a1a1a1] px-3 outline-none' />
      {errors.createPassword && <p className='w-full h-5 text-[12px] text-red-500 text-left'>{errors.createPassword.message}</p>}
      <input type='text' {...register('confirmPassword')} placeholder={language.ConfirmPassword}
        className='w-full h-[45px] rounded-[10px] bg-[#fff] backdrop-blur-[20px] border border-[#a1a1a1] px-3 outline-none' />
      {errors.confirmPassword && <p className='w-full h-5 text-[12px] text-red-500 text-left'>{errors.confirmPassword.message}</p>}
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

export default CreateAccount