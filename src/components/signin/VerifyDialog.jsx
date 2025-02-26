import React from 'react'
import x from "../../assets/icons/x-button.svg"
import succes from "../../assets/icons/success.svg"
import verifyStore from '../../store/verifyStore'
import useStore from '../../store/useStore'

const VerifyDialog = () => {

    const { success, close } = verifyStore()
    const { language } = useStore()


    console.log(success)

    return (
        <div onClick={close}
            className='fixed w-full h-full top-0 left-0 bg-[255, 255, 255, 0.7] backdrop-blur-[60px] z-10 flex justify-center items-center'>
            {success ?
                <div className='w-[456px] h-[402px] p-[50px] bg-white rounded-[15px] flex flex-col items-center justify-around'>
                <p className='font-medium text-[32px] leading-[38px] text-center'>
                    {language.PasswordChanged}
                </p>
                <img src={succes} alt="fail" width={101} height={101}/>
                <button className='w-full h-[45px] bg-[#007bff] rounded-[10px] text-white font-semibold text-base leading-[19px]'>
                    {language.SinginTitle}
                </button>
            </div>
                :
                <div className='w-[456px] h-[402px] p-[50px] bg-white rounded-[15px] flex flex-col items-center justify-around'>
                    <p className='font-medium text-[32px] leading-[38px] text-center'>
                        {language.Failed}
                    </p>
                    <img src={x} alt="fail" width={101} height={101}/>
                    <p className='font-medium text-[14px] leading-[17px] text-center'>
                        {language.WrongCode}
                    </p>
                    <button className='w-full h-[45px] bg-[#007bff] rounded-[10px] text-white font-semibold text-base leading-[19px]'>
                        {language.TryAgain}
                    </button>
                </div>
            }
        </div>
    )
}

export default VerifyDialog