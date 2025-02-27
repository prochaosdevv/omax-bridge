"use client";
import React, { createContext, useState, ReactNode, useEffect } from "react";

interface ThemeContextType {
  selectedChain: string;
  setSelectedChain: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const defaultContext: ThemeContextType = {
  selectedChain:"0",
  setSelectedChain: () => {},
  theme:"dark",
  setTheme: () => {},
};

// Create the context
export const ThemeContext = createContext<ThemeContextType>(defaultContext);

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [selectedChain, setSelectedChain] = useState("0");
  const [theme, setTheme] = useState("dark");

  useEffect(( ) => {
    if(typeof window !== "undefined") {
      setSelectedChain(window.localStorage.getItem("network") || "0")
    } 
  },[])

  return (
    <ThemeContext.Provider value={{ selectedChain, setSelectedChain,theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
