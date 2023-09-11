import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Menu.scss';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CommentIcon from '@mui/icons-material/Comment';
import GroupIcon from '@mui/icons-material/Group';
import Person2Icon from '@mui/icons-material/Person2';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';


const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = ()=>{
    setIsOpen(!isOpen);
  }

  const closeSidebar = () =>{
    setIsOpen(false)
  }
  return (
    <div className='sidemenu-container'>
    <button className="toggle-icon" onClick={toggle}>
    {isOpen ? <CancelPresentationIcon /> : <MenuIcon />}
    </button>
     <div className={`sidemenu ${isOpen ? 'visible' : ''}`}>
    <Link to="/" className='sidemenu-link' onClick={closeSidebar}>
        <HomeIcon className="icon"/>
        <span className="title">Dashboard</span>
    </Link>
      <Link to="/" className='sidemenu-link' onClick={closeSidebar}>
        <Person2Icon className="icon"/>
        <span className="title">Profile</span>
      </Link>
      <Link to="/users" className='sidemenu-link' onClick={closeSidebar}>
        <GroupIcon className="icon"/>
        <span className="title">Users</span>
      </Link>
      <Link to="/products" className='sidemenu-link' onClick={closeSidebar}>
        <ProductionQuantityLimitsIcon className="icon"/>
        <span className="title">Products</span>
      </Link>
      <Link to="/comments" className='sidemenu-link' onClick={closeSidebar}>
        <CommentIcon className="icon"/>
        <span className="title">Comments</span>
      </Link>
      <Link to="/posts" className='sidemenu-link' onClick={closeSidebar}>
        <EmailIcon className="icon"/>
        <span className="title">Posts</span>
      </Link>
      <Link to="/calender" className='sidemenu-link' onClick={closeSidebar}>
        <CalendarMonthIcon className="title"/>
        <span className="title">Calender</span>
      </Link>
      </div>
      </div> 
  )
}

export default SideMenu