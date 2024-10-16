import {Textcomponent} from './type';

const HeroComponent = () => {

  return (
    <div className="flex justify-between">
      <div className="mt-20 ml-8 bg-gray-300 p-2">
        <div className='text-black'>
          <Textcomponent />
        </div>
        <div className="my-9">
          <div>
            <input
              type="text"
              placeholder="enter location"
              className="font-normal my-3 p-2 rounded-lg"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="enter destination"
              className="font-normal my-3 p-2 rounded-lg"
            />
          </div>
          <div>
          <input
              type="date"
              placeholder="enter destination"
              className="font-normal my-3 p-2 rounded-lg"
            />
          </div>
          <div>
            <input type="number" min="1" max="100" placeholder='0' className='p-2'/>
          </div>
          <button className="my-5 p-2 bg-white rounded-lg">Search</button>
        </div>
      </div>
      <div className="mt-20 ml-8 bg-gray-300 p-2 mr-4">Maps yaha par aaega</div>
    </div>
  );
};

export default HeroComponent;
