import React, { useState } from 'react'
import Input from '../../../assets/input/Input';
import {Button} from '../../../assets/Button';

type AddPostProps = {
  setAddOpen : React.Dispatch<React.SetStateAction<boolean>>
}
const AddPost = ({setAddOpen}:AddPostProps) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className='addUser'>
      <h3>Add New Post</h3>
      <form className='addUserForm'>
        <Input 
          id = "title"
          label="Title"
          name = "title"
          type = "text"
          required
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
        <textarea
        rows={10}
        id='body'
        name="body"
        placeholder="Message"
        value={body}
        onChange={(e)=>setBody(e.target.value)}
        />
        <Button 
        type="button"
         className="custom-class" 
         color="green"
          >Add Post</Button>
      </form>
    </div>
  )
}

export default AddPost