
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

type Props ={
    children:any
}
const SideDrawer = ({children}:Props) => {

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {

    setState({ ...state, right: open });
  };


  return (
    <div>
      <Box onClick={toggleDrawer(true)}
       width="60px"
       m="0 auto"
       p="5px"
       display="flex"
       justifyContent="center"
       color="green"
       
       >View</Box>
      <Drawer
        anchor={'right'}
        open={state['right']}
        // onClose={toggleDrawer(false)}
      >
        <button className='sideDrawer-btn' onClick={toggleDrawer(false)}>x</button>
        {children}
        
      </Drawer>
    </div>
  );
}

export default SideDrawer;