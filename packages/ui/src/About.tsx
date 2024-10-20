import Image from "next/image";
import img_1 from "./img_1.jpg";
import img_2 from "./img_2.jpg";
import img_3 from "./img_3.jpg";

const About = () => {
  return (
    <div className="py-20">
      <div className="flex justify-between mb-28">
        <div className="w-5/12 mx-auto my-auto">
          <h3 className="text-6xl font-semibold text-blue-950 px-10">
            Find affordable rides, anytime
          </h3>
          <p className="w-2/3 text-lg py-10 text-gray-600 font-normal text-wrap px-10">
            Whether you’re looking for a quick trip or a ride along your daily
            route, RideEase offers budget-friendly carpool options. Choose from
            a variety of routes that suit your schedule and save on travel
            costs.
          </p>
        </div>
        <div className="w-5/12 mx-auto">
          <Image
            src={img_1}
            alt="img_3"
            width={500}
            height={500}
            className="rounded-2xl object-cover h-[600px] mx-auto"
          />
        </div>
      </div>
      <div className="flex justify-between mb-28">
        <div className="w-5/12 mx-auto">
          <Image
            src={img_2}
            alt="img_3"
            width={500}
            height={500}
            className="rounded-2xl object-cover h-[600px] mx-auto"
          />
        </div>
        <div className="w-5/12 mx-auto my-auto">
          <h3 className="text-6xl font-semibold text-blue-950 px-10">
            Travel with confidence
          </h3>
          <p className="w-2/3 text-lg py-10 text-gray-600 font-normal text-wrap px-10">
            All our members and drivers are verified to ensure a secure and
            reliable experience. View detailed profiles and ratings to know your
            travel companions before you book.
          </p>
        </div>
      </div>
      <div className="flex justify-between mb-28">
        <div className="w-5/12 mx-auto my-auto">
          <h3 className="text-6xl font-semibold text-blue-950 px-10">
            Easy booking, seamless journey
          </h3>
          <p className="w-2/3 text-lg py-10 text-gray-600 font-normal text-wrap px-10">
            Booking a ride is quick and hassle-free on RideEase. With just a few
            clicks, you can find and reserve rides near you, all from your
            mobile or desktop, and be on your way in minutes.
          </p>
        </div>
        <div className="w-5/12 mx-auto">
          <Image
            src={img_3}
            alt="img_3"
            width={500}
            height={500}
            className="rounded-2xl object-cover h-[600px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
