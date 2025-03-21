import React, { useEffect, useState } from 'react'
import logo from "../../assets/icons/logo.png"
import img from "../../assets/image/image 8.png"
import useStore from '../../store/useStore'

import SignIn from '../../components/signin/SignIn'
import ForgetPassword from '../../components/signin/ForgetPassword'
import VerifyDialog from '../../components/signin/VerifyDialog'
import verifyStore from '../../store/verifyStore'
import { useNavigate } from 'react-router'

const Login = () => {

    const { language} = useStore();
    const {openDialog} = verifyStore()
    const [forgetPassword, setForgetPassword] = useState(false)

    const navigate = useNavigate()
    const loggedIn = localStorage.getItem("loggedIn")

    useEffect(()=>{
        
        if(loggedIn){
          navigate("/")
        }
      }, [loggedIn, navigate])


    return (
        <div className='flex bg-white'>
            {openDialog && <VerifyDialog/>}
            <div className='w-[708px] h-[90vh] mx-auto flex flex-col justify-around items-center backdrop-blur-md'>
            <img src={logo} alt="logo" width={280} height={119} />
            {forgetPassword ?
            <ForgetPassword/> :
            <SignIn setForgetPassword={setForgetPassword}/>}
            </div>
            <div className='lg:block hidden relative w-[732px] px-6 h-[100vh] bg-gradient-to-b from-cyan-500 to-blue-500 overflow-hidden'>
                <p className='mt-[100px] max-w-[564px] text-[24px] leading-[29px] font-semibold text-white'>
                   {language.Lorem} 
                </p>
                <div className='absolute w-full pt-8 pl-8 bg-black h-[582px] -bottom-6 left-6 rounded-[24px] border-4 border-gray-400'>
                  <img className='w-full h-full object-cover rounded-t-lg' src={img} alt='fon'/>  
                </div>
            </div>
        </div>
    )
}

export default Login