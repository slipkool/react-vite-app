import { DataGrid, GridColDef, GridState, GridToolbar, useGridApiRef } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import './dataTable.css'

//Imported image
import imgView from '../../../assets/images/view.svg'
import imgDelete from '../../../assets/images/delete.svg'
import CustomFooterTotalComponent from './CustomFooterTotalComponent'
import React, { useState } from 'react'

type Props = {
  columns: GridColDef[]
  rows: object[]
  slug: string
  titleButton: string
  link: string
  total: number
}

const DataTableTotal = (props: Props): React.JSX.Element => {
  const apiRef = useGridApiRef()
  const [total, setTotal] = useState(0)

  const handleDelete = (id: number): void => {
    console.log(id)
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

  const handleStateChange = React.useCallback((state: GridState) => {
    const visibleItems = []
    apiRef.current.getRowModels().forEach((value, key) => {
      visibleItems.push(value)
    })
    const total = visibleItems.map((item) => item?.age).reduce((a, b) => a + b, 0)
    console.log(total)
    setTotal(total)
  }, [])

  return (
    <div className="dataTable">
      <div className="datatableTitle">
        {props.titleButton}
        <Link to={props.link} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main'
          }
        }}
        apiRef={apiRef}
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
        slots={{ toolbar: GridToolbar, footer: CustomFooterTotalComponent }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 }
          },
          footer: { total }
        }}
        onStateChange={handleStateChange}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}

export default DataTableTotal
