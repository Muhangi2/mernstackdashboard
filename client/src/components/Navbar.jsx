import React from 'react'
import { LightModeOutlined,Menu as MenuIcon,
    DarkModeOutlined,
    Search,SettingsOutlined,
    ArrowDropDownOutlined, } from '@mui/icons-material'
import FlexBetween from './FlexBetween'
import { useDispatch } from 'react-redux'
import { setMode } from 'state'
import logo from "assets/me.jpg"

import { AppBar, IconButton, InputBase, Toolbar } from '@mui/material'
import { useTheme } from '@emotion/react'

const Navbar = () => {
    
    const dispatch=useDispatch();
    const theme=useTheme();

  return (
    <AppBar 
    sx={{
        position:"static",
        background:"none",
        boxShadow:"none"
    }}
    >
  <Toolbar sx={{justifyContent:"space-between"}}>  
  {/* leftside */}
<FlexBetween onClick={()=>console.log("open/close menu")}>
    <IconButton>
        <MenuIcon/>
    </IconButton>
    <FlexBetween 
  backgroundColor={theme.palette.background.alt}
  borderRadius="9px"
  gap="3rem"
  p="0.1rem  1.5rem"
>
    <InputBase placeholder='Search...'/>
    <IconButton>
        <Search/>
    </IconButton>
</FlexBetween>
</FlexBetween>
{/* righthandside */}
<FlexBetween sx={{gap:"1.5rem"}}>

<IconButton onClick={()=>dispatch(setMode())}>
  {theme.palette.mode === "dark" ?(<DarkModeOutlined sx={{fontSize:"25px"}}/>):(<LightModeOutlined sx={{fontSize:"25px"}}/>)}
</IconButton>
<IconButton>
    <SettingsOutlined sx={{fontSize:"25px"}}/>
</IconButton>
</FlexBetween>

  </Toolbar>
    </AppBar>
  )
}

export default Navbar