import React, { useState } from 'react'
import { Box } from '@mui/system'
import Header from 'usabled/Header'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import OverviewChart from './OverviewChart'





function Overview() {
const [view,setView]=useState('units')
// console.log('view:', view)

    return (
        <Box m='1.5rem 2.5rem'>
            <Header title='OVERVIEW' subtitle='Overview of general revenue and profit' />
            <Box height='75vh' mt='2rem'>
                <FormControl>

                    <InputLabel>View</InputLabel>
                    <Select value={view}
                    label='view'
                    onChange={(e)=>setView(e.target.value)}
                    >
                        <MenuItem value='sales' >Sales</MenuItem>
                        <MenuItem value='units' >Units</MenuItem>
                    </Select>

                </FormControl>
                
                <OverviewChart view={view}/>

                


            </Box>
        </Box>
    )
}

export default Overview
