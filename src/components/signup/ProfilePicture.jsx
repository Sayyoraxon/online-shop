import React, { useState } from 'react'
import useStore from '../../store/useStore'
import upload from "../../assets/image/upload.png"
import AuthService from '../../service/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserFailed, signUserStart, deleteFailure } from '../../slice/auth';
import { useNavigate } from 'react-router';
import { loggedIn } from '../../helpers/storage';

const ProfilePicture = ({setStep}) => {

    const [file, setFile] = useState(null);

    const { language } = useStore()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const { isLoading, error } = useSelector((state) => state.auth)

    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            // Fayl obyektini statega saqlaymiz
            setFile(selectedFile);
        }
    };


    const submit = async () => {
        if (!file) return;
        // FormData obyektini yaratamiz va faylni unga qo'shamiz
        const formData = new FormData();
        formData.append("profile_picture", file);

        dispatch(signUserStart())

        try {
            const res = await AuthService.updatePhoto(formData);
          
            console.log(res);
            loggedIn(true)
            navigate("/")
        } catch (err) {
            console.error(err);
            dispatch(updateUserFailed(err.response.data))
        }

        setTimeout(() => {
            dispatch(deleteFailure());
        }, 3000);
    };

    console.log(file)


    return (
        <div className='relative z-20 w-[644px] h-[611px] rounded-[15px] flex flex-col items-center justify-around py-10 px-[50px]'
            style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}>
            <p className='font-medium text-[32px] leading-[38px]'>
                {language.ProfilePicture}
            </p>
            <button onClick={() => document.getElementById("fileInput").click()}
                className='overflow-hidden w-[315px] h-[315px] rounded-full bg-white border-[2px] border-black border-dashed flex flex-col gap-4 justify-center items-center'>
                <img src={upload} alt="upload" />
              
                    <p className='text-[18px] leading-[21px] text-[#bfbfbf]'>
                        {language.UploadPicture}
                    </p>
            </button>
            <input
                id="fileInput"
                type="file"
                accept="image/*"
                style={{ display: "none" }} // Ko'rinmas qilish
                onChange={handleImageChange} // Fayl o'zgarganda chaqiriladi
            />
            {error && <p className='h-5 text-[12px] text-red-500 text-left'>{error}</p>}

            <button onClick={submit} disabled={isLoading} className='w-full h-[45px] rounded-[10px] bg-[#007bff] text-white font-semibold text-base leading-[19px]'>
                {language.Submit}
            </button>
            <button onClick={() => {
                loggedIn(true)
                navigate("/")
            }}
                className='w-full h-[45px] rounded-[10px] text-[#007bff] font-semibold text-base leading-[19px]'>
                {language.Skip}
            </button>
        </div>
    )
}

export default ProfilePicture