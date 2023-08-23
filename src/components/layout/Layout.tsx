import React from 'react'
import Navbar from '../navbar/Navbar'
import SideMenu from '../sidemenu/SideMenu'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import './layout.scss'

const Layout = () => {
  return (
<div className='layout'>
      
      <div className='layout-component'>
        <div className='layout-sidebar'>
          <SideMenu />
        </div>
        <div className='layout-outlet'>
        <Navbar />
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout