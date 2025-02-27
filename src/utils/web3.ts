import axios from "axios";
import { Program } from "@coral-xyz/anchor";

import { TokenMetadata } from "@/types/token";
import { POOL_REGISTRY_ADDRESS, POOL_SEED_PREFIX, SHORT_POOL_SEED } from "@/utils/constants";
import { SolanaProgram } from "@/types/solana_program";
import { Connection, PublicKey } from "@solana/web3.js";

export async function uploadImagePinata(file: File|undefined) {
  if (file) {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: formData,
        headers: {
          pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
          pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_API_SECRET,
          "Content-Type": "multipart/form-data",
        },
      });

      const ImgHash = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
      return ImgHash;
    } catch (err) {
      throw err;
    }
  }
}

export async function uploadMetaData(tokenInfo: TokenMetadata) {
  const data = JSON.stringify({
    name: tokenInfo.name,
    symbol: tokenInfo.symbol,
    description: tokenInfo.description,
    image: tokenInfo.icon,
    banner: tokenInfo.banner,
  });
  try {
    const response = await axios({
      method: "POST",
      url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
      data: data,
      headers: {
        pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
        pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_API_SECRET,
        "Content-Type": "application/json",
      },
    });

    const url = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;

    return url;
  } catch (err) {
    throw err;
  }
}

export const getPools = async (program: Program<SolanaProgram>) => {
  const pools = await program.account.liquidityPool.all();
  return pools;
};

export const getPoolRegistry = async (program: Program<SolanaProgram>) => {
  const pool_registry = await program.account.poolRegistry.fetch(POOL_REGISTRY_ADDRESS);
  return pool_registry;
};

export const getPool = async (program:  Program<SolanaProgram>, mint: String) => {
  const pool_address = PublicKey.findProgramAddressSync(
    [Buffer.from(POOL_SEED_PREFIX), new PublicKey(mint).toBuffer()],
    program.programId
  )[0];
  const pool = await program.account.liquidityPool.fetch(new PublicKey(pool_address));
  return pool;
}

export const getShortPool = async (program:  Program<SolanaProgram>, mint: String) => {
  const pool_address = PublicKey.findProgramAddressSync(
    [Buffer.from(SHORT_POOL_SEED), new PublicKey(mint).toBuffer()],
    program.programId
  )[0];
  const pool = await program.account.shortPool.fetch(new PublicKey(pool_address));
  console.log(pool)
  return pool;
}

export const getSolBalance = async (walletAddress: String, connection: Connection ) => {  
  // Create a PublicKey object from the wallet address  
  const publicKey = new PublicKey(walletAddress);  

  try {  
      // Fetch the balance in lamports (1 SOL = 1 billion lamports)  
      const balance = await connection.getBalance(publicKey);  
      
      // Convert lamports to SOL  
      const balanceInSol = balance / 1e9; // 1 SOL = 10^9 lamports  

      return balanceInSol
  } catch (error) {  
      return 0
  }  
}  