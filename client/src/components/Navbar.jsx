import React ,{useState} from 'react'
import { LightModeOutlined,Menu as MenuIcon,
    DarkModeOutlined,
    Search,SettingsOutlined,
    ArrowDropDownOutlined, } from '@mui/icons-material'
import FlexBetween from './FlexBetween'
import { useDispatch } from 'react-redux'
import { setMode } from 'state'
import me from "assets/me.jpg"
import {Box,Menu,MenuItem,Typography}  from '@mui/material'


import { AppBar, Button, IconButton, InputBase, Toolbar } from '@mui/material'
import { useTheme } from '@emotion/react'

const Navbar = ({isSidebarOpen,setSidebarOpen,user}) => {
    const dispatch=useDispatch();

    const theme=useTheme();
    const [anchorEl,setAnchorEl]=useState(null);
    const isOpen=Boolean(anchorEl);

    const handleClick=(event)=>setAnchorEl(event.currentTarget);
    const handleClose=()=>setAnchorEl(null)

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
   <FlexBetween>
    <IconButton onClick={()=>setSidebarOpen(!isSidebarOpen)}>
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

  {/* anchorEl */}
  <FlexBetween>
    <Button onClick={handleClick} sx={{display:"flex",justifyContent:"space-between",alignItems:"center" ,textTransform:"none",gap:"1rem"}}>
    <Box  
         component="img"
          alt="profileimage"
          height="40px"
          width="40px"
          borderRadius="50%"
          sx={{objectFit:"cover"}} 
          src={me}
          />
             <Box textAlign="left"> 
          <Typography fontWeight="bold" fontSize="0.9rem" sx={{color:theme.palette.secondary[100]}}>
             {user?.name}
          </Typography>
          <Typography fontSize="0.8rem">
             {user?.occupation}
          </Typography>
          
        </Box>
        <ArrowDropDownOutlined sx={{color:theme.palette.secondary[300],fontSize:"25px"}}/>
    </Button>
    <Menu 
      anchorEl={anchorEl}
      open={isOpen}
      onClose={handleClose}
      anchorOrigin={{vertical:"bottom",horizontal:"center"}}
      >
     <MenuItem onClick={handleClose}>Logout</MenuItem>
    </Menu>
  </FlexBetween>

   </FlexBetween>

  </Toolbar>
    </AppBar>
  )
}

export default Navbar