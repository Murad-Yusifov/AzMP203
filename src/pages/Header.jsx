import React from 'react'
import { useAuth } from '../context/Context'
import { Link } from 'react-router';

const HEader = () => {
    const {name} =useAuth();

  return (
    <div>
        <p>Hello: {name}</p>
        <Link to="/" >Back to home</Link>
    </div>
  )
}

export default HEader