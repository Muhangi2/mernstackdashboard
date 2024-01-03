import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { useGetSalesQuery } from 'state/api'
import { Box } from '@mui/material'
import {useTheme,Typography} from '@mui/material'


const BreakDownChart = ({isDashBoard=false}) => {
    const theme=useTheme();

    const {data,isLoading}=useGetSalesQuery();

    if(!data||isLoading)return "Loading...."  
    const colors=[
    theme.palette.secondary[500],
    theme.palette.secondary[300],
    theme.palette.secondary[300],
    theme.palette.secondary[400],
             ]
     const formattedData=Object.entries(data.salesByCategory).map(([category,sales],i)=>({
        id:category,
        label:category,
        value:sales,
        color:colors[i]
     }))        

  return (
    <Box height={isDashBoard ? "400px" :"100%"} 
    width={undefined}
    minHeight={isDashBoard? "325px":undefined}
    minWidth={isDashBoard ?"325px":undefined}
    position="relative"
    >
 <ResponsivePie
        data={formattedData}
        margin={  isDashBoard ? {top: 40, right: 80, bottom: 100, left: 50}:{top: 40, right: 80, bottom: 80, left: 80} }
        theme={{
            axis: {
              domain: {
                line: {
                  stroke: theme.palette.secondary[200],
                },
              },
              legend: {
                text: {
                  fill: theme.palette.secondary[200],
                },
              },
              ticks: {
                line: {
                  stroke: theme.palette.secondary[200],
                  strokeWidth: 1,
                },
                text: {
                  fill: theme.palette.secondary[200],
                },
              },
            },
            legends: {
              text: {
                fill: theme.palette.secondary[200],
              },
            },
            tooltip: {
              container: {
                color: theme.palette.primary.main,
              },
            },
          }}
        sortByValue={true}
        innerRadius={0.45}
        padAngle={0.7}
        // cornerRadius={3}
        colors={{datum:"data.color"}}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
    <Box position="absolute"
     top="40%"
      left="42%" 
      pointerEvents="none"
      color={theme.palette.secondary[400] }
      >
  
  {!isDashBoard && "Total:"} ${data.yearlySalesTotal}
     </Box>
    </Box>
  )
}

export default BreakDownChart