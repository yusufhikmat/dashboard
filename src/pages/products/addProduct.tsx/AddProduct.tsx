import React, { useState } from 'react'
import Input from '../../../assets/input/Input';
import {Button} from '../../../assets/Button';

type AddUserProps = {
  setAddOpen : React.Dispatch<React.SetStateAction<boolean>>
}
const AddProduct = ({setAddOpen}:AddUserProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  

  

  return (
    <div className='addUser'>
      <h3>Add New Product</h3>
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
        
        <Input 
          id = "category"
          label="Category"
          name = "category"
          type = "text"
          required
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
        />
        <Input 
        id = "image"
        label="Image"
        name = "image"
        type = "file"
        required
        value={image}
        onChange={(e)=>setImage(e.target.value)}
        />
        <Input 
        id = "rating"
        label="Rating"
        name = "rating"
        type = "text"
        required
        value={rating}
        onChange={(e)=>setRating(e.target.value)}
        />
        <textarea
        rows={10}
        id='description'
        name="description"
        placeholder="Description"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        />
        <Button 
        type="button"
         className="custom-class" 
         color="green"
          >Add product</Button>
      </form>
    </div>
  )
}

export default AddProduct