import React, { useEffect, useState } from 'react'
import CreateAccount from '../../components/signup/CreateAccount'
import VerifyEmail from '../../components/signup/VerifyEmail'
import VerifationSuccess from '../../components/signup/VerifationSuccess'
import Profile from '../../components/signup/Profile'
import ProfilePicture from '../../components/signup/ProfilePicture'
import { useNavigate } from 'react-router'


const Register = () => {

  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("")

  const navigate = useNavigate()
    const loggedIn = localStorage.getItem("loggedIn")

    useEffect(()=>{
        
        if(loggedIn){
          navigate("/")
        }
      }, [loggedIn])

  return (
    <div className='w-full h-[100vh]'>
      <div className="w-[1440px] h-full absolute top-0 laft-0">
        <div className='absolute top-[10%] left-[20%] h-[339px] w-[339px] rounded-full bg-[#007bff] opacity-60' >
        </div>
        <div className='absolute top-[10%] right-[10%] h-[647px] w-[647px] rounded-full bg-[#007bff] opacity-60' >
        </div>
        <div className='absolute bottom-[10%] left-[15%] h-[245px] w-[245px] rounded-full bg-[#007bff] opacity-60' >
        </div>
        <div className='absolute -bottom-[15%] right-[15%] h-[531px] w-[531px] rounded-full bg-[#007bff] opacity-60' >
        </div>
      </div>
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-[100px]'>
        {
          step === 1 ?
            <CreateAccount setStep={setStep} setEmail={setEmail} /> :
            step === 2 ?
            <VerifyEmail email={email} setStep={setStep} />
            :
            step === 3 ?
            <VerifationSuccess setStep={setStep}/> :
            step === 4 ?
            <Profile setStep={setStep}/> :
            <ProfilePicture/>
        }
      </div>
    </div>
  )
}

export default Register