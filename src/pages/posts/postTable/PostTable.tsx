import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import SideDrawer from '../../../assets/sideDrawer';
import PostDetail from '../postDetail/PostDetail';
import { useGetPostsQuery } from '../../../api/postApi';

type postTableProps = {
  setEditOpen:React.Dispatch<React.SetStateAction<boolean>>
}

const PostTable = ({setEditOpen}:postTableProps)=> {
  const columns: GridColDef[] = [
    { 
      field: 'id',
      headerName: 'ID',
      //  width: 100 
    },

    { 
      field: 'userId', 
      headerName: 'UserId', 
       width: 100 
    },
    
    { 
      field: 'title', 
      headerName: 'Title', 
      width: 500 
    },
    { 
      field: 'body', 
      headerName: 'Body', 
        width: 800 
    },


    {
      field: 'details',
      headerName: 'Details',
      renderCell: (params) => {
        const postId = params.row.id; // Get the ID from the current row
        return (
          <SideDrawer>
            <PostDetail postId={postId} setEditOpen={setEditOpen}/>
          </SideDrawer>
        );
      },
      width: 100,
    },
  
  ];

  const { data,isLoading,isSuccess,isError } = useGetPostsQuery();
 
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
export default PostTable;