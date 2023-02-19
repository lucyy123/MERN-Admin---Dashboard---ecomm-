import {useTheme} from '@mui/material'
import { Typography,Box } from '@mui/material'
import React from 'react'
import Flexbetween from './flexBetween'





function StatBox({title,icon,value,increase,discription}) {
const theme=useTheme()

  return (
    <Box
    gridColumn='span 2'
    gridRow='span 1'
    display='flex'
    justifyContent='space-between'
    flex='1 1 100%'
    p='1.25rem 1rem'
    backgroundColor={theme.palette.background.alt}
    backgroundradius='0.55rem'
    >
        <Flexbetween>
            <Typography variant='h6' sx={{ color:theme.palette.secondary[100]}}>

                {title}
            </Typography>
            {icon}
        </Flexbetween>

        <Typography
        variant='h3'
        fontWeight='600'
        sx={{ color:theme.palette.secondary[200]}}
        >
            {value}
        </Typography>
        <Flexbetween gap='1rem'>
            <Typography  variant='h5'
        fontStyle='italic'
        sx={{ color:theme.palette.secondary.light}} >
                {increase}
            </Typography>

            <Typography>
                {discription}
            </Typography>
        </Flexbetween>
      
    </Box>
  )
}

export default StatBox
