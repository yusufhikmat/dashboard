import React, {useState} from 'react'
import PostTable from './postTable/PostTable'
import { Button } from '../../assets/Button'
import BasicModal from '../../assets/modal';
import AddPost from './addPost/AddPost';
import UpdatePost from './addPost/updatePost';

const Posts = () => {
 const [isOpen, setIsOpen] = useState(false);
 const [editOpen, setEditOpen] = useState(false);
  return (
    <div>
      <Button 
        type="button"
         className="custom-btn" 
         color="green"
         onClick={()=>setIsOpen(true)}
          >Add post
      </Button>
      {isOpen  && (
        <BasicModal open = {isOpen} setOpen ={setIsOpen}>
        <AddPost />
      </BasicModal>
      )}

      <PostTable setEditOpen={setEditOpen}/>
      {editOpen && (
        <BasicModal open = {editOpen} setOpen ={setEditOpen}>
        < UpdatePost setEditOpen={setEditOpen}/>
      </BasicModal>
      )}
      
    </div>

  )
}

export default Posts