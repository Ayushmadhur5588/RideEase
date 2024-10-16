import "./global.css";
import Logo from "./RideEase_Logo.png";
import Image from "next/image";

const AppBar = () => {
  return (
    <div className="flex justify-between font-semibold shadow-xl">
      <div>
        <Image src={Logo} alt="Logo" width={210} height={50} />
      </div>
      <div className="text-lg flex">
        <div className="my-auto flex text-lg text-black  font-normal">
          <svg
            className="w-10 h-7 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <button className="mr-4">Search</button>
        </div>

        <div className="my-auto text-white">
          <button className="px-4 py-2 mx-3 bg-black hover:bg-slate-600 rounded-3xl font-normal hover:scale-110 ease-in duration-200">
            Login
          </button>
          <button className="px-4 py-2 mx-3 bg-black hover:bg-slate-600 rounded-3xl font-normal hover:scale-110 ease-in duration-200">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};
export default AppBar;
