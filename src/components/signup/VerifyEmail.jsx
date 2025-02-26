import React, { useEffect, useState } from 'react'
import useStore from '../../store/useStore'
import e_mail from "../../assets/icons/email .svg"
import back from "../../assets/icons/back.svg"
import { useDispatch, useSelector } from 'react-redux'
import { registerUserFailure, signUserStart, registerUserSuccess } from '../../slice/auth'
import AuthService from '../../service/Auth'
import { loggedIn } from '../../helpers/storage'

const VerifyEmail = ({ email, setStep }) => {

  const [seconds, setSeconds] = useState(3)

  const [code, setCode] = useState("")

  const { language } = useStore()

  const { isLoading, error } = useSelector((state) => state.auth)

  const dispatch = useDispatch()

  const verify = async () => {
    dispatch(signUserStart())
    try {
      const res = await AuthService.confirmCode({ "code": code })
      dispatch(registerUserSuccess(res))
      loggedIn(true)
      setStep(3)
    } catch (err) {
      dispatch(registerUserFailure(err.response.data.message))
      console.log(err)
    }

  }

  const getNewCode = async () => {
    try {
      const res = await AuthService.newConfirmCode()
      dispatch(registerUserFailure(res))
    } catch (err) {
      dispatch(registerUserFailure(err.response.data.message))
    }
  }



  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative z-20 w-[456px] h-[484px] rounded-[15px] flex flex-col items-center justify-around py-2.5 px-[50px]'
      style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}>
      <p className='font-medium text-[32px] leading-[38px]'>
        {language.CreateAccount}
      </p>
      <img src={e_mail} alt="email" width={101} height={101} />
      <div>
        <p className='font-medium text-[14px] leading-[17px] text-center'>
          {language.EmailVerifationsubtitle}
        </p>
        <p className='font-medium text-[14px] leading-[17px] text-[#007bff] text-center'>
          {email}
        </p>
      </div>
      {error && <p className='w-full h-5 text-[12px] text-red-500 text-left'>{error}</p>}
      <input onChange={(e) => setCode(e.target.value)}
        type='text' placeholder={language.DigitsCode}
        className='w-full h-[45px] rounded-[10px] bg-[#fff] backdrop-blur-[20px] border border-[#a1a1a1] px-3 outline-none' />
      {seconds > 0 ?
        <p className='text-base text-[#007bff] w-full text-left'>
          {`${seconds} soniya vaqt qoldi`}
        </p> :
        <button onClick={getNewCode}
          className='font-medium text-base text-[#007bff] w-full text-left'>
          {language.TryAgain}
        </button>}
      <button onClick={verify} disabled={isLoading}
        className='w-full h-[45px] rounded-[10px] bg-[#007bff] text-white font-semibold text-base leading-[19px]'>
        {isLoading ?
          <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
          </svg> :
          language.Submit}
      </button>
      <button onClick={()=>{
        setStep(1)
        dispatch(registerUserFailure(null))
      }}
        className='w-full h-[35px] rounded-[10px] text-[#007bff] font-semibold text-base leading-[19px] flex gap-1 justify-center'>
        <img src={back} alt="back" width={19} height={19} />
        {language.Back}
      </button>
    </div>
  )
}

export default VerifyEmail