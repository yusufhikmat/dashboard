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
const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = ()=>{
    setIsOpen(!isOpen);
  }
  return (
    <div className={`sidemenu ${isOpen ? "open" : ""}`}>
    <div className='sidebar'>
      <div className="sidebar-logo">
        <img src="data:image/png;base64,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" alt="leave" className='logo'/>
        <span className='logo-title'>Green</span>
      </div>
        <MenuIcon onClick={toggle} className="toggle-icon"/>
    </div>
     <div className={`nav-link ${isOpen ? "open" : ""}`}>
    <Link to="/" className='sidemenu-link'>
        <HomeIcon className="icon"/>
        <span className="title">Dashboard</span>
       
    </Link>
      <Link to="/" className='sidemenu-link'>
        <Person2Icon className="icon"/>
        <span className="title">Profile</span>
      </Link>
      <Link to="/users" className='sidemenu-link'>
        <GroupIcon className="icon"/>
        <span className="title">Users</span>
      </Link>
      <Link to="/products" className='sidemenu-link'>
        <ProductionQuantityLimitsIcon className="icon"/>
        <span className="title">Products</span>
      </Link>
      <Link to="/comments" className='sidemenu-link'>
        <CommentIcon className="icon"/>
        <span className="title">Comments</span>
      </Link>
      <Link to="/posts" className='sidemenu-link'>
        <EmailIcon className="icon"/>
        <span className="title">Posts</span>
      </Link>
      <Link to="/" className='sidemenu-link'>
        <CalendarMonthIcon className="title"/>
        <span className="title">Calender</span>
      </Link>
      </div>
      </div> 
  )
}

export default SideMenu