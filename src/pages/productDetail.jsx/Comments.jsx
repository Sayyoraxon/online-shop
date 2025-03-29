import React, { useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import AuthService from '../../service/Auth'
import { otherFunction } from '../../slice/auth'

const Comments = ({comments, product, setCommentsOpen}) => {



  const [text, setText] = useState("")

  const dispatch = useDispatch()

  const sendComment = async () => {
    try {
      const res = await AuthService.commentCreate({
        text: text,
        product: product.id
      })
      console.log(res)
      setText("")
      dispatch(otherFunction())
    } catch (err) {
      console.log(err)
    }
  }
  window.onkeydown = function(event) {
    if(event.key === "Enter"){
      sendComment()
    };
};

  return (
    <div className='w-full h-full fixed top-0 left-0 backdrop-blur-[4px] z-30 overflow-hidden flex justify-center items-center'>
      <button onClick={()=>setCommentsOpen(false)}
       className='absolute top-5 right-5'>
        <IoIosClose style={{color: "black", fontSize: "38px"}}/>
      </button>
      <div className='relative w-[500px] h-[650px] rounded-md bg-white shadow-md px-6'>
        <p className='font-medium text-[22px] font-medium text-center'>
          Sharxlar
        </p>
        <div className='mt-2 overflow-scroll w-full h-[550px]'>
          {
            comments &&
            comments.map((comment)=>(
              <div key={comment.id} className="mt-2">
                <p className='font-medium'>
                  {comment.user}
                </p>
                <p className='py-2'>
                  {comment.text}
                </p>
                <hr/>
              </div>
            ))
          }
        </div>
        <div className='absolute bottom-0 w-full h-14 py-2 '>
          <div className='w-full h-full flex gap-2'>
            <input onChange={(e)=>setText(e.target.value)} value={text}
            type="text" placeholder='Yozing...' className='px-2 w-[350px] rounded-md border' />
            <button onClick={sendComment}
            className='px-3 bg-[#007bff] rounded-md text-white'>
              Jo'natish
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comments