import React from 'react'
import {Button} from '../../../assets/Button';
import { useDeleteCommentMutation, useGetCommentQuery } from '../../../api/commentApi';

interface CommentDetailProps {
  commentId:string;
    setEditOpen :React.Dispatch<React.SetStateAction<boolean>>
  }
const CommentDetail= ({commentId, setEditOpen}:CommentDetailProps) => {
    const { data } = useGetCommentQuery(commentId);
   
    console.log(data);

    const [deleteUser] = useDeleteCommentMutation();

    const handleDelete = async(commentId:string) =>{
      if(window.confirm("are you sure")){
        return "deleted"
      }
        await(deleteUser(commentId))
    }
  return (
      <div className='userDetail'>
        {data ? (
        <>
        <div className='userDetail-list'>
            <h3 className='userDetail-title'>User Details</h3> 
            <p className='userDetail-name'><b>Name</b> : {data.name}</p>
            <p className='userDetail-name'><b>Email</b> : {data.email}</p>
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

export default CommentDetail