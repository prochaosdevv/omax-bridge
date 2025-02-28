'use client';

import React, { useContext } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { darkTheme, lightTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import "./i18n"; // ✅ Import i18n here

import { config } from '../wagmi';
import { ContractContext } from '@/Context/ContractContext';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  const {theme} = useContext(ContractContext)
  // theme === "dark"
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize='compact' theme={theme === "dark"?darkTheme():lightTheme()}>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
