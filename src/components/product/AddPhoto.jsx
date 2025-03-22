import upload from "../../assets/image/upload.png";
import plus from "../../assets/icons/plus1.svg";
import { useRef, useState } from "react";
import useStore from "../../store/useStore";
import { useDispatch, useSelector } from "react-redux";
import { addProductSuccess, createShopFailure, createShopStart } from "../../slice/createShop";
import AuthService from "../../service/Auth";

const AddPhoto = ({ productSlug, setAddProduct }) => {
    const { language } = useStore();
    const [image, setImage] = useState([]); // Rasm fayllari massivi
    const fileInputRef = useRef(null);
    const dispatch = useDispatch();
    const {isLoading} = useSelector((state)=>state.shop)

    const handleButtonClick = () => {
        fileInputRef.current.click(); // Inputni bosish orqali tanlash
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files); // Bir nechta fayl tanlashni qo‘llab-quvvatlash
        if (files.length > 0) {
            setImage((prev) => [...prev, ...files]); // Avvalgi fayllarni saqlab, yangi qo‘shish
        }
    };

    console.log("Yuklangan rasmlar:", image);

    const addPhoto = async () => {
        if (image.length === 0) {
            console.error("⚠️ Rasm tanlanmagan!");
            return;
        }

        const formData = new FormData();

        // Agar backend "profile_picture" ni kutayotgan bo‘lsa, shu nom bilan qo‘shamiz
        image.forEach((file) => formData.append("image", file));

        formData.append("product", productSlug); // Mahsulot slug qo‘shish

        dispatch(createShopStart());

        try {
            const res = await AuthService.productImageCreate(formData)
            console.log("✅ Yuklash muvaffaqiyatli:", res);
            dispatch(addProductSuccess());
            setAddProduct(false)
        } catch (err) {
            console.error("Yuklashda xatolik:", err?.response?.data || err);
            dispatch(createShopFailure(err.response?.data || "Server xatosi"));
        }
    };


    return (
        <>
            <p className="mt-[57px] font-medium text-[32px] leading-[38px] text-center">
                {language.AddPhoto}
            </p>
            <div className="mt-[64px] w-full px-[46px] flex items-center justify-between gap-4">
                {/* Rasmlar ko'rsatish */}
                {image.map((file, index) => (
                    <div key={index} className="relative w-[262px] h-[262px] rounded-[15px] overflow-hidden">
                        <img
                            src={URL.createObjectURL(file)}
                            alt={`uploaded-${index}`}
                            className="w-full h-full object-cover rounded-[15px]"
                        />
                    </div>
                ))}

                {/* Rasmlar yuklash tugmasi */}
                <button onClick={handleButtonClick}
                    className="w-[262px] h-[262px] rounded-[15px] border-[2px] border-dashed border-[#000] flex flex-col justify-center items-center gap-2">
                    <img src={upload} alt="upload" width={49} height={49} />
                    <p className="px-12 font-medium text-[18px] leading-[21px] text-[#bfbfbf] text-center">
                        {language.UploadProductImage}
                    </p>
                </button>

                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple // Bir nechta fayl yuklashga ruxsat berish
                    className="hidden"
                    onChange={handleFileChange}
                />

                {/* Qo‘shimcha rasm yuklash tugmasi */}
                <button onClick={handleButtonClick}
                    className="w-[262px] h-[262px] rounded-[15px] border-[2px] border-dashed border-[#000] flex flex-col justify-center items-center gap-2">
                    <img className="bg-[#bfbfbf] p-[30px] rounded-[10px]" src={plus} alt="plus" width={100} height={100} />
                </button>
            </div>

            {/* Amalga oshirish tugmalari */}
            <div className="mt-[90px] flex items-center justify-end gap-[30px]">
                <button onClick={addPhoto}
                    className="w-[262px] h-[45px] rounded-[10px] bg-[#007bff] text-white font-bold text-base leading-[19px]">
                    {isLoading ?
                        <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                        </svg> :
                        language.Publish}
                </button>
                <button className="w-[262px] h-[45px] rounded-[10px] border border-[#007bff] text-[#007bff] bg-white font-bold text-base leading-[19px]">
                    {language.Cancel}
                </button>
            </div>
        </>
    );
};

export default AddPhoto;
