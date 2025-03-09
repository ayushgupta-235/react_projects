import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    if (!user) return <div className="w-full h-full text-red-500 text-center">Please Login</div>;
  return (
    <div className="text-green-500 text-center text-xl font-semibold">
    Welcome, {user.username}! 
  </div>
    
  )
}

export default Profile
