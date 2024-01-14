import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import Data from './BarChartData';
import { useTheme } from '@mui/material';
import { tokens } from '../theme';

const BarChart = () => {
    const filePath ='./combined_data.csv';
    const formattedData = Data({filePath});
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    console.log(formattedData);
    return(
    <ResponsiveBar
        data={formattedData}
        theme={{
            axis:{
              domain:{
                line:{
                  stroke:colors.grey[100]
                }
              },
              legend:{
                text:{
                  fill: colors.grey[100]
                }
              },
              ticks:{
                lines:{
                  stroke: colors.grey[100],
                  strokeWidth: 1
                },
                text:{
                  fill: colors.grey[100]
                }
              }
            },
            legends:{
              text:{
                fill: colors.grey[100]
              }
            },
            tooltip:{
              container:{
                color: colors.primary[500],
              },
            },
          }}
        keys={[
            '2000',
            '2010',
            '2015',
            '2019',
        ]}
        indexBy="Cause"
        margin={{ top: 50, right: 130, bottom: 50, left: 200 }}
        padding={0.3}
        groupMode="grouped"
        layout="horizontal"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Number Of Death',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Cause',
            legendPosition: 'middle',
            legendOffset: -180,
            truncateTickAt: 0
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
    )
}

export default BarChart;
