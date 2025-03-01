"use client";
import React, { createContext, useState, ReactNode, useEffect } from "react";

interface ContractContextType {
  selectedChain: string;
  setSelectedChain: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  currentLang: string;
  setCurrentLang: React.Dispatch<React.SetStateAction<string>>;
}

const defaultContext: ContractContextType = {
  selectedChain:"0",
  setSelectedChain: () => {},
  currentLang:"en",
  setCurrentLang: () => {},
  theme:"dark",
  setTheme: () => {},
};

// Create the context
export const ContractContext = createContext<ContractContextType>(defaultContext);

const ContractContextProvider = ({ children }: { children: ReactNode }) => {
  const [selectedChain, setSelectedChain] = useState("0");
  const [theme, setTheme] = useState("dark");
  const [currentLang, setCurrentLang] = useState<string>("en");

  useEffect(( ) => {
    if(typeof window !== "undefined") {
      setSelectedChain(window.localStorage.getItem("network") || "0")
    } 
  },[])

  return (
    <ContractContext.Provider value={{currentLang, setCurrentLang, selectedChain, setSelectedChain,theme, setTheme}}>
      {children}
    </ContractContext.Provider>
  );
};

export default ContractContextProvider;
