import React from 'react'
import Topbar from '../topbar/Topbar'
import SideMenu from '../sidemenu/SideMenu'
import { Outlet } from 'react-router-dom';
import './layout.scss';

const Layout = () => {
  return (
<div className='layout'>
      
      <div className='layout-component'>
        <div className='layout-sidebar'>
          <SideMenu />
        </div>
        <div className='layout-outlet'>
        <Topbar />
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout