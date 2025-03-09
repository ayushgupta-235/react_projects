import React, { use, useState } from 'react'
import Usercontext from './UserContext'

const UserContextProvider = ({children})=> {
    const [user,setUser] = useState(null) // Global state for user
  return (
    <Usercontext.Provider value={{user,setUser}}>
      {children}
    </Usercontext.Provider>
  )
}

export default UserContextProvider
