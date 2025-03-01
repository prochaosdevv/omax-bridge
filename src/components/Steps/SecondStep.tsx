"use client";
import React from "react";
import base from "../../assets/base_step_2.png";
import { Box, Button, Checkbox, Typography } from "@mui/material";
import { BridgeStepProps } from "@/types";
import { networkItems } from "@/config";

const SecondStep = (stepProps: BridgeStepProps) => {
  return (
    <Box textAlign={"center"} my={"1rem"}>
      <Typography
        component={"img"}
        src={base.src}
        sx={{ width: "67px", height: "67px" }}
      />
      <Typography
        sx={{
          py: "0.5rem",
          fontSize: "20px",
          fontWeight: "600",
        }}
      >
        Make sure the wallet you’re
        <br /> bridging to supports {networkItems.find((item)=>item.chainId==stepProps.to)?.label}
      </Typography>
      <Typography
        sx={{
          pb: "0.5rem",
          fontSize: "15px",
          opacity: "0.7",
        }}
      >
        Check {networkItems.find((item)=>item.chainId==stepProps.to)?.label} before your bridge <br />
        or you may lose your crypto. Do not
        <br />
        bridge to an exchange.
      </Typography>
      <Button
        className="btn"
        sx={{
          mb: "1rem",
          px: "15px",
          background: "var(--light_dark_bg) !important",
        }}
      >
        Learn More
      </Button>
      <Box
        sx={{
          background: `var(--box_bg)`,
          borderRadius: "10px",
          p: "0.8rem 1rem",
          my: "0.5rem",
          textAlign: "start",
        }}
      >
        <Typography
          className="text_"
          sx={{
            fontSize: "13px !important",
            wordBreak: "break-all"
          }}
        >
          {networkItems.find((item)=>item.chainId==stepProps.to)?.bridge}
        </Typography>
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
        // checked={agreed}
        // onCheckedChange={(value) => setAgreed(value as boolean)}
        />
        <Typography
          className="text_"
          sx={{
            fontSize: "13px !important",
            fontWeight: "400 !important",
          }}
        >
          My wallet supports <b>{networkItems.find((item)=>item.chainId==stepProps.to)?.label}</b>
        </Typography>
      </Box>
    </Box>
  );
};

export default SecondStep;
