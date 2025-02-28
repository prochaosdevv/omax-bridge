import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { defineChain } from 'viem';
import {
  mainnet,
  bsc,
  omax,
  bscTestnet
} from 'wagmi/chains';

export const omaxtestnet = defineChain({
  id: 332,
  name: 'Omax Testnet',
  nativeCurrency: { name: 'OmaxT', symbol: 'OMAXT', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://testapi.omaxray.com'] },
  },
  blockExplorers: {
    default: { name: 'Omaxscan', url: 'https://testnet.omaxscan.com' },
  },
});

export const chains = [
  mainnet,
  bsc,
  omax,
  ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [bscTestnet, omaxtestnet] : []),
];

export const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    mainnet,
    bsc,
    omax,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [bscTestnet, omaxtestnet] : []),
  ],
  ssr: true,
});
