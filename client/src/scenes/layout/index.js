import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { Box,useMediaQuery } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Navbar from 'components/Navbar'
import SideBar from 'components/SideBar'
import { useGetUserQuery } from 'state/api'

const Layout = () => {
    const isNonMobile=useMediaQuery("(min-width:600px)")
    const [isSidebarOpen,setSidebarOpen]=useState(true);
    const userId=useSelector((state)=>state.global.userId);
    const {data}=useGetUserQuery(userId);
    console.log("🚀  data:", data)
    
  return (
    <Box display={isNonMobile ? "flex":"block"} width="100%" height="100%" >
        <SideBar user={data||{}} isNonMobile={isNonMobile} isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} drawerWidth="250px"/>
     <Box flexGrow={1} >
        <Navbar  user={data||{}} isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen}/>
        <Outlet/>
     </Box>
    </Box>
  )
}

export default Layout