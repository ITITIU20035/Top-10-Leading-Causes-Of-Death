// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Line from "./scenes/line";
import Bar from "./scenes/bar";
import Scatter from "./scenes/scatter";
// import Dashboard from "./scenes/dashboard";
// import Dashboard from "./scenes/dashboard";

function App() {
  const [theme, colorMode] = useMode();
  // const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <Sidebar/>
          <main className="content">
            <Topbar/>
            <Routes>
              {/* <Route path="/" element={<Dashboard />} /> */}
              <Route path="/line" element={<Line />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/scatter" element={<Scatter />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
