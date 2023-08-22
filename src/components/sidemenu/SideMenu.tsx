import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Menu.scss'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CommentIcon from '@mui/icons-material/Comment';
import GroupIcon from '@mui/icons-material/Group';
import Person2Icon from '@mui/icons-material/Person2';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
const SideMenu = () => {
  // const [isOpen, setIsOpen] = useState(false)
  // const toggle = ()=>{
  //   setIsOpen(!isOpen)
  // }
  return (
    <div className='sidemenu'>
     <div className="nav-link">
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