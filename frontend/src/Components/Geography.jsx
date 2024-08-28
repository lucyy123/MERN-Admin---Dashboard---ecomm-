import { Box } from '@mui/material'
import React from 'react'
import { ResponsiveChoropleth } from '@nivo/geo'
import { useGetGeographyQuery } from 'states/api'
import {geoData} from "../states/geoData"

import Header from 'usabled/Header'
import { useTheme } from '@mui/system'
function Geography() {
const {data}=useGetGeographyQuery()
// console.log('geodata:', Data)
const theme=useTheme()





    return (
        <Box m='1.5rem 2rem'>
            <Header title='GEOGRAPHY' subtitle='Find Where Your Users Are Located' />
            <Box 
            mt='40px'
            height='75vh'
            // border={`1px solid ${theme.palette.secondary[100]}`}
            borderRadius='4px'
            >
                {data? <><ResponsiveChoropleth
                   
                   data={data}
                  
                   features={geoData?.features}
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
                   margin={{ top: 0, right: 0, bottom: 0, left: -50}}
                   colors="spectral"
                   domain={[ 0, 60 ]}
                   unknownColor="grey"
                   label="properties.name"
                   valueFormat=".2s"
                   projectionScale={150}
                   projectionTranslation={[ 0.45, 0.6 ]}
                   projectionRotation={[ 0, 0, 0 ]}
                   enableGraticule={false}
                   graticuleLineColor="white"
                   
                   borderWidth={1.3}
                   borderColor='white'
                   legends={[
                       {
                           anchor: 'bottom-right',
                           direction: 'column',
                           justify: true,
                           translateX: 0,
                           translateY: -120,
                           itemsSpacing: 0,
                           itemWidth: 92,
                           itemHeight: 18,
                           itemTextColor:theme.palette.secondary[200],
                           itemDirection: 'left-to-right',
                           itemOpacity: 1.25,
                           symbolSize: 18,
                           effects:[
                            {
                                on:'hover',
                                style:{
                                    itemTextColor:theme.palette.background.alt,
                                    itemOpacity:1

                                }
                            }

                           ]
                       }
                   ]}
/> </>:<Box>Loading....</Box>}
    
        </Box>




        </Box>
    )
}

export default Geography
