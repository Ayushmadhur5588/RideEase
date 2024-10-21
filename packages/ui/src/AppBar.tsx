import "./global.css";
import Logo from "./RideEase_Logo.png";
import Image from "next/image";

const AppBar = () => {
  return (
    <div className="flex justify-between font-semibold bg-black">
      <div className="p-4 text-3xl font-semibold text-white ml-20">
        RideEase
      </div>
      <div className="text-base flex">
        <div className="p-1 rounded-xl my-auto flex text-lg text-black  font-normal hover:bg-gray-600">
          <svg
            className="w-8 h-5 cursor-pointer my-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="0.95"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <button className="mr-4 text-white">Search</button>
        </div>

        <div className="my-auto text-white">
          <button className="px-2 py-2 mx-2  hover:bg-gray-600 rounded-xl font-medium hover:scale-105 ease-in duration-300">
            Login
          </button>
          <button className="px-2 py-2 mr-10 hover:bg-gray-600 rounded-xl font-medium hover:scale-105 ease-in duration-300">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};
export default AppBar;
