import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { Box,useMediaQuery } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Navbar from 'components/Navbar'
import SideBar from 'components/SideBar'

const Layout = () => {
    const isNonMobile=useMediaQuery("(min-width:600px)")
    const [isSidebarOpen,setSidebarOpen]=useState(true);
  return (
    <Box display={isNonMobile ? "flex":"block"} width="100%" height="100%" >
        <SideBar isNonMobile={isNonMobile} isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} drawerWidth="250px"/>
     <Box>
        <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen}/>
        <Outlet/>
     </Box>
    </Box>
  )
}

export default Layout