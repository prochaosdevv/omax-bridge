import { axiosPublic } from "./axiosPublic";

export async function bridging(
    from: string,
    depositAmount: string,
    depositToken: string,
    depositTransaction: string,
    sourceChainId: number,
    to: string,
    fee: number,
    targetChainId: number,
    withdrawToken: string
) {
    const result = await axiosPublic.post(`/bridging`, {
        from, depositAmount, depositToken, depositTransaction, sourceChainId, to, fee, targetChainId, withdrawToken
    })
    return result.data
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