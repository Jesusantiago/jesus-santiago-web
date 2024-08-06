
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let lightTheme = createTheme({
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
});

lightTheme = responsiveFontSizes(lightTheme)

let darkTheme = createTheme({
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
});

darkTheme = responsiveFontSizes(darkTheme)

export {
    lightTheme,
    darkTheme
}