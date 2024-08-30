'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Box, Button, Container, Typography } from "@mui/material"
import HeroSection from "./HeroSection";
import Newletter from "./Newletter";
import Portfolio from "./Portfolio";

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
        <Newletter />
        <Portfolio />
         
      <Button href="/about"> ABOUT</Button>
    </Box>
  );
}

