import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import SideDrawer from '../../../assets/sideDrawer';
import CommentDetails from '../commentDetails/CommentDetails';
import { useGetCommentsQuery } from '../../../api/commentApi';

type productTableProps = {
  setEditOpen:React.Dispatch<React.SetStateAction<boolean>>
}

const CommentTable = ({setEditOpen}:productTableProps)=> {
  const columns: GridColDef[] = [
    { 
      field: 'id',
      headerName: 'ID',
      //  width: 100 
    },

    { 
      field: 'postId', 
      headerName: 'PostId', 
       width: 100 
    },
    
    { 
      field: 'name', 
      headerName: 'Name', 
      width: 300 
    },
    { 
        field: 'email', 
        headerName: 'Email', 
        width: 300 
      },
    { 
      field: 'body', 
      headerName: 'Body', 
        width: 500 
    },


    {
      field: 'details',
      headerName: 'Details',
      renderCell: (params) => {
        const commentId = params.row.id; // Get the ID from the current row
        return (
          <SideDrawer>
            <CommentDetails commentId={commentId} setEditOpen={setEditOpen}/>
          </SideDrawer>
        );
      },
      width: 100,
    },
  
  ];

  const { data,isLoading,isSuccess,isError } = useGetCommentsQuery();
 
  return (
    <div className='userTable'>
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3>error</h3>}
      {isSuccess && (
      <DataGrid
      className='datagrid'
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
export default CommentTable;