
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#212426',
        },
        secondary: {
            main: '#9CA653',
        },
        error: {
            main: '#ff1744',
        },
        background: {
            default: '#D9D9D9',
        },
    },
    typography: {
        h1: {
            fontSize: '2rem',
        },
        h2: {
            fontSize: '1.5rem',
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#D9D9D9',
        },
        secondary: {
            main: '#F2EA77',
        },
        error: {
            main: '#ff5252',
        },
        background: {
            default: '#212426',
        },
    },
    typography: {
        h1: {
            fontSize: '2rem',
        },
        h2: {
            fontSize: '1.5rem',
        },
    },
});