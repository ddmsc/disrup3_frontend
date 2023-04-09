import { useWeb3Store } from '@/store/web3Store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {

const {changeAddress, changeChainId, setProvider} = useWeb3Store();

useEffect(() => {
  setProvider();
  if(!window.ethereum) return;

  window.ethereum.on("chainChanged", (newChain: number) => {
    changeChainId(Number(newChain));
  });

  window.ethereum.on("accountsChanged", (acc: string[]) => {
    changeAddress(acc[0]);
  });

}, [])


  return <Component {...pageProps} />
}
