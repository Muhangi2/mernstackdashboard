import React from 'react'
import { useGetGeographyQuery } from 'state/api'
import Header from 'components/Header';
import { geoData } from 'state/geoData';
import { ResponsiveChoropleth } from '@nivo/geo'
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';

const Geography = () => {
    const theme=useTheme();
    const {data,isLoading}=useGetGeographyQuery();
    console.log(data)
  return (
    <Box m="1.5rem 2.5rem">
 <Header title="COUNTRY" subtitle="SEELECT YOUR COUNTRY"/>
  <Box 
   mt="40px"
   height="120vh"
   border={`1px solid ${theme.palette.secondary[200]}`} 
   borderRadius="4px"
 >
{data? <ResponsiveChoropleth
        data={data}
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
        features={geoData.features}
        margin={{ top: 0, right: 0, bottom: 0, left: -50}}
        colors="PiYG"
        domain={[ 0,60 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        projectionScale={150}
        
        legends={[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: '#444444',
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000000',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />:<>Loading...</>}
  </Box>
    </Box>
  )
}

export default Geography