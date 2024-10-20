import SocialMediaIcon from "./SocialMediaIcon";

const Footer = () => {
  return (
    <>
    <div className="relative bg-slate-100 pt-20 top-8 -skew-y-2 z-10">
    </div>
    <div className="relative bg-slate-100 pt-10 z-30">
      <div className="flex justify-evenly">
        <div className="">
          <div className="font-bold text-lg">RideEase</div>
          <div>
            <div>
              <SocialMediaIcon />
            </div>
          </div>
        </div>
        <div className="font-semibold text-base">
          <div className="p-2 cursor-pointer">About Us</div>
          <div className="p-2 cursor-pointer">Contact Us</div>
          <div className="p-2 cursor-pointer">Support</div>
          <div className="p-2 cursor-pointer">Carrers</div>
          <div className="p-2 cursor-pointer">Media Centre</div>
        </div>
        <div className="font-semibold text-base">
          <div className="p-2">About Us</div>
          <div className="p-2">Contact Us</div>
          <div className="p-2">Support</div>
          <div className="p-2">Carrers</div>
          <div className="p-2">Media Centre</div>
        </div>
      </div>
      <div>
        <div className="border-b border-gray-400 py-5 mx-16"></div>
        <div className="flex justify between justify-evenly py-5 text-gray-400 text-xs">
          <div className="">
            Copyright © 2024 RideEase. All Rights Reserved.
          </div>
          <div className="underline cursor-pointer">Notices</div>
          <div className="underline cursor-pointer">Privacy Policy</div>
          <div></div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
