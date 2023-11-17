import { provideData } from "../assets/data";

export const ProvideCard = () => {
  return (
    <div className=" md: mt-16 grid-cols-2 gap-8 md:grid lg:grid lg:grid-cols-3 lg:px-6">
      {provideData.map((item, index) => {
        return (
          <div
            key={index}
            className="  mb-3 h-[175px] w-[361px] rounded-[10px]  border border-[#262626] bg-gradient-to-r from-red-500 via-transparent to-transparent p-6 lg:h-[230px] lg:p-10 2xl:w-[413px]"
            style={{
              background:
                "linear-gradient(222deg, rgba(229, 0, 0, 0.50) -208.03%, rgba(229, 0, 0, 0.00) 41.32%), #0F0F0F",
            }}
          >
            <div className="flex items-center ">
              <img
                className="h-[44px] lg:h-[54px]"
                src={item.image}
                alt="Icon"
              />
              <h2 className="ml-4 text-lg text-white lg:text-xl">
                {item.title}
              </h2>
            </div>
            <p className="mt-5 text-sm text-[#999] lg:mt-6 lg:text-base">
              {item.para}
            </p>
          </div>
        );
      })}
    </div>
  );
};
