import React, { useState } from 'react'
import buyze from '../../assets/icons/logo.png'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const NewsSeccion = () => {

    const [categories, setCategories] = useState(true)
    const [city, setCity] = useState(true)

    return (
        <div className='mt-[30px] w-full flex gap-5'>
            <div className='p-5 w-[262px] h-full rounded-[15px] shadow-md shadow-gray'>
                <div className=' flex justify-between items-center'>
                    <p className='font-bold text-base'>
                        Filtr
                    </p>
                    <button className='w-[110px] h-[25px] rounded-[5px] border border-[#007BFF]'>
                        Qayta tiklash
                    </button>
                </div>
                <div className='mt-5 bg-[#DCDCDC] w-full h-px'>
                </div>
                <p className='mt-[11px] semi-bold text-base'>
                    Narxi
                </p>
                <div className='mt-5 w-full h-2 rounded-[13px] bg-[#FF9C0026] flex'>
                    <div className='relative w-[128px] h-2 rounded-[13px] bg-[#007BFF]'>
                        <div className='h-2.5 w-4 bg-white rounded-[4px] absolute -right-px -top-px'>
                            <div className='h-2.5 w-2.5 absolute right-[3px] rounded-full bg-[#007BFF]'>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='mt-2 text-[12px]'>
                    Maksimal narx Rs. 30,000.00
                </p>
                <div className='mt-2.5 w-[168px] h-[25px] p-2 rounded-[5px] border border-[#007BFF] flex justify-between items-center'>
                    <p className='text-[14px]'>
                        Pastdan yuqoriga
                    </p>
                    <button>
                        <IoIosArrowDown style={{ fontSize: "15px", color: "#007BFF" }} />
                    </button>
                </div>
                <div className='mt-5 w-full h-px bg-[#DCDCDC]'>
                </div>
                <div className='mt-2.5 w-full p-2 flex justify-between items-center'>
                    <p className='font-bold text-base'>
                        Kategoriyalar
                    </p>
                    <button onClick={() => setCategories(!categories)}>
                        {!categories ? <IoIosArrowForward style={{ fontSize: "15px", color: "#007BFF" }} /> :
                            <IoIosArrowDown style={{ fontSize: "15px", color: "#007BFF" }} />}
                    </button>
                </div>
                {categories &&
                    <div>

                        <label className='font-medium text-[14px]'>
                            <input type="checkbox" value="Category1" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Category 1
                        </label><br />
                        <label className='font-medium text-[14px]'>
                            <input type="checkbox" value="Category1" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Category 1
                        </label><br />
                        <label className='font-medium text-[14px]'>
                            <input type="checkbox" value="Category1" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Category 1
                        </label><br />
                        <label className='font-medium text-[14px]'>
                            <input type="checkbox" value="Category1" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Category 1
                        </label><br />
                        <label className='font-medium text-[14px]'>
                            <input type="checkbox" value="Category1" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Category 1
                        </label><br />
                        <label className='font-medium text-[14px]'>
                            <input type="checkbox" value="Category1" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Category 1
                        </label>

                    </div>}

                <div className='mt-5 w-full h-px bg-[#DCDCDC]'>
                </div>

                <div className='mt-2.5 w-full p-2 flex justify-between items-center'>
                    <p className='font-bold text-base'>
                        Shahar
                    </p>
                    <button onClick={() => setCity(!city)}>
                        {!city ? <IoIosArrowForward style={{ fontSize: "15px", color: "#007BFF" }} /> :
                            <IoIosArrowDown style={{ fontSize: "15px", color: "#007BFF" }} />}
                    </button>
                </div>
                {city &&
                    <div>

                        <label className='font-medium text-[14px]'>
                            <input type="checkbox" value="Category1" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Category 1
                        </label><br />
                        <label className='font-medium text-[14px]'>
                            <input type="checkbox" value="Category1" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Category 1
                        </label><br />
                        <label className='font-medium text-[14px]'>
                            <input type="checkbox" value="Category1" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Category 1
                        </label><br />
                        <label className='font-medium text-[14px]'>
                            <input type="checkbox" value="Category1" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Category 1
                        </label><br />
                        <label className='font-medium text-[14px]'>
                            <input type="checkbox" value="Category1" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Category 1
                        </label><br />
                        <label className='font-medium text-[14px]'>
                            <input type="checkbox" value="Category1" className='mr-2' style={{ backgroundColor: "#002B4E" }} />
                            Category 1
                        </label>

                    </div>}
            </div>
            <div className='w-full flex flex-wrap justify-between items-center gap-5'>
                <div className='w-[262px] h-[456px] rounded-[10px] flex flex-col'>
                    <div className='w-[262px] h-[262px] rounded-md flex justify-center items-center bg-slate-100'>
                        <img src={buyze} alt="logo" width={162} />
                    </div>
                    <p className='mt-[14px] font-medium text-[18px] leading-[21px]'>
                        Store name
                    </p>
                    <p className='mt-[5px] font-medium text-[18px] leading-[21px]'>
                        RS.100,000.00
                    </p>
                    <button className='mt-5 w-[116px] h-[35px] rounded-[100px] bg-[#007BFF] text-white font-medium text-[14px] leading-4'>
                        View the Store
                    </button>
                </div>
                <div className='w-[262px] h-[456px] rounded-[10px] flex flex-col'>
                    <div className='w-[262px] h-[262px] rounded-md flex justify-center items-center bg-slate-100'>
                        <img src={buyze} alt="logo" width={162} />
                    </div>
                    <p className='mt-[14px] font-medium text-[18px] leading-[21px]'>
                        Store name
                    </p>
                    <p className='mt-[5px] font-medium text-[18px] leading-[21px]'>
                        RS.100,000.00
                    </p>
                    <button className='mt-5 w-[116px] h-[35px] rounded-[100px] bg-[#007BFF] text-white font-medium text-[14px] leading-4'>
                        View the Store
                    </button>
                </div>
                <div className='w-[262px] h-[456px] rounded-[10px] flex flex-col'>
                    <div className='w-[262px] h-[262px] rounded-md flex justify-center items-center bg-slate-100'>
                        <img src={buyze} alt="logo" width={162} />
                    </div>
                    <p className='mt-[14px] font-medium text-[18px] leading-[21px]'>
                        Store name
                    </p>
                    <p className='mt-[5px] font-medium text-[18px] leading-[21px]'>
                        RS.100,000.00
                    </p>
                    <button className='mt-5 w-[116px] h-[35px] rounded-[100px] bg-[#007BFF] text-white font-medium text-[14px] leading-4'>
                        View the Store
                    </button>
                </div>
                <div className='w-[262px] h-[456px] rounded-[10px] flex flex-col'>
                    <div className='w-[262px] h-[262px] rounded-md flex justify-center items-center bg-slate-100'>
                        <img src={buyze} alt="logo" width={162} />
                    </div>
                    <p className='mt-[14px] font-medium text-[18px] leading-[21px]'>
                        Store name
                    </p>
                    <p className='mt-[5px] font-medium text-[18px] leading-[21px]'>
                        RS.100,000.00
                    </p>
                    <button className='mt-5 w-[116px] h-[35px] rounded-[100px] bg-[#007BFF] text-white font-medium text-[14px] leading-4'>
                        View the Store
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewsSeccion