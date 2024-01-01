import React, { useState } from 'react'
import OverviewChart from 'components/OverviewChart'
import Header from 'components/Header'
import { FormControl,MenuItem,InputLabel,Box,Select } from '@mui/material'
import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { useGetUserQuery } from 'state/api'
import { useTheme } from '@emotion/react'

const Daily = () => {
    const[startDate,setStartDate]=useState(new Date("2021-02-01"));
    const [endDate,setEndDate]=useState(new Date("2021-03-01"));
    const {data} =useGetUserQuery();
    const theme=useTheme();

    const [formattedData]=useMemo(()=>{

    },[data])//eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>index</div>
  )
}

export default Daily