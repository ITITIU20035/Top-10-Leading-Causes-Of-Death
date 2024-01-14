import React, { useState } from 'react';
import { ResponsiveScatterPlot } from '@nivo/scatterplot';
import Data from "./Data";
import { useTheme } from '@mui/material';
import { tokens } from '../theme';

const ScatterPlot = ({isDashboard = false}) => {
  const filePath ='./combined_data.csv';
  const formattedData = Data({filePath});
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const blendMode = theme.palette.mode === 'dark' ? 'lighten' : 'multiply';
  return (
    <ResponsiveScatterPlot
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
      margin={{ top: 60, right: 250, bottom: 70, left: 90 }}
      xScale={{ type: 'linear', min: 2000, max: 'auto' }}
      xFormat=">-.2f"
      yScale={{ type: 'linear', min: 0, max: 'auto' }}
      yFormat=">-.2f"
      blendMode={blendMode}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Year',
        legendPosition: 'middle',
        legendOffset: 46,
        tickValues: isDashboard ? [2000, 2019]: [2000, 2010, 2015, 2019], // Specify available years
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Number Of Deaths',
        legendPosition: 'middle',
        legendOffset: -60,
      }}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 130,
          translateY: 0,
          itemWidth: 100,
          itemHeight: 12,
          itemsSpacing: 5,
          itemDirection: 'left-to-right',
          symbolSize: 12,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      tooltip={({node}) => 
      <div style={{
        color: node.color,
        background: '#333',
        padding: '12px 16px'
      }}>
                        <strong>
                            {node.serieId}
                        </strong>
                        <br />
                        {`Year: ${parseInt(node.formattedX)}`}
                        <br />
                        {`Number of Deaths: ${parseInt(node.formattedY)}`}
                    </div>}
    />
  );
};

export default ScatterPlot;
