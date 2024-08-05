import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, ToggleButton, Toolbar, Tooltip, Typography } from "@mui/material"
// import { EmojiObjectsIcon, Brightness4, Brightness7 } from "@mui/icons-material";
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import { Brightness7 } from "@mui/icons-material";
import { Brightness4 } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import { useState } from "react"

const pages = ["Sobre mí", "Servicios", "Portfolio", "Blog", "Recursos Gratuitos",]

const Header = ({ darkMode, toggleDarkMode }) => {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" color="transparent" >
            <Container sx={{display: "flex", justifyContent: "space-between"}}>
                <Toolbar sx={{width:1}}>
                    <EmojiObjectsIcon color="secondary" sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

                    <Typography
                        variant="h4"
                        color="secondary"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            textDecoration: "none",
                        }}
                    > Jesus Santiago Web </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex', lg: "none" } }}>

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

                    <Box sx={{ml:20, display: { xs: 'none', md: 'none', lg: "flex" }, justifyContent: "space-between" }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'primary', display: 'block' }}
                            >
                                {page}
                            </Button>
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
                    </Box>

                    {/* <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {pages.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> */}

                </Toolbar>
            </Container>

        </AppBar>
    )
}

export default Header
