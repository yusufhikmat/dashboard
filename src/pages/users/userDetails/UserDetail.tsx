import React from 'react'
import { useDeleteUserMutation, useGetUserQuery  } from '../../../api/userApi'
import './UserDetail.scss';
import {Button} from '../../../assets/Button';

interface UserDetailProps {
    userId:string;
    setEditOpen :React.Dispatch<React.SetStateAction<boolean>>
  }
const UserDetail= ({userId, setEditOpen}:UserDetailProps) => {
    const { data } = useGetUserQuery(userId);
   
    console.log(data);

    const [deleteUser] = useDeleteUserMutation();

    const handleDelete = async(userId:string) =>{
      if(window.confirm("are you sure")){
        return "deleted"
      }
        await(deleteUser(userId))
    }
  return (
      <div className='userDetail'>
        {data ? (
        <>
        <div className='userDetail-list' key={data.id}>
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
          <Button 
          type="button"
          className="custom-class" 
          color="green"
          onClick={()=>setEditOpen(true)}
          >Edit
          </Button>
          <Button 
          type="button"
          className="custom-class" 
          color="red"
          onClick={()=> handleDelete(data.id)}
          >Delete
          </Button>
        </div>
        </>) 
        : (<div>...Loading</div>)}
        
    </div>
  )
}

export default UserDetail