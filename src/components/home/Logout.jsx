import { useNavigate } from "react-router"
import close from "../../assets/icons/close.svg"
import useStore from "../../store/useStore"
import { loggedIn, logOut } from "../../helpers/storage"
import { useDispatch } from "react-redux"
import { logout } from "../../slice/auth"

const Logout = ({setLogoutWindow}) => {

    const {language} = useStore()

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
        logOut()
        navigate("/login")
    }

  return (
    <div className='absolute w-screen h-screen backdrop-blur-[10px] flex justify-center items-center z-50 px-5'>
        <button onClick={()=>setLogoutWindow(false)}
        className="absolute top-5 left-5">
            <img src={close} alt="close" width={22} height={22}/>
        </button>
        <div className='text-center bg-white max-w-[644px] h-auto rounded-lg shadow-md shadow-gray-400 p-[50px] flex flex-col justify-between'>
            <p className='font-medium text-[32px] leading-[38px] text-center'>
                {language.ConfirmLogout}
            </p>
            <p className='mt-3 font-medium text-[18px] leading-[21px]'>
                {language.AreYouSure}
            </p>
            <div className='mt-4 flex flex-wrap gap-5'>
                <button onClick={handleLogout}
                className='mx-auto w-[262px] h-[45px] rounded-[10px] bg-[#007bff] text-white font-bold text-base leading-[19px]'>
                    {language.Logout}
                </button>
                <button onClick={()=>setLogoutWindow(false)}
                className='mx-auto w-[262px] h-[45px] rounded-[10px] border border-[#007bff] text-black font-bold text-base leading-[19px]'>
                    {language.Cancel}
                </button>
            </div>
        </div>
    </div>
  )
}

export default Logout