import React, { useState } from 'react'
import './Users.scss'
import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import { useGetUsersQuery } from '../../../api/userApi';
import SideDrawer from '../../../assets/sideDrawer';
import UserDetail from '../userDetails/UserDetail';

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
          <UserDetail userId={userId} />
        </SideDrawer>
      );
    },
    width: 100,
  },

];

export default function UserTable() {
    
  const {data, error, isLoading} = useGetUsersQuery();
  console.log(data)
  return (
    <div className='userTable'>
      {error && <div>....somrthing went wrong</div>}
      {isLoading && <div>....Loading</div>}
     {data ?(
      <DataGrid
      className='datagrid'
      rows={data}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      slots={{toolbar:GridToolbar}}
      slotProps={{
        toolbar :{
          showQuickFilter:true,
          quickFilterProps:{debounceMs :500}
        }
      }}
      pageSizeOptions={[5,10]}
      checkboxSelection
      disableRowSelectionOnClick
      disableColumnFilter
      disableColumnSelector
      disableDensitySelector
    />
     ):(<div>Loading ...</div>) }
      
    </div>
  );
}