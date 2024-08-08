"use client";  // Indica que este es un componente del cliente

import { useState} from 'react';
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles"
import { lightTheme, darkTheme } from "./theme";
import "./globals.css";
import Head from './head';
import Header from '@/components/Header';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'



export default function RootLayout({ children }) {
  const [ darkMode, setDarkMode ] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  };

  return (
    <html lang="es">

      <Head/>
      <Box component="body">
        <AppRouterCacheProvider>
          <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline/>
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
        
        </Box>
    </html>
  );
}
