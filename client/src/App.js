import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom";
import { ThemeProvider,CssBaseline } from "@mui/material";
import {createTheme} from "@mui/material/styles"
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";
import Dashboard from "scenes/dashboard";
import Layout from "scenes/layout";
import Products from "scenes/products";
 

function App() {
  const mode=useSelector((state)=>state.global.mode);
  const theme=useMemo(()=>createTheme(themeSettings(mode)),[mode])
  return (
    <div className="app">
    <BrowserRouter>
    <ThemeProvider theme={theme} >
      <CssBaseline/>
      <Routes>
        <Route element={<Layout/>}>
            <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route  path="/products" element={<Products/>}/>
        </Route>
      </Routes>
    </ThemeProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
