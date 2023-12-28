import React, { useState } from 'react'
import { Box,
    Typography
    ,Card,CardActions,CardContent,
    Collapse,Button,Rating,useTheme ,useMediaQuery} from '@mui/material'
import Header from 'components/Header'
import { useGetProductsQuery } from 'state/api'


const product=({_id,name,description,price,rating,category,supply,stat})=>{

   const theme=useTheme();
   const[isExpanded,setIsExpanded]=useState(false);

  return(
   <Card 
   sx={{backgroundImage:"none",
   backgroundColor:theme.palette.background.alt,
   borderRadius:"0.55rem"}}>
   <CardContent>

    <Typography sx={{fontSize:14}} color={theme.palette.secondary[700]} gutterButton>{category}</Typography>
    
    <Typography variant='h5' component="div">{name}</Typography> 
    <Typography sx={{mb:"1.5rem"}} color={theme.palette.secondary[400]}>${Number(price).toFixed(2)}</Typography>
<Rating value={rating} readOnly/>
<Typography></Typography>
   </CardContent>
   </Card>)
}


    const Products = () => {
      
    const {data,isLoading}= useGetProductsQuery()
    const isNonMobile=useMediaQuery("(min-width:1000px)")
    console.log(data)

  return (
    <Box>
        <Header title="Products" subtitle="see the list of products"/>
        {data || !isLoading ? 
        <Box mt="20px" display="grid" 
          gridTemplateColumns="repeat(4,minmax(0,1fr))" 
          justifyContent="space-between"
           rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div ":{ gridColumn: isNonMobile?undefined:"span -4"}
          }}
          > 
       {data.map()=>()}
          </Box>:<>Loading...</>}
    </Box>
  )
}

export default Products