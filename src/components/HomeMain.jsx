import playIcon from "../assets/images/playIcon.svg";
import abstractdesign from "../assets/images/Abstract Design.svg";
const HomeMain = () => {
  return (
    <div className="  text-white text-center lg:mb-40 ">
      <div className=" flex justify-center my-14 ">
        <img className="h-[200px] lg:h-[300px]" src={abstractdesign} alt="" />
      </div>

      <h1 className="text-[28px] font-bold lg:text-[58px] lg:font-bold">
        The Best Streaming Experience
      </h1>
      <p className=" w-[90%] text-sm font-normal mt-4 lg:text-[18px] lg:w-[80%] mx-auto lg:font-normal leading-7 md:w-[80%]">
        StreamVibe is the best streaming experience for watching your favorite
        movies and shows on demand, anytime, anywhere.
        <span className="hidden lg:inline">
          With StreamVibe, you can enjoy a wide variety of content, including
          the latest blockbusters, classic movies, popular TV shows, and more.
          You can also create your own watchlists, so you can easily find the
          content you want to watch.
        </span>
      </p>
      <button className="text-[18px]  bg-[#E50000] rounded-[8px] w-[250px] h-[64px] mt-12">
        <div className="mx-auto my-auto flex justify-center">
          <img src={playIcon} alt="" />
          Start Watching Now
        </div>
      </button>
    </div>
  );
};
export default HomeMain;
