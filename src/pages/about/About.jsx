import React from 'react'
import ladies from "../../assets/image/ladies.png"

const About = () => {
    return (
        <div className='pb-[50px]'>
            <p className='mt-20 font-medium text-[80px] text-center'>
                Biz haqimizda
            </p>
            <p className='mt-5 text-base mb-[80px] text-center'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </p>

            <div className='py-[50px] px-6 maz-w-[1108px] rounded-[30px] shadow-md shadow-gray-400'>
                <div className='flex justify-between'>
                    <p className='font-semibold text-[36px]'>
                        Biz siz uchun onlayn xarid qilishni osonlashtiramiz
                    </p>
                    <p className='w-[225px] font-light text-[10px]'>
                        Kompaniya, uning orqasidagi jamoa va biz qanday fikrlashimiz haqida ko'proq bilib oling
                    </p>
                </div>
                <div className='mt-[66px] px-5 flex flex-wrap gap-y-4 justify-between'>
                    <div className='w-[180px] text-center'>
                        <p className='font-semibold text-[40px] text-[#EF8A2D]'>
                            200+
                        </p>
                        <p className='font-semibold text-[20px] mt-[5px]'>
                            OBajarilgan buyurtmalar
                        </p>
                        <p className='mt-[9px] font-light text-[10px]'>
                            Kompaniya, uning orqasidagi jamoa va biz qanday fikrlashimiz haqida ko'proq bilib oling
                        </p>
                    </div>
                    <div className='w-[180px] text-center'>
                        <p className='font-semibold text-[40px] text-[#EF8A2D]'>
                            400%
                        </p>
                        <p className='font-semibold text-[20px] mt-[5px]'>
                            Muvaffaqiyatli buyurtmalar
                        </p>
                        <p className='mt-[9px] font-light text-[10px]'>
                            Kompaniya, uning orqasidagi jamoa va biz qanday fikrlashimiz haqida ko'proq bilib oling
                        </p>
                    </div>
                    <div className='w-[180px] text-center'>
                        <p className='font-semibold text-[40px] text-[#EF8A2D]'>
                            8k
                        </p>
                        <p className='font-semibold text-[20px] mt-[5px]'>
                            Foydalanuvchi hisoblari
                        </p>
                        <p className='mt-[9px] font-light text-[10px]'>
                            Kompaniya, uning orqasidagi jamoa va biz qanday fikrlashimiz haqida ko'proq bilib oling
                        </p>
                    </div>
                    <div className='w-[180px] text-center'>
                        <p className='font-semibold text-[40px] text-[#EF8A2D]'>
                            100+
                        </p>
                        <p className='font-semibold text-[20px] mt-[5px]'>
                            5 yulduzli sharhlar
                        </p>
                        <p className='mt-[9px] font-light text-[10px]'>
                            Kompaniya, uning orqasidagi jamoa va biz qanday fikrlashimiz haqida ko'proq bilib oling
                        </p>
                    </div>
                </div>
            </div>

            <div className='mt-10 flex justify-between gap-[22px] sm:flex-nowrap flex-wrap'>
                <div className='py-10 px-[80px] text-center rounded-[30px] shadow-md shadow-gray-400'>
                    <p className='font-medium text-[32px]'>
                        Bizning missiyamiz
                    </p>
                    <p className='mt-[30px] font-light text-base'>
                        Bizning vazifamiz mahalliy sotuvchilar uchun yaxshi bozor maydoni yaratish va yaxshi onlayn xarid qilish do'konini yaratish
                    </p>
                </div>
                <div className='py-10 px-[80px] text-center rounded-[30px] shadow-md shadow-gray-400'>
                    <p className='font-medium text-[32px]'>
                        Bizning maqsadimiz
                    </p>
                    <p className='mt-[30px] font-light text-base'>
                        Bizning maqsadimiz mijozlar va sotuvchilar uchun ishonchli onlayn-do'kon yaratishdir
                    </p>
                </div>
            </div>

            <div className='mt-10 max-w-[1108px] py-10 px-[80px] rounded-[30px] shadow-md shadow-gray-400 text-center'>
                <p className='font-semibold text-[36px]'>
                    Biz eng yaxshi mahalliy onlayn do'konmiz
                </p>
                <p className='mt-5 text-base'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                </p>
                <img className='mt-[30px]' src={ladies} alt="ladies"/>
            </div>

            <div className='mt-10 max-w-[1108px] py-10 px-[80px] rounded-[30px] shadow-md shadow-gray-400 text-center'>
                <p className='text-[24px] italic'>
                “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.”
                </p>
                <div className='mt-10 w-[60px] h-[60px] rounded-full bg-[#BEB8B8] mx-auto'>

                </div>
                <p className='mt-[15px] font-semibold text-base'>
                Amishka Amarasignhe
                </p>
                <p className='mt-2 font-semibold text-base text-[#007BFF]'>
                    Mijoz
                </p>
            </div>
        </div>
    )
}

export default About