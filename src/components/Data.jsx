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
              const existingCause = acc.find((item) => item.id === Cause);

              if (existingCause) {
                existingCause.data.push({ x: Year, y: parseInt(Deaths) });
              } else {
                acc.push({
                  id: Cause,
                  data: [{ x: Year, y: parseInt(Deaths) }],
                });
              }

              return acc;
            }, []);

            transformedData.sort((a, b) => {
              const totalDeathsA = a.data.reduce((sum, point) => sum + point.y, 0);
              const totalDeathsB = b.data.reduce((sum, point) => sum + point.y, 0);
              return totalDeathsB - totalDeathsA;
            });

            const top10Causes = transformedData.slice(0, 10);
            setFormattedData(top10Causes);
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
