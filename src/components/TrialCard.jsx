export const TrialCard = () => {
  return (
    <div className="bgimage  mx-auto mt-20 h-[358px] w-[90%] px-[30px] py-[50px] lg:my-32  lg:flex lg:h-[250px] lg:items-center lg:justify-between lg:pr-20">
      <div className="flex flex-col items-center lg:ml-20">
        <h4 className="mb-3 w-[298px] text-center text-2xl font-bold text-white lg:w-full lg:text-3xl ">
          Start your free trial today!
        </h4>
        <p className="mb-[50px] w-[298px] text-center text-sm text-[#999] lg:mb-0 lg:w-full lg:text-base">
          This is a clear and concise call to action that encourages users to
          sign up for a free trial of StreamVibe.
        </p>
      </div>
      <div className="flex justify-center">
        <button className="h-12 w-40 rounded-md bg-[#E50000] text-sm text-white">
          Start a Free Trail
        </button>
      </div>
    </div>
  );
};
