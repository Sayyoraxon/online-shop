import React, { useEffect, useState } from 'react'
import logo from "../../assets/icons/logo.svg"
import homelogo from "../../assets/icons/homelogo.svg"
import productlogo from "../../assets/icons/productlogo.svg"
import orderslogo from "../../assets/icons/orderslogo.svg"
import customerslogo from "../../assets/icons/customerslogo.svg"
import cuschatlogo from "../../assets/icons/cuschatlogo.svg"
import logout from "../../assets/icons/logout.svg"
import { NavLink, Outlet, useNavigate } from 'react-router'
import Logout from '../../components/home/Logout'
import useStore from '../../store/useStore'

const Home = () => {

  const [logoutWindow, setLogoutWindow] = useState(false)

  const { language } = useStore()

  const loggedIn = localStorage.getItem("loggedIn")

  const navigate = useNavigate()

  useEffect(()=>{
    if(!loggedIn){
      navigate("/login")
    }
  }, [loggedIn])

  return (
    <div className='w-full flex'>
      {logoutWindow && <Logout setLogoutWindow={setLogoutWindow} />}
      <div className='h-screen min-w-[200px] overflow-hidden lg:block hidden'>
        <div className='px-[27px] pt-[26px] pb-40 bg-[#fbf9f8]'>
          <img src={logo} alt="logo" />
          <ul className='px-4 mt-[59px]'>
            <li>
              <NavLink to="/"
                className="flex items-center gap-5 font-medium text-[14px] text-[#a39e9e] leading-4">
                <img src={homelogo} alt="logo" />
                {language.Dashboard}
              </NavLink>
            </li>
            <li>
              <NavLink to="/product"
                className="mt-8 flex items-center gap-5 font-medium text-[14px] text-[#a39e9e] leading-4">
                <img src={productlogo} alt="logo" />
                {language.Product}
              </NavLink>
            </li>
            <li>
              <NavLink className="mt-8 flex items-center gap-5 font-medium text-[14px] text-[#a39e9e] leading-4">
                <img src={orderslogo} alt="logo" />
                {language.Orders}
              </NavLink>
            </li>
            <li>
              <NavLink to="/customers"
              className="mt-8 flex items-center gap-5 font-medium text-[14px] text-[#a39e9e] leading-4">
                <img src={customerslogo} alt="logo" />
                {language.Customers}
              </NavLink>
            </li>
            <li>
              <NavLink to="cuschat"
              className="mt-8 flex items-center gap-5 font-medium text-[14px] text-[#a39e9e] leading-4">
                <img src={cuschatlogo} alt="logo" />
                CusChat
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='bg-[#F9F2EF] h-full p-[30px]'>
          <p className='font-semibold text-[10px] leading-3'>
            PROFILE
          </p>
          <NavLink to="/profile" className='flex gap-3 mt-4 items-center'>
            <div className='w-11 h-11 rounded-full bg-[#d9d9d9]'>

            </div>
            <div>
              <div>
                <p className='font-medium text-[14px] leading-[17px]'>
                  Amishka
                </p>
                <p className='font-semibold text-[12px] text-[#007BFF] leading-[14px]'>
                  Shopper
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
      <div className='w-full'>
        <Outlet />
      </div>

    </div>
  )
}

export default Home