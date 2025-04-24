import React from 'react'
import { useAuth } from '../context/Context'

const Main = () => {
    const {name} =useAuth()

  return (
    <div>
        <p>HEllo: {name}</p>
    </div>
  )
}

export default Main