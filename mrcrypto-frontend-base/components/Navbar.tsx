import { shortenAddress } from "@/utils/address";
import { FC } from "react";

interface Props {
  address: string;
  connectWallet: () => Promise<void>;
}

const Navbar: FC<Props> = ({ address, connectWallet }) => {
  return (
    <nav className="flex items-center justify-between p-5">
      <div>
        <img
          className="sm:max-w-[200px]"
          src="mrc-logo.png"
          alt="logo mr crypto"
        />
      </div>
      {address.length > 0 ? (
          <p className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
            {shortenAddress(address)}
          </p>
      ) : (
        <div className="ml-3">
          <button onClick={connectWallet} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
            Conectar cartera {address}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
