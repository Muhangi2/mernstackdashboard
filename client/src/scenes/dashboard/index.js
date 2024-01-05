import React from 'react'
import { useGetGeneralDashboardQuery } from 'state/api'
import Overview from 'scenes/overview'
import BreakDownChart from 'components/BreakDownChart'
import Performance from 'scenes/performance'
import Header from 'components/Header'
import FlexBetween from 'components/FlexBetween'
import { Traffic,PointOfSale,PersonAdd,Email,DownloadDoneOutlined } from '@mui/icons-material'
import { Box,Typography,useTheme,useMediaQuery } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'


const Dashboard = () => {
  const {data,isLoading}=useGetGeneralDashboardQuery();
  const theme=useTheme();
  console.log(data)

  return (
    <div>

    </div>
  )
}

export default Dashboard