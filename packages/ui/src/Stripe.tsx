import React, { useEffect, useState } from "react";

const Stripe = () => {

  const[isactive, setIsActive] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
    setIsActive((prev) => (prev + 1) % 4)
    }, 3000)

    return () => clearInterval(interval);
  },[]);

  return (
    <div className="w-[50%] mx-auto h-screen">
     <div className="flex justify-between">
        <div className="relative">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="0.5"
        stroke={isactive === 0 ? "red" : "black"}
        className="w-24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
        />
     
  
 </svg>
 {isactive === 0 && (
  <div
    className="absolute left-1/2 transform -translate-x-1/2 bg-yellow-500 transition-all duration-500"
    style={{
        height: isactive === 0 ? "60px" : "0",
        width: "2px",
        bottom: isactive === 0 ? "-60px" : "0", // Positioning based on active state
        transition: "height 0.5s ease, bottom 0.5s ease", // Smooth transition
      }}
  />
)}
</div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke={isactive === 1 ? "yellow" : "black"}
        className="w-24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
        />
      </svg>
      </div>
      <div className="p-24"></div>
      <div className="flex justify-between">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke={isactive === 2 ? "blue" : "black"}
        className="w-24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke={isactive === 3 ? "orange" : "black"}
        className="w-24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
        />
      </svg>
      </div>
      
    </div>
  );
};

export default Stripe;
