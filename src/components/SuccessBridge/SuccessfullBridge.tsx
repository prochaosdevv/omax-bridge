"use client";
import React, { useState } from "react";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import usdc from "../../assets/usdc_step_3.png";
import usdc_icon from "../../assets/usdc_icon.svg";
import watch from "../../assets/watch.svg";
import fuel from "../../assets/fuel.svg";
import eth from "../../assets/eth.svg";
import via from "../../assets/via.svg";
import base_icon from "../../assets/base_icon_.svg";
import base_ from "../../assets/base_step_2.png";
import HelpIcon from "@mui/icons-material/Help";
import what from "../../assets/what.svg";
import dollar from "../../assets/gray_dollar.svg";
import add_from from "../../assets/from.svg";
import add_to from "../../assets/to.svg";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { t } from "i18next";
import { useTranslation } from "react-i18next";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div hidden={value !== index}>
      {value === index && <Box p={"0.5rem 0"}>{children}</Box>}
    </div>
  );
};

const SuccessfullBridge = () => {
  const {t}=useTranslation()
  const [tabIndex, setTabIndex] = useState<number>(0);

  const handleChange = (_event: React.SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex);
  };
  return (
    <Box
      textAlign={"center"}
      mt={"1rem"}
      sx={{
        "& .box": {
          background: `var(--box_bg)`,
          borderRadius: "10px",
          p: "0.5rem 1rem",
          textAlign: "start",
        },
      }}
    >
      <Typography
        component={"img"}
        src={usdc.src}
        sx={{ width: "67px", height: "67px" }}
      />
      <Typography
        sx={{
          pt: "0.5rem",
          fontSize: "20px",
          fontWeight: "600",
        }}
      >
        {t("Bridge")} 0.001 USDC
      </Typography>
      <Typography
        sx={{
          pb: "0.5rem",
          fontSize: "13px",
          opacity: "0.7",
        }}
      >
        {t("Via Native Bridge")}
      </Typography>
      <Box
        sx={{
            display:"flex",
            justifyContent:"center",
           mt:"1rem",
          "& .MuiButtonBase-root": {
            color: "var(--foreground) !important",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            border:"none",
            gap: "5px",
            // fontFamily: `${Press_Start_2P_font.style.fontFamily}`,
            p: "10px 15px",
            fontSize: "13px !important",
            fontWeight: "600 !important",
            textTransform: "capitalize",
            minHeight: "auto",
          },
          "& .MuiTabs-indicator": {
           display:"none"
          },
          "& .MuiTabs-flexContainer": {
            overflow: "auto",
            justifyContent:"center",
            background:"#8A898E",
            borderRadius:"20px",


          },
          "& .MuiTab-root.Mui-selected": {
            background: "var(--light_dark)",
            borderRadius:"20px",
            border:"none"
          },
          "& .MuiTouchRipple-root": {
            display: "none",
          },
        }}
      >
        <Tabs value={tabIndex} onChange={handleChange} sx={{lineHeight:"0"}}>
          <Tab label={t("Steps")} />
          <Tab label={t("Bridge Info")} />
        </Tabs>
      </Box>
      <TabPanel value={tabIndex} index={0}>
        {/* steps  */}
        <Box>
          <Box
            className="box"
            sx={{
              mt: "0.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <Typography component={"img"} src={eth.src} />
              <Box>
                <Typography className="text_">{t("Start on")} Sepolia</Typography>
                <Typography
                  className="light_dark_text"
                  sx={{
                    fontSize: "13px !important",
                  }}
                >
                  <Typography component={"img"} src={fuel.src} /> 0.0003562 ETH
                </Typography>
              </Box>
            </Box>
           <CheckBoxIcon sx={{fontSize:"1.8rem"}}/>
          </Box>
          <Box
            className="box flex"
            sx={{
              my: "0.5rem",
              py: "1rem !important",
            }}
          >
            <Typography
              className="text_"
              sx={{
                fontSize: "13px !important",
              }}
            >
              <Typography
                component={"img"}
                src={watch.src}
                sx={{ verticalAlign: "middle" }}
              />{" "}
            
             {t("Wait")} 6 {t("mins")}
            </Typography>
            <CheckBoxIcon sx={{fontSize:"1.8rem"}}/>
          </Box>
          <Box
            className="box flex"
            sx={{
              py: "1rem !important",
            }}
          >
            <Typography
              className="text_"
              sx={{
                fontSize: "13px !important",
              }}
            >
              <Typography
                component={"img"}
                src={base_icon.src}
                sx={{ verticalAlign: "middle" }}
              />{" "}
              {t("Get")} 0.001 USDC {t("on")} Base Sepolia
            </Typography>
            <CheckBoxIcon sx={{fontSize:"1.8rem"}}/>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        {/* bridge info  */}
        <Box
          sx={{
            mt: "0.5rem",
            borderRadius: "20px",
            border: "1px solid var(--light_dark)",
            p: "1rem",
            "& img": {
              verticalAlign: "middle",
            },
          }}
        >
          <Box className="flex" mb={"1rem"}>
            <Typography className="text_">
              <Typography
                component={"img"}
                src={eth.src}
                sx={{ width: "18px", height: "18px" }}
              />{" "}
              {t("From")} Sepolia
            </Typography>
            <Typography className="text_">
              0.001 USDC{" "}
              <Typography
                component={"img"}
                src={usdc_icon.src}
                sx={{ verticalAlign: "middle" }}
              />
            </Typography>
          </Box>
          <Box className="flex" mb={"1rem"}>
            <Typography className="text_">
              <Typography
                component={"img"}
                src={base_.src}
                sx={{ width: "18px", height: "18px", borderRadius: "5px" }}
              />{" "}
             {t("To")} Base Sepolia
            </Typography>
            <Typography className="text_">
              0.001 USDC{" "}
              <Typography
                component={"img"}
                src={usdc_icon.src}
                sx={{ verticalAlign: "middle" }}
              />
            </Typography>
          </Box>
          <Box className="flex" mb={"1rem"}>
            <Typography className="text_">
              <Typography component={"img"} src={via.src} /> {t("Via")}
            </Typography>
            <Typography className="text_">
              {t("Native Bridge")}{" "}
              <Typography
                component={"img"}
                src={base_icon.src}
                sx={{ verticalAlign: "middle" }}
              />
            </Typography>
          </Box>
          <Box className="flex" mb={"1rem"}>
            <Typography className="text_">
              <Typography component={"img"} src={add_from.src} /> {t("From")} {t("Address")}
            </Typography>
            <Typography className="text_">0xabc....4f9E</Typography>
          </Box>
          <Box className="flex" mb={"1rem"}>
            <Typography className="text_">
              <Typography component={"img"} src={add_to.src} /> {t("To")} {t("Address")}
            </Typography>
            <Typography className="text_">0xabc....4f9E</Typography>
          </Box>
          <Box className="flex">
            <Typography className="text_">
              <Typography component={"img"} src={watch.src} /> {t("Transfer Time")}
            </Typography>
            <Typography className="text_">-6{t("mins")}</Typography>
          </Box>
        </Box>
      </TabPanel>
      <Button
        className="btn"
        sx={{
          mt: "2rem",
          px: "20px",
          fontSize: "12px !important",
          background: "var(--light_dark_bg) !important",
          //   lineHeight:"0"
        }}
      >
       {t("Need help? View FAQs")} <HelpIcon sx={{ fontSize: "1rem", ml: "5px" }} />
      </Button>
    </Box>
  );
};

export default SuccessfullBridge;
