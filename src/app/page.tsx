"use client";
import { Box } from "@mui/material";
import LandingPage from './LandingPage/page'
import dynamic from 'next/dynamic'


// const LandingPage = dynamic(
//   () => import('./LandingPage/page'),
//   { ssr: false }
// )


export default function Home() {
  return (
    <Box  sx={{
      height: "100vh",
      overflow:"auto",
      "& .MuiContainer-root":{
        "@media (min-width:1260px)":{
          maxWidth:"1400px"
        },
      }
    }}>
    <LandingPage />
    </Box>  
  );
}
