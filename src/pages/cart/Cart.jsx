import { AiOutlineDelete } from "react-icons/ai";

const Cart = () => {
    return (
        <div className="pb-10">
            {/* <p className="w-full my-28 font-medium text-[42px] text-center">
                Savatchangiz bo'sh
            </p> */}
            <div className='flex gap-5 justify-between'>
                <div className='w-[800px] rounded-[25px] border bg-white border-[#efefef] p-5'>
                    <p className='mb-3 font-medium text-2xl'>
                        Savatda <span className='font-normal text-[18px] text-gray-500'>1 ta tovar</span>
                    </p>
                    <label className='text-[14px]'>
                        <input className='mr-3' type="checkbox" />
                        Barchasi
                    </label>
                    <div className='my-3 w-full h-px bg-[#efefef]'>
                    </div>
                    <div className='w-full flex items-start gap-4'>
                        <input type="checkbox" />
                        <div className='w-[120px] h-[120px] rounded-md bg-gray-200'>

                        </div>
                        <div className="h-[120px] flex flex-col">
                            <p>
                                Product Name
                            </p>
                            <p className='mt-1 text-gray-400'>
                                Sotuvchi: <span className='text-black'>Shop Name</span>
                            </p>
                            <button className="mt-auto" >
                                <AiOutlineDelete className="opacity-40 hover:opacity-100" style={{ fontSize: "20px" }} />
                            </button>
                        </div>
                        <div className="ml-auto flex flex-col h-[120px]">
                            <p className="text-[#007bff]">
                                100000 so'm
                            </p>
                            <div className="mt-auto w-[114px] h-8 p-px bg-gray-300 rounded-[22px] flex justify-between items-center">
                                <button className="w-[30px] h-[30px] bg-white rounded-full text-[20px]">
                                    -
                                </button>
                                <p className="text-[20px]">
                                    1
                                </p>
                                <button className="w-[30px] h-[30px] bg-white rounded-full text-[20px]">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[400px] rounded-[25px] border bg-white border-[#efefef] p-5'>
                    <p className='mb-4 font-medium text-2xl'>
                        Sizning buyurtmangiz
                    </p>
                    <div className="flex justify-between">
                        <p className="text-base">
                            Mahsulotlar:
                        </p>
                        <p className="text-base">
                            2 ta
                        </p>
                    </div>
                    <div className="mt-3 flex justify-between">
                        <p className="text-base">
                            Jami:
                        </p>
                        <p className="font-medium text-[18px]">
                            1023000 so'm
                        </p>
                    </div>
                    <button className="mt-16 w-full h-8 rounded-lg bg-[#007bff] font-medium text-white">
                        Buyurtma berish
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart