import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import linkedin from "../assets/images/linkedin.svg";
import line from "../assets/images/footerLine.svg";
export const Footer = () => {
  return (
    <div className=" bg-black">
      <div className=" footercss  grid grid-cols-2  gap-6 px-8 pb-10 pt-12 lg:flex lg:justify-between lg:px-20 lg:pt-20">
        <div>
          <h5>Home</h5>
          <p>Categories</p>
          <p>Devices</p>
          <p>Pricing</p>
          <p>FAQ</p>
        </div>
        <div>
          <h5>Movies</h5>
          <p>Gernes</p>
          <p>Trending</p>
          <p>New Release</p>
          <p>Popular</p>
        </div>
        <div>
          <h5>Shows</h5>
          <p>Gernes</p>
          <p>Trending</p>
          <p>New Release</p>
          <p>Popular</p>
        </div>
        <div>
          <h5>Support</h5>
          <p>Contact Us</p>
        </div>
        <div>
          <h5>Subscription</h5>
          <p>Plans</p>
          <p>Features</p>
        </div>
        <div>
          <h5>Connect With Us</h5>
          <div className="flex gap-[10px]">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
      </div>
      <img className="mb-5 w-full" src={line} alt="" />
      <div className="px-5 pb-5 text-[#999] lg:flex lg:justify-between lg:px-20 ">
        <div>
          <p className="mb-3 text-center">
            @2023 streamvib, All Rights Reserved
          </p>
        </div>
        <div className="flex justify-between gap-4">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};
