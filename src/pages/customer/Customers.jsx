import React from 'react'
import Customerdiv from '../../components/customers/Customerdiv'

const Customers = () => {
  return (
    <div className='px-[23px] py-[38px] text-[24px] leading-[29px] h-screen overflow-scroll'>
        <p className='font-medium'>
            Customers
        </p>
        <Customerdiv/>
    </div>
  )
}

export default Customers