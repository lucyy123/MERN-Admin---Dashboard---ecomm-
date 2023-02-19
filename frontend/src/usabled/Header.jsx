
import { Typography,useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Header({ title, subtitle }) {
    const theme = useTheme()
    return (
    <Box>
        <Typography variant='h2' fontWeight='bold' color={theme.palette.secondary[100]} sx={{ mb:'5px'}}>{title}</Typography>
        <Typography variant='h4' color={theme.palette.secondary[300]}>{subtitle}</Typography>

    </Box >
  )
}

export default Header
