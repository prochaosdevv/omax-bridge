'use client';

import React, { useContext, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { darkTheme, lightTheme, Locale, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import "./i18n"; // ? Import i18n here

import { config } from '../wagmi';
import { ThemeContext } from '@/context/ThemeContext';
import i18n from './i18n';

const queryClient = new QueryClient();

// List of supported locales for type checking
const supportedLocales: Locale[] = [
  "ar", "ar-AR", "de", "de-DE", "en", "en-US", "es", "es-419", "fr", "fr-FR",
  "hi", "hi-IN", "id", "id-ID", "ja", "ja-JP", "ko", "ko-KR", "ms", "ms-MY",
  "pt", "pt-BR", "ru", "ru-RU", "th", "th-TH", "tr", "tr-TR", "ua", "uk-UA",
  "vi", "vi-VN", "zh", "zh-HK", "zh-TW", "zh-Hans", "zh-Hant"
];

export function Providers({ children }: { children: React.ReactNode }) {
  const { theme } = useContext(ThemeContext);

  // Ensure locale is valid, otherwise fallback to 'en'
  const locale: Locale = supportedLocales.includes(i18n.language as Locale)
    ? (i18n.language as Locale)
    : "en"; 
  
  
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider locale={locale} modalSize="compact" theme={theme === "dark" ? darkTheme() : lightTheme()}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
