import React from 'react'
import ProfileDiv from '../../components/profile/Profile'

const Profile = ({data}) => {
  return (
    <div className='py-[38px] px-[23px]'>
        <p>
            My Profile
        </p>
        <ProfileDiv data={data}/>
    </div>
  )
}

export default Profile