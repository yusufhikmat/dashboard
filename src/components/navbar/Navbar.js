import React from 'react'
import { FaSearch, FaExpand, FaTh } from "react-icons/fa";
import logo from '../../assets/images/logo.png';
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='navbar-logo'>
        <img src={logo} alt="leave" className='logo'/>
        <span>Greenleaf</span>
    </div>
        <div className='navbar-icons'>
            <span className='navbar-icon'><FaSearch /></span>
            <span className='navbar-icon'><FaExpand /></span>
            <span className='navbar-icon'><FaTh /></span>
            <span className='user'>
            <img src="https://images.unsplash.com/photo-1594897030264-ab7d87efc473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwbGFzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="user" className='user-image'/>
            <span className='username'>Hikmah</span>
            </span>
        </div>
    </div>
  )
}

export default Navbar