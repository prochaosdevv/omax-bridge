
import { tokenItems } from '@/config';
import { getTokenBalance } from './contract';
import { TokenBalance } from '@/types';
import { getTokenPrice } from '@/utils/functions';

export { bridgeABI } from './bridgeABI';
export { erc20ABI } from './erc20ABI';
export { getTokenBalance } from './contract';

export const getWalletBalance = async (chainId: number, address: string, context: any) => {
    let coinBalance: TokenBalance[] = [];
    try {
        let coins = tokenItems[chainId];
        for (let i = 0; i < coins.length; i++) {
            const balance = await getTokenBalance(address, coins[i].address, chainId, context);
            const price = await getTokenPrice(coins[i].symbol);
            coinBalance.push({
                symbol: coins[i].symbol,
                balance: balance.toFixed(3),
                price: price.toFixed(5)
            })
        }
        return coinBalance;
    } catch (error) {
        console.log("error: ", error);
        return coinBalance;
    }
}