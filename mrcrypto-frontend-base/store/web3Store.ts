import { supportedChains } from "@/constants/supportedChains";
import { ethers } from "ethers";
import { create } from "zustand";

interface Iweb3State {
  address: string;
  isConnected: boolean;
  chainId: number;
  errorMessage: string;
  provider?: ethers.providers.Web3Provider;

  connectWallet: () => Promise<void>;
  changeAddress: (address: string) => void;
  disconnect: () => void;
  changeChainId: (chainId: number) => void;
  setProvider: () => void;
}

export const useWeb3Store = create<Iweb3State>((set) => ({
  address: "",
  isConnected: false,
  chainId: 0,
  errorMessage: "",
  provider: undefined,

  async connectWallet() {
    if (!window.ethereum) return set({ errorMessage: "Necesitas Metamask" });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider?.send("eth_requestAccounts", []);
    const chainId = await (await provider.getNetwork()).chainId;

    if (checkChain(chainId))
      return set({ errorMessage: "Cadena no soportada" });
    set({
      isConnected: true,
      address: accounts[0],
      provider,
      chainId,
      errorMessage: "",
    });
  },
  changeAddress(address) {
    set({ address });
  },
  disconnect() {
    set({ isConnected: false, address: "", chainId: 0 });
  },
  changeChainId(chainId) {
    if (checkChain(chainId))
      return set({ errorMessage: "Cadena no soportada" });
    set({ chainId, errorMessage: "" });
  },
  setProvider(){
    if (!window.ethereum) return set({ errorMessage: "Necesitas Metamask" });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    set({provider, errorMessage: ""})
  },
}));

const checkChain = (chainId: number):boolean => {
  return !supportedChains.includes(chainId);
}
