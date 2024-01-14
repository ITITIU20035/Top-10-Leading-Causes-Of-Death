import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const Data = ({ filePath }) => {
  const [formattedData, setFormattedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(filePath);
        const text = await response.text();

        Papa.parse(text, {
          header: true,
          complete: (result) => {
            const transformedData = result.data.reduce((acc, { Deaths, Cause, Year }) => {
              const existingCause = acc.find((item) => item.Cause === Cause);

              if (existingCause) {
                existingCause[`${Year}`] = parseInt(Deaths);
              } else {
                const newData = {
                  Cause,
                  [`${Year}`]: parseInt(Deaths),
                };
                acc.push(newData);
              }

              return acc;
            }, []);

            // Sort by total deaths and keep only the top 10
            transformedData.sort((a, b) => {
              const totalDeathsA = Object.values(a).slice(1).reduce((sum, death) => sum + death, 0);
              const totalDeathsB = Object.values(b).slice(1).reduce((sum, death) => sum + death, 0);
              return totalDeathsB - totalDeathsA;
            });

            const top10Causes = transformedData.slice(0, 10);
            const colorScale = (index) => `hsl(${index * 30}, 70%, 50%)`;

            const years = [...new Set(top10Causes.flatMap(item => Object.keys(item).filter(key => key !== 'Cause')))];
            const formattedData = top10Causes.map((item) => {
              const result = {
                Cause: `${item.Cause}`,
              };

              years.forEach((year, index) => {
                result[year] = item[year] || 0; // Ensure the year is present, default to 0 if not
                result[`${year}Color`] = colorScale(index);
              });

              return result;
            });

            setFormattedData(formattedData);
          },
        });
      } catch (error) {
        console.error('Error loading CSV file:', error);
      }
    };

    fetchData();
  }, [filePath]);

  return formattedData;
};

export default Data;
