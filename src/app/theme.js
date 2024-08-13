
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Manrope, Lexend} from 'next/font/google'

const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap'
});

const lexend = Lexend({
    subsets: ['latin'],
    display: 'swap'
});

let lightTheme = createTheme({
    typography:{
        fontFamily: manrope.style.fontFamily,
        body2: {
            fontFamily: lexend.style.fontFamily
        }
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#212121',
        },
        secondary: {
            main: '#9CA653',
        },
        error: {
            main: '#ff1744',
        },
        background: {
            default: '#F0F0F0',
        },
    },
});

lightTheme = responsiveFontSizes(lightTheme)

let darkTheme = createTheme({
    typography:{
        fontFamily: manrope.style.fontFamily,
        body2: {
            fontFamily: lexend.style.fontFamily
        }
    },
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
            default: '#070707',
        },
    },
});

darkTheme = responsiveFontSizes(darkTheme)

export {
    lightTheme,
    darkTheme
}
