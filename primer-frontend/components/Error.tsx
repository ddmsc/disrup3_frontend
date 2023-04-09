import { useWeb3Store } from "@/stores/web3Store";
import React from "react"; // Esto no es necesario en las ultimas versiones

const Error = () => {
  const errorMessage = useWeb3Store((state) => state.errorMessage); // Esto debe ser para que solo nos de lo que necesitamos

  return (
    <div className="bg-red-700 p-5">
      <p className="text-white text-3xl">{errorMessage}</p>
    </div>
  );
};

export default Error;
