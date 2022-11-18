import React from 'react'
import Address from './Address'
import Email from './Email'
import Name from './Name'
import PersonalInfo from './PersonalInfo'

const Profile = () => {
  return (
    <div>
        <PersonalInfo/>
        <Address/>
        <Email/>
        <Name/>
    </div>
  )
}

export default Profile