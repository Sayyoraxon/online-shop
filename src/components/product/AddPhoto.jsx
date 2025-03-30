import upload from "../../assets/image/upload.png";
import { useRef, useState } from "react";
import useStore from "../../store/useStore";
import { useDispatch, useSelector } from "react-redux";
import { addProductSuccess, createShopFailure, createShopStart } from "../../slice/createShop";
import AuthService from "../../service/Auth";

const AddPhoto = ({ productSlug, setAddProduct }) => {
    const { language } = useStore();
    const [image, setImage] = useState([]);
    const [loading, setLoading] = useState(false);
    const fileInputRef = useRef(null);
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.shop);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            setImage((prev) => [...prev, ...files]);
        }
    };

    const removeImage = (index) => {
        setImage((prev) => prev.filter((_, i) => i !== index));
    };

    const addPhoto = async () => {
        if (image.length === 0) {
            console.error("⚠️ Rasm tanlanmagan!");
            return;
        }

        setLoading(true);
        const formData = new FormData();
        image.forEach((file) => formData.append("image", file));
        formData.append("product", productSlug);

        dispatch(createShopStart());

        try {
            const res = await AuthService.productImageCreate(formData);
            console.log("✅ Yuklash muvaffaqiyatli:", res);
            dispatch(addProductSuccess());
        } catch (err) {
            console.error("Yuklashda xatolik:", err?.response?.data || err);
            dispatch(createShopFailure(err.response?.data || "Server xatosi"));
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <p className="mt-[57px] font-medium text-[32px] leading-[38px] text-center">
                {language.AddPhoto}
            </p>

            <div className="mt-[64px] w-full px-[46px] flex items-center gap-4">
                {image.map((file, index) => (
                    <div key={index} className="relative w-[262px] h-[262px] rounded-[15px] overflow-hidden">
                        <img
                            src={URL.createObjectURL(file)}
                            alt={`uploaded-${index}`}
                            className="w-full h-full object-cover rounded-[15px]"
                        />
                        <button onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 text-sm">
                            ❌
                        </button>
                    </div>
                ))}

                <button onClick={handleButtonClick}
                    className="w-[262px] h-[262px] rounded-[15px] border-[2px] border-dashed border-[#000] flex flex-col justify-center items-center gap-2 hover:bg-gray-100 transition">
                    <img src={upload} alt="upload" width={49} height={49} className="hover:scale-105 transition" />
                    <p className="px-12 font-medium text-[18px] leading-[21px] text-[#bfbfbf] text-center">
                        {language.UploadProductImage}
                    </p>
                </button>

                <input ref={fileInputRef} type="file" accept="image/*" multiple className="hidden" onChange={handleFileChange} />
            </div>

            <div className="mt-[90px] flex justify-end gap-[30px]">
                <button onClick={addPhoto} disabled={loading} className="w-[262px] h-[45px] bg-[#007bff] text-white font-bold rounded-[10px]">
                    {isLoading ? "Yuklanmoqda..." : language.Publish}
                </button>
                <button onClick={() => setAddProduct(false)} className="w-[262px] h-[45px] border border-[#007bff] text-[#007bff] rounded-[10px]">
                    {language.Cancel}
                </button>
            </div>
        </>
    );
};

export default AddPhoto;
