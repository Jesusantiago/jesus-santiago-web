import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, SvgIcon, ToggleButton, Toolbar, Tooltip, Typography } from "@mui/material"
// import { EmojiObjectsIcon, Brightness4, Brightness7 } from "@mui/icons-material";
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import { Brightness7 } from "@mui/icons-material";
import { Brightness4 } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import { useState } from "react"

const pages = ["Sobre mí", "Servicios", "Portfolio"]

const LogotipoLight = () => {
    return (
        <SvgIcon fontSize="large" >
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
                <title>imalogotipo</title>
                <path id="Background" class="l0" d="m1012 46v987h-987v-987z" />
                <path id="J" class="l1" aria-label="J" d="m197.3 956.8q-24.5 0-43.3-2.7-18.3-3.1-31.7-8v-89.8q14.3 3.6 30.8 6.2 16.5 2.7 35.3 2.7 24.6 0 44.7-9.4 20.1-9.3 31.7-33.9 12-24.6 12-69.2v-630.7h107.2v627.1q0 72.8-23.2 118.8-23.2 45.6-65.2 67.5-42 21.4-98.3 21.4z" />
                <path id="S" class="l1" aria-label="S" d="m955.2 678q11.1 69.6-15.1 125.4-25.8 55.8-85.2 92.7-59 36.9-146.8 50.9-42.9 6.8-82.7 8.2-39.9 1.5-76.2-2.1-35.8-4.2-66.3-13l-19.3-121.1q51 13.3 112.7 21 61.5 7.3 122.6-2.5 49.8-7.9 80.4-26 31.1-18.7 43.3-45.3 12.1-27.2 6.9-59.9-5.5-34.8-28.1-55.9-22.6-21.2-63.8-34.9-40.7-14.4-101.2-28.4-41-9.3-79.5-23.5-38-14.3-69.6-36.7-31.6-22.4-53.5-56.3-21.4-34.5-29.3-84.3-10.6-66.4 13.5-118.6 24.6-52.2 78.4-86.6 54.4-34.5 132-46.9 61.6-9.8 117.8-5.6 56.7 4.1 112.9 19.3l-24.2 109.9q-51.4-12.1-98.8-16.7-46.8-4.6-94 3-40.7 6.4-67.1 23.3-26.4 16.8-37.8 41.7-11 24.3-6.1 54.8 5.4 34.3 25.8 55.2 20.8 20.3 59.2 34 39 13.5 99 28.1 69.1 16.5 118.8 38.7 50.2 22.2 80.9 59.6 30.6 36.9 40.4 98.5z" />
            </svg>
        </SvgIcon>
    )
}

const LogotipoDark = () => {
    return (
        <SvgIcon fontSize="large" >
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
                <title>imalogotipo</title>
                <path id="Background" class="d0" d="m1012 46v987h-987v-987z" />
                <path id="J" class="d1" aria-label="J" d="m197.3 956.8q-24.5 0-43.3-2.7-18.3-3.1-31.7-8v-89.8q14.3 3.6 30.8 6.2 16.5 2.7 35.3 2.7 24.6 0 44.7-9.4 20.1-9.3 31.7-33.9 12-24.6 12-69.2v-630.7h107.2v627.1q0 72.8-23.2 118.8-23.2 45.6-65.2 67.5-42 21.4-98.3 21.4z" />
                <path id="S" class="d1" aria-label="S" d="m955.2 678q11.1 69.6-15.1 125.4-25.8 55.8-85.2 92.7-59 36.9-146.8 50.9-42.9 6.8-82.7 8.2-39.9 1.5-76.2-2.1-35.8-4.2-66.3-13l-19.3-121.1q51 13.3 112.7 21 61.5 7.3 122.6-2.5 49.8-7.9 80.4-26 31.1-18.7 43.3-45.3 12.1-27.2 6.9-59.9-5.5-34.8-28.1-55.9-22.6-21.2-63.8-34.9-40.7-14.4-101.2-28.4-41-9.3-79.5-23.5-38-14.3-69.6-36.7-31.6-22.4-53.5-56.3-21.4-34.5-29.3-84.3-10.6-66.4 13.5-118.6 24.6-52.2 78.4-86.6 54.4-34.5 132-46.9 61.6-9.8 117.8-5.6 56.7 4.1 112.9 19.3l-24.2 109.9q-51.4-12.1-98.8-16.7-46.8-4.6-94 3-40.7 6.4-67.1 23.3-26.4 16.8-37.8 41.7-11 24.3-6.1 54.8 5.4 34.3 25.8 55.2 20.8 20.3 59.2 34 39 13.5 99 28.1 69.1 16.5 118.8 38.7 50.2 22.2 80.9 59.6 30.6 36.9 40.4 98.5z" />
            </svg>
        </SvgIcon>
    )
}

const Header = ({ darkMode, toggleDarkMode }) => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" color="transparent" >
            <Container>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Container sx={{display: "flex", alignItems: "center", justifyContent: "space-between", width: 250, m: 0}} >

                        {darkMode ? <LogotipoDark/> : <LogotipoLight/>}
                        {darkMode ? <img width="150" src="/imalogotipoLight.svg" alt="imalogotipo de jesus santiago web, diseñamos tu página web"/> 
                        : <img width="150" src="/imalogotipoDark.svg" alt="imalogotipo de jesus santiago web, diseñamos tu página web"/>}

                    </Container>

                    <Box sx={{ display: { xs: 'flex', md: 'none'} }}>

                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >

                            <MenuIcon />

                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'block', lg: "none" },
                            }}
                        >

                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}

                            <Tooltip title={darkMode ? "Modo claro" : "Modo Oscuro"}>
                                <ToggleButton
                                    edge="end"
                                    color="secondary"
                                    onClick={toggleDarkMode}
                                >
                                    {darkMode ? <Brightness7 /> : <Brightness4 />}
                                </ToggleButton>

                            </Tooltip>

                        </Menu>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex'}, justifyContent: "space-between", }}>
                        {pages.map((page) => (
                            <Button
                                variant="contained"
                                color="secondary"
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ m: 1, display: 'block'}}
                            >
                                {page}
                            </Button>
                        ))}

                        <Tooltip title={darkMode ? "Modo claro" : "Modo Oscuro"}>
                            <ToggleButton
                                onClick={toggleDarkMode}
                                sx={{border:0}}
                            >
                                {darkMode ? <Brightness7 color="secondary" /> : <Brightness4 color="secondary" />}
                            </ToggleButton>

                        </Tooltip>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
