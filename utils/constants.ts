import { createThirdwebClient, defineChain, getContract } from "thirdweb";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;

export const client = createThirdwebClient({
  clientId: CLIENT_ID as string,
});

export const chain = defineChain(84532)
const contractAddress = "naotenhoporqueprecisadecashparadeply";
const contractABI = [{}] as const

export const CONTRACT = getContract({
  client: client,
  chain: chain,
  address: contractAddress,
  abi: contractABI
})