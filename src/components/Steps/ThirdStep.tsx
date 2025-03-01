"use client";
import React, { useContext, useState } from "react";
import { Box, Button, CircularProgress, Tab, Tabs, Typography } from "@mui/material";
import usdc from "../../assets/usdc_step_3.png";
import watch from "../../assets/watch.svg";
import fuel from "../../assets/fuel.svg";
import via from "../../assets/via.svg";
import HelpIcon from "@mui/icons-material/Help";
// import what from "../../assets/what.svg";
// import dollar from "../../assets/gray_dollar.svg";
import add_from from "../../assets/from.svg";
import add_to from "../../assets/to.svg";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { BridgeStepProps } from "@/types";
import { networkItems, tokenItems } from "@/config";
import { useAccount, WagmiContext } from "wagmi";
import { truncateAddress } from "@/utils/functions";
import { writeContract, waitForTransactionReceipt, simulateContract } from "@wagmi/core";
import { erc20ABI, bridgeABI } from "@/services/abi";
import { parseEther, getAddress } from "viem";

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

const ThirdStep = (stepProps: BridgeStepProps) => {
  const account = useAccount();
  const config = useContext(WagmiContext);
  if (!config) {
    console.error("WagmiContext is not available");
    return <></>;
  }
  if (!account) {
    console.error("Wallet is not connected");
    return <></>;
  }
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [text, setText] = useState(false)
  const [loading, setLoading] = useState(false)
  const [check_1, setCheck_1] = useState(false)
  const [check_2, setCheck_2] = useState(false)
  const [check_3, setCheck_3] = useState(false)
  const handleStart = async () => {
    setText(true)
    setLoading(true);
    setCheck_1(true);
    const tokenAddress = tokenItems[stepProps.from].find((item) => item.symbol == stepProps.symbol)?.address;
    if (!tokenAddress) return;
    const formattedTokentAddress = getAddress(tokenAddress);

    const bridgeAddress = networkItems.find((item) => item.chainId == stepProps.from)?.bridge;
    if (!bridgeAddress) return;
    const formattedBridgeAddress = getAddress(bridgeAddress);

    const amountWei = parseEther(stepProps.amount.toString());

    const approveTx = await writeContract(config, {
      abi: erc20ABI,
      address: formattedTokentAddress,
      functionName: "approve",
      args: [formattedBridgeAddress, amountWei],
      chainId: stepProps.from
    });

    const reciptApprove = await waitForTransactionReceipt(config, { hash: approveTx });

    const { request } = await simulateContract(config, {
      abi: bridgeABI,
      address: formattedBridgeAddress,
      functionName: "depositToken",
      args: [
        formattedTokentAddress,
        amountWei.toString(),
        account.address,
        stepProps.from.toString()
      ],
      chainId: stepProps.from
    });
    const tx = await writeContract(config, request);
    setLoading(false)
    setCheck_2(true);
    setCheck_3(true)
  };

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
        Bridge {stepProps.amount} {stepProps.symbol}
      </Typography>
      {/* <Typography
        sx={{
          pb: "0.5rem",
          fontSize: "13px",
          opacity: "0.7",
        }}
      >
        Via Native Bridge
      </Typography> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "1rem",
          "& .MuiButtonBase-root": {
            color: "var(--foreground) !important",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            border: "none",
            gap: "5px",
            // fontFamily: `${Press_Start_2P_font.style.fontFamily}`,
            p: "10px 15px",
            fontSize: "13px !important",
            fontWeight: "600 !important",
            textTransform: "capitalize",
            minHeight: "auto",
          },
          "& .MuiTabs-indicator": {
            display: "none"
          },
          "& .MuiTabs-flexContainer": {
            overflow: "auto",
            justifyContent: "center",
            background: "#8A898E",
            borderRadius: "20px",


          },
          "& .MuiTab-root.Mui-selected": {
            background: "var(--light_dark)",
            borderRadius: "20px",
            border: "none"
          },
          "& .MuiTouchRipple-root": {
            display: "none",
          },
        }}
      >
        <Tabs value={tabIndex} onChange={handleChange} sx={{ lineHeight: "0" }}>
          <Tab label="Steps" />
          <Tab label="Bridge Info" />
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
              <Typography component={"img"} src={networkItems.find((item) => item.chainId == stepProps.from)?.icon} width={32} height={32} />
              <Box>
                <Typography className="text_">Start on {networkItems.find((item) => item.chainId == stepProps.from)?.label}</Typography>
                <Typography
                  className="light_dark_text"
                  sx={{
                    fontSize: "13px !important",
                  }}
                >
                  <Typography component={"img"} src={fuel.src} /> {stepProps.estimatedGas} {networkItems.find((item) => item.chainId == stepProps.from)?.symbol}
                </Typography>
              </Box>
            </Box>
            {loading ?

              <CircularProgress
                sx={{
                  width: "20px !important",
                  height: "20px !important",
                  color: "var(--foreground)",
                  // ml: "10px",
                }}
              />
              :

              check_1 ? <CheckBoxIcon sx={{ fontSize: "1.8rem" }} />

                :
                <Button
                  className="common_btn"
                  sx={{
                    width: "auto !important",
                    height: "30px !important",
                  }}
                  onClick={handleStart}
                >
                  {text ? "Bridging.." : "Start"}
                </Button>
            }
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
              Wait {stepProps.estimatedTime}
            </Typography>
            {check_2 && <CheckBoxIcon sx={{ fontSize: "1.8rem" }} />}
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
                src={networkItems.find((item) => item.chainId == stepProps.to)?.icon}
                width={32}
                height={32}
                sx={{ verticalAlign: "middle" }}
              />{" "}
              Get {stepProps.amount} {stepProps.symbol} on {networkItems.find((item) => item.chainId == stepProps.to)?.label}
            </Typography>
            {check_3 && <CheckBoxIcon sx={{ fontSize: "1.8rem" }} />}
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
                src={networkItems.find((item) => item.chainId == stepProps.from)?.icon}
                width={32}
                height={32}
                sx={{ width: "18px", height: "18px" }}
              />{" "}
              From {networkItems.find((item) => item.chainId == stepProps.from)?.label}
            </Typography>
            <Typography className="text_">
              {stepProps.amount} {stepProps.symbol}{" "}
              <Typography
                component={"img"}
                src={tokenItems[stepProps.from].find((item) => item.symbol == stepProps.symbol)?.icon}
                width={28}
                height={28}
                sx={{ verticalAlign: "middle" }}
              />
            </Typography>
          </Box>
          <Box className="flex" mb={"1rem"}>
            <Typography className="text_">
              <Typography
                component={"img"}
                src={networkItems.find((item) => item.chainId == stepProps.to)?.icon}
                width={32}
                height={32}
                sx={{ width: "18px", height: "18px", borderRadius: "5px" }}
              />{" "}
              To {networkItems.find((item) => item.chainId == stepProps.to)?.label}
            </Typography>
            <Typography className="text_">
              {stepProps.amount} {stepProps.symbol}{" "}
              <Typography
                component={"img"}
                src={tokenItems[stepProps.to].find((item) => item.symbol == stepProps.symbol)?.icon}
                width={28}
                height={28}
                sx={{ verticalAlign: "middle" }}
              />
            </Typography>
          </Box>
          {/* <Box className="flex" mb={"1rem"}>
            <Typography className="text_">
              <Typography component={"img"} src={via.src} /> Via
            </Typography>
            <Typography className="text_">
              Native Bridge{" "}
              <Typography
                component={"img"}
                src={base_icon.src}
                sx={{ verticalAlign: "middle" }}
              />
            </Typography>
          </Box> */}
          <Box className="flex" mb={"1rem"}>
            <Typography className="text_">
              <Typography component={"img"} src={add_from.src} /> From Address
            </Typography>
            <Typography className="text_">{truncateAddress(account.address)}</Typography>
          </Box>
          <Box className="flex" mb={"1rem"}>
            <Typography className="text_">
              <Typography component={"img"} src={add_to.src} /> To Address
            </Typography>
            <Typography className="text_">{truncateAddress(account.address)}</Typography>
          </Box>
          <Box className="flex">
            <Typography className="text_">
              <Typography component={"img"} src={watch.src} /> Transfer Time
            </Typography>
            <Typography className="text_">~{stepProps.estimatedTime}</Typography>
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
        Need help? View FAQs <HelpIcon sx={{ fontSize: "1rem", ml: "5px" }} />
      </Button>
    </Box>
  );
};

export default ThirdStep;
