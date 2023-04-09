import Navbar from '@/components/Navbar';
import {assistanceContract} from "../constants/contracts";
import {ethers} from 'ethers'
import { useEffect, useState } from 'react';

declare global {
  interface Window { ethereum: any }
}

let provider: ethers.providers.Web3Provider;

export default function Home() {

  const [ defaultAccount, setDefaultAccount ] = useState<string>("");
  const [currentClassId, setCurrentClassId] = useState<number>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const connectWalletHandler = async () => {
    if (window.ethereum) {
      console.log(provider)
      const accounts = await provider.send("eth_requestAccounts", []);
      setDefaultAccount(accounts[0])
    } else {
      setErrorMessage("Please Install Metamask!!!");
    }
  }

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    const rawPassword = event.target[0].value;

    const assistance = new ethers.Contract(assistanceContract.address, assistanceContract.abi, provider.getSigner())
      try {
        console.log(assistance)
        await assistance.assistClass(currentClassId, rawPassword);
      } catch (error) {
        console.log(error)
      }

  }

  const getCurrentClassId = async () => {


      const assistance = new ethers.Contract(assistanceContract.address, assistanceContract.abi, provider.getSigner())
      try {
        console.log(assistance)
        const currentClassId = await assistance.currentClassId();
        setCurrentClassId(Number(currentClassId))               
      } catch (error) {
        console.log(error)
      }
     

  }

  useEffect(() => {
    if(typeof window !== "undefined")      
      provider = new ethers.providers.Web3Provider(window.ethereum)
      
  }, [])

  useEffect(() => {
    getCurrentClassId()
  }, [provider])
  

  return (
    <>   
      <div className='bg-white'>
        <Navbar 
          defaultAccount={defaultAccount} 
          connectWalletHandler={connectWalletHandler}
        />

        <section className='text-black ml-[150px] mr-[150px]'>
          <h1>Asiste a la clase</h1>
          <p>Para asistir a clase necesitas poner una contraseña</p>
          
          <form onSubmit={handleSubmit}>
            <div className=' flex flex-col max-w-[200px]'>
              <label>Id de clase actual: {currentClassId}</label>
              <p className='mt-4'>Escribe la contraseña</p>
              <input className='bg-gray-200' type="text" name="password" id="password" />
              <button type="submit">Apuntarse</button>
            </div>
          </form>
        </section>

      </div>
    </>
  )
}
