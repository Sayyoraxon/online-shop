import React from 'react'
import success from "../../assets/icons/success.svg"
import useStore from '../../store/useStore'

const VerifationSuccess = ({ setStep }) => {

    const { language } = useStore()


    return (
        <div className='relative z-20 w-[456px] h-[484px] rounded-[15px] flex flex-col items-center justify-around py-2.5 px-[50px]'
            style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}>
            <p className='font-medium text-[32px] leading-[38px] text-center'>
                {language.EmailVerified}
            </p>
            <img src={success} alt="email" width={101} height={101} />

            <p className='font-medium text-[14px] leading-[17px] text-center'>
                {language.VerifationFailedSubtitle}
            </p>

            <button
                className='w-full h-[45px] rounded-[10px] bg-[#007bff] text-white font-semibold text-base leading-[19px]'>
                {language.GoToHome}
            </button>
            <button onClick={() => setStep(4)}
                className='w-full h-[35px] rounded-[10px] text-[#007bff] font-semibold text-base leading-[19px] flex gap-1 justify-center'>

                {language.SignIn}
            </button>

        </div>
    )
}

export default VerifationSuccess