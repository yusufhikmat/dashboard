import React from 'react'
import { Link } from 'react-router-dom'
import { FaAirbnb } from "react-icons/fa";
import './Menu.scss'

const SideMenu = () => {
  return (
    <div className='sidemenu'>
    <Link to="/home" className='sidemenu-link'>
        <span><FaAirbnb/></span>
        <span>Dashboard</span>
    </Link>
      <Link to="/" className='sidemenu-link'>
        <span><FaAirbnb/></span>
        <span>Profile</span>
      </Link>
      <Link to="/users" className='sidemenu-link'>
        <span><FaAirbnb/></span>
        <span>Users</span>
      </Link>
      <Link to="/products" className='sidemenu-link'>
        <span><FaAirbnb/></span>
        <span>Products</span>
      </Link>
      <Link to="/orders" className='sidemenu-link'>
        <span><FaAirbnb/></span>
        <span>Orders</span>
      </Link>
      <Link to="/posts" className='sidemenu-link'>
        <span><FaAirbnb/></span>
        <span>Posts</span>
      </Link>
      <Link to="/" className='sidemenu-link'>
        <span><FaAirbnb/></span>
        <span>Element</span>
      </Link>
      <Link to="/" className='sidemenu-link'>
        <span><FaAirbnb/></span>
        <span>Notes</span>
      </Link>
      <Link to="/" className='sidemenu-link'>
        <span><FaAirbnb/></span>
        <span>Forms</span>
      </Link>
      <Link to="/" className='sidemenu-link'>
        <span><FaAirbnb/></span>
        <span>Chart</span>
      </Link>
    </div>
  )
}

export default SideMenu