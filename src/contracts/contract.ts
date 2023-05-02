import { ethers } from 'ethers';
import Contract from './contracts.json';

const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;
const ALCHEMY_URL = import.meta.env.VITE_ALCHEMY_URL;
const rpcProvier = new ethers.providers.JsonRpcProvider(ALCHEMY_URL);

export const contracts = new ethers.Contract(CONTRACT_ADDRESS, Contract.abi, rpcProvier);

function getProviderAndSigner() {
  const { ethereum } = window;
  let provider;
  let signer;

  if (ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
  }
  return { provider, signer };
}

function getContract() {
  const { signer } = getProviderAndSigner();

  return new ethers.Contract(CONTRACT_ADDRESS, Contract.abi, signer);
}
export async function makeNft(address: string, tokenUri: string) {
  const contract = getContract();

  try {
    return await contract.createNft(address, tokenUri);
  } catch (error) {
    return error;
  }
}
