
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

type Props ={
    children:any
}
const SideDrawer = ({children}:Props) => {

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    // if (
    //   event.type === 'keydown' &&
    //   ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    // ) {
    //   return;
    // }

    setState({ ...state, right: open });
  };


  return (
    <div>
      <Button onClick={toggleDrawer(true)}>View</Button>
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