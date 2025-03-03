import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { base, bscTestnet } from "wagmi/chains";

const projectId = "b08599a140566dff8bd3f3e0e9db3d6a";

export const wagmiConfig = getDefaultConfig({
  appName: "OMAX BRIDGE",
  projectId,
  chains: [bscTestnet, base],
  transports: {
    [bscTestnet.id]: http(),
    [base.id]: http(),
  },
  ssr: typeof window === "undefined",
});
