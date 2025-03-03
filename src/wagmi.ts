import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
  bscTestnet
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'OMAX BRIDGE',
  projectId: '87ed16ada1051dcc9d68c7bba24ac90f',
  chains: [
    bscTestnet,
    base
  ],
  ssr: true,
});
