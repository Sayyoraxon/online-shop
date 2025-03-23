import logo from "../../assets/icons/logo.png"
import homelogo from "../../assets/icons/complaint.svg"
import customerslogo from "../../assets/icons/clipboard.svg"
import cuschatlogo from "../../assets/icons/cuschatwhite.svg"
import logout from "../../assets/icons/logout.svg"
import { NavLink, Outlet, useNavigate } from 'react-router'
import Logout from '../../components/home/Logout'
import useStore from '../../store/useStore'
import { useState } from "react"
import { FaBars } from "react-icons/fa6"
import { FaUser } from "react-icons/fa"

const CustomerProfile = ({ data }) => {

  const [logoutWindow, setLogoutWindow] = useState(false)
  const [menu, setMenu] = useState(false)

  const { language } = useStore()

  return (
    <div className='h-screen w-full fixed top-0 left-0 bg-white overflow-hidden'>
      <div className='w-full flex'>
        {logoutWindow && <Logout setLogoutWindow={setLogoutWindow} />}
        <div className="absolute px-6 top-0 w-full h-14 lg:hidden border-b flex justify-between items-center gap-5">
          <NavLink to="/">
            <img src={logo} alt="logo" width={70} />
          </NavLink>
          <div className="flex items-center gap-5">
            <button className="mr-5" onClick={() => setMenu(!menu)}>
              <FaBars style={{ fontSize: "24px" }} />
            </button>
            <NavLink to="/profile">
              <FaUser style={{ fontSize: "22px" }} />
            </NavLink>
            <button onClick={() => setLogoutWindow(true)}
              className=' flex px-5 items-center gap-3 bg-white rounded-[8px] font-semibold leading-4 text-[14px]'>
              <img src={logout} alt="logout" width={20} height={20} />
              {language.Logout}
            </button>
          </div>
          {menu &&
            <div className="absolute p-6 w-full top-14 left-0 h-auto bg-white shadow-md shadow-gray-400 z-40">
              <ul onClick={() => setMenu(false)}>
                <li>
                  <NavLink to="complaint">
                    {language.Complaint}
                  </NavLink>
                </li>
                <li className="my-4">
                  <NavLink to="chat" className="my-5">
                    CusChat
                  </NavLink>
                </li>
                <li>
                  <NavLink to="help">
                    {language.HelpCenter}
                  </NavLink>
                </li>
              </ul>
            </div>}
        </div>
        <div className='h-screen min-w-[200px] overflow-hidden lg:block hidden'>
          <div className='px-[27px] pb-28 bg-[#4B4B4B]'>
            <NavLink to="/">
              <img src={logo} alt="logo" width={280} />
            </NavLink>
            <ul className='px-4 mt-[59px]'>
              <li>
                <NavLink to="complaint"
                  className="flex items-center gap-5 font-medium text-[14px] text-white leading-4">
                  <img src={homelogo} alt="logo" />
                  {language.Complaint}
                </NavLink>
              </li>
              <li>
                <NavLink to="chat"
                  className="mt-8 flex items-center gap-5 font-medium text-[14px] text-white leading-4">
                  <img src={cuschatlogo} alt="logo" />
                  CusChat
                </NavLink>
              </li>
              <li>
                <NavLink to="help"
                  className="mt-8 flex items-center gap-5 font-medium text-[14px] text-white leading-4">
                  <img src={customerslogo} alt="logo" />
                  Buyurtmalarim
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='bg-[#585656] h-full p-[30px]'>
            <p className='font-semibold text-[10px] leading-3 text-white'>
              PROFIL
            </p>
            <NavLink to="/profile" className='flex gap-3 mt-4 items-center'>
              <div className='w-11 h-11 rounded-full bg-[#d9d9d9]'>
                {data && data.profile_picture &&
                  <img className='w-11 h-11 object-cover rounded-full' src={`https://buyze.uz${data.profile_picture}`} alt='user' />}
              </div>
              <div>
                <div>
                  <p className='font-medium text-[14px] leading-[17px] text-white'>
                    {data && data.first_name}
                  </p>
                  <p className='font-semibold text-[12px] text-[#007BFF] leading-[14px]'>
                    Haridor
                  </p>
                </div>
              </div>
            </NavLink>
            <button onClick={() => setLogoutWindow(true)}
              className='mt-6 w-full h-[45px] flex px-5 items-center gap-3 bg-white rounded-[8px] font-semibold leading-4 text-[14px]'>
              <img src={logout} alt="logout" width={20} height={20} />
              {language.Logout}
            </button>
          </div>
        </div>
        <div className='lg:mt-0 mt-8 w-full h-screen overflow-scroll'>
          <Outlet />
        </div>

      </div>
    </div>
  )
}

export default CustomerProfile