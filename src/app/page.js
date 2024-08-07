import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Button } from "@mui/material"
import Hero from '../components/Hero'

export default function Home() {
  return (
    <main >
      <Hero/>

      {/* <video src="videos/cenital-manos.mp4" autoPlay ></video> */}

      <Button href="/about"> ABOUT</Button>

 
    </main>
  );
}
