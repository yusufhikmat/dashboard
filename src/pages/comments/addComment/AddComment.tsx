import React, { useState } from 'react'
import Input from '../../../assets/input/Input';
import {Button} from '../../../assets/Button';

type AddCommentProps = {
    setIsOpen : React.Dispatch<React.SetStateAction<boolean>>
}
const AddComment = ({setIsOpen}:AddCommentProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className='addUser'>
      <h3>Add comment</h3>
      <form className='addUserForm'>
        <Input 
          id = "name"
          label="Name"
          name = "name"
          type = "text"
          required
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <Input 
          id = "email"
          label="Email"
          name = "email"
          type = "email"
          required
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
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
          >Update Comment</Button>
      </form>
    </div>
  )
}

export default AddComment