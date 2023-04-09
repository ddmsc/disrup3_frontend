// DEFINIR UN ESTADO CON SUS PROPIEDADES Y METODOS PARA MUTARLO

import { ethers } from 'ethers';
import { create } from 'zustand'

interface IWeb3State {
    address: string;
    isConnected: boolean;
    chainId: number;
    provider?: ethers.providers.Web3Provider;
    errorMessage: string

    connectWallet: () => Promise<void>;
    changeAddress: (address: string) => void;

}

export const useWeb3Store = create<IWeb3State>((set) => ({
    address: "",
    isConnected: false,
    chainId: 0,
    provider: undefined,
    errorMessage: "",

    async connectWallet() {
    if (!window.ethereum || !this.provider) return set({
        errorMessage: "necesitas metamask"
    })
    const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider?.send("eth_requestAccounts", []);     
      set({
        isConnected: true,
        address: accounts[0],
        provider
      })
    },

  }))