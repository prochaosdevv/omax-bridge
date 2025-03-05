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
import { t } from "i18next";
import { useAccount } from "wagmi";
import { BridgeStepProps } from "@/types";
import { networkItems, tokenItems } from "@/config";
import { getLogoWidth, truncateAddress } from "@/utils/functions";


const FirstStep = (stepProps: BridgeStepProps) => {
  const account = useAccount();
  if (!account) {
    console.error("Wallet is not connected");
    return <></>;
  }
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
        {t("REVIEW")}
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
            {t("Bridge from")} {networkItems.find((item) => item.chainId === stepProps.from)?.label}
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
            {t("Get on")} {networkItems.find((item) => item.chainId === stepProps.to)?.label}
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
            <Typography component={"img"} src={via.src} /> {t("Via")}
          </Typography>
          <Typography className="text_">
            {t("Native Bridge")}{" "}
            <Typography
              component={"img"}
              src={base_icon_.src}
              sx={{ verticalAlign: "middle" }}
            />
          </Typography>
        </Box> */}
        <Box className="flex" mb={"1rem"}>
          <Typography className="text_">
            <Typography component={"img"} width={20} src={watch.src} /> {t("Transfer Time")}
          </Typography>
          <Typography className="text_">
            ~{stepProps.estimatedTime}

          </Typography>
        </Box>
        <Box className="flex" mb={"1rem"}>
          <Typography className="text_">
            <Typography component={"img"} height={18} paddingLeft={"2px"} paddingRight={"1px"} src={fuel.src} className="w-[17px]" /> {t("Gas Costs")}
          </Typography>
          <Typography className="text_">
            {stepProps.estimatedGas} {networkItems.find((item)=>item.chainId==stepProps.from)?.symbol}{" "}
            <Typography
              component={"img"}
              src={what.src}
              width={18}
              sx={{ verticalAlign: "middle" }}
            />
          </Typography>
        </Box>
        <Box className="flex">
          <Typography className="text_">
            <Typography component={"img"} width={19} paddingRight={"1px"} src={dollar.src}/> {t("Fees")}
          </Typography>
          <Typography className="text_">
            0 {t("Fees")}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default FirstStep