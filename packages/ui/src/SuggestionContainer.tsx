import SuggestionCard from "./SuggestionCard";
import { suggestion } from "./Constant";
import ride from './ride.png';

const SuggestionContainer = () => {
  return (
    <div className="p-20 h-fit">
      <div className="font-semibold text-4xl my-8 mx-2">Suggestions</div>
      <div className="flex flex-wrap w-full mx-auto">
        {suggestion.map((item, index) => (
          <SuggestionCard
            key={index}
            title={item.title}
            description={item.description}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default SuggestionContainer;
