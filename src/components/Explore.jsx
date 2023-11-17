import left from "../assets/images/leftIcon.svg";
import right from "../assets/images/rightIcon.svg";
import activeSlider from "../assets/images/active-slider-pageIcon.svg";
import slider from "../assets/images/slider-pageIcon.svg";
import ExploreCard from "./ExploreCard";
const Explore = () => {
  return (
    <div className="w-[90%] mx-auto ">
      <div className="flex justify-between">
        <div>
          <h3 className=" text-white text-3xl mb-3">
            Explore our wide variety of categories
          </h3>
          <p className=" text-[#999] text-base">
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>
        <div className=" hidden lg:flex rounded-[10px] bg-black border-[#1F1F1F] border-[3px] items-center h-[68px] w-[205px] ">
          <button className="bg-[#1A1A1A] px-[5px] py-[5px] mx-[12px] rounded-[6px]">
            <img className="h-[24px] " src={left} alt="" />
          </button>
          <img
            className="h-[4px] w-[18px] mx-[1.5px]"
            src={activeSlider}
            alt=""
          />
          <img className="h-[4px] w-[18px] mx-[1.5px]" src={slider} alt="" />
          <img className="h-[4px] w-[18px] mx-[1.5px]" src={slider} alt="" />
          <img className="h-[4px] w-[18px] mx-[1.5px]" src={slider} alt="" />
          <button className="bg-[#1A1A1A] px-[5px] py-[5px] mx-[12px] rounded-[6px]">
            <img className="h-[24px]" src={right} alt="" />
          </button>
        </div>
      </div>
      <div className="flex gap-4 mt-6 overflow-x-auto">
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
      </div>
    </div>
  );
};
export default Explore;
