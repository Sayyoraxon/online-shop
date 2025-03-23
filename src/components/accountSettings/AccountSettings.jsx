import React, { useState } from 'react'
import useStore from '../../store/useStore'
import { IoClose } from 'react-icons/io5'
import EditAccount from './EditAccount'
import DeleteAccount from './DeleteAccount'
//import AccountManagement from './AccountManagement'

const AccountSettings = ({setAccount}) => {

    const { language } = useStore()
    const [mainWindow, setMainWindow] = useState(true)
    const [editAccount, setEditAccount] = useState(false)
    const [deleteAccount, setDeleteAccount] = useState(false)

    return (
        <div className='fixed h-screen w-full top-0 left-0 backdrop-blur-md flex justify-center items-center'>
            {mainWindow &&
                <div className='relative w-[644px] h-[353px] pt-10 px-[50px] rounded-[15px] shadow-md shadow-gray-400 bg-white'>
                    <button onClick={()=>setAccount(false)}
                     className='absolute top-5 right-5'>
                        <IoClose style={{ fontSize: "25px" }} />
                    </button>
                    <p className='font-medium text-[32px] text-center'>
                        {language.AccountSettings}
                    </p>
                    <button onClick={() => {
                        setEditAccount(true)
                        setMainWindow(false)
                    }} className='mt-[54px] w-full h-[45px] rounded-[10px] border border-[#007bff] font-bold text-base'>
                        {language.EditAccount}
                    </button>
                    <button onClick={() => {
                        setDeleteAccount(true)
                        setMainWindow(false)
                    }}
                        className='mt-2.5 w-full h-[45px] rounded-[10px] border border-[#007bff] font-bold text-base'>
                        {language.DeleteAccount}
                    </button>
                </div>}
            {
                deleteAccount &&
                <DeleteAccount setDeleteAccount={setDeleteAccount} setMainWindow={setMainWindow} />
            }

            {
                editAccount && 
                <EditAccount setEditAccount={setEditAccount} setMainWindow={setMainWindow}/>
            }

        </div>
    )
}

export default AccountSettings