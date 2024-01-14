import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import AccessibleIcon from '@mui/icons-material/Accessible';
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import ScatterPlot from "../../components/ScatterPlot";
import StatBox from "../../components/StatBox";
import BarChart from "../../components/BarChart";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Top 10 Leading Causes Of Death (Data Provided By WHO)" />
        <Box>
          <Button
            sx={{
              backgroundColor: "colors.blueAccent[500]",
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW */}
        <Box
          gridColumn="span 3"
          backgroundColor="#363646"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="~168.86"
            subtitle="Highest Death rate per 100K population"
            progress="0.2"
            increase="Stroke (2010)"
            icon={
              <AccessibilityIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={"#363646"}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="159K"
            subtitle="Highest Fatality Count"
            progress="1.0"
            increase="Stroke (2019)"
            icon={
              <GroupRemoveIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={"#363646"}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="~3365"
            subtitle="Highest DALYs rate Per 100K"
            progress="0.7"
            increase="Stroke (2015)"
            icon={
              <MoodBadIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={"#363646"}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="3.24M"
            subtitle="Highest DALY"
            progress="1.0"
            increase="Stroke (2019)"
            icon={
              <AccessibleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box gridColumn="span 12" gridRow="span 2" backgroundColor={"#363646"}>
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Estimated fatal types:
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                ~170,048
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={"#363646"}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Medical Improvement
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <BarChart isDashboard={true} />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              70% after 5 Years of Diagnosis
            </Typography>
            <Typography>Survival Rate of a Specific Stage of Stomach Cancer</Typography>
          </Box>
        </Box>
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={"#363646"}>
          <Typography
            variant="h5"
            ariant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Scatter Plot
          </Typography>
          <Box height="250px" mt="-20px" backgroundColor={"#363646"}>
            <ScatterPlot isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={"#363646"}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
