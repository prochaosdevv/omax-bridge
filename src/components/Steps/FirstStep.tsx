"use client";
import {
  Box,
  Typography,
} from "@mui/material";
import dollar from "../../assets/gray_dollar.svg";
import watch from "../../assets/watch.svg";
import fuel from "../../assets/fuel.svg";
import what from "../../assets/what.svg";
import via from "../../assets/via.svg";
import { useAccount } from "wagmi";
import { BridgeStepProps } from "@/types";
import { networkItems, tokenItems } from "@/config";
import { getLogoWidth, truncateAddress } from "@/utils/functions";


const FirstStep = (stepProps: BridgeStepProps) => {
  const account = useAccount();

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
            Bridge from {stepProps.symbol}
          </Typography>
          <Box
            className="flex"
            sx={{
              background: `var(--light_dark)`,
              borderRadius: "20px",
              p: "0.3rem 0.7rem",
            }}
          >
            <Typography className="foreground_text">{truncateAddress(account.address)}</Typography>
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
          <Typography
            component={"img"}
            src={tokenItems[stepProps.from].find((item) => item.symbol == stepProps.symbol)?.icon}
          />
          {stepProps.amount} {stepProps.symbol}
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
            Get on {networkItems.find((item) => item.chainId === stepProps.to)?.label}
          </Typography>
          <Box
            className="flex"
            sx={{
              background: `var(--light_dark)`,
              borderRadius: "20px",
              p: "0.3rem 0.7rem",
            }}
          >
            <Typography className="foreground_text">{truncateAddress(account.address)}</Typography>
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
          <Typography
            component={"img"}
            src={tokenItems[stepProps.to].find((item) => item.symbol == stepProps.symbol)?.icon}
          />
          {stepProps.amount} {stepProps.symbol}
        </Typography>
      </Box>
      <Box
        sx={{
          mt: "0.5rem",
          borderRadius: "20px",
          border: "1px solid var(--light_dark)",
          p: "1rem",
          "& img": {
            verticalAlign: "middle"
          }
        }}
      >
        {/* <Box className="flex" mb={"1rem"}>
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
        </Box> */}
        <Box className="flex" mb={"1rem"}>
          <Typography className="text_">
            <Typography component={"img"} src={watch.src} /> Transfer Time
          </Typography>
          <Typography className="text_">
            ~{stepProps.estimatedTime}

          </Typography>
        </Box>
        <Box className="flex" mb={"1rem"}>
          <Typography className="text_">
            <Typography component={"img"} src={fuel.src} /> Gas Costs
          </Typography>
          <Typography className="text_">
            {stepProps.estimatedGas} {networkItems.find((item)=>item.chainId==stepProps.from)?.symbol}{" "}
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