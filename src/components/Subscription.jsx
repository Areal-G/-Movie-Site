import { SubscriptionCard } from "./SubscriptionCard";

export const Subscription = () => {
  return (
    <div className="mt-20 lg:mt-28 2xl:w-[90%] mx-auto ">
      <div className="">
        <h3 className="w-[90%] mx-auto text-white text-2xl lg:text-3xl mb-3">
          Choose the plan that's right for you
        </h3>
        <p className="w-[90%] mx-auto text-[#999] text-sm lg;text-base">
          Join StreamVibe and select from our flexible subscription options
          tailored to suit your viewing preferences. Get ready for non-stop
          entertainment!
        </p>
      </div>

      <div className=" mt-10 lg:mt-[60px] flex items-center flex-col  lg:flex-row lg:justify-between ">
        <SubscriptionCard
          title={"Basic Plan"}
          description={
            "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released."
          }
          price={"$9.99"}
        />
        <SubscriptionCard
          title={"Standard Plan"}
          description={
            "Access to a wider selection of movies and shows, including most new releases and exclusive content"
          }
          price={"$12.99"}
        />
        <SubscriptionCard
          title={"Premium Plan"}
          description={
            "Access to a widest selection of movies and shows, including all new releases and Offline Viewing"
          }
          price={"$14.99"}
        />
      </div>
    </div>
  );
};
