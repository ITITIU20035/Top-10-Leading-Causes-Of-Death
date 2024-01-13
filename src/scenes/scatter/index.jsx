import { Box } from "@mui/material";
import Header from "../../components/Header";
import ScatterPlot from "../../components/ScatterPlot";

const Scatter = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Top 10 Leading Causes Of Death in Vietnam" />
      <Box height="75vh">
        <ScatterPlot />
      </Box>
    </Box>
  );
};

export default Scatter;