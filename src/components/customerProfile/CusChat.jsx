import { useState } from 'react'
import CustomersList from '../../components/cuschat/CustomersList'
import Messages from '../../components/cuschat/Messages'

const CusChatCustomer = () => {
  const [messages, setMessages] = useState(false)
  return (
    <div className='px-[23px] py-[38px] max-w-full h-screen overflow-hidden'>
        <p className='font-medium text-[24px] leading-[29px]'>
            CusChat
        </p>
        <div className='mt-[30px] px-[26px] flex gap-11'>
            <CustomersList messages={messages} setMessages={setMessages}/>
            <Messages messages={messages} setMessages={setMessages}/>
        </div>
    </div>
  )
}

export default CusChatCustomer