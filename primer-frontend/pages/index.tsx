import { assitanceContract } from "@/constants/constants";
import { Contract, ethers } from "ethers";
import { useEffect, useState } from "react";
import { shortenAddress } from "@/utils/address";
import { useWeb3Store } from "@/stores/web3Store";
import Error from '@/components/Error'

declare global {
  interface Window {
    ethereum: any;
  }
}

export default function Home() {
  const { address, connectWallet, provider } = useWeb3Store();

  const [currentClass, setCurrenClass] = useState<number>();
  const [userPassword, setUserPassword] = useState("");

  async function getCurrClassId() {
    // instanciar contrato
    if (!provider) return;
    const contract = new ethers.Contract(
      assitanceContract.address,
      assitanceContract.abi,
      provider
    );
    // llamar a la funcion de claasid
    try {
      const id = await contract.currentClassId();
      setCurrenClass(Number(id));
    } catch (error) {
      console.log(error);
    }
  }

  async function assist() {
    // instanciar contrato
    if (!provider) return;

    const contract = new ethers.Contract(
      assitanceContract.address,
      assitanceContract.abi,
      provider.getSigner()
    );
    // llamar a la funcion de claasid
    try {
      const id = await contract.assistClass(currentClass, userPassword);
      setCurrenClass(Number(id));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (typeof window === "undefined") return;

    console.log(provider);
    getCurrClassId();

    const contract = new ethers.Contract(
      assitanceContract.address,
      assitanceContract.abi,
      provider
    );

    contract.on("ClassCreated", () => {
      getCurrClassId();
    });
  }, []);

  return (
    <>
      <nav className="bg-black flex item-center justify-between p-2">
        <div>
          <h1 className="flex item-center text-3xl text-white">Disrup3</h1>
        </div>
        <div className="flex item-center">
          {address !== "" ? (
            <p className="bg-gray-300 border-2 pl-2 pr-2 rounded-full">
              {shortenAddress(address)}
            </p>
          ) : (
            <button
              className="bg-white border-2 rounded-full pl-2 pr-2"
              onClick={connectWallet}
            >
              Conectar cartera
            </button>
          )}
        </div>
      </nav>
      <Error/>
      <section className="bg-gray-400">
        <div className="h-screen p-2">
          <h2>Asiste a la clase: {currentClass}</h2>
          <div className="flex justify-center">
            <div className="bg-black border-4 border-white h-32 w-96 rounded-xl">
              <form className="text-white flex justify-center">
                Introduce la contraseña de la clase
              </form>
              <div className="flex justify-center">
                <input
                  type="password"
                  placeholder="Password"
                  className="border-2 rounded mr-1"
                  onChange={(e) => {
                    setUserPassword(e.target.value);
                  }}
                />
                <button
                  className="bg-gray-200 border-2 pr-2 pl-2 rounded"
                  onClick={assist}
                >
                  Asistir
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
