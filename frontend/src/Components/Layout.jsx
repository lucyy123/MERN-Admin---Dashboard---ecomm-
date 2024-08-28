import { useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { useGetUserQuery } from 'states/api'
import Navbar from './Navbar'
import Sidebar from './Sidebar'



function Layout() {

  const isNonMobile = useMediaQuery("(min-width:600px)")

  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const userId = useSelector((state) => state.global.userId)
  const { data } = useGetUserQuery(userId)
 


  return (
    <Box display={isNonMobile ? "flex" : "flex"} width='100%' height='100%' gap={5}>

      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        drawerWidth="13rem">
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
