"use client";  // Indica que este es un componente del cliente

import { useState} from 'react';
import { Open_Sans } from "next/font/google";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles"
import { lightTheme, darkTheme } from "./theme";
import "./globals.css";
import Head from './head';
import Header from '@/components/Header';


const inter = Open_Sans({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const [ darkMode, setDarkMode ] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  };

  return (
    <html lang="es">

      <Head/>
      <Box component="body">
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <CssBaseline/>
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
  
          {children}
        </ThemeProvider>
        
        </Box>
    </html>
  );
}
