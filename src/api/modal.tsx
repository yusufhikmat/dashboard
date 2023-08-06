import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { OperationCanceledException } from 'typescript';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
type Props ={
    open:boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    children :any
}
const BasicModal=({children,open,setOpen}:Props) =>{
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      
      <Modal
        // open={handleOpen}
        open={open}
       
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <button  onClick={handleClose}>x</button>
        {children}
        </Box>
        
      </Modal>
    </div>
  );
}
export default BasicModal