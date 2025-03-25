import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import AuthService from '../../service/Auth'

const Comments = () => {

  const { id } = useParams()
  const [comments, setComments] = useState()

  const getProduct = async () => {
    try {
      const res = await AuthService.getProduct(id)
      console.log(res)
      setComments(res.data.results.comments)
    } catch (err) {
      console.log(err)
    }
  }

  console.log(comments)

  useEffect(() => {
    getProduct()
  }, [id])


  return (
    <div className='p-10 h-screen overflow-scroll'>
      <p className='pb-5 text-[22px] font-medium'>
        Fikr-muohazalar
      </p>

      {comments &&
        comments.map((comment) => (
          <div className='mt-4 p-2 rounded-md shadow-md shadow-gray'>
            <p className='text-base font-normal'>
              {comment.text}
            </p>
            <p className='mt-2 text-[12px] font-thing text-right'>
              {comment.user}
            </p>
          </div>
        ))
      }



    </div>
  )
}

export default Comments