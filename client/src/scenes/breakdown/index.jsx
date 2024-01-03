import React from 'react'
import { Box } from '@mui/material'
import Header from 'components/Header'
import BreakDownChart from 'components/BreakDownChart'

const Breakdown = () => {
  return (
    <Box m="1.5rem  2rem" >
      <Header title="Piechart" subtitle="breakdownnshowing the whole structure"/>
      <Box mt="40px" height="75vh">
         <BreakDownChart/>
      </Box>
    </Box>
  )
}

export default Breakdown