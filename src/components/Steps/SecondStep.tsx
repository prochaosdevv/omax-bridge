"use client";
import React from "react";
import base from "../../assets/base_step_2.png";
import { Box, Button, Checkbox, Typography } from "@mui/material";
import { t } from "i18next";

const SecondStep = () => {
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
       {t("Make sure the wallet you’re")}
        <br /> {t("bridging to supports")} Base Sepolina
      </Typography>
      <Typography
        sx={{
          pb: "0.5rem",
          fontSize: "15px",
          opacity: "0.7",
        }}
      >
        {t("Check before your bridge")}<br />
       {t("or you may lose your crypto. Do not")}
        <br />
        {t("bridge to an exchange.")}
      </Typography>
      <Button
        className="btn"
        sx={{
          mb: "1rem",
          px: "15px",
          background: "var(--light_dark_bg) !important",
        }}
      >
        {t("Learn More")}
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
            wordBreak:"break-all"
          }}
        >
          0xA1B2C3D4E5F67890123456789ABCDEF123456789
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
          {t("My wallet supports")} <b>Base Sepolia</b>
        </Typography>
      </Box>
    </Box>
  );
};

export default SecondStep;
