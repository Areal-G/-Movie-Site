import logo from "../assets/images/Logo.svg";
import searchIcon from "../assets/images/searchIcon.svg";
import notificationIcon from "../assets/images/notificationIcon.svg";
import hamburger from "../assets/images/hamburButton.svg";
import { useState } from "react";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative mx-6 mt-3 flex h-[90px] items-center justify-between lg:mx-[80px] lg:mt-3">
      <div className="logo ">
        <img className="  h-[35] lg:h-[50px]" src={logo} alt="logo" />
      </div>

      <ul className=" hidden h-[61px] items-center border-[3px] border-[#1F1F1F] bg-black text-[14px] text-white lg:flex lg:rounded-[10px]">
        <li className=" mx-4">
          <button className="h-[45px] rounded-[8px] bg-[#1A1A1A] px-[20px] py-[12px]">
            <a href="" className="   ">
              Home
            </a>
          </button>
        </li>
        <li className=" mx-4 text-[#BFBFBF]">
          <button>
            <a href="">Movies&Shows</a>
          </button>
        </li>
        <li className=" mx-4 text-[#BFBFBF]">
          <button>
            <a href="">Support</a>
          </button>
        </li>
        <li className=" mx-4 text-[#BFBFBF]">
          <button>
            <a href="">Subscription</a>
          </button>
        </li>
      </ul>

      <img onClick={toggleMenu} className="lg:hidden" src={hamburger} alt="" />

      {isOpen && (
        <ul className=" absolute right-0 top-20 w-[50%] rounded-md border-4 border-neutral-800 bg-[#1A1A1A] bg-opacity-100 text-center text-base  text-white lg:hidden ">
          <li>
            <div className=" mx-auto flex w-[70%] justify-between  py-2">
              <img className=" h-[24px] px-[7px]" src={searchIcon} alt="" />
              <img className=" h-[24px] px-2" src={notificationIcon} alt="" />
            </div>
          </li>
          <li className=" border-y border-white py-3">
            <button className="">
              <a href="" className=" ">
                Home
              </a>
            </button>
          </li>
          <li className=" py-3">
            <button>
              <a href="">Movies&Shows</a>
            </button>
          </li>
          <li className=" border-t border-white py-3">
            <button>
              <a href="">Support</a>
            </button>
          </li>
          <li className="    border-t border-white py-3">
            <button>
              <a href="">Subscription</a>
            </button>
          </li>
        </ul>
      )}

      <div className=" hidden items-center justify-end  lg:flex">
        <img className=" h-[24px] px-[7px]" src={searchIcon} alt="" />
        <img className=" h-[24px] px-2" src={notificationIcon} alt="" />
      </div>
    </div>
  );
};
