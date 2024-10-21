const AccordianItem = (props: any) => {
  console.log(props);
  const { query, ans, isOpen, setIsOpen, index } = props;
  return (
    <div className="w-[90%] mx-auto">
      <div
        className="flex justify-between hover:bg-slate-100 rounded-md"
        onClick={() => {
          setIsOpen();
        }}>
        <div className="w-full rounded-lg text-base font-medium p-3 text-gray-700 cursor-pointer ">
          {query}
        </div>
        <div className="p-3 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="0.85"
            stroke="currentColor"
            className={`w-5 ${isOpen ? "transition-all duration-300 rotate-180" : "transition-all duration-300 rotate-0"}`}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      <div className={`transition-all overflow-hidden duration-500 ease-in-out ${isOpen === true? "max-h-40" : "max-h-0"} `}> <div className="font-normal text-sm text-gray-600 p-3">{ans}</div>
      </div>
      <div className="border-b border-gray-300"></div>
    </div>
  );
};

export default AccordianItem;
