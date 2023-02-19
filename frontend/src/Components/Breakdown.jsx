import { Box } from '@mui/material'
import React from 'react'
import Header from 'usabled/Header'
import BreakDownChart from './BreakDownChart'

function Breakdown() {
  return (
    <Box m='1.5rem 2.5rem'>
      <Header title='BREAKDOWN' subtitle='Breakdown of sales by catogory'/>
      <Box mt='40px' height='75vh'>
<BreakDownChart/>
      </Box>
    </Box>
  )
}

export default Breakdown
