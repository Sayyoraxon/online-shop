import upload from "../../assets/image/upload.png"
import plus from "../../assets/icons/plus1.svg"
import { useRef, useState } from "react";
import useStore from "../../store/useStore";

const AddPhoto = ({setText}) => {

    const {language} = useStore()

    const [image, setImage] = useState([])

    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        // Trigger the file input click when the button is clicked
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage((prev)=>
                [
                    ...prev,
                    file
                ]
            )
        }
    };

    console.log(image)

    return (
        <>
            <p className='mt-[57px] font-medium text-[32px] leading-[38px] text-center'>
                {language.AddPhoto}
            </p>
            <div className="mt-[64px] w-full px-[46px] flex items-center justify-between">
                <button onClick={handleButtonClick}
                    className="w-[262px] h-[262px] rounded-[15px] border-[2px] border-dashed border-[#000] flex flex-col justify-center items-center gap-2">
                    <img src={upload} alt="upload" width={49} height={49} />
                    <p className="px-12 font-medium text-[18px] leading-[21px] text-[#bfbfbf] text-center">
                        {language.UploadProductImage}
                    </p>
                </button>
                <input
                    ref={fileInputRef} // Reference to trigger the input
                    type="file"
                    accept="image/*" // Only accept image files
                    className="hidden"
                    onChange={handleFileChange} // Handle the file selection
                />
                <button onClick={handleButtonClick}
                className="w-[262px] h-[262px] rounded-[15px] border-[2px] border-dashed border-[#000] flex flex-col justify-center items-center gap-2">
                    <img src={upload} alt="upload" width={49} height={49} />
                    <p className="px-12 font-medium text-[18px] leading-[21px] text-[#bfbfbf] text-center">
                    {language.UploadProductImage}
                    </p>
                </button>
                <button className="w-[262px] h-[262px] rounded-[15px] border-[2px] border-dashed border-[#000] flex flex-col justify-center items-center gap-2">
                    <img className="bg-[#bfbfbf] p-[30px] rounded-[10px]"
                        src={plus} alt="plus" width={100} height={100} />

                </button>
            </div>
            <div className='mt-[90px] flex items-center justify-end gap-[30px]'>

                <button onClick={()=>setText("video")}
                 className='w-[262px] h-[45px] rounded-[10px] bg-[#007bff] text-white font-bold text-base leading-[19px]'>
                    {language.Publish}
                </button>
                <button className='w-[262px] h-[45px] rounded-[10px] border border-[#007bff] text-[#007bff] bg-white font-bold text-base leading-[19px]'>
                    {language.Cancel}
                </button>
            </div>
        </>
    )
}

export default AddPhoto