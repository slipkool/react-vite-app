import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import './dataTable.css'
// import { useMutation, useQueryClient } from "@tanstack/react-query";

//Imported image
import imgView from '../../../assets/images/view.svg'
import imgDelete from '../../../assets/images/delete.svg'

type Props = {
  columns: GridColDef[]
  rows: object[]
  slug: string
}

const DataTable = (props: Props): React.JSX.Element => {
  // TEST THE API

  // const queryClient = useQueryClient();
  // // const mutation = useMutation({
  // //   mutationFn: (id: number) => {
  // //     return fetch(`http://localhost:8800/api/${props.slug}/${id}`, {
  // //       method: "delete",
  // //     });
  // //   },
  // //   onSuccess: ()=>{
  // //     queryClient.invalidateQueries([`all${props.slug}`]);
  // //   }
  // // });

  const handleDelete = (id: number): void => {
    console.log(id)
    //delete the item
    // mutation.mutate(id)
  }

  const actionColumn: GridColDef = {
    field: 'action',
    headerName: 'Action',
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src={imgView} alt="" />
          </Link>
          <div className="delete" onClick={(): void => handleDelete(params.row.id)}>
            <img src={imgDelete} alt="" />
          </div>
        </div>
      )
    }
  }

  return (
    <div className="dataTable">
      <DataGrid
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main'
          }
        }}
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10
            }
          }
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 }
          }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}

export default DataTable
