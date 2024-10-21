import {Textcomponent} from './type';
import Image from 'next/image';
import Nasa from './Nasa.jpg';


const HeroComponent = () => {

  return (
    <div className="flex justify-between bg-black h-screen px-24 py-20">
      <div className="w-[50%] bg-black">
         
        <div className="my-9 bg-black">
          <div className='leading-[4rem] text-5xl text-white w-[85%] px-2 py-5 font-extrabold'>Share the Ride, Split the Cost</div>
          <div>
            <input
              type="text"
              placeholder="enter location"
              className="font-normal my-3 p-3 rounded-lg w-[60%] text-black"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="enter destination"
              className="font-normal my-3 p-3 rounded-lg w-[60%]"
            />
          </div>
          <div>
          <input
              type="date"
              placeholder="enter destination"
              className="font-normal my-3 p-3 rounded-lg w-[60%] cursor-pointer"
            />
          </div>
          <button className="my-5 p-3 bg-white font-bold text-lg rounded-lg w-[20%]">Search</button>
        </div>
      </div>
      <div className=""><Image src={Nasa} alt="Nasa" width={500}
            height={300}
            className="rounded-2xl object-cover h-[500px] w-[400px]"/></div>
    </div>
  );
};

export default HeroComponent;
