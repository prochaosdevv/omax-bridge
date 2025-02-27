"use client";
import {
  Box,
  Typography,
} from "@mui/material";
import usdc_logo from "../../assets/usdc_logo.svg";
import dollar from "../../assets/gray_dollar.svg";
import watch from "../../assets/watch.svg";
import fuel from "../../assets/fuel.svg";
import what from "../../assets/what.svg";
import via from "../../assets/via.svg";
import base_icon_ from "../../assets/base_icon_.svg";


const FirstStep = () => {
  return (
    <Box>
    <Typography
           textAlign={"center"}
           sx={{
             fontSize: "20px",
             fontWeight: "bold",
             my: "1rem",
           }}
         >
           REVIEW
         </Typography>
         <Box
           sx={{
             background: `var(--box_bg)`,
             borderRadius: "20px",
             p: "1rem",
             mb: "0.5rem",
           }}
         >
           <Box className="flex">
             <Typography className="light_dark_text">
               Bridge from USDC
             </Typography>
             <Box
               className="flex"
               sx={{
                 background: `var(--light_dark)`,
                 borderRadius: "20px",
                 p: "0.3rem 0.7rem",
               }}
             >
               <Typography className="foreground_text">0xabc....4f9E</Typography>
             </Box>
           </Box>
           <Typography
             className="text_"
             sx={{
               mt: "0.5rem",
               fontSize: "18px !important",
               display: "flex",
               gap: "5px",
               alignItems: "center",
               "& img": {
                 width: "25px",
                 height: "25px",
               },
             }}
           >
             <Typography component={"img"} src={usdc_logo.src} /> 0.001 USDC
           </Typography>
         </Box>
         <Box
           sx={{
             background: `var(--box_bg)`,
             borderRadius: "20px",
             p: "1rem",
             mb: "0.5rem",
           }}
         >
           <Box className="flex">
             <Typography className="light_dark_text">
               Get on Base Sepolia
             </Typography>
             <Box
               className="flex"
               sx={{
                 background: `var(--light_dark)`,
                 borderRadius: "20px",
                 p: "0.3rem 0.7rem",
               }}
             >
               <Typography className="foreground_text">0xabc....4f9E</Typography>
             </Box>
           </Box>
           <Typography
             className="text_"
             sx={{
               mt: "0.5rem",
               fontSize: "18px !important",
               display: "flex",
               gap: "5px",
               alignItems: "center",
               "& img": {
                 width: "25px",
                 height: "25px",
               },
             }}
           >
             <Typography component={"img"} src={usdc_logo.src} /> 0.001 USDC
           </Typography>
         </Box>
         <Box
           sx={{
             mt: "0.5rem",
             borderRadius: "20px",
             border: "1px solid var(--light_dark)",
             p: "1rem",
             "& img":{
                 verticalAlign:"middle"
             }
           }}
         >
           <Box className="flex" mb={"1rem"}>
             <Typography className="text_">
               <Typography component={"img"} src={via.src} /> Via
             </Typography>
             <Typography className="text_">
               Native Bridge{" "}
               <Typography
                 component={"img"}
                 src={base_icon_.src}
                 sx={{ verticalAlign: "middle" }}
               />
             </Typography>
           </Box>
           <Box className="flex" mb={"1rem"}>
             <Typography className="text_">
               <Typography component={"img"} src={watch.src} /> Transfer Time
             </Typography>
             <Typography className="text_">
             -6mins
         
             </Typography>
           </Box>
           <Box className="flex" mb={"1rem"}>
             <Typography className="text_">
               <Typography component={"img"} src={fuel.src} /> Gas Costs
             </Typography>
             <Typography className="text_">
             0.0003562 ETH{" "}
               <Typography
                 component={"img"}
                 src={what.src}
                 sx={{ verticalAlign: "middle" }}
               />
             </Typography>
           </Box>
           <Box className="flex">
             <Typography className="text_">
               <Typography component={"img"} src={dollar.src} /> fees
             </Typography>
             <Typography className="text_">
           0 Fees
             </Typography>
           </Box>
         </Box>
    </Box>
  )
}

export default FirstStep