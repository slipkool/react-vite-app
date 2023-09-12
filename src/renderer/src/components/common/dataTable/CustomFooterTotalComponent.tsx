import { Box } from '@mui/material'
import { GridSlotsComponentsProps } from '@mui/x-data-grid'
import React from 'react'

declare module '@mui/x-data-grid' {
  interface FooterPropsOverrides {
    total: number
  }
}

const CustomFooterTotalComponent = (
  props: NonNullable<GridSlotsComponentsProps['footer']>
): React.JSX.Element => {
  return <Box sx={{ padding: '10px', display: 'flex' }}>Total : {props.total}</Box>
}

export default CustomFooterTotalComponent
