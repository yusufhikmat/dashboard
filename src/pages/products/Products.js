import React, { useState } from 'react'
import ProductTable from './productTable/ProductTable'
import BasicModal from '../../assets/modal'
import AddProduct from './addProduct.tsx/AddProduct'
import { Button } from '../../assets/Button'
import UpdateProduct from './addProduct.tsx/UpdateProduct'

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false)
  return (
    <div>
     <Button 
        type="button"
         className="custom-btn" 
         color="green"
         onClick={()=>setIsOpen(true)}
          >Add product
      </Button>

      {isOpen && (
        <BasicModal open={isOpen} setOpen={setIsOpen}>
        <AddProduct />
      </BasicModal>
      )}
      <ProductTable setEditOpen={setEditOpen}/>
      {editOpen && (
        <BasicModal open={editOpen} setOpen={setEditOpen}>
        <UpdateProduct />
      </BasicModal>
      )}
      
    </div>
  )
}

export default Products