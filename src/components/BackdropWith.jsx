import { Backdrop } from "./Backdrop";
import bg from "../assets/images/BgImage.svg";

export const BackdropWith = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <Backdrop />
      </div>
      <img src={bg} alt="" className="w-full relative z-10" />
    </div>
  );
};
