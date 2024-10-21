"use client";
import { TypewriterEffectSmooth } from "../@ui/ui/typewriter-effect";
export function Textcomponent() {
  const words = [
    {
      text: "Why Ride alone? Gari Share Kro Expense Split Karo BC",
      className : "text-black"
    },

    {
      text: "RideEase.",
      className: "text-black",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center text-black bg-black">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
