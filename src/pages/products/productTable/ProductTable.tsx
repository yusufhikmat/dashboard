import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import SideDrawer from '../../../assets/sideDrawer';
import { useGetProductsQuery } from '../../../api/productsApi';
import ProductDetail from '../productDetails.tsx/ProductDetails';

type productTableProps = {
  setEditOpen:React.Dispatch<React.SetStateAction<boolean>>
}

const ProductTable = ({setEditOpen}:productTableProps)=> {
  const columns: GridColDef[] = [
    { 
      field: 'id',
      headerName: 'ID',
      //  width: 100 
    },

    { 
      field: 'title', 
      headerName: 'Title', 
       width: 300 
    },
    { 
      field: 'image', 
      headerName: 'Image', 
      renderCell: (params) => {
        const imageUrl = params.value; // Assuming your image field contains the URL
        return <img src={imageUrl} alt="Product" style={{ width: 100, height: 200 , objectFit:'contain', margin:'0.2rem 0'}} />;
      },
      width: 150,
    },
    { 
      field: 'category', 
      headerName: 'Category', 
      width: 200 
    },
    { 
      field: 'price', 
      headerName: 'Price', 
        width: 100 
    },
    { 
      field: 'description', 
      headerName: 'Description', 
        width: 400 
    },
    { 
      field: 'rate', 
      headerName: 'Rate', 
      renderCell:(params)=> {
        const rating = params.row.rating;
        return (<p> {rating.rate}</p>)
      },
        width: 100 
    },
    { 
      field: 'count', 
      headerName: 'Count', 
      renderCell:(params)=> {
        const rating = params.row.rating;
        return (<p> {rating.count}</p>)
      },
        width: 100 
    },
    {
      field: 'details',
      headerName: 'Details',
      renderCell: (params) => {
        const productId = params.row.id; // Get the ID from the current row
        return (
          <SideDrawer>
            <ProductDetail setEditOpen={setEditOpen} productId={productId}/>
          </SideDrawer>
        );
      },
      width: 100,
    },
  
  ];

  const { data,isLoading,isSuccess,isError } = useGetProductsQuery();
 
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
export default ProductTable;