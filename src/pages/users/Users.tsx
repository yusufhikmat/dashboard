import React, { useState } from 'react'
import UserTable from './userTable/UserTable'
import AddUserForm from './addUser/AddUserForm'
import BasicModal from '../../api/modal'

const Users = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <BasicModal open={open} setOpen={setOpen}>
        <AddUserForm />
      </BasicModal>
      <button onClick={()=>setOpen(true)}>yes</button>
      <UserTable />
    </div>
  )
}

export default Users