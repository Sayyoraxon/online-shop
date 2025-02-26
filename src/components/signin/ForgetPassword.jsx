import React, { useState } from 'react'
import ForgetPasswordS1 from './ForgetPasswordS1'
import ForgetPasswordS2 from './ForgetPasswordS2'
import ResetPassword from './ResetPassword'

const ForgetPassword = () => {

    const [step, setStep] = useState(1)

  return (
    <>
    {step === 1 ?
    <ForgetPasswordS1 setStep={setStep}/> :
    step === 2 ?
    <ForgetPasswordS2 setStep={setStep}/> :
    <ResetPassword/>}
    </>
  )
}

export default ForgetPassword