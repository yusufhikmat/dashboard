import React from 'react'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import './Topbar.scss'

const Topbar = () => {
  return (
    <div className='topbar'>

    <SettingsApplicationsIcon className="setting"/>
    <div className="user">
      <p className="user-first-letter">H</p>
      <b className='username'>Hikmah</b>
    </div>
    </div>
  )
}

export default Topbar