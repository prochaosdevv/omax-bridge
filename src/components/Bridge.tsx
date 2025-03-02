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
import React, { useState, useContext, useEffect } from "react";
// import op from "../assets/op.svg";
// import eth from "../assets/eth.svg";
// import bridge from "../assets/bridge.svg";
// import setting from "../assets/setting_icon.svg";
// import clock from "../assets/clock_icon.svg";
// import base_icon from "../assets/base_icon.svg";
// import base_icon_ from "../assets/base_icon_.svg";
// import eth_icon from "../assets/eth_icon.svg";
// import usdc_icon from "../assets/usdc_icon.svg";

// import usdc_logo from "../assets/usdc_logo.svg";
import available from "../assets/available.svg";
// import dollar from "../assets/dollar.svg";
// import SettingsIcon from '@mui/icons-material/Settings';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import watch from "../assets/watch.svg";
import fuel from "../assets/fuel.svg";
import ReviewBridge from "./ReviewBridge";
import ActivityModal from "./ActivityModal";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { networkItems, tokenItems } from "@/config";
import { useAccount, WagmiContext } from "wagmi";
import { getWalletBalance, estimateTransactionGas, estimateTransactionTime } from "@/services/abi";
import { TokenBalance } from "@/types";
import { decimalFromEth, formatTime, getLogoWidth } from "@/utils/functions";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { ThemeContext } from "@/context/ThemeContext";


// const Inter_font = Inter({
//   variable: "--font-Inter-sans",
//   subsets: ["latin"],
//   weight: "400",
// });

const sourceChain = (process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? "332" : "311");
const targetChain = (process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? "97" : "1");

const Bridge = () => {
  const { t,i18n } = useTranslation();
  const {currentLang,setCurrentLang}=useContext(ThemeContext)
  const changeLanguage = (languageCode: string) => {
    localStorage.setItem("lang", languageCode);
    setCurrentLang(languageCode);
    // setAnchorEl_lang(null)
    i18n.changeLanguage(languageCode);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const account = useAccount();
  const config = useContext(WagmiContext);
  const [amount, setAmount] = useState("");
  const handleAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };
  const [activityOpen, setActivityOpen] = useState(false);
  // const [settingOpen, setSettingOpen] = useState(false);

  const [selectedFrom, setSelectedFrom] = useState(sourceChain); // Default to OMAX
  const [selectedTo, setSelectedTo] = useState(targetChain); // Default to Ethereum
  const [walletBalance, setWalletBalance] = useState([] as TokenBalance[]);
  const [estimatedGas, setEstimatedGas] = useState('0');
  const [estimatedTransactionTime, setEstimatedTransactionTime] = useState('0sec');
  const [selectedCoin, setSelectedCoin] = useState("USDC");

  const handleFromChange = (event: SelectChangeEvent<string>) => {
    setSelectedFrom(event.target.value);
    if (selectedTo == sourceChain && event.target.value == sourceChain)
      setSelectedTo(targetChain);
    else if (sourceChain != event.target.value)
      setSelectedTo(sourceChain);
  };

  const handleToChange = (event: SelectChangeEvent<string>) => {
    setSelectedTo(event.target.value);
    if (selectedFrom == sourceChain && event.target.value == sourceChain)
      setSelectedFrom(targetChain);
    else if (event.target.value != sourceChain)
      setSelectedFrom(sourceChain)
  };

  const handleCoin = (event: SelectChangeEvent<string>) => {
    const selectedCoin = event.target.value;
    setSelectedCoin(selectedCoin);
  };

  const handleChange = () => {
    const source = selectedFrom;
    setSelectedFrom(selectedTo);
    setSelectedTo(source);
  };

  useEffect(() => {
    async function fetchBalance(address: string) {
      const walletTokenBalance = await getWalletBalance(Number(selectedFrom), address, config);
      setWalletBalance(walletTokenBalance);
    }
    if (account && account.address) {
      fetchBalance(account.address)
    }
  }, [account, selectedFrom]);

  const getTokenBalance = (symbol: string) => {
    if (walletBalance.length == 0) return "0 " + symbol;
    const tokenInfo = walletBalance.find(token => token.symbol === symbol);
    if (tokenInfo != undefined) return tokenInfo.balance + " " + symbol;
    else return "0 " + symbol;
  }

  const getTitle = () => {
    if (getTokenBalance1(selectedCoin) > Number(amount) && account != undefined && account.address != undefined)
      return t("Review Bridge");
    else return t("Insufficient Balance");
  }

  const onReviewClick = () => {
    setIsModalOpen(true);
  }

  const getTokenBalance1 = (symbol: string) => {
    if (walletBalance.length == 0) return 0;
    const tokenInfo = walletBalance.find(token => token.symbol === symbol);
    if (tokenInfo != undefined) return Number(tokenInfo.balance);
    else return 0;
  }

  const getTokenPrice = (symbol: string) => {
    if (walletBalance.length == 0) return "$ 0";
    const tokenInfo = walletBalance.find(token => token.symbol === symbol);
    if (tokenInfo != undefined) return "$ " + tokenInfo.price;
    else return "$ 0";
  }

  const estimateGas = async () => {
    if (account && account.address) {
      const tokenAddress = tokenItems[Number(selectedFrom)].find((item) => item.symbol === selectedCoin)?.address;
      if (!tokenAddress) {
        throw new Error("Token address is undefined");
      }
      return await estimateTransactionGas(Number(selectedFrom), account.address, tokenAddress, decimalFromEth(Number(amount)), config)
    } else return 0;
  }

  const getLogo = () => {
    const logo = tokenItems[Number(selectedTo)].find((item) => item.symbol === selectedCoin)?.icon;
    console.log("logo: ", logo);
    return logo;
  }

  const estimateTime = async () => {
    const approveTime = await estimateTransactionTime(Number(selectedFrom), config, BigInt(30000000));
    const withdrawTime = await estimateTransactionTime(Number(selectedTo), config, BigInt(30000000));
    const totalTime = (approveTime * BigInt(2) + withdrawTime) * BigInt(2);
    return Number(totalTime.toString());
  }

  useEffect(() => {
    async function fetchGas() {
      const estimatGas = await estimateGas();
      if (selectedFrom == "1") {
        setEstimatedGas(estimatGas.toFixed(5));
      } else {
        setEstimatedGas(estimatGas.toFixed(10));
      }
      const estimatedTime = await estimateTime();
      console.log("estimatedTime: ", estimatedTime);
      setEstimatedTransactionTime(formatTime(estimatedTime));
    }
    fetchGas();
  }, [selectedFrom, selectedCoin, amount]);

  return (
    <Box
      sx={{
        width: { sm: "440px", xs: "100%" },
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
                  transform: "translateY(-1px)"
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
            }}
              onClick={() => handleChange()}
            >
              <ArrowForwardIosIcon sx={{ fontSize: "1rem", color: "var(--light_dark)" }} />
            </Box>
            <Box className="box">
              <Box sx={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <Select
                  value={selectedFrom}
                  onChange={handleFromChange}
                  displayEmpty
                  renderValue={() => {
                    const selectedItem = networkItems.find((item) => item.chainId.toString() === selectedFrom);
                    return selectedItem ? (
                      <Typography component={"img"} src={selectedItem.icon} width={getLogoWidth(selectedItem.chainId)} height={28} />
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
                  MenuProps={{
                    PaperProps: {
                      sx: {
                       background: `var(--common) !important`,
                  color:"var(--foreground) !important",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Optional: Adds shadow
                      },
                    },
                  }}
                >
                  {networkItems.map((item) => (
                    <MenuItem key={item.chainId.toString()} value={item.chainId.toString()}>
                      <Typography component={"img"} src={item.icon} width={item.width ? item.width : 28} height={item.height ? item.height : 28} mr={"0.3rem"} />
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
                <Box>
                  <Typography className="light_dark_text">{t("From")}</Typography>
                  <Typography className="text_">
                    {networkItems.find((item) => item.chainId.toString() === selectedFrom)?.label ?? t("Select Network")}
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
                    {networkItems.find((item) => item.chainId.toString() === selectedTo)?.label ?? t("Select Network")}
                  </Typography>
                </Box>

                <Select
                  value={selectedTo}
                  onChange={handleToChange}
                  displayEmpty
                  renderValue={() => {
                    const selectedItem = networkItems.find((item) => item.chainId.toString() === selectedTo);
                    return selectedItem ? (
                      <Typography component={"img"} src={selectedItem.icon} width={getLogoWidth(selectedItem.chainId)} height={28} />
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
                  MenuProps={{
                    PaperProps: {
                      sx: {
                       background: `var(--common) !important`,
                  color:"var(--foreground) !important",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Optional: Adds shadow
                      },
                    },
                  }}
                >
                  {networkItems.map((item) => (
                    <MenuItem key={item.chainId.toString()} value={item.chainId.toString()}>
                      <Typography component={"img"} src={item.icon} width={item.width ? item.width : 28} height={item.height ? item.height : 28} mr={"0.3rem"} />
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
                value={selectedCoin}
                onChange={handleCoin}
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
                MenuProps={{
                  PaperProps: {
                    sx: {
                     background: `var(--common) !important`,
                color:"var(--foreground) !important",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Optional: Adds shadow
                    },
                  },
                }}
              >
                {tokenItems[Number(selectedFrom)].map((item) => (
                  <MenuItem key={item.symbol} value={item.symbol}>
                    <Typography
                      component={"img"}
                      src={item.icon}
                      width={28}
                      height={28}
                      mr={"0.3rem"}
                    />
                    {item.symbol}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Box>
          <Box className="flex" mt={"0.5rem"}>
            <Typography className="light_dark_text">{getTokenPrice(selectedCoin)}</Typography>
            {account && account.address &&
              <Typography className="light_dark_text">
                {getTokenBalance(selectedCoin)} {t("available")}{" "}
                <Typography
                  component={"img"}
                  src={available.src}
                  sx={{ verticalAlign: "middle" }}
                />
              </Typography>
            }
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
            <Typography className="text_" flex={1}>{t("Get on")} {networkItems.find((item) => item.chainId.toString() === selectedTo)?.label}</Typography>

            {/* <Box
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
            </Box> */}
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
              <Typography
                component={"img"}
                src={getLogo()}
                width={48}
                height={48}
                mr={"0.3rem"}
              />
              {/* <Typography
                component={"img"}
                src={base_icon_.src}
                sx={{
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                }}
              /> */}
            </Box>
            <Box>
              <Typography
                className="text_"
                sx={{
                  fontSize: "18px !important",
                  // lineHeight: "normal",
                }}
              >
                {amount} {selectedCoin}
              </Typography>
              <Typography className="light_dark_text">{getTokenPrice(selectedCoin)}</Typography>
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
                {estimatedGas} {networkItems.find((item) => item.chainId.toString() === selectedFrom)?.symbol}
              </Typography>
            </Box>

            <Typography className="light_dark_text">
              ~ {estimatedTransactionTime} {" "}
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
          // disabled={}
          onClick={() => {
              if (getTokenBalance1(selectedCoin) < Number(amount) || account == undefined || account.address == undefined)
                return
              onReviewClick()
            }
          }
        >
          {getTitle()}
        </Button>
      </Box>
     {currentLang!=="en"&& <Typography py={"1rem"} sx={{
        fontSize:"12px",
        textAlign:"center",
        color:"var(--foreground)",
        opacity:"0.7",
        "&:hover":{
          opacity:"0.9"
        }
      }}>OMAX {t("Bridge")} {t("available in")}: <Link href={"/"}><b style={{textDecoration:"underline"}} onClick={()=>changeLanguage("en")}>English</b></Link></Typography>}
      {
        isModalOpen && (
          <ReviewBridge
            isDialogOpen={isModalOpen}
            setIsDialogOpen={setIsModalOpen}
            stepProps={{
              amount: Number(amount),
              from: Number(selectedFrom),
              to: Number(selectedTo),
              estimatedGas: Number(estimatedGas),
              estimatedTime: estimatedTransactionTime,
              symbol: selectedCoin,
              fee: 0
            }}
          />
        )
      }
      {
        activityOpen && (
          <ActivityModal
            isDialogOpen={activityOpen}
            setIsDialogOpen={setActivityOpen}
            stepProps={{
              amount: Number(amount),
              from: Number(selectedFrom),
              to: Number(selectedTo),
              estimatedGas: Number(estimatedGas),
              estimatedTime: estimatedTransactionTime,
              symbol: selectedCoin,
              fee: 0
            }}
          />
        )
      }
    </Box >
  );
};

export default Bridge;