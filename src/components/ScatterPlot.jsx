import React, { useState } from 'react';
import { ResponsiveScatterPlot } from '@nivo/scatterplot';
import Data from "./Data";
import { useTheme } from '@mui/material';
import { tokens } from '../theme';

const ScatterPlot = () => {
    const filePath ='./combined_data.csv';
    const formattedData = Data({filePath});
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


  return (
    <ResponsiveScatterPlot
      data={formattedData}
      margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
      xScale={{ type: 'linear', min: 2000, max: 'auto' }}
      xFormat=">-.2f"
      yScale={{ type: 'linear', min: 0, max: 'auto' }}
      yFormat=">-.2f"
      blendMode="multiply"
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
        tickValues: [2000, 2010, 2015, 2019], // Specify available years
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
    />
  );
};

export default ScatterPlot;
