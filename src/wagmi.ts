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
  name: 'OMAX Testnet',
  nativeCurrency: { name: 'OMAXT', symbol: 'OMAXT', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://testapi.omaxray.com'] },
  },
  blockExplorers: {
    default: { name: 'OMAXcan', url: 'https://testnet.omaxscan.com' },
  },
});

export const chains = (process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [bscTestnet, omaxtestnet] : [mainnet, bsc, omax]);

export const config = getDefaultConfig({
  appName: 'OMAX Bridge',
  projectId: 'facb1ef9241fc2df1be14a968e4485ee',
  chains: (process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [bscTestnet, omaxtestnet] : [mainnet, bsc, omax]),
  ssr: true,
});
