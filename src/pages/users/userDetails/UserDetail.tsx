import React from 'react'
import { useDeleteUserMutation, useGetUserQuery  } from '../../../api/userApi'
import './UserDetail.scss';
import { idText } from 'typescript';

interface UserDetailProps {
    userId: number;
     setOpen :React.Dispatch<React.SetStateAction<boolean>>
  }
const UserDetail= ({ userId, setOpen }:UserDetailProps) => {
    const { data } = useGetUserQuery(userId.toString());
    console.log(data);

    const [deleteUser] = useDeleteUserMutation();

    const handleDelete = async(userId:string) =>{
        await(deleteUser(userId))
    }
  return (
      <div className='userDetail'>
        {data ? (
          <>
        <div className='userDetail-list'>
            <h3 className='userDetail-title'>User Details</h3> 
            <p className='userDetail-name'><b>Name</b> : {data.name}</p>
            <p className='userDetail-username'><b>Username</b> : {data.username}</p>
            <p className='userDetail-phone'><b>Phone Number</b> : {data.phone}</p>
            <p className='userDetail-email'><b>Email address</b> : {data.email}</p>
            <p className='userDetail-username'><b>Website</b> : {data.website}</p>
            <p className='userDetail-company'><b>Company</b> : {data.company.name}</p>
            <p className='userDetail-address'><b>Address</b> : {data.address.street}</p>
        </div>
        <div>
          <button className='btn btn-edit' onClick={()=>{
            setOpen(true);
          }}>Edit</button>
        <button className='btn btn-delete' >Delete</button>
        </div>
        </>) 
        : (<div>...Loading</div>)}
        
    </div>
  )
}

export default UserDetail