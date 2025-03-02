import { NetworkInfo } from "@/types";
import Ethereum from '../assets/Ethereum.svg';
import bsc_logo from "../assets/BSC.svg";
import logo_mobile from "../assets/new_logo_omax.svg";

export const networkItems: NetworkInfo[] = (process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [
    {
        chainId: 97,
        label: "BSC Testnet",
        symbol: "tBNB",
        bridge: '0xd9811096704e8F409995E30dFf8F6116c167F40d',
        icon: bsc_logo.src
    },
    {
        chainId: 332,
        label: "OMAX Testnet",
        symbol: "OMAXT",
        bridge: '0x8E99e480d7825Ce95b9D270A3d891c8303259A9d',
        icon: logo_mobile.src,
        width: "28px",
        height: "28px"
    }
]:[
    {
        chainId: 1,
        symbol: "ETH",
        label: "Ethereum",
        bridge: '',
        icon: Ethereum.src
    },
    {
        chainId: 56,
        label: "BSC",
        symbol: "BNB",
        bridge: '',
        icon: bsc_logo.src
    },
    {
        chainId: 311,
        label: "Omax",
        symbol: "OMAX",
        bridge: '',
        icon: logo_mobile.src,
        width: "28px",
        height: "28px"
    }
]);