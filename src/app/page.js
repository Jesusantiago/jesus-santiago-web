import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Box, Button, Typography } from "@mui/material"
import ProblemAndSolucion from './ProblemAndSolucion'
import HeroSection from "./HeroSection";

export default function Home() {
  return (
    <main>
        <HeroSection/>
        <ProblemAndSolucion />
          
      <Button href="/about"> ABOUT</Button>
    </main>
  );
}

