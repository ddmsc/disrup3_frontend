const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-5">
      <div>
        <img
          className="sm:max-w-[200px]"
          src="mrc-logo.png"
          alt="logo mr crypto"
        />
      </div>

      <div className="ml-3">
        {false ? (
          <p className="bg-gray-300 border-2 pl-2 pr-2 rounded-full">
            Abemus cartera
          </p>
        ) : (
          // <button className="bg-white border-2 rounded-full pl-2 pr-2" onClick={connectWallet}>
          //   Conectar cartera
          // </button>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
            Conectar cartera
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
