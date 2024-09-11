'use client'

import Image from "next/image";
import styles from "../page.module.css";
import { Link } from "@/i18n/routing";
import { Box, Button, Container, Typography } from "@mui/material"
import HeroSection from "./HeroSection";

import Experience from "./Experience";
import Blog from "./Blog";
import Project from "./Project";
import Education from "./Education";
import AboutMe from "./AboutMe";

export default function Home() {
  return (
    <Box
      component='main'
      sx={{
        backgroundColor: (theme) => theme.palette.card.main,
        backgroundImage: (theme) => `linear-gradient(32deg, ${theme.palette.card.shadowSecondary} 30px, transparent)`,
        backgroundSize: '100px 100px',
        backgroundPosition: '-5px -5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
        <HeroSection/>
        <Blog />
        <Experience />
        <Project />
        <Education />
        <AboutMe/>
         
      <Link href='/about'> <Button>About</Button>  </Link>
    </Box>
  );
}

