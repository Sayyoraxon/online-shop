import { useState } from "react"
import logo from "../../assets/icons/logo.png"
import close from "../../assets/icons/close.svg"
import CrShopStep1 from "./CrShopStep1"
import CrShopStep2 from "./CrShopStep2"
import CrShopStep3 from "./CrShopStep3"

const CreateShop = ({setCreateshop}) => {

    const [step, setStep] = useState(1)


  return (
    <div className='absolute w-screen h-screen top-0 left-0 backdrop-blur flex justify-center items-center'>
        <button onClick={()=>setCreateshop(false)}
        className="absolute top-5 left-5">
            <img src={close} alt="close" width={25} height={25}/>
        </button>
        
        <div className="max-w-[644px]">
            <img className="mx-auto" src={logo} alt="logo" width={240} height={81}/>
            {step===1 ? 
            <CrShopStep1 setStep={setStep}/> :
            step === 2 ?
            <CrShopStep2 setStep={setStep}/> :
            <CrShopStep3/>}
        </div>
        
    </div>
  )
}

export default CreateShop