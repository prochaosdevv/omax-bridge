
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Box } from "@mui/material";
import { Providers } from "./providers";
import '@rainbow-me/rainbowkit/styles.css';
import ThemeContextProvider from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OMAX Bridge",
  description: "powered by OMAX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Box
          sx={{
            "& .MuiContainer-root": {
              "@media (min-width:1260px)": {
                maxWidth: "1400px",
              },
            },
          }}
        >
          <ThemeContextProvider>

            <Providers>
              {children}
            </Providers>
          </ThemeContextProvider>
        </Box>
      </body>
    </html>
  );
}
