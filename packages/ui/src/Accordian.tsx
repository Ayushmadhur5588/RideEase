import {data} from "./Constant"

interface FaqType{
  query: string,
  ans: string
}

const Accordian = () => {

  return (
    <div className="w-[50%] mx-auto border-b border-gray-500 py-20">
      <div className="flex p-4 font-semibold text-6xl justify-center">FAQ's</div>
      <div className="p-2 font-semibold hover:bg-gray-100">{data[0].query}</div>
      <div className="text-sm p-4 text-gray-800">{data[0].ans}</div>
    </div>
  )
}

export default Accordian;