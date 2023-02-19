import React from 'react'
import { GridToolbarExport, GridToolbarDensitySelector, GridToolbarContainer, GridToolbarColumnsButton } from '@mui/x-data-grid'
import Flexbetween from 'Components/flexBetween'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { Search } from '@mui/icons-material';
function DataGridCustomToolbar({searchInput,setSearch,setSearchInput}) {
    return (
        <GridToolbarContainer>
            <Flexbetween width='100%'>
                <Flexbetween>

                    <GridToolbarColumnsButton />
                    <GridToolbarDensitySelector />
                    <GridToolbarExport />

                </Flexbetween>

                <TextField
                    label='Search...'
                    onChange={(e)=>{setSearchInput(e.target.value)}}
                    value={searchInput}
                    sx={{ mb: '0.5rem', width: '15rem' }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <IconButton onClick={()=>{
                                    setSearch(searchInput)
                                    setSearchInput('')
                                }}>
                                    <Search />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}


                />
            </Flexbetween>
        </GridToolbarContainer>
    )
}

export default DataGridCustomToolbar
