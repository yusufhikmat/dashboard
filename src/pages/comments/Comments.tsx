import React, { useState } from 'react'
import CommentTable from './commentTable/CommentTable'
import { Button } from '../../assets/Button'
import BasicModal from '../../assets/modal'
import AddComment from './addComment/AddComment'
import UpdateComment from './addComment/UpdateComment'

const Comments = () => {
  const [isOpen, setIsOpen] = useState(false)
    const [editOpen, setEditOpen] = useState(false)
  return (
    <div>
      <Button 
        type="button"
         className="custom-btn" 
         color="green"
         onClick={()=>setIsOpen(true)}
          >Add Comment
      </Button>
      {isOpen  && (
        <BasicModal open = {isOpen} setOpen ={setIsOpen}>
        <AddComment setIsOpen={setIsOpen}/>
      </BasicModal>
      )}

      <CommentTable setEditOpen={setEditOpen}/>
      {editOpen && (
        <BasicModal open = {editOpen} setOpen ={setEditOpen}>
        < UpdateComment setEditOpen={setEditOpen}/>
      </BasicModal>
      )}
    </div>
  )
}

export default Comments