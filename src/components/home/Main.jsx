import React, { useState } from 'react'
import box from "../../assets/icons/box.svg"
import truck from "../../assets/icons/delivery-truck.svg"
import sales from "../../assets/icons/sales.svg"
import orders from "../../assets/icons/product.svg"
import product1 from "../../assets/icons/product 1.svg"
import plus from "../../assets/icons/add.svg"
import useStore from '../../store/useStore'
import AddProduct from '../product/AddProduct'

const Main = ({products}) => {

    const {language} = useStore()

    const [addProduct, setAddProduct] = useState(false)


    return (
        <div className='w-full pt-[38px] pl-[23px] pr-[45px]'>
            {addProduct && <AddProduct setAddProduct={setAddProduct}/>}
            <p className='font-medium text-[24px] leading-[29px]'>
                {language.Dashboard}
            </p>
            <div className='mt-[51px] w-full flex gap-6'>
                <div>
                    <div className='flex flex-wrap gap-6'>
                        <div className='flex justify-between items-center px-5 py-4 w-[300px] h-[100px] rounded-[9px] shadow-md shadow-gray-400 grow'>
                            <div>
                                <p className='font-medium text-[36px] leading-[46px] text-[#007bff]'>
                                    {products && products.length}
                                </p>
                                <p className='font-medium text-[14px] leading-4 text-[#007bff]'>
                                    {language.TotalProducts}
                                </p>
                            </div>
                            <img src={box} alt="box" />
                        </div>
                        <div className='flex justify-between items-center px-5 py-4 w-[300px] h-[100px] rounded-[9px] shadow-md shadow-gray-400 grow'>
                            <div>
                                <p className='font-medium text-[36px] leading-[46px] text-[#007bff]'>
                                    1200
                                </p>
                                <p className='font-medium text-[14px] leading-4 text-[#007bff]'>
                                    {language.TotalSales}
                                </p>
                            </div>
                            <img src={sales} alt="box" />
                        </div>
                        <div className='flex justify-between items-center px-5 py-4 w-[300px] h-[100px] rounded-[9px] shadow-md shadow-gray-400 grow'>
                            <div>
                                <p className='font-medium text-[36px] leading-[46px] text-[#007bff]'>
                                    240
                                </p>
                                <p className='font-medium text-[14px] leading-4 text-[#007bff]'>
                                    {language.PendingOrders}
                                </p>
                            </div>
                            <img src={orders} alt="box" />
                        </div>
                        <div className='flex justify-between items-center px-5 py-4 w-[300px] h-[100px] rounded-[9px] shadow-md shadow-gray-400 grow'>
                            <div>
                                <p className='font-medium text-[36px] leading-[46px] text-[#007bff]'>
                                    240
                                </p>
                                <p className='font-medium text-[14px] leading-4 text-[#007bff]'>
                                    {language.OnProccessToDelivery}
                                </p>
                            </div>
                            <img src={truck} alt="box" />
                        </div>
                    </div>
                    <hr className='my-6 w-full h-px' />
                    <div className='flex gap-6 flex-wrap'>
                        <div onClick={()=>setAddProduct(true)} className='w-[300px] h-[163px] p-5 rounded-[9px] shadow-md shadow-gray-400 grow bg-[#ffeac9] cursor-pointer'>
                            <p className='font-medium text-[20px] leading-[24px]'>
                               {language.AddNewProduct}
                            </p>
                            <p className='mt-2.5 text-[14px] leading-[17px]'>
                                {language.Introduce}
                            </p>
                            <img className='mt-8 ml-auto' src={product1} alt="product" width={40} height={40} />
                        </div>
                        <div className='w-[300px] h-[163px] p-5 rounded-[9px] shadow-md shadow-gray-400 grow bg-[#ffeac9]'>
                            <p className='font-medium text-[20px] leading-[24px]'>
                                {language.IncreaseItems}
                            </p>
                            <p className='mt-2.5 text-[14px] leading-[17px]'>
                                {language.IncreaseTheProduct}
                            </p>
                            <img className='mt-8 ml-auto' src={plus} alt="product" width={40} height={40} />
                        </div>
                    </div>
                </div>
                <div className='min-w-[440px] h-[440px] p-5 rounded-[9px] shadow-md shadow-gray-400'>
                    <p className='font-medium text-[20px] leading-6 '>
                        {language.StockSummary}
                    </p>
                    <div className='flex w-full justify-between'>
                        <div>
                            <div className='mt-5 flex gap-2.5 items-center'>
                                <div className='w-5 h-5 bg-[#007bff]'>

                                </div>
                                <p>
                                    {language.AddedStock}
                                </p>
                            </div>
                            <div className='mt-2.5 flex gap-2.5 items-center'>
                                <div className='w-5 h-5 bg-[#ffeac9]'>

                                </div>
                                <p>
                                    {language.AvailableStock}
                                </p>
                            </div>
                        </div>
                        <div className='w-[210px] h-[210px] rounded-full bg-[#007bff] flex justify-center items-center'>
                            <div className='w-[145px] h-[145px] rounded-full bg-white flex justify-center items-center font-medium text-[24px] leading-[29px]'>
                                100%
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold text-[12px] leading-[14px]'>
                            {language.LowStockProducts}
                        </p>
                        <div className='mt-[15px] w-full h-[131px] overflow-scroll'>
                            <div className='w-full h-[25px] flex justify-between items-center border-b border-[#848484]'>
                                <p className='text-[12px] leading-[14px]'>
                                    {language.ProductName}
                                </p>
                                <p className='text-[12px] leading-[14px] text-[#dd3a3a]'>
                                    10% qolgan
                                </p>
                            </div>
                            <div className='w-full h-[25px] flex justify-between items-center border-b border-[#848484]'>
                                <p className='text-[12px] leading-[14px]'>
                                    {language.ProductName}
                                </p>
                                <p className='text-[12px] leading-[14px] text-[#dd3a3a]'>
                                    10% qolgan
                                </p>
                            </div>
                            <div className='w-full h-[25px] flex justify-between items-center border-b border-[#848484]'>
                                <p className='text-[12px] leading-[14px]'>
                                    {language.ProductName}
                                </p>
                                <p className='text-[12px] leading-[14px] text-[#dd3a3a]'>
                                    10% qolgan
                                </p>
                            </div>
                            <div className='w-full h-[25px] flex justify-between items-center border-b border-[#848484]'>
                                <p className='text-[12px] leading-[14px]'>
                                    {language.ProductName}
                                </p>
                                <p className='text-[12px] leading-[14px] text-[#dd3a3a]'>
                                    10% qolgan
                                </p>
                            </div>
                            <div className='w-full h-[25px] flex justify-between items-center border-b border-[#848484]'>
                                <p className='text-[12px] leading-[14px]'>
                                    {language.ProductName}
                                </p>
                                <p className='text-[12px] leading-[14px] text-[#dd3a3a]'>
                                    10% qolgan
                                </p>
                            </div>
                            <div className='w-full h-[25px] flex justify-between items-center border-b border-[#848484]'>
                                <p className='text-[12px] leading-[14px]'>
                                    {language.ProductName}
                                </p>
                                <p className='text-[12px] leading-[14px] text-[#dd3a3a]'>
                                    10% qolgan
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-[30px]  w-full'>
                <div className='flex w-full items-end'>
                    <p className='font-medium w-3/12 text-[24px] leading-[29px]'>
                        {language.NewOrders}
                    </p>
                    <p className='font-medium w-4/12 text-[14px] leading-[17px]'>
                        {language.CustomerName}
                    </p>
                    <p className='font-medium w-2/12 text-[14px] leading-[17px]'>
                        {language.OrderedDate}
                    </p>
                    <p className='font-medium w-2/12 text-[14px] leading-[17px]'>
                        {language.Amount}
                    </p>
                    <p className='font-medium w-3/12 text-[14px] leading-[17px]'>
                        {language.Status}
                    </p>
                </div>
                <div className='mt-5 w-full h-[49px] px-5 flex items-center rounded-[10px] border border-[rgba(0,0,0,0.2)] shadow-sm'>
                    <p className='font-medium text-[14px] w-3/12 leading-[17px]'>
                        #231212135612
                    </p>
                    <p className='font-medium text-[14px] w-4/12 leading-[17px]'>
                        Ahinsa De Silva
                    </p>
                    <p className='text-[14px] w-2/12 leading-[17px]'>
                        12/12/23
                    </p>
                    <p className='text-[14px] w-2/12 leading-[17px]'>
                        Rs.100,000.00
                    </p>
                    <div className='text-[14px] w-2/12 leading-[17px]'>
                        <div className='w-[94px] h-[29px] rounded-[5px] border border-[#28d764] text-[#28d764] flex justify-center items-center'>
                            New
                        </div>
                    </div>
                    <p className='text-[14px] w-1/12 leading-[17px] text-right'>
                        {">"}
                    </p>
                </div>
                <div className='mt-2.5 w-full h-[49px] px-5 flex items-center rounded-[10px] border border-[rgba(0,0,0,0.2)] shadow-sm'>
                    <p className='font-medium text-[14px] w-3/12 leading-[17px]'>
                        #231212135612
                    </p>
                    <p className='font-medium text-[14px] w-4/12 leading-[17px]'>
                        Ahinsa De Silva
                    </p>
                    <p className='text-[14px] w-2/12 leading-[17px]'>
                        12/12/23
                    </p>
                    <p className='text-[14px] w-2/12 leading-[17px]'>
                        Rs.100,000.00
                    </p>
                    <div className='text-[14px] w-2/12 leading-[17px]'>
                        <div className='w-[94px] h-[29px] rounded-[5px] border border-[#28d764] text-[#28d764] flex justify-center items-center'>
                            New
                        </div>
                    </div>
                    <p className='text-[14px] w-1/12 leading-[17px] text-right'>
                        {">"}
                    </p>
                </div>
                <div className='mt-2.5 w-full h-[49px] px-5 flex items-center rounded-[10px] border border-[rgba(0,0,0,0.2)] shadow-sm'>
                    <p className='font-medium text-[14px] w-3/12 leading-[17px]'>
                        #231212135612
                    </p>
                    <p className='font-medium text-[14px] w-4/12 leading-[17px]'>
                        Ahinsa De Silva
                    </p>
                    <p className='text-[14px] w-2/12 leading-[17px]'>
                        12/12/23
                    </p>
                    <p className='text-[14px] w-2/12 leading-[17px]'>
                        Rs.100,000.00
                    </p>
                    <div className='text-[14px] w-2/12 leading-[17px]'>
                        <div className='w-[94px] h-[29px] rounded-[5px] border border-[#28d764] text-[#28d764] flex justify-center items-center'>
                            New
                        </div>
                    </div>
                    <p className='text-[14px] w-1/12 leading-[17px] text-right'>
                        {">"}
                    </p>
                </div>
                <div className='mt-2.5 w-full h-[49px] px-5 flex items-center rounded-[10px] border border-[rgba(0,0,0,0.2)] shadow-sm'>
                    <p className='font-medium text-[14px] w-3/12 leading-[17px]'>
                        #231212135612
                    </p>
                    <p className='font-medium text-[14px] w-4/12 leading-[17px]'>
                        Ahinsa De Silva
                    </p>
                    <p className='text-[14px] w-2/12 leading-[17px]'>
                        12/12/23
                    </p>
                    <p className='text-[14px] w-2/12 leading-[17px]'>
                        Rs.100,000.00
                    </p>
                    <div className='text-[14px] w-2/12 leading-[17px]'>
                        <div className='w-[94px] h-[29px] rounded-[5px] border border-[#28d764] text-[#28d764] flex justify-center items-center'>
                            New
                        </div>
                    </div>
                    <p className='text-[14px] w-1/12 leading-[17px] text-right'>
                        {">"}
                    </p>
                </div>
                <div className='mt-2.5 w-full h-[49px] px-5 flex items-center rounded-[10px] border border-[rgba(0,0,0,0.2)] shadow-sm'>
                    <p className='font-medium text-[14px] w-3/12 leading-[17px]'>
                        #231212135612
                    </p>
                    <p className='font-medium text-[14px] w-4/12 leading-[17px]'>
                        Ahinsa De Silva
                    </p>
                    <p className='text-[14px] w-2/12 leading-[17px]'>
                        12/12/23
                    </p>
                    <p className='text-[14px] w-2/12 leading-[17px]'>
                        Rs.100,000.00
                    </p>
                    <div className='text-[14px] w-2/12 leading-[17px]'>
                        <div className='w-[94px] h-[29px] rounded-[5px] border border-[#28d764] text-[#28d764] flex justify-center items-center'>
                            New
                        </div>
                    </div>
                    <p className='text-[14px] w-1/12 leading-[17px] text-right'>
                        {">"}
                    </p>
                </div>
                <div className='mt-2.5 w-full h-[49px] px-5 flex items-center rounded-[10px] border border-[rgba(0,0,0,0.2)] shadow-sm'>
                    <p className='font-medium text-[14px] w-3/12 leading-[17px]'>
                        #231212135612
                    </p>
                    <p className='font-medium text-[14px] w-4/12 leading-[17px]'>
                        Ahinsa De Silva
                    </p>
                    <p className='text-[14px] w-2/12 leading-[17px]'>
                        12/12/23
                    </p>
                    <p className='text-[14px] w-2/12 leading-[17px]'>
                        Rs.100,000.00
                    </p>
                    <div className='text-[14px] w-2/12 leading-[17px]'>
                        <div className='w-[94px] h-[29px] rounded-[5px] border border-[#28d764] text-[#28d764] flex justify-center items-center'>
                            New
                        </div>
                    </div>
                    <p className='text-[14px] w-1/12 leading-[17px] text-right'>
                        {">"}
                    </p>
                </div>
                <div className='mt-2.5 w-full h-[49px] px-5 flex items-center rounded-[10px] border border-[rgba(0,0,0,0.2)] shadow-sm'>
                    <p className='font-medium text-[14px] w-3/12 leading-[17px]'>
                        #231212135612
                    </p>
                    <p className='font-medium text-[14px] w-4/12 leading-[17px]'>
                        Ahinsa De Silva
                    </p>
                    <p className='text-[14px] w-2/12 leading-[17px]'>
                        12/12/23
                    </p>
                    <p className='text-[14px] w-2/12 leading-[17px]'>
                        Rs.100,000.00
                    </p>
                    <div className='text-[14px] w-2/12 leading-[17px]'>
                        <div className='w-[94px] h-[29px] rounded-[5px] border border-[#28d764] text-[#28d764] flex justify-center items-center'>
                            New
                        </div>
                    </div>
                    <p className='text-[14px] w-1/12 leading-[17px] text-right'>
                        {">"}
                    </p>
                </div>
                <div className='mt-2.5 w-full h-[49px] px-5 flex items-center rounded-[10px] border border-[rgba(0,0,0,0.2)] shadow-sm'>
                    <p className='font-medium text-[14px] w-3/12 leading-[17px]'>
                        #231212135612
                    </p>
                    <p className='font-medium text-[14px] w-4/12 leading-[17px]'>
                        Ahinsa De Silva
                    </p>
                    <p className='text-[14px] w-2/12 leading-[17px]'>
                        12/12/23
                    </p>
                    <p className='text-[14px] w-2/12 leading-[17px]'>
                        Rs.100,000.00
                    </p>
                    <div className='text-[14px] w-2/12 leading-[17px]'>
                        <div className='w-[94px] h-[29px] rounded-[5px] border border-[#28d764] text-[#28d764] flex justify-center items-center'>
                            New
                        </div>
                    </div>
                    <p className='text-[14px] w-1/12 leading-[17px] text-right'>
                        {">"}
                    </p>
                </div>
                <div className='mt-2.5 w-full h-[49px] px-5 flex items-center rounded-[10px] border border-[rgba(0,0,0,0.2)] shadow-sm'>
                    <p className='font-medium text-[14px] w-3/12 leading-[17px]'>
                        #231212135612
                    </p>
                    <p className='font-medium text-[14px] w-4/12 leading-[17px]'>
                        Ahinsa De Silva
                    </p>
                    <p className='text-[14px] w-2/12 leading-[17px]'>
                        12/12/23
                    </p>
                    <p className='text-[14px] w-2/12 leading-[17px]'>
                        Rs.100,000.00
                    </p>
                    <div className='text-[14px] w-2/12 leading-[17px]'>
                        <div className='w-[94px] h-[29px] rounded-[5px] border border-[#28d764] text-[#28d764] flex justify-center items-center'>
                            New
                        </div>
                    </div>
                    <p className='text-[14px] w-1/12 leading-[17px] text-right'>
                        {">"}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main