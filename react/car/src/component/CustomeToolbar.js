import React from 'react'
import {GridToolbarContainer, GridToolbarExport, gridClasses} from "@mui/x-data-grid"

export default function CustomeToolbar() {
  return (
    <GridToolbarContainer
      className={gridClasses.toolbarContainer}>
      <GridToolbarExport/>
    </GridToolbarContainer>
  )
}
