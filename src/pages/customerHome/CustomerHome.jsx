import { useState } from "react";
import { FaHeart, FaUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { NavLink, Outlet } from 'react-router'
import logo from "../../assets/icons/logo.png"
import bucket from "../../assets/icons/savat.svg"
import Footer from '../../components/footer/Footer'
import useStore from "../../store/useStore";

const CustomerHome = () => {

    const loggedIn = localStorage.getItem("loggedIn")

    const { language } = useStore()

    const [menu, setMenu] = useState(false)

    return (
        <div className='w-full'>
            <div className='max-w-[1148px] mx-auto px-5'>
                <div className='w-full flex justify-between items-center mb-[27px]'>
                    <NavLink to="/">
                        <img src={logo} alt="logo" width={120} />
                    </NavLink>
                    {menu &&
                        <div className="absolute p-6 w-full top-0 left-0 h-auto bg-white shadow-md shadow-gray-400 z-40">
                            <button onClick={() => setMenu(false)} className="absolute top-4 right-4">
                                <IoIosClose style={{fontSize: "32px"}}/>
                            </button>
                            <ul onClick={() => setMenu(false)} className="mt-10">
                                <li>
                                    <NavLink to="/">
                                        Asosiy
                                    </NavLink>
                                </li>
                                <li className="my-4">
                                    <NavLink to="/shop">
                                        Online harid
                                    </NavLink>
                                </li>
                                <li className="my-4">
                                    <NavLink to="/news">
                                        Yangiliklar
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">
                                        Kontakt
                                    </NavLink>
                                </li>
                                <li className="my-4">
                                    <NavLink to="/about">
                                        Biz haqimizda
                                    </NavLink>
                                </li>
                            </ul>
                        </div>}

                    <div className='hidden gap-10 md:flex'>
                        <NavLink to="/" className="font-medium text-[14px] leading-4">
                            Asosiy
                        </NavLink>
                        <NavLink to="/shop" className="font-medium text-[14px] leading-4">
                            Online harid
                        </NavLink>
                        <NavLink to="/news" className="font-medium text-[14px] leading-4 ">
                            Yangiliklar
                        </NavLink>
                        <NavLink to="/contact" className="font-medium text-[14px] leading-4 ">
                            Kontakt
                        </NavLink>
                        <NavLink to="/about" className="font-medium text-[14px] leading-4">
                            Biz haqimizda
                        </NavLink>
                    </div>

                    <button onClick={()=>setMenu(!menu)} className="md:hidden block">
                        <FaBars style={{fontSize: "24px"}}/>
                    </button>

                    {loggedIn
                        ?
                        <div className="flex items-center gap-6">
                            <NavLink to="wishes">
                                <FaHeart style={{ fontSize: "25px", color: "#007bff" }} />
                            </NavLink>
                            <NavLink to="/profile">
                                <FaUser style={{ fontSize: "25px", color: "#007bff" }} />
                            </NavLink>
                            <NavLink to="cart">
                                <img src={bucket} alt="bucket" />
                            </NavLink>
                        </div>
                        :
                        <div className='flex gap-10'>
                            <NavLink to="/register" className="px-5 py-[9px] rounded-[100px] bg-[#007BFF] font-medium text-sm leading-4 text-white">
                                Ro'yxatdan o'tish
                            </NavLink>
                            <NavLink to="/login" className="px-5 py-[9px] rounded-[100px] border border-[#007BFF] font-medium text-sm leading-4 text-[#007BFF]">
                                Kirish
                            </NavLink>
                        </div>}
                </div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default CustomerHome