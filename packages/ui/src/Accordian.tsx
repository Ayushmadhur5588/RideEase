import { useState } from "react";
import { data } from "./Constant";
import AccordianItem from "./AccordianItem";

interface FaqType {
  query: string;
  ans: string;
}

const Accordian = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-[55%] mx-auto border-b my-16 pb-10 shadow-lg rounded-lg border border-blue-100">
      <div className="flex justify-center text-2xl py-10 font-normal">Frequently Asked Questions (FAQ's)</div>
      {data.map((item, index) => (
        <AccordianItem
          key={index}
          query={item.query}
          ans={item.ans}
          isOpen={index === openIndex ? true : false}
          setIsOpen={() => {
            index === openIndex ? setOpenIndex(null) : setOpenIndex(index);
          }}
          index={index}
        />
      ))}
    </div>
  );
};

export default Accordian;
