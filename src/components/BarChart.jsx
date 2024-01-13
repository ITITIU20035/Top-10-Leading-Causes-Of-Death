import React, { useEffect } from 'react';
import Papa from 'papaparse';

const BarChart = () => {
  const filePath = '/combined_data.csv'; // Replace with the actual file path

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(filePath);
        const text = await response.text();

        Papa.parse(text, {
          header: true,
          complete: (result) => {
            // Assuming 'Deaths', 'Cause', and 'Year' are the column names
            const selectedData = result.data.map(({ Deaths, Cause, Year }) => ({ Deaths, Cause, Year }));

            // Log the data to the console
            console.log(selectedData);
          },
        });
      } catch (error) {
        console.error('Error loading CSV file:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>CSV Reader</h1>
    </div>
  );
};

export default BarChart;
