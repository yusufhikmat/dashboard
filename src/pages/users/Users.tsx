import React, { useState } from 'react'
import UserTable from './userTable/UserTable'
import AddUserForm from './addUser/AddUserForm'
import BasicModal from '../../api/modal'
import './userTable/Users.scss'
import UpdateUser from './addUser/UpdateUser'
const Users = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <BasicModal open={open} setOpen={setOpen}>
        <AddUserForm setOpen={setOpen} />
      </BasicModal>
      <button onClick={()=>setOpen(true)} className='btn-user'>Add new contact</button>
      <UserTable setOpen={setOpen} />
      <BasicModal open={open} setOpen={setOpen}>
        <UpdateUser setOpen={setOpen}/>
      </BasicModal>
    </div>
  )
}

export default Users