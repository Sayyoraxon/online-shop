import React, { useState } from 'react'
import useStore from '../../store/useStore'
import upload from "../../assets/image/upload.png"

const CrShopStep2 = ({setStep}) => {

    const [image, setImage] = useState(null);

    const { language } = useStore()

    const handleImageChange = (event) => {
        const file = event.target.files[0]; // Faylni olish
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setImage(reader.result); // Rasmni base64 formatida state-ga saqlash
          };
          reader.readAsDataURL(file); // Faylni o'qish
        }
      };
    return (
        <div className='relative z-20 w-[644px] h-auto bg-white rounded-[15px] flex flex-col items-center gap-5 py-10 px-[50px] shadow-md'>
            <p className='font-medium text-[32px] leading-[38px]'>
                {language.ShopLogo}
            </p>
            <button onClick={() => document.getElementById("fileInput").click()}
            className='overflow-hidden w-[315px] h-[315px] rounded-full bg-white border-[2px] border-black border-dashed flex flex-col gap-4 justify-center items-center'>
                <img src={image !== null ? image : upload} alt="upload" />
                {image ===null && 
                <p className='text-[18px] leading-[21px] text-[#bfbfbf]'>
                    {language.UploadPicture}
                </p>}
            </button>
            <input
                id="fileInput"
                type="file"
                accept="image/*"
                style={{ display: "none" }} // Ko'rinmas qilish
                onChange={handleImageChange} // Fayl o'zgarganda chaqiriladi
            />
            <button onClick={()=>setStep(3)}
             className='w-full h-[45px] rounded-[10px] bg-[#007bff] text-white font-semibold text-base leading-[19px]'>
                {language.Submit}
            </button>
            <button onClick={()=>setImage(null)}
             className='w-full h-[45px] rounded-[10px] text-[#007bff] font-semibold text-base leading-[19px]'>
                {language.Skip}
            </button>
        </div>
    )
}

export default CrShopStep2