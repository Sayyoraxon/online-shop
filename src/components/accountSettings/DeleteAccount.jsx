import React from 'react'
import useStore from '../../store/useStore'
import { IoClose } from 'react-icons/io5'
import AuthService from '../../service/Auth'
import {loggedIn, logOut} from "../../helpers/storage"
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { logout } from '../../slice/auth'

const DeleteAccount = ({ setDeleteAccount, setMainWindow }) => {

    const { language } = useStore()

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const deleteAccount = async() => {
        try{
            const res = await AuthService.deleteAccount()
            loggedIn(false)
            dispatch(logout())
            logOut()
            navigate("/")
            console.log(res)
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className='relative w-[644px] h-auto py-10 px-[50px] rounded-[15px] shadow-md shadow-gray-400 bg-white'>
            <button onClick={() => {
                setDeleteAccount(false)
                setMainWindow(true)
            }}
                className='absolute top-5 right-5'>
                <IoClose style={{ fontSize: "25px" }} />
            </button>
            <p className='font-medium text-[32px] text-center'>
                {language.ConfirmAccountDelete}
            </p>
            <p className='mt-[30px] font-medium text-base text-center'>
                {language.AreYouSureDelete}
            </p>
            <div className='mt-[30px] w-full flex gap-5'>
                <button onClick={deleteAccount}
                 className='mt-2.5 w-full h-[45px] rounded-[10px] bg-[#007bff] font-bold text-base text-white'>
                    {language.YesOfCourse}
                </button>
                <button onClick={() => {
                    setDeleteAccount(false)
                    setMainWindow(true)
                }} className='mt-2.5 w-full h-[45px] rounded-[10px] border border-[#007bff] font-bold text-base text-[#007bff]'>
                    {language.NoDont}
                </button>
            </div>
        </div>
    )
}

export default DeleteAccount