export const TrialCard = () => {
  return (
    <div className="lg:flex  mt-20 lg:mt-[135px] w-[90%] mx-auto h-[358px] lg:h-[250px] bgimage lg:items-center  lg:mb-96 lg:justify-between lg:pr-20 px-[30px] py-[50px]">
      <div className="lg:ml-20 flex flex-col items-center">
        <h4 className="text-2xl font-bold text-center lg:text-3xl text-white mb-3 w-[298px] lg:w-full ">
          Start your free trial today!
        </h4>
        <p className="text-[#999] text-center mb-[50px] lg:mb-0 text-sm lg:text-base w-[298px] lg:w-full">
          This is a clear and concise call to action that encourages users to
          sign up for a free trial of StreamVibe.
        </p>
      </div>
      <div className="flex justify-center">
        <button className="text-sm text-white bg-[#E50000] rounded-md w-40 h-12">
          Start a Free Trail
        </button>
      </div>
    </div>
  );
};
