import { ItemInfo } from "@/types";
import usdc_omax from "../assets/usdc_omax-01.svg";
import usdt_omax from "../assets/usdt_omax-01.svg";
import usdc_eth from "../assets/usdc_eth-01.svg";
import usdt_eth from "../assets/usdt_eth-01.svg";
import usdt_bnb from "../assets/usdt_bnb-01.svg";
import usdc_bnb from "../assets/usdc_bnb-01.svg";

export const tokenItems: ItemInfo[] = [
    {
        value: '0',
        label: "USDC",
        icon: usdc_omax.src
    },
    {
        value: "1",
        label: "USDT",
        icon: usdt_omax.src
    },
    {
        value: "2",
        label: "USDC",
        icon: usdc_eth.src
    },
    {
        value: "3",
        label: "USDT",
        icon: usdt_eth.src
    },
    {
        value: "4",
        label: "USDC",
        icon: usdc_bnb.src
    },
    {
        value: "5",
        label: "USDT",
        icon: usdt_bnb.src
    },
]