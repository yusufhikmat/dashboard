import React from 'react'
import './Users.scss'
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { useGetUsersQuery } from '../../../api/userApi';
import SideDrawer from '../../../assets/sideDrawer';
import UserDetail from '../userDetails/UserDetail';

type userTableProps = {
  setEditOpen : React.Dispatch<React.SetStateAction<boolean>>
}

const UserTable = ({setEditOpen} :userTableProps)=> {
  const columns: GridColDef[] = [
    { 
      field: 'id',
      headerName: 'ID',
      //  width: 100 
    },
  
    { 
      field: 'name', 
      headerName: 'Name', 
       width: 200 
    },
    { 
      field: 'username', 
      headerName: 'Username', 
      width: 200 
    },
    { 
      field: 'email', 
      headerName: 'Email', 
        width: 300 
    },
    { 
      field: 'phone', 
      headerName: 'Phone', 
        width: 200 
    },
    { 
      field: 'address', 
      headerName: 'Address', 
      renderCell:(params)=> {
        const address = params.row.address;
        return (<p> {address.street}</p>)
      },
        width: 200 
    },
    { 
      field: 'company.name', 
      headerName: 'company', 
      renderCell:(params)=> {
        const company = params.row.company;
        return (<p> {company.name}</p>)
      },
        width: 200 
    },
    {
      field: 'details',
      headerName: 'Details',
      renderCell: (params) => {
        const userId = params.row.id; // Get the ID from the current row
        return (
          <SideDrawer>
            <UserDetail userId={userId} setEditOpen={setEditOpen}/>
          </SideDrawer>
        );
      },
      width: 100,
    },
  
  ];

  const { data,isLoading,isSuccess,isError } = useGetUsersQuery();
 
  return (
    <div className='userTable'>
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3>error</h3>}
      {isSuccess && (
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
      )}
     {/* {data ?(
      
     ):(<div>Loading ...</div>) } */}
      
    </div>
  );
}
export default UserTable;