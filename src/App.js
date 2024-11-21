import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./pages/global/topbar/Topbar";
import Sidebar from "./pages/global/sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import Team from "./pages/team/Team";
// Sidebar +
//Dashboard
//Team
//Invoices
//Contacts
//Bar
//Form
//Line
//Pie
//FAQ
//Geography
//Calendar

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar></Topbar>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
