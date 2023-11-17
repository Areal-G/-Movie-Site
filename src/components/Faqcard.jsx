import { faqData } from "../assets/data";
import plus from "../assets/images/plusIcon.svg";
import line from "../assets/images/faqLine.svg";

export const Faqcard = () => {
  return (
    <div className="mt-16 lg:grid grid-cols-2 md:grid ">
      {faqData.map((item) => {
        return (
          <div
            key={item.num}
            className="w-[358px] lg:w-[620px] px-3 pt-3 lg:px-6  2xl:pt-6 mt-4"
          >
            <div className="flex">
              <div className=" w-[42px] h-[46px] lg:w-[50px] lg:h-[54px] p-3 lg:p-4 bg-[#1F1F1F] rounded-lg mr-4">
                <div className="text-white text-base font-semibold  ">
                  {item.num}
                </div>
              </div>
              <div>
                <h5 className="text-white text-lg lg:text-xl mb-4">
                  {item.question}
                </h5>
                <p className="text-[#999] text-sm lg:text-base pr-3">
                  {item.answer}{" "}
                </p>
              </div>
              <div>
                <img className="h-6" src={plus} alt="" />
              </div>
            </div>
            <img className="mt-6" src={line} alt="" />
          </div>
        );
      })}
    </div>
  );
};
