import { FaHeart, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from 'react-router'
import logo from "../../assets/icons/logo.svg"
import bucket from "../../assets/icons/savat.svg"
import Footer from '../../components/footer/Footer'

const CustomerHome = () => {

    const loggedIn = localStorage.getItem("loggedIn")

    return (
        <div className='w-full'>
            <div className='max-w-[1148px] mx-auto px-5'>
                <div className='w-full flex justify-between items-center mb-[27px]'>
                    <NavLink to="/">
                        <img src={logo} alt="logo" width={146}/>
                    </NavLink>
                    
                    <div className='flex gap-10'>
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
                   {loggedIn 
                   ?
                   <div className="flex items-center gap-3">
                    <NavLink to="wishes">
                        <FaHeart style={{fontSize: "25px", color: "#007bff"}}/>
                   </NavLink>
                   <button>
                        <FaUser style={{fontSize: "25px", color: "#007bff"}}/>
                   </button>
                   <NavLink to="cart">
                        <img src={bucket} alt="bucket"/>
                   </NavLink>
                   </div>
                   :
                   <div className='flex gap-10'>
                        <NavLink to="/register" className="px-5 py-[9px] rounded-[100px] bg-[#007BFF] font-medium text-sm leading-4 text-white">
                            Ro'hatdan o'tish
                        </NavLink>
                        <NavLink to="/login" className="px-5 py-[9px] rounded-[100px] border border-[#007BFF] font-medium text-sm leading-4 text-[#007BFF]">
                            Kirish
                        </NavLink>
                    </div>}
                </div>
                <Outlet />
            </div>
            <Footer/>
        </div>
    )
}

export default CustomerHome