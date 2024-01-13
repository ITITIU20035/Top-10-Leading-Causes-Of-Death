import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import{useState} from 'react';

const Line = () => {
  const [rangeMax, setRangeMax] = useState(150000);

  const handleRangeChange = (event) => {
    // Update selectedRange based on the range input value
    setRangeMax(parseInt(event.target.value, 10));
  };
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Top 10 Leading Causes Of Death in Vietnam" />
      <Box height="75vh">
        <LineChart rangeMax={rangeMax}/>
        <input
          type="range"
          min="0"
          max="200000"
          step="1"
          value={rangeMax}
          onChange={handleRangeChange}
        />
      </Box>
    </Box>
  );
};

export default Line;