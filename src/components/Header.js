import { AppBar, Box, Button, ButtonGroup, Container, IconButton, Menu, MenuItem, SvgIcon, ToggleButton, Toolbar, Tooltip, Typography } from "@mui/material"
// import { EmojiObjectsIcon, Brightness4, Brightness7 } from "@mui/icons-material";
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import { Brightness7 } from "@mui/icons-material";
import { Brightness4 } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import { useState } from "react"

const pages = [
    {name: "Sobre mí", page: "/about"},
    {name: "Servicios", page: "/service"},
    {name: "Portfolio", page: "/portfolio"}]

const LogotipoLight = () => {
    return (
        <SvgIcon fontSize="large" >
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
                <title>imalogotipo</title>
                <path id="Background" className="l0" d="m1012 46v987h-987v-987z" />
                <path id="J" className="l1" aria-label="J" d="m197.3 956.8q-24.5 0-43.3-2.7-18.3-3.1-31.7-8v-89.8q14.3 3.6 30.8 6.2 16.5 2.7 35.3 2.7 24.6 0 44.7-9.4 20.1-9.3 31.7-33.9 12-24.6 12-69.2v-630.7h107.2v627.1q0 72.8-23.2 118.8-23.2 45.6-65.2 67.5-42 21.4-98.3 21.4z" />
                <path id="S" className="l1" aria-label="S" d="m955.2 678q11.1 69.6-15.1 125.4-25.8 55.8-85.2 92.7-59 36.9-146.8 50.9-42.9 6.8-82.7 8.2-39.9 1.5-76.2-2.1-35.8-4.2-66.3-13l-19.3-121.1q51 13.3 112.7 21 61.5 7.3 122.6-2.5 49.8-7.9 80.4-26 31.1-18.7 43.3-45.3 12.1-27.2 6.9-59.9-5.5-34.8-28.1-55.9-22.6-21.2-63.8-34.9-40.7-14.4-101.2-28.4-41-9.3-79.5-23.5-38-14.3-69.6-36.7-31.6-22.4-53.5-56.3-21.4-34.5-29.3-84.3-10.6-66.4 13.5-118.6 24.6-52.2 78.4-86.6 54.4-34.5 132-46.9 61.6-9.8 117.8-5.6 56.7 4.1 112.9 19.3l-24.2 109.9q-51.4-12.1-98.8-16.7-46.8-4.6-94 3-40.7 6.4-67.1 23.3-26.4 16.8-37.8 41.7-11 24.3-6.1 54.8 5.4 34.3 25.8 55.2 20.8 20.3 59.2 34 39 13.5 99 28.1 69.1 16.5 118.8 38.7 50.2 22.2 80.9 59.6 30.6 36.9 40.4 98.5z" />
            </svg>
        </SvgIcon>
    )
}

const LogotipoDark = () => {
    return (
        <SvgIcon fontSize="large" >
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" width="1080" height="1080">
                <title>imalogotipo</title>
                <path id="Background" className="d0" d="m1012 46v987h-987v-987z" />
                <path id="J" className="d1" aria-label="J" d="m197.3 956.8q-24.5 0-43.3-2.7-18.3-3.1-31.7-8v-89.8q14.3 3.6 30.8 6.2 16.5 2.7 35.3 2.7 24.6 0 44.7-9.4 20.1-9.3 31.7-33.9 12-24.6 12-69.2v-630.7h107.2v627.1q0 72.8-23.2 118.8-23.2 45.6-65.2 67.5-42 21.4-98.3 21.4z" />
                <path id="S" className="d1" aria-label="S" d="m955.2 678q11.1 69.6-15.1 125.4-25.8 55.8-85.2 92.7-59 36.9-146.8 50.9-42.9 6.8-82.7 8.2-39.9 1.5-76.2-2.1-35.8-4.2-66.3-13l-19.3-121.1q51 13.3 112.7 21 61.5 7.3 122.6-2.5 49.8-7.9 80.4-26 31.1-18.7 43.3-45.3 12.1-27.2 6.9-59.9-5.5-34.8-28.1-55.9-22.6-21.2-63.8-34.9-40.7-14.4-101.2-28.4-41-9.3-79.5-23.5-38-14.3-69.6-36.7-31.6-22.4-53.5-56.3-21.4-34.5-29.3-84.3-10.6-66.4 13.5-118.6 24.6-52.2 78.4-86.6 54.4-34.5 132-46.9 61.6-9.8 117.8-5.6 56.7 4.1 112.9 19.3l-24.2 109.9q-51.4-12.1-98.8-16.7-46.8-4.6-94 3-40.7 6.4-67.1 23.3-26.4 16.8-37.8 41.7-11 24.3-6.1 54.8 5.4 34.3 25.8 55.2 20.8 20.3 59.2 34 39 13.5 99 28.1 69.1 16.5 118.8 38.7 50.2 22.2 80.9 59.6 30.6 36.9 40.4 98.5z" />
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
        <Box
            component='header'
            maxWidth='xl'
            sx={{
                m: 'auto',
                backdropFilter: 'blur(10px)',
                borderRadius:2,
                position: 'fixed',
                zIndex:1,
                left:'50%',
                transform: 'translate(-50%)',
                top:'32px',
                width:{xs:.8, md: 0.7},
                boxShadow: (theme) => `15px 15px 30px ${theme.palette.card.shadowPrimary}, -15px -15px 30px ${theme.palette.card.shadowSecondary}`,
            }}
        >
            <Container maxWidth='xl'>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", py: 1, }} >

                    {/* logo */}
                    <Box sx={{m:0, p:0}}>
                        <Button href="/" sx={{display: "flex", alignItems: "center", justifyContent: "space-between", width:220, m: 0}}>

                         {darkMode ? <LogotipoDark/> : <LogotipoLight/>}
                          {darkMode ? <img width="150" src="/imalogotipoLight.svg" alt="imalogotipo de jesus santiago web, diseñamos tu página web"/> 
                         : <img width="150" src="/imalogotipoDark.svg" alt="imalogotipo de jesus santiago web, diseñamos tu página web"/>}

                        </Button>
                    </Box>

                    {/* HAMBURGUESA */}
                    <Box sx={{ display: { xs: 'flex', md: 'flex',lg : ' none'} }}>

                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon color='primary'/>
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
                                display: { xs: 'flex', lg: "none" },
                                zIndex:10000,
                            }}
                        >
                            {pages.map((item) => (
                                <MenuItem key={item.name} onClick={handleCloseNavMenu} >
                                    <Button 
                                        variant="text" 
                                        href={item.page}
                                        sx={{width:1}}
                                        >
                                        {item.name}
                                    </Button>
                                </MenuItem>
                            ))}
                            <MenuItem>
                                <Button color="secondary" variant="contained" sx={{margin: 'auto'}}>
                                    Charlemos!
                                </Button>
                            </MenuItem>

                            <Tooltip title={darkMode ? "Modo claro" : "Modo Oscuro"}>
                                <ToggleButton
                                    onClick={toggleDarkMode}
                                    sx={{border:0}}
                                    fullWidth
                                >
                                  {darkMode ? <Brightness7 color="secondary" /> : <Brightness4 color="primary" />}
                                </ToggleButton>

                            </Tooltip>

                        </Menu>
                    </Box>

                    {/* Botones desktop */}
                    <Box sx={{ display: { xs: 'none', md: 'none', lg: 'flex'}, justifyContent: "space-between", }}>
                        <ButtonGroup 
                            variant="outlined"
                            // color="background" 
                            size="large"
                            aria-label="Buttons header of Jesus Santiago web- when we create your web site"
                        >
                        {pages.map((item) => (
                            <Button
                                key={item.name}
                                onClick={handleCloseNavMenu}
                                href={item.page}
                                sx={{display: 'block', color:'primary.main', fontWeight:700}}
                            >
                                {item.name}
                            </Button>
                        ))}
                        </ButtonGroup>

                        <Tooltip title={darkMode ? "Modo claro" : "Modo Oscuro"}>
                            <ToggleButton
                                onClick={toggleDarkMode}
                                sx={{border:0}}
                            >
                                {darkMode ? <Brightness7 color="secondary" /> : <Brightness4 color="primary" />}
                            </ToggleButton>

                        </Tooltip>
                    </Box>

                    <Box sx={{display: { xs: 'none', lg:'block'}}}>
                        <Button 
                        variant="contained"
                        color="secondary" 
                        size="large"
                        sx={{fontWeight:700}}
                    > 
                        Charlemos 
                    </Button>
                    </Box>

                </Toolbar>
            </Container>
        </Box>
    )
}

export default Header
