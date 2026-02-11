'use client'

import { Box } from "@mui/material"
import HeroSection from "./HeroSection";

import Experience from "./Experience";
import Blog from "./Blog";
import Project from "./Project";
import Education from "./Education";
import AboutMe from "./AboutMe";
import Faq from "./Faq";
import Testimonials from "./Testimonials";
import SectionForm from "@/app/[locate]/SectionForm";
import ButtonChange from "@/components/ButtonChange";


export default function Home() {
  return (
    <Box
      component='main'
      sx={{

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
        <ButtonChange/>
        <HeroSection id="hero"/>
        <Experience id="experience"/>
        <Box id="project" ><Project /></Box>
        <Box id="education" ><Education /></Box>
        <Box id="aboutMe" ><AboutMe/></Box>
        <Box id="" ><Faq/></Box>
        <Box id="" ><Testimonials/></Box>
        <Box id="" ><Blog/></Box>
        <Box id="" ><SectionForm /></Box>





    </Box>
  );
}
