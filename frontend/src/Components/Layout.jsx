import { Box } from '@mui/system'
import React, { useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { useMediaQuery } from '@mui/material'
import Sidebar from './Sidebar'
import { useGetUserQuery } from 'states/api'
import { useSelector } from 'react-redux'



function Layout() {

  const isNonMobile = useMediaQuery("(min-width:600px)")

  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const userId = useSelector((state) => state.global.userId)
  const { data } = useGetUserQuery(userId)
 


  return (
    <Box display={isNonMobile ? "flex" : "block"} width='100%' height='100%'>

      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        drawerWidth="15.652rem">
      </Sidebar>
      <Box flexGrow={1}>
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        ></Navbar>
        <Outlet></Outlet>
      </Box>
    </Box>
  )
}

export default Layout
