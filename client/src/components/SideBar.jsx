import React from 'react'
import { useState,useEffect } from 'react'
import { Box,
    Divider,
    Drawer,IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListItemTexts,
    Typography, 
    useTheme 
} from '@mui/material'

import {
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined, 
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    CalendarMonthRounded,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutlineOutlined,
    TrendingDownOutlined
} from "@mui/icons-material"  
import { useLocation,useNavigate } from 'react-router-dom'
import FlexBetween from './FlexBetween'
import me from "assets/me.jpg"


const navItems=[
    {
        texts:"Dashboard",
        icon:<HomeOutlined/>
    },
    {
        texts:"Client Facing",
        icon:null
    },
    {
        texts:"Products",
        icon:<ShoppingCartOutlined/>
    },
    {
        texts:"Customers",
        icon:<Groups2Outlined/>
    },
    {
        texts:"Transactions",
        icon:<ReceiptLongOutlined/>
    },
    {
        texts:"Geography ",
        icon:<PublicOutlined/>
    },
    {
        texts:"sales", 
        icon:null
    },
    {
        texts:"Overview",
        icon:<PointOfSaleOutlined/>
    },
    {
        texts:"Daily",
        icon:<TodayOutlined/>
    },
    {
        texts:"Daily",
        icon:<TodayOutlined/>
    },
    {
        texts:"Monthly",
        icon:<CalendarMonthRounded/>
    },
    {
        texts:"Breakdown",
        icon:<PieChartOutlineOutlined/ >
    },
    {
        texts:"Management",
        icon:null
    },
    {
        texts:"Admin",
        icon:<AdminPanelSettingsOutlined/>
    },
    {
        texts:"Performance",
        icon:<TrendingDownOutlined/>
    },

]



const SideBar = ({user,isNonMobile,isSidebarOpen,setSidebarOpen,drawerWidth,}) => {

    const {pathname}=useLocation()
    const [active,setActive]=useState("");
    const navigate=useNavigate();
    const theme=useTheme();

    //useeffect
    useEffect(()=>{ setActive(pathname.substring(1))},[pathname]);

  return (
    <Box component="nav">
       {isSidebarOpen &&(
        <Drawer
    open={isSidebarOpen}
    onClose={()=>setSidebarOpen(false)}
    variant='persistent' 
    anchor='left'
    sx={{
        width:drawerWidth,
        "& .MuiDrawer-paper":{
            color:theme.palette.secondary[200],
            backgroundColor:theme.palette.background.alt,
            boxSizing:"border-box",
            borderWidth:isNonMobile ? 0:"2px",
            width:drawerWidth
        }
    }}
    >
        
    <Box width="100%">
   <Box m="1.5rem  2rem 2rem 3rem">
   <FlexBetween color={theme.palette.secondary.main}>
    <Box display="flex" alignItems="center" gap="0.5rem">
        <Typography variant="h4" fontWeight="bold">
            FORWARDERS
        </Typography>
    </Box>
    {isNonMobile && (<IconButton onClick={()=>setSidebarOpen(!isSidebarOpen)} >
         <ChevronLeft/>
    </IconButton>)}
  </FlexBetween>
   </Box>
{/* listofitems */}
  <List>
{
    navItems.map(({texts,icon})=>{
        // console.log(texts)
        if(!icon){
             return( 
             <Typography key={texts} sx={{m:"2.5rem 0 1rem 3rem"}}>
                  {texts}
             </Typography>)
             }
        const textslc=texts.toLowerCase();
       return (
        <ListItem key={texts} disablePadding>
           <ListItemButton 
           onClick={()=>{ navigate(`/${textslc}`); setActive(textslc)}}
           sx={{
             backgroundColor:active ===textslc ?theme.palette.secondary[300]:"transparent",
             color:active ===textslc ? theme.palette.primary[600]:theme.palette.secondary[200],
           }}
            >
             <ListItemIcon sx={{ 
                ml:"2rem" ,
                color:active === textslc ? theme.palette.primary[600]:theme.palette.secondary[200]}}>
              {icon}
             </ListItemIcon>
             <ListItemText primary={texts}/>
             {active === texts && (<ChevronRightOutlined sx={{ml:"auto"}}/>)}
          </ListItemButton>
        </ListItem>
       )
        })
}

 
  </List>

    </Box>
    <Box position="absolute" bottom="1rem">
    <Divider/>
    <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
        <Box alt="profileimage"
          height="40px"
          width="40px"
          borderRadius="50%"
          sx={{objectFit:"cover"}} src={me}
          />
        <Box textAlign="left"> 
          <Typography fontWeight="bold" fontSize="0.9rem" sx={{color:theme.palette.secondary[100]}}>
             {user?.name}
          </Typography>
          <Typography fontSize="0.8rem">
             {user?.occupation}
          </Typography>
        </Box>
        <SettingsOutlined sx={{
            color:theme.palette.secondary[300],
            fontSize:"25px"
        }}/>
    </FlexBetween>
  </Box>
        </Drawer>
   )}
    </Box>
  )
}

export default SideBar