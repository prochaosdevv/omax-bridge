import { axiosPublic } from "./axiosPublic";

export function bridging(
    from: string,
    depositAmount: string,
    depositToken: string,
    depositTransaction: string,
    sourceChainId: number,
    to: string,
    fee: number,
    targetChainId: number,
    withdrawToken: string,
    delay: number,
) {
    axiosPublic.post(`/bridging`, {
        from, depositAmount, depositToken, depositTransaction, sourceChainId, to, fee, targetChainId, withdrawToken, delay
    })
    return true;
}

export async function get_history(
    from: string,
) {
    try {
        const result = await axiosPublic.get(`/history?from=${from}`)
        return result.data
    } catch (error) {
        console.log("error: ", error)
        return null;
    }
}