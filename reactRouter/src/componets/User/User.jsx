import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div className="flex items-center justify-center h-screen">
    <h1 className="text-2xl font-bold text-gray-800 bg-gray-200 px-4 py-2 rounded-md shadow-md">
      User: {userId}
    </h1>
  </div>

  )
}

export default User
