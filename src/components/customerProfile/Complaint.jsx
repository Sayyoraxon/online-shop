import React, { useState } from 'react'
import useStore from '../../store/useStore';
import { IoIosArrowForward } from 'react-icons/io';
import ComplaintModal from './ComplaintModal';

const Complaint = () => {

  const { language } = useStore()
  const [modal, setModal] = useState(false)

  return (
    <div className='py-[38px] px-[23px]'>
      {modal && <ComplaintModal setModal={setModal}/>}
      <p className='font-medium text-[24px]'>
        {language.ComplaintAndReport}
      </p>
      <div className='mt-[58px] w-full sm:px-6 px-0'>
        <div className='sm:px-5 px-1 w-full flex mb-2.5'>
          <div className='w-1/12'></div>
          <p className='sm:w-2/12 w-3/12 font-medium text-[12px] opacity-60'>
            {language.ComplaintID}
          </p>
          <p className='sm:w-4/12 w-3/12 font-medium text-[12px] opacity-60'>
            {language.Subject}
          </p>
          <p className='w-3/12 font-medium text-[12px] opacity-60'>
            {language.SentDate}
          </p>
          <p className='w-2/12 font-medium text-[12px] opacity-60'>
            {language.KindOf}
          </p>
        </div>

        <div className='mt-2.5 sm:px-5 px-1 w-full h-[50px] rounded-md border border-[#efefef] flex items-center'>
          <div className='w-1/12'>
            <div className='w-9 h-9 rounded-full bg-[#8B8B8B]'>

            </div>
          </div>
          <p className='sm:w-2/12 w-3/12 font-medium text-[12px] opacity-60'>
            #231212135612
          </p>
          <p className='sm:w-4/12 w-3/12 font-medium text-[12px] opacity-60'>
            This shop is fake
          </p>
          <p className='w-3/12 font-medium text-[12px] opacity-60'>
            12/12/23
          </p>
          <div className='w-2/12 font-medium text-[12px] opacity-60 flex justify-between items-center'>
            <p>
              {language.Shop}
            </p>
            <button onClick={()=>setModal(true)}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Complaint