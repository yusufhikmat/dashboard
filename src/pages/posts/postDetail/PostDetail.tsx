import React from 'react'
import {Button} from '../../../assets/Button';
import { useDeletePostMutation, useGetPostQuery } from '../../../api/postApi';

interface PostDetailProps {
    postId:string;
    setEditOpen :React.Dispatch<React.SetStateAction<boolean>>
  }
const PostDetail= ({postId, setEditOpen}:PostDetailProps) => {
    const { data } = useGetPostQuery(postId);
   
    console.log(data);

    const [deleteUser] = useDeletePostMutation();

    const handleDelete = async(postId:string) =>{
      if(window.confirm("are you sure")){
        return "deleted"
      }
        await(deleteUser(postId))
    }
  return (
      <div className='userDetail'>
        {data ? (
        <>
        <div className='userDetail-list'>
            <h3 className='userDetail-title'>User Details</h3> 
            <p className='userDetail-name'><b>Title</b> : {data.title}</p>
            <p className='userDetail-username'><b>Messsage</b> : {data.body}</p>
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

export default PostDetail