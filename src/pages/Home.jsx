import React, { useState } from 'react'
import { useAuth } from '../context/Context'
import { Link } from 'react-router';

const Home = () => {
    const{ setName } =useAuth();
    const[input, setInput]= useState("")
    
    const handleSend =()=>{
        setName(input)
        setInput("")
    }

    return (
    <div>
        <input type="text"
        placeholder='Type your name'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
        <button onClick={handleSend}>Send your name</button>
        <Link to="/header" >Go to Header</Link>
    </div>
  )
}

export default Home