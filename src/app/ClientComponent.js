'use client'

import { useState } from 'react'
import {CssBaseline} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { lightTheme, darkTheme } from './theme'
import Header from '@/components/Header'

export default function ClientComponent({children}) {
    const [ darkMode, setDarkMode ] = useState(false);
    
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline/>
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            {children}
        </ThemeProvider>
    )
}