import { ItemInfo } from "@/types";
import Ethereum from '../assets/Ethereum.svg';
import bsc_logo from "../assets/BSC.svg";
import logo_mobile from "../assets/new_logo.png";

export const networkItems: ItemInfo[] = [
    {
        chainId: 1,
        label: "Ethereum",
        icon: Ethereum.src
    },
    {
        chainId: 56,
        label: "BSC",
        icon: bsc_logo.src
    },
    {
        chainId: 311,
        label: "Omax",
        icon: logo_mobile.src,
        width: "32px",
        height: "28px"
    },
    {
        chainId: 97,
        label: "BSC Testnet",
        icon: bsc_logo.src
    },
    {
        chainId: 332,
        label: "Omax Testnet",
        icon: logo_mobile.src,
        width: "32px",
        height: "28px"
    }
]