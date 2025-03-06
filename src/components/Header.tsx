"use client";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import logo_mobile from "../assets/new_logo_omax.svg";
// import ConnectModal from "./ConnectModal";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { ThemeContext } from "@/context/ThemeContext";

import Link from "next/link";
import { Link as MuiLink } from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import DoneIcon from "@mui/icons-material/Done";
import { useTranslation } from "react-i18next";
import { t } from "i18next";


const languageList = [
  { language: "English", code: "en" }, // English
  { language: "Afrikaans", code: "af" }, // Afrikaans
  { language: "العربية", code: "ar" }, // Arabic
  { language: "Català", code: "ca" }, // Catalan
  { language: "Čeština", code: "cs" }, // Czech
  { language: "Dansk", code: "da" }, // Danish
  { language: "Deutsch", code: "de" }, // German
  { language: "Ελληνικά", code: "el" }, // Greek
  { language: "Español", code: "es" }, // Spanish
  { language: "Suomi", code: "fi" }, // Finnish
  { language: "Français", code: "fr" }, // French
  { language: "עִברִית", code: "he" }, // Hebrew
  { language: "Magyar", code: "hu" }, // Hungarian
  { language: "Bahasa Indonesia", code: "id" }, // Indonesian
  { language: "Italiano", code: "it" }, // Italian
  { language: "日本語", code: "ja" }, // Japanese
  { language: "한국어", code: "ko" }, // Korean
  { language: "Nederlands", code: "nl" }, // Dutch
  { language: "Norsk", code: "no" }, // Norwegian
  { language: "Polski", code: "pl" }, // Polish
  { language: "Português", code: "pt" }, // Portuguese
  { language: "Română", code: "ro" }, // Romanian
  { language: "Русский", code: "ru" }, // Russian
  { language: "Српски", code: "sr" }, // Serbian
  { language: "Svenska", code: "sv" }, // Swedish
  { language: "Kiswahili", code: "sw" }, // Swahili
  { language: "Türkçe", code: "tr" }, // Turkish
  { language: "Українська", code: "uk" }, // Ukrainian
  { language: "Tiếng Việt", code: "vi" }, // Vietnamese
  { language: "简体中文", code: "zhCN" }, // Simplified Chinese
  { language: "繁体中文", code: "zhTW" }, // Traditional Chinese
];


const Header = () => {
  const { i18n } = useTranslation();
  const {currentLang, setCurrentLang}=useContext(ThemeContext)

  useEffect(() => {
    if (i18n.language !== currentLang) {
      i18n.changeLanguage(currentLang);
    }
  }, [currentLang, i18n]);
  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) {
      setCurrentLang(storedLang);
    }
  }, []);

  const changeLanguage = (languageCode: string) => {
    localStorage.setItem("lang", languageCode);
    setCurrentLang(languageCode);
    i18n.changeLanguage(languageCode);
  };
  const { theme, setTheme } = useContext(ThemeContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorEl_lang, setAnchorEl_lang] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClickLang = (event: any) => {
    setAnchorEl_lang(anchorEl_lang ? null : event.currentTarget);
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
          py: "16px",
          px: "16px",
          width: "100%",
        }}
      >
        <>
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              justifyContent: { sm: "space-between", xs: "space-between" },
              "& button": {
                textTransform: "capitalize",
                fontSize: "15px !important",
                height: "40px !important",
                fontWeight: "bold",
                color: `var(--connect_color) !important`,
                transition: "0.5s all",
                background: "var(--connect_bg) !important",
                boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.5) !important",
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
              <a href="https://omax.app/" target="_blank">
              <Typography
                component={"img"}
                src={logo_mobile.src}
                className="omx-logo"
                sx={{
                  cursor: "pointer"
                }}
              />
              </a>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontFamily: "Inter, monospace",
                  fontWeight: 600,
                  color: "var(--foreground)",
                  display: { md: "block", xs: "none" },
                }}
              >
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
                <ConnectButton chainStatus={"none"} />
              </Box>

              <Box className="menu_btn_wrapper" position={"relative"}>
                {/* More Button */}
                <IconButton onClick={handleClick} className="hover:border hover:border-white">
                  <MoreHorizIcon className="hover:border hover:border-white" />
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
                      marginTop: "10px",
                      overflow: "auto",
                      background: "var(--connect_bg) !important",
                      boxShadow:
                        "rgba(0, 0, 0, 0.01) 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 4px 8px, rgba(0, 0, 0, 0.04) 0px 16px 24px, rgba(0, 0, 0, 0.01) 0px 24px 32px",
                      border: "none",
                      borderRadius: "12px",
                      padding: "0.1rem 0px",
                      display: "flex",
                      flexDirection: "column",
                      zIndex: 100,
                    },
                  }}
                  sx={{
                    "& .MuiButtonBase-root":{
                      display: "flex",
                      paddingTop: "5px",
                      paddingBottom: "8px",
                      minHeight: "auto",
                      justifyContent: "space-between",
                      fontSize: "16px",
                      opacity:"0.7",
                      "& p": {
                        fontSize: "15px",
                        color: "var(--foreground)",
                      },
                      "&:hover": {
                        opacity:"1",
                        // "& p": {
                        //   color: "#007bff",
                        // },
                      },
                    }
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
                  <MenuItem
                    component={Link}
                    target="_blank"
                    href="https://omax.app"
                    onClick={() => setAnchorEl(null)}
                  >
                    <Typography>{t("About")}</Typography>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="var(--connect_bg)"
                      stroke="var(--foreground)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      opacity="0.6"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      toggleTheme(); // Theme toggle karega
                      // setAnchorEl(null); // Dropdown band karega
                    }}
               
                  >
                    <Typography>
                      {theme === "dark" ? t("Light Theme") : t("Dark Theme")}
                    </Typography>
                    {theme === "dark" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--foreground)"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        opacity="0.6"
                      >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="var(--foreground)"
                        stroke="var(--foreground)"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        opacity="0.6"
                      >
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line
                          x1="18.36"
                          y1="18.36"
                          x2="19.78"
                          y2="19.78"
                        ></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                      </svg>
                    )}
                  </MenuItem>
                  <MenuItem
                  onClick={handleClickLang}
            
                  >
                    <Typography>
                      {t("Language")}
                    </Typography>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="var(--connect_bg)"
                      stroke="var(--foreground)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      opacity="0.6"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </MenuItem>
                  <MenuItem
                    // onClick={() => setAnchorEl(null)}
                    component={Link}
                      target="_blank"
                      href="https://t.me/OmaxToken"
                    
                  >
                    <Typography>
                      {t("Support")}
                    </Typography>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      fill="var(--foreground)"
                      stroke="var(--foreground)"
                      stroke-width="1"
                      viewBox="0 0 32 32"
                      opacity="0.6"
                    >
                      <g data-name="38-Speech Bubble">
                        <path d="M13 32a1 1 0 0 1-1-1v-5h-1A11 11 0 0 1 0 15v-4A11 11 0 0 1 11 0h10a11 11 0 0 1 11 11v4a11 11 0 0 1-11 11h-1.59l-5.71 5.71a1 1 0 0 1-.7.29zM11 2a9 9 0 0 0-9 9v4a9 9 0 0 0 9 9h2a1 1 0 0 1 1 1v3.59l4.29-4.29A1 1 0 0 1 19 24h2a9 9 0 0 0 9-9v-4a9 9 0 0 0-9-9z" />
                        <path d="M16 15a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm0-2zM23 15a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm0-2zM9 15a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm0-2z" />
                      </g>
                    </svg>
                  </MenuItem>
                  <MenuItem
                    component={Link}
                      target="_blank"
                      href="https://docs.omax.app/omaxbridge/omax-bridge/help"
                  >
                    <Typography>
                      {t("Help")}
                    </Typography>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="var(--connect_bg)"
                      stroke="var(--foreground)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      opacity="0.6"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                  </MenuItem>
                  <MenuItem
                    // onClick={() => setAnchorEl(null)}
                
                    component={Link}
                      target="_blank"
                      href="https://docs.omax.app/omaxbridge/omax-bridge/terms-of-service"
                  >
                    <Typography>
                      {t("Terms of Service")}
                    </Typography>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="var(--connect_bg)"
                      stroke="var(--foreground)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      opacity="0.6"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </MenuItem>
                  <MenuItem
                     component={Link}
                      href="https://docs.omax.app/omaxbridge/omax-bridge/privacy-policy"
                  >
                    <Typography>
                      {t("Privacy policy")}
                    </Typography>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="var(--foreground)"
                      stroke="var(--foreground)"
                      stroke-width="2"
                      style={{
                        marginRight: "-2px",
                      }}
                      width="20"
                      height="20"
                      viewBox="0 0 64 64"
                      opacity="0.6"
                    >
                      <g data-name="File Checklist">
                        <path d="M46 41a11 11 0 1 0 11 11 11.013 11.013 0 0 0-11-11zm0 20a9 9 0 1 1 9-9 9.01 9.01 0 0 1-9 9z" />
                        <path d="m49.231 48.36-4.3 5.159-2.226-2.226a1 1 0 0 0-1.414 1.414l3 3A1 1 0 0 0 45 56h.045a1 1 0 0 0 .724-.359l5-6a1 1 0 0 0-1.538-1.28zM32 51H9V3h26v9a1 1 0 0 0 1 1h9v25a1 1 0 0 0 2 0V12a1.1 1.1 0 0 0-.293-.707l-10-10A1.1 1.1 0 0 0 36 1H8a1 1 0 0 0-1 1v50a1 1 0 0 0 1 1h24a1 1 0 0 0 0-2zm11.586-40H37V4.414z" />
                        <path d="M13 8h18a1 1 0 0 0 0-2H13a1 1 0 0 0 0 2zM13 13h18a1 1 0 0 0 0-2H13a1 1 0 0 0 0 2zM41 16H13a1 1 0 0 0 0 2h28a1 1 0 0 0 0-2zM41 21H13a1 1 0 0 0 0 2h28a1 1 0 0 0 0-2zM42 27a1 1 0 0 0-1-1H13a1 1 0 0 0 0 2h28a1 1 0 0 0 1-1zM13 33h16a1 1 0 0 0 0-2H13a1 1 0 0 0 0 2zM39 37a1 1 0 0 0-1-1H13a1 1 0 0 0 0 2h25a1 1 0 0 0 1-1zM13 41a1 1 0 0 0 0 2h11a1 1 0 0 0 0-2zM32 46H13a1 1 0 0 0 0 2h19a1 1 0 0 0 0-2z" />
                      </g>
                    </svg>
                  </MenuItem>
                </Menu>
                {/* Language dropdown */}
                <Menu
                  anchorEl={anchorEl_lang}
                  open={Boolean(anchorEl_lang)}
                  onClose={() => setAnchorEl_lang(null)}
                  PaperProps={{
                    sx: {
                      minWidth: "196px",
                      maxHeight: "350px",
                      overflow: "auto",
                      background: "var(--connect_bg) !important",
                      boxShadow:
                        "rgba(0, 0, 0, 0.01) 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 4px 8px, rgba(0, 0, 0, 0.04) 0px 16px 24px, rgba(0, 0, 0, 0.01) 0px 24px 32px",
                      border: "none",
                      borderRadius: "12px",
                      padding: "0.5rem 0px",
                      display: "flex",
                      flexDirection: "column",
                      fontSize: "16px",
                      position: "absolute !important",
                      top: "68px !important",
                      p: "0",
                    },
                  }}
                >
                  <MenuItem
                    disableRipple
                    sx={{
                      "&:hover": {
                        background: "none",
                      },
                      color: "var(--foreground)",
                      "& svg": {
                        fontSize: "14px",
                      },
                    }}
                    onClick={() => setAnchorEl_lang(null)}
                  >
                    <ArrowBackIosIcon />
                  </MenuItem>
                  {languageList?.map((item, index) => (
                    <MenuItem
                      disableRipple
                      key={index}
                      onClick={() => changeLanguage(item.code)}
                      sx={{
                        display: "flex",
                        paddingTop: "6px",
                        paddingBottom: "6px",
                        minHeight: "auto",
                        justifyContent: "space-between",
                        "& svg": {
                          fontSize: "14px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "var(--foreground)",
                          textDecoration: "none",
                          fontSize: "14px",
                          fontWeight: 400,
                        }}
                      >
                        {item?.language}
                      </Typography>
                      {currentLang === item.code && (
                        <DoneIcon sx={{ color: "var(--foreground)" }} />
                      )}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>
          </Box>
        </>
      </Box>
    </>
  );
};

export default Header;