import React from 'react'
import {Button} from '../../../assets/Button';
import { useDeleteProductMutation, useGetProductQuery } from '../../../api/productsApi';

interface UserDetailProps {
    productId:string;
    setEditOpen :React.Dispatch<React.SetStateAction<boolean>>
  }
const ProductDetail= ({productId, setEditOpen}:UserDetailProps) => {
    const { data } = useGetProductQuery(productId);
   
    console.log(data);

    const [deleteUser] = useDeleteProductMutation();

    const handleDelete = async(productId:string) =>{
      if(window.confirm("are you sure")){
        return "deleted"
      }
        await(deleteUser(productId))
    }
  return (
      <div className='userDetail'>
        {data ? (
        <>
        <div className='userDetail-list'>
            <h3 className='userDetail-title'>User Details</h3> 
            <p className='userDetail-name'><b>Title</b> : {data.title}</p>
            <p className='userDetail-username'><b>Image-url</b> : {data.image}</p>
            <p className='userDetail-phone'><b>Category</b> : {data.category}</p>
            {/* <p className='userDetail-email'><b>Price</b> : {data.price}</p> */}
            <p className='userDetail-username'><b>Description</b> : {data.description}</p>
            <p className='userDetail-company'><b>Rate</b> : {data.rating.rate}</p>
            <p className='userDetail-address'><b>Count</b> : {data.rating.count}</p>
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

export default ProductDetail