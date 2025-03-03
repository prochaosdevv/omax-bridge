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
  projectId: 'b08599a140566dff8bd3f3e0e9db3d6a',
  chains: [
    bscTestnet,
    base
  ],
  ssr: true,
});
