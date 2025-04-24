import React from 'react'
import { UserProvider } from './context/Context'
import HEader from './pages/HEader'
import Home from './pages/Home'

const App = () => {
  return (
    <UserProvider>
      <HEader />
      <Home />
    </UserProvider>
  )
}

export default App