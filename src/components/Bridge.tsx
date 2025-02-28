"use client";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
// import { Inter, Jost } from "next/font/google";
import React, { useState } from "react";
import op from "../assets/op.svg";
import eth from "../assets/eth.svg";
import bridge from "../assets/bridge.svg";
import setting from "../assets/setting_icon.svg";
import clock from "../assets/clock_icon.svg";
import base_icon from "../assets/base_icon.svg";
import base_icon_ from "../assets/base_icon_.svg";
import eth_icon from "../assets/eth_icon.svg";
import usdc_icon from "../assets/usdc_icon.svg";

import usdt_omax from "../assets/usdt_omax-01.svg";
import usdc_eth from "../assets/usdc_eth-01.svg";
import usdt_eth from "../assets/usdt_eth-01.svg";
import usdc_omax from "../assets/usdc_omax-01.svg";
import usdt_bnb from "../assets/usdt_bnb-01.svg";
import usdc_bnb from "../assets/usdc_bnb-01.svg";
import logo_mobile from "../assets/omax_small_logo.svg";


import bsc_logo from "../assets/BSC.svg";
import Ethereum from "../assets/Ethereum.svg";

import usdc_logo from "../assets/usdc_logo.svg";
import available from "../assets/available.svg";
import dollar from "../assets/dollar.svg";
import SettingsIcon from '@mui/icons-material/Settings';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import watch from "../assets/watch.svg";
import fuel from "../assets/fuel.svg";
import ReviewBridge from "./ReviewBridge";
import ActivityModal from "./ActivityModal";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTranslation } from "react-i18next";

// const Inter_font = Inter({
//   variable: "--font-Inter-sans",
//   subsets: ["latin"],
//   weight: "400",
// });

const menuItems = [
  // { value: "0", label: "USDC", icon: usdc_icon.src },
  { value: "0", label: "USDC", icon: usdc_omax.src },
  { value: "1", label: "USDT", icon: usdt_omax.src },
  { value: "2", label: "USDC", icon: usdc_eth.src },
  { value: "3", label: "USDT", icon: usdt_eth.src },
  { value: "4", label: "USDC", icon: usdc_bnb.src },
  { value: "5", label: "USDT", icon: usdt_bnb.src },
];

const networkToItems = [
  { value: "0", label: "Ethereum", icon: Ethereum.src },
  { value: "1", label: "BSC", icon: bsc_logo.src },
  { value: "2", label: "OMAX", icon: logo_mobile.src,width:"32px",height:"28px" }
];

const Bridge = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const handleAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };
  const [activityOpen, setActivityOpen] = useState(false);
  const [settingOpen, setSettingOpen] = useState(false);

  const [selectedFrom, setSelectedFrom] = useState("2"); // Default to OMAX
  const [selectedTo, setSelectedTo] = useState("0"); // Default to Ethereum

  const handleFromChange = (event: SelectChangeEvent<string>) => {
    setSelectedFrom(event.target.value);
  };

  const handleToChange = (event: SelectChangeEvent<string>) => {
    setSelectedTo(event.target.value);
  };

  const [selectedChain, setSelectedChain] = useState("0");
  const handleNetwork = (event: SelectChangeEvent<string>) => {
    const selectedNetwork = event.target.value;
    setSelectedChain(selectedNetwork);
  };

  return (
    <Box
      sx={{
        width: { sm: "440px", xs: "100%" },
        height: "100vh",
        m: { sm: "5rem auto", xs: "1rem auto 2rem" },
        "& p": {
          // fontFamily: Inter_font.style.fontFamily,
        },
      }}
    >
      <Box
        sx={{
          mb: "0.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "5px",
          width: "100%",
        }}
      >
        <Button
          className="btn"
          sx={{
            // fontFamily: Inter_font.style.fontFamily,
            px: "15px",
            height: "30px !important"
          }}
        >
          {t("Bridge")}
        </Button>
        <Box>
          {/* <Button
            sx={{
              minWidth: "30px", height: "30px", p: "5px", background: `var(--common)`, borderRadius: "5px", "&:hover": {
                background: `var(--box_bg)`,
                transition: "0.3s all",
                "& svg": {
                  transform: "translateY(-2px)"
                }
              }
            }}
            disableRipple
            onClick={() => setSettingOpen(true)}

          >
            <SettingsIcon sx={{ fontSize: "1.2rem", color: "var(--foreground)" }} />
          </Button> */}
          <Button
            sx={{
              minWidth: "30px", height: "30px", px: "5px", background: `var(--common)`, borderRadius: "5px", ml: "8px", "&:hover": {
                background: `var(--box_bg)`,
                transition: "0.3s all",
                "& svg": {
                  transform: "translateY(-2px)"
                }
              }
            }}
            disableRipple
            onClick={() => setActivityOpen(true)}
          >
            <WatchLaterIcon sx={{ fontSize: "1.2rem", color: "var(--foreground)" }} />
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          background: `var(--common)`,
          borderRadius: "20px",
          p: "1rem",
          "& .box": {
            background: `var(--box_bg)`,
            borderRadius: "20px",
            p: "1rem",
            mb: "0.5rem",
            // fontFamily: Inter_font.style.fontFamily,
          },
          "& .bin1": {
            "& input,textarea": {
              // fontFamily: Inter_font.style.fontFamily,
            },
          },
        }}
      >
        <Grid container spacing={1} position={"relative"}>
          <Grid item md={6} xs={6}>
            {/* <Typography
              component={"img"}
              src={bridge.src}
              sx={{
                position: "absolute",
                top: "50%",
                left: "51%",
                transform: "translate(-50%, -50%)",
              }}
            /> */}
            <Box sx={{
              width: "23px",
              height: "25px",
              borderRadius: "5px",
              background: `var(--box_bg)`,
              border: "1px solid var(--light_dark)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: "50%",
              left: "51%",
              transform: "translate(-50%, -50%)",
            }}>
              <ArrowForwardIosIcon sx={{ fontSize: "1rem", color: "var(--light_dark)" }} />
            </Box>
            <Box className="box">
              <Box sx={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <Select
                  value={selectedFrom}
                  onChange={handleFromChange}
                  displayEmpty
                  renderValue={() => {
                    const selectedItem = networkToItems.find((item) => item.value === selectedFrom);
                    return selectedItem ? (
                      <Typography component={"img"} src={selectedItem.icon} width={28} height={28} />
                    ) : (
                      <Typography component={"img"} src="/default-icon.png" width={28} height={28} />
                    );
                  }}
                  sx={{
                    minWidth: "unset",
                    width: "auto",
                    padding: 0,
                    "& .MuiSelect-select": {
                      display: "flex",
                      alignItems: "center",
                      padding: "0 !important",
                      minHeight: "unset",
                    },
                    "& fieldset": { border: "none" },
                    "& svg": { display: "none" },
                  }}
                >
                  {networkToItems.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      <Typography component={"img"} src={item.icon} width={28} height={28} mr={"0.3rem"} />
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
                <Box>
                  <Typography className="light_dark_text">{t("From")}</Typography>
                  <Typography className="text_">
                    {networkToItems.find((item) => item.value === selectedFrom)?.label ?? "Select Network"}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} xs={6}>
            <Box className="box">
              <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "7px" }}>
                <Box>
                  <Typography className="light_dark_text">{t("To")}</Typography>
                  <Typography className="text_">
                    {networkToItems.find((item) => item.value === selectedTo)?.label ?? "Select Network"}
                  </Typography>
                </Box>

                <Select
                  value={selectedTo}
                  onChange={handleToChange}
                  displayEmpty
                  renderValue={() => {
                    const selectedItem = networkToItems.find((item) => item.value === selectedTo);
                    return selectedItem ? (
                      <Typography component={"img"} src={selectedItem.icon}  width={selectedItem.value==="2"?32:28} height={selectedItem.value==="2"?28:28} />
                    ) : (
                      <Typography component={"img"} src="/default-icon.png" width={28} height={28} />
                    );
                  }}
                  sx={{
                    minWidth: "unset",
                    width: "auto",
                    padding: 0,
                    "& .MuiSelect-select": {
                      display: "flex",
                      alignItems: "center",
                      padding: "0 !important",
                      minHeight: "unset",
                    },
                    "& fieldset": { border: "none" },
                    "& svg": { display: "none" },
                  }}
                >
                  {networkToItems.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      <Typography component={"img"} src={item.icon} width={28} height={28} mr={"0.3rem"} />
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            background: `var(--box_bg)`,
            borderRadius: "20px",
            p: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <TextField
              className="bin1"
              fullWidth
              type="text"
              placeholder="0.0"
              variant="standard"
              value={amount}
              onChange={handleAmount}
              InputProps={{
                disableUnderline: true,
              }}
            />
            <Box flex={1}>
              <Select
                value={selectedChain}
                onChange={handleNetwork}
                displayEmpty
                aria-label="Network Selector"
                sx={{
                  borderRadius: "20px",
                  // fontFamily: Inter_font.style.fontFamily,
                  fontWeight: "600",
                  background: "var(--light_dark)",
                  color: "var(--foreground)",
                  // width: "120px",
                  "& .MuiOutlinedInput-input": {
                    p: "7px 14px",
                    display: "flex",
                    alignItems: "center",
                  },
                  "& fieldset": {
                    border: "none !important",
                    "&:hover": {
                      border: "none",
                    },
                  },
                  "& svg": {
                    color: "#fff",
                  },
                }}
              >
                {menuItems.map((item) => (
                  <MenuItem key={item.value} value={item.value}>
                    <Typography
                      component={"img"}
                      src={item.icon}
                      width={28}
                      height={28}
                      mr={"0.3rem"}
                    />
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Box>
          <Box className="flex" mt={"0.5rem"}>
            <Typography className="light_dark_text">$2.766</Typography>
            <Typography className="light_dark_text">
              0.2123 USDC {t("available")}{" "}
              <Typography
                component={"img"}
                src={available.src}
                sx={{ verticalAlign: "middle" }}
              />
            </Typography>
          </Box>
        </Box>
        {amount && <Box
          sx={{
            mt: "0.5rem",
            borderRadius: "20px",
            border: "1px solid var(--light_dark)",
            p: "1rem",
          }}
        >
          <Box className="flex">
            <Typography className="text_" flex={1}>{t("Get on")} Base Sepolia</Typography>

            <Box
              className="flex"
              sx={{
                background: `var(--light_dark_bg)`,
                borderRadius: "20px",
                p: "0.5rem 1rem",
              }}
            >
              <Typography component={"img"} src={base_icon_.src} />
              <Typography
                className="text_"
                sx={{
                  fontSize: { sm: "16px !important" },
                }}
              >
                {t("Native Bridge")}
              </Typography>
            </Box>
          </Box>
          <Box
            my={"0.5rem"}
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <Box position={"relative"} lineHeight={0}>
              <Typography component={"img"} src={usdc_logo.src} />
              <Typography
                component={"img"}
                src={base_icon_.src}
                sx={{
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                }}
              />
            </Box>
            <Box>
              <Typography
                className="text_"
                sx={{
                  fontSize: "18px !important",
                  // lineHeight: "normal",
                }}
              >
                0.001 USDC
              </Typography>
              <Typography className="light_dark_text">$2.766</Typography>
            </Box>
          </Box>
          <Box className="flex" mt={"1.5rem"} flexWrap={"wrap"}>
            <Box
              className="flex"
              sx={{
                gap: { sm: "1.5rem !important" },
              }}
            >
              <Box
                sx={{
                  background: "var(--foreground)",
                  color: "var(--black)",
                  borderRadius: "12px",
                  p: "3px 8px",
                  fontSize: "14px",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px"
                }}
              >
                {/* <Typography
                  component={"img"}
                  src={dollar.src}
                  sx={{ verticalAlign: "middle" }}
                />{" "} */}
                <MonetizationOnIcon sx={{ fontSize: "1.2rem" }} />
                0 {t("Fees")}
              </Box>
              <Typography className="light_dark_text" lineHeight={"normal"}>
                <Typography
                  component={"img"}
                  src={fuel.src}
                  sx={{ verticalAlign: "middle", mb: "3px" }}
                />{" "}
                0.0003562 ETH
              </Typography>
            </Box>

            <Typography className="light_dark_text">
              - 3{("mins")}{" "}
              <Typography
                component={"img"}
                src={watch.src}
                sx={{ verticalAlign: "middle", mb: "2px" }}
              />
            </Typography>
          </Box>
        </Box>}
        <Button
          className="common_btn"
          sx={{
            mt: "1.5rem",
            // fontFamily: Inter_font.style.fontFamily,
          }}
          onClick={() => setIsModalOpen(true)}
        >
         {t("Review Bridge")}
        </Button>
      </Box>
      {
        isModalOpen && (
          <ReviewBridge
            isDialogOpen={isModalOpen}
            setIsDialogOpen={setIsModalOpen}
          />
        )
      }
      {
        activityOpen && (
          <ActivityModal
            isDialogOpen={activityOpen}
            setIsDialogOpen={setActivityOpen}
          />
        )
      }
    </Box >
  );
};

export default Bridge;