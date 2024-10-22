import Image from "next/image";

const SuggestionCard = (props: any) => {
  const { title, description, img } = props;
  return (
    <div className="flex bg-neutral-200 mx-3 rounded-lg py-3 hover:scale-110 transition-transform duration-300 ease-in-out cursor cursor-pointer">
      <div className="p-4 rounded-lg w-[70%]">
        <div className="font-semibold text-base">{title}</div>
        <div className="font-normal text-sm my-3 w-60">{description}</div>
        <button className="p-2 px-2 rounded-3xl bg-white text-sm font-semibold">
          Details
        </button>
      </div>

      <div className="w-[30%] my-auto">
        <Image
          src={img}
          alt="car"
          width="72"
          className="w-32 object-cover"
        />
      </div>
    </div>
  );
};

export default SuggestionCard;
