import React from 'react'
import { Outlet } from 'react-router'
import Main from './Main'

const Layout = () => {
  return (
    <div>
        <Main/>
        <Outlet/>
    </div>
  )
}

export default Layout