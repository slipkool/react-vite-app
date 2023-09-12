import { Autocomplete, Box, TextField } from '@mui/material'
import { DataGrid, GridToolbar, useGridApiRef } from '@mui/x-data-grid'
import AdminLayout from '@renderer/layouts/AdminLayout'
import React, { useState } from 'react'
import { TestData } from '@renderer/types/types'

import './new.css'

//imported icons
import { AiOutlineSwapRight } from 'react-icons/ai'
import CustomFooterTotalComponent from '@renderer/components/common/dataTable/CustomFooterTotalComponent'

const New = (): React.JSX.Element => {
  const pets: TestData[] = [
    {
      id: 1,
      description: 'Cats'
    },
    {
      id: 2,
      description: 'Dog'
    },
    {
      id: 3,
      description: 'Bird'
    }
  ]
  const [selectedPet, setSelectedPet] = useState<TestData | null>(null)
  const [petList, setPetList] = useState([])
  const [idCounter, setIdCounter] = useState(0)
  const [total, setTotal] = useState(0)

  console.log({ selectedPet })

  const apiRef = useGridApiRef()
  const columns = [
    { field: 'id', flex: 1 },
    { field: 'username', flex: 1 },
    { field: 'age', flex: 1, type: 'number' }
  ]

  const createRandomRow = () => {
    setIdCounter(idCounter + 1)
    return { id: idCounter, username: 'pepito ' + idCounter, age: 18 }
  }

  const handleAddRow = (): void => {
    const row = createRandomRow()
    setPetList([...petList, row])
    apiRef.current.updateRows([createRandomRow()])
  }

  const change = (_event, _newValue, reason): void => {
    if (reason === 'clear') return
    handleAddRow()
    //setSelectedPet(newValue)
  }

  return (
    <AdminLayout>
      <div className="new">
        <div className="newContainer">
          <div className="top">
            <h1>Nuevo Registro</h1>
          </div>
          <div className="bottom">
            <div className="formDiv">
              <form action="" className="form grid">
                <div className="inputDiv">
                  <label>Cliente</label>
                  <div className="input flex">
                    <input
                      type="text"
                      id="txtClient"
                      placeholder="Ingrese el nombre del cliente o particular"
                    />
                  </div>
                </div>
                <div className="inputDiv">
                  <label>Nombre del paciente</label>
                  <div className="input flex">
                    <input
                      type="text"
                      id="txtPatient"
                      placeholder="Información del paciente o mascota"
                    />
                  </div>
                </div>

                <div className="inputDiv">
                  <label>Pruebas a realizar</label>
                  <div className="input flex">
                    <Autocomplete
                      className="autocomplete"
                      blurOnSelect={true}
                      options={pets}
                      value={selectedPet}
                      getOptionLabel={(option): string => option.description}
                      isOptionEqualToValue={(option, value): boolean => option.id === value.id}
                      renderOption={(props, option): React.JSX.Element => (
                        <Box component="li" {...props}>
                          {option.description}
                        </Box>
                      )}
                      onChange={change}
                      renderInput={(params): React.JSX.Element => {
                        return <TextField label="Selecciona la prueba" {...params} />
                      }}
                    ></Autocomplete>
                  </div>
                </div>
                <div className="inputDiv">
                  <label>Pagado?</label>
                  <div className="input flex">
                    <input type="checkbox" id="checkbox1" name="checkbox01" />
                    <label htmlFor="checkbox1"></label>
                  </div>
                </div>
                <div className="inputDivGrid">
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
                    rows={petList}
                    columns={columns}
                    slots={{
                      toolbar: GridToolbar,
                      footer: CustomFooterTotalComponent
                    }}
                    slotProps={{
                      footer: { total }
                    }}
                    onStateChange={(_state): void => {
                      const visibleItems = []
                      apiRef.current.getRowModels().forEach((value, _key) => {
                        visibleItems.push(value)
                      })
                      const total = visibleItems.map((item) => item?.age).reduce((a, b) => a + b, 0)
                      console.log(total)
                      setTotal(total)
                    }}
                  />
                </div>

                <button type="submit" className="btn flex">
                  <span>Login</span>
                  <AiOutlineSwapRight className="icon" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default New
