import explorecardimg from "../assets/images/exploreContainer.png";
import right from "../assets/images/rightIcon.svg";

const ExploreCard = () => {
  return (
    <div>
      <div className="w-60 h-72 p-6 bg-zinc-900 rounded-xl border border-neutral-800 ">
        <img src={explorecardimg} alt="" />
        <div className="flex justify-between mt-4">
          <h2 className="text-white ">Action</h2>
          <img src={right} alt="" />
        </div>
      </div>
    </div>
  );
  be;
};
export default ExploreCard;
