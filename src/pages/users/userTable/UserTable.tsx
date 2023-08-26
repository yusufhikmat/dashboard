import React from 'react'
import './Users.scss'
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { useGetUsersQuery } from '../../../api/userApi';
import SideDrawer from '../../../assets/sideDrawer';
import UserDetail from '../userDetails/UserDetail';
import { Box } from '@mui/material';

type userTableProps = {
  setEditOpen : React.Dispatch<React.SetStateAction<boolean>>
}

const UserTable = ({setEditOpen} :userTableProps)=> {
  const columns = [
    { 
      field: 'id',
      headerName: 'ID',
    },
  
    { 
      field: 'name', 
      headerName: 'Name',
      width:150,
      cellClassName:"column-cell"
    },
    { 
      field: 'username', 
      headerName: 'Username', 
      width:150,
    },
    { 
      field: 'email', 
      headerName: 'Email', 
      width:200,
    },
    { 
      field: 'phone', 
      headerName: 'Phone',
      width:150,
    },
    { 
      field: 'address', 
      headerName: 'Address',
      width:200, 
      renderCell:(params:any)=> {
        const address = params.row.address;
        return (<p> {address.street}</p>)
      },
    },
    { 
      field: 'company.name', 
      headerName: 'company', 
      width:150,
      renderCell:(params:any)=> {
        const company = params.row.company;
        return (<p> {company.name}</p>)
      },
    },
    {
      field: 'details',
      headerName: 'Details',
      width:100,
      renderCell: (params:any) => {
        const userId = params.row.id; // Get the ID from the current row
        return (
          <SideDrawer>
            <UserDetail userId={userId} setEditOpen={setEditOpen}/>
          </SideDrawer>
        );
      },
    },
  
  ];

  const { data,isLoading,isSuccess,isError } = useGetUsersQuery();
 
  return (
    <Box width="100%" height="100%"
    >
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3>error</h3>}
      {isSuccess && (
      <Box
      sx={{
        "& .MuiDataGrid-root":{border:"none"},
        "& .MuiDataGrid-footerContainer":{backgroundColor:"green", color:"white"},
      }}>
        
      <DataGrid
      rows={data}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 15 },
        },
      }}
      slots={{toolbar:GridToolbar}}
      slotProps={{
        toolbar :{
          showQuickFilter:true,
          quickFilterProps:{debounceMs :500}
        }
      }}
      pageSizeOptions={[10,15]}
      checkboxSelection
      disableRowSelectionOnClick
      disableColumnFilter
      disableColumnSelector
      disableDensitySelector
    />
    </Box>
      )}
     
     </Box>
  );

  
}
export default UserTable;