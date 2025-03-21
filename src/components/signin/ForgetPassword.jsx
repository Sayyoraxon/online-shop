import React, { useState } from 'react'
import ForgetPasswordS1 from './ForgetPasswordS1'
import ForgetPasswordS2 from './ForgetPasswordS2'
import ResetPassword from './ResetPassword'

const ForgetPassword = () => {

    const [step, setStep] = useState(1)

    const [email, setEmail] = useState("")

  return (
    <>
    {step === 1 ?
    <ForgetPasswordS1 email={email} setEmail={setEmail} setStep={setStep}/> :
    <ResetPassword email={email}/>}
    </>
  )
}

export default ForgetPassword