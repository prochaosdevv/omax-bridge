"use client";
import {
  Box,
  // Button,
  // FormControlLabel,
  IconButton,
  Menu,
  MenuItem,
  // Select,
  // SelectChangeEvent,
  // styled,
  // Switch,
  Typography,
} from "@mui/material";
// import { Inter } from "next/font/google";
import React, { useContext, useEffect, useState } from "react";
// import logo from "../assets/logo.png";
import logo_mobile from "../assets/new_logo.png";
// import ham_menu from "../assets/ham_menu.svg";
import ConnectModal from "./ConnectModal";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
// import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// import LanguageIcon from '@mui/icons-material/Language';

import { ContractContext } from "@/Context/ContractContext";

import Link from "next/link";
import { Link as MuiLink } from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";

// Font configurations

// const Inter_font = Inter({
//   variable: "--font-Inter-sans",
//   subsets: ["latin"],
//   weight: "400",
// });

// const MaterialUISwitch = styled(Switch)(({ theme }) => ({
//   width: 62,
//   height: 34,
//   padding: 7,
//   "& .MuiSwitch-switchBase": {
//     margin: 1,
//     padding: 0,
//     transform: "translateX(6px)",
//     "&.Mui-checked": {
//       color: "#fff",
//       transform: "translateX(22px)",
//       "& .MuiSwitch-thumb:before": {
//         backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
//           "#fff"
//         )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
//       },
//       "& + .MuiSwitch-track": {
//         opacity: 1,
//         backgroundColor: "#aab4be",
//         ...theme.applyStyles("dark", {
//           backgroundColor: "#8796A5",
//         }),
//       },
//     },
//   },
//   "& .MuiSwitch-thumb": {
//     backgroundColor: "#001e3c",
//     width: 32,
//     height: 32,
//     "&::before": {
//       content: "''",
//       position: "absolute",
//       width: "100%",
//       height: "100%",
//       left: 0,
//       top: 0,
//       backgroundRepeat: "no-repeat",
//       backgroundPosition: "center",
//       backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
//         "#fff"
//       )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
//     },
//     ...theme.applyStyles("dark", {
//       backgroundColor: "#003892",
//     }),
//   },
//   "& .MuiSwitch-track": {
//     opacity: 1,
//     backgroundColor: "#aab4be",
//     borderRadius: 20 / 2,
//     ...theme.applyStyles("dark", {
//       backgroundColor: "#8796A5",
//     }),
//   },
// }));

const Header = () => {
  const { theme, setTheme } = useContext(ContractContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, [setTheme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <Box
        sx={{
          // position: "fixed",
          zIndex: "3",
          top: "0",
          left: "0",
          py: "1.2rem",
          px: { lg: "5rem", sm: "2rem", xs: "1rem" },
          width: "100%",
        }}
      >
        <>
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              justifyContent: { sm: "space-between", xs: "space-between" },
              // flexWrap: "wrap",
              "& button": {
                // fontFamily: Inter_font.style.fontFamily,
                textTransform: "capitalize",
                fontSize: "15px !important",
                height: "40px !important",
                px: "1rem !important",
                fontWeight: "bold",
                color: `var(--connect_color) !important`,
                transition: "0.5s all",
                background: "var(--connect_bg) !important",
                boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.5) !important",
                // backdropFilter: "blur(20px) !important",
                borderRadius: "12px !important",
                "&:hover": {
                  transform: "none !important"
                }
              },
              "& .ju367vcl": {
                border: "0 !important",
                color: "var(--connect_color) !important",
              },
              "& .ju367va3": {
                background: "var(--connect_bg) !important"
              },
            }}
          >
            {/* Left Section */}

            <Box
              sx={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
              }}
            >
              {/* <Typography
                component={"img"}
                src={logo.src}
                sx={{
                  display: { md: "block", xs: "none" },
                  width: "146px",
                }}
              /> */}
              <Typography
                component={"img"}
                src={logo_mobile.src}
                className="omx-logo"
                sx={{
                  width: "48px",
                  height: "40px"
                }}
              />
              <Typography
                sx={{
                  fontSize: "30px",
                  fontFamily: "Inter, monospace",
                  fontWeight: 600,
                  color: "var(--foreground)",
                  display: { md: "block", xs: "none" },
                }
                }>
                OMAX
              </Typography>
            </Box>

            {/* Right Section */}
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box className="btn_wrap_connect">
                {/* {
                  <Button onClick={() => setIsModalOpen(true)}>
                    Connect Wallet
                  </Button>
                } */}
                <ConnectButton chainStatus={"none"} />
              </Box>

              {/* <Typography component={"img"} src={ham_menu.src} /> */}
              <Box className="menu_btn_wrapper">
                {/* More Button */}
                <IconButton onClick={handleClick}>
                  <MoreHorizIcon />
                </IconButton>

                {/* Dropdown Menu */}
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={() => setAnchorEl(null)}
                  PaperProps={{
                    sx: {
                      minWidth: "196px",
                      maxHeight: "350px",
                      overflow: "auto",
                      // backgroundColor: "rgb(255, 255, 255)",
                      background: "var(--connect_bg) !important",
                      boxShadow:
                        "rgba(0, 0, 0, 0.01) 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 4px 8px, rgba(0, 0, 0, 0.04) 0px 16px 24px, rgba(0, 0, 0, 0.01) 0px 24px 32px",
                      border: "none",
                      borderRadius: "12px",
                      padding: "0.5rem 0px",
                      display: "flex",
                      flexDirection: "column",
                      fontSize: "16px",
                      zIndex: 100,
                    },
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center", // Button ke center me align karega
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <MenuItem onClick={() => setAnchorEl(null)} sx={{ display: "flex", paddingTop: "6px", paddingBottom: "6px", minHeight: "auto", justifyContent: "space-between" }}>
                    <MuiLink sx={{
                      color: "var(--foreground)",
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: 400,
                      "&:hover": {
                        color: "#007bff",
                      },
                    }} component={Link} href="https://omax.app">About</MuiLink>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="var(--svgFill)" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.6"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                  </MenuItem>
                  <MenuItem onClick={() => {
                    toggleTheme(); // Theme toggle karega
                    setAnchorEl(null); // Dropdown band karega
                  }} sx={{ display: "flex", paddingTop: "6px", paddingBottom: "6px", minHeight: "auto", justifyContent: "space-between" }}>
                    <Typography sx={{ fontWeight: "400", fontSize: "14px", color: "var(--foreground)" }}>Theme</Typography>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="var(--foreground)" stroke="var(--foreground)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.6"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                  </MenuItem>
                  <MenuItem onClick={() => setAnchorEl(null)} sx={{ display: "flex", paddingTop: "6px", paddingBottom: "6px", minHeight: "auto", justifyContent: "space-between" }}>
                    <MuiLink sx={{
                      color: "var(--foreground)",
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: 400,
                      "&:hover": {
                        color: "#007bff",
                      },
                    }} component={Link} href="https://omax.app">Language</MuiLink>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="var(--svgFill)" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.6"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  </MenuItem>
                  <MenuItem onClick={() => setAnchorEl(null)} sx={{ display: "flex", paddingTop: "6px", paddingBottom: "6px", minHeight: "auto", justifyContent: "space-between" }}>
                    <MuiLink sx={{
                      color: "var(--foreground)",
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: 400,
                      "&:hover": {
                        color: "#007bff",
                      },
                    }} component={Link} href="https://t.me/OmaxToken">Support</MuiLink>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="var(--svgFill)" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.6"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                  </MenuItem>
                  <MenuItem onClick={() => setAnchorEl(null)} sx={{ display: "flex", paddingTop: "6px", paddingBottom: "6px", minHeight: "auto", justifyContent: "space-between" }}>
                    <MuiLink sx={{
                      color: "var(--foreground)",
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: 400,
                      "&:hover": {
                        color: "#007bff",
                      },
                    }} component={Link} href="https://docs.omax.app/omaxbridge/omax-bridge/help">Help</MuiLink>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="var(--svgFill)" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.6"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                  </MenuItem>
                  <MenuItem onClick={() => setAnchorEl(null)} sx={{ display: "flex", paddingTop: "6px", paddingBottom: "6px", minHeight: "auto", justifyContent: "space-between" }}>
                    <MuiLink sx={{
                      color: "var(--foreground)",
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: 400,
                      "&:hover": {
                        color: "#007bff",
                      },
                    }} component={Link} href="https://docs.omax.app/omaxbridge/omax-bridge/terms-of-service">Terms of Service</MuiLink>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="var(--svgFill)" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  </MenuItem>
                  <MenuItem onClick={() => setAnchorEl(null)} sx={{ display: "flex", paddingTop: "6px", paddingBottom: "6px", minHeight: "auto", justifyContent: "space-between" }}>
                    <MuiLink sx={{
                      color: "var(--foreground)",
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: 400,
                      "&:hover": {
                        color: "#007bff",
                      },
                    }} component={Link} href="/">Privacy policy</MuiLink>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="var(--svgFill)" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          </Box>
        </>
      </Box>
      {isModalOpen && (
        <ConnectModal
          isDialogOpen={isModalOpen}
          setIsDialogOpen={setIsModalOpen}
        />
      )}
    </>
  );
};

export default Header;