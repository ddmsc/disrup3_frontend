import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useWeb3Store } from "@/stores/web3Store";

export default function App({ Component, pageProps }: AppProps) {

  const changeAddress = useWeb3Store((state) => state.changeAddress);
  return <Component {...pageProps} />
}
