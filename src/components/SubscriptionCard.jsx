export const SubscriptionCard = (prop) => {
  return (
    <div className=" mt-5 w-[358px]  md:w-[70%] xl:w-[358px] md:mx-auto h-[275px] 2xl:w-[413px] lg:h-[345px] p-6 lg:p-10 border border-solid border-[#262626] rounded-[10px] bg-[#1A1A1A]">
      <h4 className="text-lg lg:text-xl text-white mb-[10px] lg:mb-3">
        {prop.title}
      </h4>
      <p className="text-[#999] text-sm lg:text-base">{prop.description}</p>
      <h3 className="text-white text-2xl lg:text-3xl my-[30px] lg:my-10">
        {prop.price}
        <span className=" text-sm lg:text-base text-[#999]">/month</span>
      </h3>
      <div className="flex justify-between">
        <button className="text-sm text-white bg-[#141414] border border-solid border-[#262626] rounded-md w-40 h-12 ">
          Start Free Trial
        </button>
        <button className="text-sm text-white bg-[#E50000] rounded-md w-40 h-12">
          Choose Plan
        </button>
      </div>
    </div>
  );
};
