import React from 'react'
import { Box} from '@mui/material'
import { useGetUserPerformanceQuery } from 'state/api'
import { useTheme } from '@emotion/react';
import Header from 'components/Header';
import CustomColumnMenu from 'components/CustomColumnMenu';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

const columns=[
    {
      field:"_id",
      headerName:"ID",
      flex:1,
    },
    {
      field:"name",
      headerName:"Name",
      flex:0.5,
    },
    {
      field:"email",
      headerName:"Email",
      flex:1,
    },
    {
      field:"phoneNumber",
      headerName:"Phone Number",
      flex:0.5,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      }
      
    }
  
  ]
  

const Performance = () => {
    const userId=useSelector((state)=>state.global.userId)
    console.log(userId)
    const {data,isLoading}=useGetUserPerformanceQuery(userId);
    const theme=useTheme()
  
    console.log(data)

  return (
    <Box m="1.5rem 2.5rem" >
      <Header title="Perfomance" subtitle="List of adminuser" />
      {/* <Box mt="40px" height="200vh"
      sx={{
        "& .MuiDataGrid-root":{
          border:"none"
        },
        "& .MuiDataGrid-columnHeaders":{ 
         backgroundColor:theme.palette.background.alt,
         color:theme.palette.secondary[100],
         borderBottom:"none"
          },
          "& .MuiDataGrid-virtualScroller":{
            backgroundColor:theme.palette.primary.light
          },
          "& .MuiDataGrid-footerContainer":{
            backgroundColor:theme.palette.background.alt,
            color:theme.palette.secondary[100],
            borderTop:"none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
           color:`{theme.palette.secondary[200]} !important`,
          },
      }}
      >
        <DataGrid loading={isLoading || !data}
         getRowId={(row)=>row._id}
         columns={columns}
         rows={data||[]}
         slots={{
            ColumnMenu:CustomColumnMenu,
         }}
        />
           
       

      </Box> */}
    </Box>
  )
}

export default Performance