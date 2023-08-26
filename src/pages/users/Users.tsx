import React, { useState } from 'react'
import UserTable from './userTable/UserTable'
import BasicModal from '../../assets/modal'
import './userTable/Users.scss'
import UpdateUser from './addUser/UpdateUser'
import AddUser from './addUser/AddUserForm'

const Users = () => {
  
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  return (
    <div className='users'>
    <button onClick={()=>setAddOpen(true)} className='btn-user'>Add new User</button>
     {addOpen && (
        <BasicModal open={addOpen} setOpen={setAddOpen}>
        <AddUser setAddOpen ={setAddOpen}/>
      </BasicModal>
     )}
      { <UserTable setEditOpen={setEditOpen}/> }
      {editOpen && (
        <BasicModal open={editOpen} setOpen={setEditOpen}>
        <UpdateUser setEditOpen ={setEditOpen}/>
      </BasicModal>
     )}
       
    </div>
  )
}

export default Users