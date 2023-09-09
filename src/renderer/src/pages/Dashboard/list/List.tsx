import React from 'react'
import { GridColDef } from '@mui/x-data-grid'
import DataTable from '@renderer/components/common/dataTable/DataTable'
import { userRows } from '../../../data/data'
import AdminLayout from '@renderer/layouts/AdminLayout'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  {
    field: 'img',
    headerName: 'Avatar',
    flex: 1,
    renderCell: (params): React.JSX.Element => {
      return <img src={params.row.img || '/noavatar.png'} alt="" />
    }
  },
  {
    field: 'firstName',
    type: 'string',
    headerName: 'First name',
    flex: 1
  },
  {
    field: 'lastName',
    type: 'string',
    headerName: 'Last name',
    flex: 1
  },
  {
    field: 'email',
    type: 'string',
    headerName: 'Email',
    flex: 1
  },
  {
    field: 'phone',
    type: 'string',
    headerName: 'Phone',
    flex: 1
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    flex: 1,
    type: 'string'
  },
  {
    field: 'verified',
    headerName: 'Verified',
    flex: 1,
    type: 'boolean'
  }
]

const Users = (): React.JSX.Element => {
  return (
    <AdminLayout>
      <DataTable
        slug="users"
        columns={columns}
        rows={userRows}
        titleButton="Add New User"
        link="/users/new"
      />
    </AdminLayout>
  )
}

export default Users
