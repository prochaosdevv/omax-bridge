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
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    bscTestnet,
    base
  ],
  ssr: false,
});
