"use client";
import React from "react";
import base from "../../assets/base_step_2.png";
import { Box, Button, Checkbox, Typography } from "@mui/material";
import { BridgeStepProps, AgreedProps } from "@/types";
import { networkItems } from "@/config";
import { useAccount } from "wagmi";
import { t } from "i18next";

const SecondStep = ({ stepProps, agreedProps }: { stepProps: BridgeStepProps; agreedProps: AgreedProps }) => {
  console.log("stepProps: ", stepProps)
  const account = useAccount();
  
  if (!account) {
    console.error("Wallet is not connected");
    return <></>;
  }
  
  return (
    <Box textAlign={"center"} my={"1rem"}>
      <Typography
        component={"img"}
        src={networkItems.find((item)=>item.chainId==stepProps.to)?.icon}
        sx={{ width: "67px", height: "67px" }}
      />
      <Typography
        sx={{
          py: "0.5rem",
          fontSize: "20px",
          fontWeight: "600",
        }}
      >
        {t("Make sure the wallet you’re")}
        <br /> {t("bridging to supports")} {networkItems.find((item) => item.chainId == stepProps.to)?.label}
      </Typography>
      <Typography
        sx={{
          pb: "0.5rem",
          fontSize: "15px",
          opacity: "0.7",
        }}
      >
        {t("Check")} {networkItems.find((item) => item.chainId == stepProps.to)?.label} {t("support before your bridge")} <br />
        {t("or you may lose your crypto. Do not")}
        <br />
        {t("bridge to an exchange.")}
      </Typography>
      {/* <Button
        className="btn"
        sx={{
          mb: "1rem",
          px: "15px",
          background: "var(--light_dark_bg) !important",
        }}
      >
        {t("Learn More")}
      </Button> */}
      <Box
        sx={{
          background: `var(--box_bg)`,
          borderRadius: "10px",
          p: "0.8rem 1rem",
          my: "0.5rem",
          textAlign: "start",
        }}
      >
        <a href={networkItems.find((item) => item.chainId === stepProps.to)?.scanUrl + "/address/" + account.address} target="_blank" >
          <Typography
            className="text_"
            sx={{
              fontSize: "13px !important",
              wordBreak: "break-all"
            }}
          >
            {account.address}
          </Typography>
        </a>
      </Box>
      <Box
        sx={{
          background: `var(--box_bg)`,
          borderRadius: "10px",
          p: "0.8rem 1rem",
          display: "flex",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <Checkbox
          disableRipple
          sx={{
            color: "var(--text_)",
            p: "0",
            borderRadius: "3px !important",
          }}
          id="terms"
          checked={agreedProps.agreed}
          onChange={() => agreedProps.setAgreed(!agreedProps.agreed)}
        />
        <Typography
          className="text_"
          sx={{
            fontSize: "13px !important",
            fontWeight: "400 !important",
          }}
        >
          {t("My wallet supports")} <b>{networkItems.find((item) => item.chainId == stepProps.to)?.label}</b>
        </Typography>
      </Box>
    </Box>
  );
};

export default SecondStep;
