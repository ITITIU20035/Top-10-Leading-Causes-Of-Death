import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';
import { tokens } from '../theme';
import { ResponsiveLine } from '@nivo/line';
import Data from './Data';

const LineChart = ({isDashboard = false,rangeMax}) => {
  const filePath ='./combined_data.csv';
  const formattedData = Data({filePath});
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return(
  <ResponsiveLine
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
        margin={{ top: 50, right: 250, bottom: 50, left: 70 }}
        xScale={{ type: 'point'}}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: rangeMax,
            stacked: false,
            reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Year',
            legendOffset: 36,
            legendPosition: 'middle',
            tickValues: [2000, 2010, 2015, 2019],
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Deaths',
            legendOffset: -60,
            legendPosition: 'middle'
        }}
        pointSize={isDashboard ? 5: 10}
        pointColor={{ from: 'color', modifiers: [] }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
  />
  );
};

export default LineChart;
