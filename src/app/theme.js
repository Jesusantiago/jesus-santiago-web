
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Manrope, Lexend} from 'next/font/google'

const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap',
    preload: true,
});

const lexend = Lexend({
    subsets: ['latin'],
    display: 'swap',
    preload: true,
});

let lightTheme = createTheme({
    typography:{
        fontFamily: manrope.style.fontFamily,
        lexend: lexend.style.fontFamily

    },
    palette: {
        mode: 'light',
        primary: {
            main: '#212121',
            transparent: '#212121A0'
        },
        secondary: {
            main: '#B7F25E',
        },
        card: {
            main: '#e0e0e0',
            shadowPrimary : '#bebebe',
            shadowSecondary: '#ffffff'
        },
        text: {
            main: '#5c5c5c',
            textPrimary: '#1F1F1F',
            secondary: '#141414',
            neutral: "#0a0a0a",
            muted: "#666666",
            accent: "#383838"


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
        lexend: lexend.style.fontFamily

    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#D9D9D9',
            transparent: '#D9D9D9A0'
        },
        secondary: {
            main: '#B7F25E',
        },
        card:{
            main: '#292929',
            shadowPrimary: '#1F1F1F',
            shadowSecondary: '#141414'
        }, 
        text: {
            main: '#e0e0e0',
            textPrimary: '#bebebe',
            secondary: '#a6a6a6',
            neutral: "#8c8c8c",
            muted: "#a6a6a6",
            accent: "#e5e5e5"

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
