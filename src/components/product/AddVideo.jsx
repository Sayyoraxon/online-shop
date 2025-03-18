import upload from "../../assets/image/upload.png"
import { useRef, useState } from "react";
import useStore from "../../store/useStore";
import { useDispatch } from "react-redux";
import AuthService from "../../service/Auth";
import { addProductSuccess, createShopFailure, createShopStart } from "../../slice/createShop";

const AddVideo = ({ data, subCategory, slug, setText }) => {

    const dispatch = useDispatch()

    const { language } = useStore()

    const [image, setImage] = useState()

    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file)
        }
    };

    const submit = async () => {
        const id = localStorage.getItem("shopId")
        if (!image) return;
        // FormData obyektini yaratamiz va faylni unga qo'shamiz
        const formData = new FormData();
        formData.append("video", image);
        formData.append("name", data.productName);
        formData.append("shop", id);
        formData.append("price", data.price);
        formData.append("quantity", data.quantity);
        formData.append("description", data.description);
        formData.append("sub_category", subCategory);



        dispatch(createShopStart())
        try {
            const res = await AuthService.addProduct(formData)
            console.log(res)
            dispatch(addProductSuccess())
            setText("photo")
        } catch (err) {
            dispatch(createShopFailure(err.response.data))
            console.log(err)

        }
    }

    const edit = async () => {
        const id = localStorage.getItem("shopId")
        if (!image) return;

        const formData = new FormData();
        formData.append("video", image);
        formData.append("name", data.productName);
        formData.append("shop", id);
        formData.append("price", data.price);
        formData.append("quantity", data.quantity);
        formData.append("description", data.description);
        formData.append("sub_category", subCategory);


        dispatch(createShopStart())
        try {
            const res = await AuthService.updateProduct(slug, formData)
            console.log(res)
            dispatch(addProductSuccess())
            setText("photo")
        } catch (err) {
            dispatch(createShopFailure(err.response.data))
            console.log(err)

        }
    }

    console.log(image)


    return (
        <>
            <p className='mt-[57px] font-medium text-[32px] leading-[38px] text-center'>
                {language.AddVideo}
            </p>
            <div className="mt-[64px] w-full px-[46px] flex items-center justify-center">
                <button onClick={handleButtonClick}
                    className="w-[262px] h-[262px] rounded-[15px] border-[2px] border-dashed border-[#000] flex flex-col justify-center items-center gap-2">
                    {
                        image ?
                            <p className="px-12 font-medium text-[18px] leading-[21px] text-center">
                                {image.name}
                            </p>
                            :
                            <>
                                <img src={upload} alt="upload" width={49} height={49} />
                                <p className="px-12 font-medium text-[18px] leading-[21px] text-[#bfbfbf] text-center">
                                    {language.UploadProductVideo}
                                </p>
                            </>
                    }
                </button>
                <input
                    ref={fileInputRef} // Reference to trigger the input
                    type="file"
                    accept="video/*" // Only accept image files
                    className="hidden"
                    onChange={handleFileChange} // Handle the file selection
                />

            </div>
            <div className='mt-[90px] flex items-center justify-end gap-[30px]'>

                <button onClick={slug === undefined ? submit : edit} className='w-[262px] h-[45px] rounded-[10px] bg-[#007bff] text-white font-bold text-base leading-[19px]'>
                    {language.Publish}
                </button>
                <button className='w-[262px] h-[45px] rounded-[10px] border border-[#007bff] text-[#007bff] bg-white font-bold text-base leading-[19px]'>
                    {language.Cancel}
                </button>
            </div>
        </>
    )
}

export default AddVideo