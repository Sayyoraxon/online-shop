import React, { useEffect, useRef, useState } from 'react'
import useStore from '../../store/useStore'
import verifyStore from '../../store/verifyStore'

const ForgetPasswordS2 = ({setStep}) => {

    const {openFailure} = verifyStore()

    const { language } = useStore()
    const [num, setNum] = useState()
    const [value, setValue] = useState([])
    const inputs = useRef([])

    const handleChange = (e, i) => {
        if(e.target.value !== "" ) {
            setValue((prev)=>([
                ...prev,
                e.target.value
            ]))
        }

        if(e.target.value !== "" && i !== 5) {
            inputs.current[i+1].focus()
        }
    }

    const handlePress = (e,i) => {
        if(e.key === "Backspace") {
            const newValue = value.slice(0, -1)
            setValue(newValue)
            if(i !== 0 && e.target.value === "") {
                inputs.current[i-1].focus()
            }
        }
    }


    const [seconds, setSeconds] = useState(60); // Boshlang'ich vaqt

    useEffect(() => {
      if (seconds > 0) {
        const interval = setInterval(() => {
          setSeconds((prev) => prev - 1);
        }, 1000);
  
        return () => clearInterval(interval);
      }
    }, [seconds]);

    return (
        <div className="max-w-[388px] text-center text-[36px] leading-[44px] px-3">
            <p className='font-semibold'>
                {language.Verify}
            </p>
            <p className='mt-[30px] text-base leading-[19px]'>
                {language.VerifyText}
            </p>
            <div className='mt-[30px] flex gap-2.5 justify-between'>

                {Array.from({
                    length: 6
                },(_, i)=>(
                    <input key={i}  onFocus={()=>setNum(i)}
                    onKeyDown={(e)=>handlePress(e, i)}
                    onChange={(e)=>handleChange(e, i)}
                    ref={(el) => (inputs.current[i] = el)}
                    className='w-[50px] h-[60px] rounded-[5px] border-[2px] border-[rgba(31, 41, 90, 0.15)] text-base text-center'
                    type="text" maxLength={1} placeholder={i===num ? "" : "X"} />
                ))}
            </div>
            <div className='w-full mt-4 flex justify-between items-center'>
                {seconds !==0 ? <p className='font-medium text-base leading-[19px] text-[#007bff]'>
                    00 : <span>{seconds > 10 ? seconds : `0${seconds}`}</span>s
                </p> : 
                <p></p>}
                <button onClick={()=>setSeconds(60)}
                 className='font-medium text-base leading-[19px] text-[#007bff]'>
                    {language.Resend}
                </button>
            </div>


            <button onClick={openFailure}
                className='mt-[30px] rounded-[10px] w-full h-[45px] bg-[#007bff] text-white text-base leading-[19px] font-semibold hover:opacity-90'>
                {language.Submit}
            </button>
        </div>
    )
}

export default ForgetPasswordS2