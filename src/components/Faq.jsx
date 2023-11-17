import { Faqcard } from "./Faqcard";

export const Faq = () => {
  return (
    <div className="mt-28 2xl:w-[90%] mx-auto ">
      <div className="w-[90%] mx-auto ">
        <h3 className=" text-white text-xl font-bold lg:text-3xl mb-3">
          Frequently Asked Questions
        </h3>
        <p className=" text-[#999] font-normal text-sm lg:text-base">
          Got questions? We've got answers! Check out our FAQ section to find
          answers to the most common questions about StreamVibe.
        </p>
      </div>

      <div className="flex justify-center">
        <Faqcard />
      </div>
    </div>
  );
};
