import upload from "../../assets/image/upload.png"
import { useRef, useState } from "react";
import useStore from "../../store/useStore";
import { useDispatch, useSelector } from "react-redux";
import AuthService from "../../service/Auth";
import { addProductSuccess, createShopFailure, createShopStart } from "../../slice/createShop";

const AddVideo = ({ data, subCategory, slug, setText, setProductSlug }) => {

    const dispatch = useDispatch()

    const { language } = useStore()

    const { isLoading } = useSelector((state) => state.shop)

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
        console.log("submit")
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
            setProductSlug(res.data.id)
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
            setText("product")
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
                    {isLoading ?
                        <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                        </svg> :
                        language.Publish}
                </button>
                <button className='w-[262px] h-[45px] rounded-[10px] border border-[#007bff] text-[#007bff] bg-white font-bold text-base leading-[19px]'>
                    {language.Cancel}
                </button>
            </div>
        </>
    )
}

export default AddVideo