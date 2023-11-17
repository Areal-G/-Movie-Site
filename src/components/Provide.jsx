import { ProvideCard } from "./ProvideCard";

export const Provide = () => {
  return (
    <div className="mt-28 2xl:w-[90%] mx-auto ">
      <div className="">
        <h3 className=" w-[90%] mx-auto text-white font-bold mb-3 text-xl lg:text-3xl ">
          We Provide you streaming experience across various devices
        </h3>
        <p className="w-[90%] mx-auto text-[#999] text-sm font-normal lg:text-base">
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere.
          <span className="hidden lg:inline">
            Our platform is designed to be compatible with a wide range of
            devices, ensuring that you never miss a moment of entertainment.
          </span>
        </p>
      </div>
      <div className="flex justify-center">
        <ProvideCard />
      </div>
    </div>
  );
};
