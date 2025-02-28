import { readContract, estimateGas, getBalance, simulateContract } from "@wagmi/core";
import { erc20ABI } from "./erc20ABI";
import { bridgeABI } from "./bridgeABI";
import { getAddress } from "viem"; // Import the function for address validation
import { decimalToEth } from "@/utils/functions";
import { networkItems } from "@/config";
import { parseEther } from "viem";
import { encodeFunctionData } from "viem";

export const getTokenBalance = async (
    walletAddress: string,
    tokenAddress: string,
    chainId: number,
    wagmiContext: any
) => {
    if (tokenAddress === '0x0000000000000000000000000000000000000000') {
        try {
            const formattedWalletAddress = getAddress(walletAddress);
            const balance = await getBalance(wagmiContext, {
                address: formattedWalletAddress,
                chainId
            });
            return decimalToEth(balance.value.toString());
        } catch (error) {
            console.error("Invalid error:", error);
            return 0;
        }
    } else if (tokenAddress == '') {
        return 0;
    } else {
        try {
            const formattedAddress = getAddress(tokenAddress);
            const formattedWalletAddress = getAddress(walletAddress);
            const amount = await readContract(wagmiContext, {
                abi: erc20ABI,
                address: formattedAddress, // Use the formatted address
                functionName: "balanceOf",
                args: [formattedWalletAddress],
                chainId
            }) as bigint;
            return decimalToEth(amount.toString());
        } catch (error) {
            console.error("Invalid token address:", tokenAddress, error);
            return 0;
        }
    }
};

// async function estimateTransactionGas(chainId: number, targetWalletAddress: `0x${string}`, tokenAddress: `0x${string}`, wagmiContext: any) {
//     try {
//         const formattedAddress = getAddress(networkItems[chainId].bridge);
//         const data = encodeFunctionData({
//             abi: bridgeABI,
//             functionName: 'depositToken',
//             args: [tokenAddress, BigInt(1e18), targetWalletAddress, chainId.toString()],
//         })

//         const gasEstimate = await estimateGas(wagmiContext, {
//             to: address,
//             value: parseEther('0'),
//             data: tx.request.blobs
//         });

//         console.log(`Estimated Gas: ${gasEstimate.toString()}`);
//         return gasEstimate;
//     } catch (error) {
//         console.error("Gas estimation failed:", error);
//     }
// }