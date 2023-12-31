import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useGetTransactionsQuery } from 'state/api'
import { useTheme } from '@emotion/react';
import Header from 'components/Header';
import { Box } from '@mui/material';
import DataGridCustomToolbar from 'components/DataGridCustomToolbar';

const columns=[
    {
      field:"_id",
      headerName:"ID",
      flex:1,
    },
    {
      field:"userId",
      headerName:"User Id",
      flex:0.5,
    },
    {
      field: "createdAt",
      headerName:"createdAt",
      flex:0.5,
      renderCell: (params) => {
        // Format the date using JavaScript Date methods
        const formattedDate = new Date(params.value).toLocaleString();
    
        return formattedDate;
      },
    },
    {
      field: "products",
      headerName: "# of products",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    
      {
        field:"cost",
        headerName:"cost",
        flex:1,
        renderCell:(params)=>`$${Number(params.value).toFixed(2)}`
      },
      
  ]

const Transactions = () => {
const theme=useTheme();
const [page,setPage]=useState(1)
const [pageSize,setPageSize]=useState(20)
const [sort,setSort]=useState({})
const [search,setSearch]=useState("");

const [searchInput,setSearchInput]=useState("");

const {data,isLoading}=useGetTransactionsQuery({page,pageSize,sort:JSON.stringify(sort),search}); 

 console.log("data",data);

return (
    <Box m="1.5rem 2.5rem" >
      <Header title="Transactions" subtitle="Transactions details"/>
      <Box mt="40px" height="200vh"
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
        <DataGrid
       loading={isLoading || !data}
  getRowId={(row) => row._id}
  columns={columns}
  rows={data && data.transactions || []}
  rowCount={(data && data.total) || 0}
  rowsPerPageOptions={[20, 50, 100]}
  variant="standard"
  pagination
  page={page}
  pageSize={pageSize}
  paginationMode="server" 
  sortingMode="server"    
  onPageChange={(newPage) => setPage(newPage)}
  onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
  onSortModelChange={(newSortModel) => setSort(...newSortModel)}
  slots={{ toolbar: DataGridCustomToolbar }}
  slotProps={{
    toolbar: { searchInput, setSearchInput, setSearch }
  }}
/>

           
       
      </Box>
    </Box>
  )
}

export default Transactions