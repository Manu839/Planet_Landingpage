import { useState } from "react";
import { NavLink } from "react-router-dom";
import chevron from "../assets/icon-chevron.svg";

const MainNavigation = () => {
  const [isActive, setIsActive] = useState(false);

  const activeMenuHandler = () => {
    setIsActive((currState) => !currState);
  };

  const activeLinkStyle =
    "relative xl:h-full xl:flex xl:justify-center xl:items-center xl:before:absolute xl:before:top-0 xl:before:h-1 xl:before:w-full  ";

  const notActiveLinkStyle =
    "relative xl:h-full xl:flex xl:justify-center xl:items-center ";

  return (
    <header className=" w-full   text-[#FFFFFF] md:h-40 md:flex md:flex-col md:border-white/20  md:border-b-[1px] md:justify-center md:items-center md:gap-10 xl:flex-row xl:h-20 xl:justify-between">
      <div className="flex justify-between items-center mx-6  h-16 md:h-fit md:pt-8 xl:pt-0 xl:ml-8 xl:mx-0">
        <h2 className="text-[28px] font-['Antonio']">THE PLANETS</h2>
        <div
          className="cursor-pointer h-6 items-center flex md:hidden"
          onClick={activeMenuHandler}
        >
          <div className=" caret-transparent w-6 h-[3px] relative bg-white before:absolute before:w-6 before:h-[3px] before:bg-white before:top-[7px] after:bottom-[7px] after:absolute after:w-6 after:h-[3px] after:bg-white"></div>
        </div>
      </div>
      <div className="border-b border-white opacity-20 md:hidden"></div>

      <nav
        className={
          isActive
            ? ` h-full fixed bg-[#070724] w-full z-10 `
            : "hidden md:flex xl:mr-10 xl:h-full"
        }
      >
        <ul
          className={
            isActive
              ? "grid grid-cols-1 grid-flow-row divide-y divide-solid divide-white/20  mt-11  font-['Spartan league'] tracking-[1.37px]"
              : "md:flex md:mt-0 md:divide-none md:gap-[33px] font-['Spartan league'] tracking-[1.37px]  "
          }
        >
          <li className="py-5 pl-6 pr-8 md:p-0 ">
            <NavLink
              to="/mercury"
              onClick={() => setIsActive(false)}
              className={({ isActive }) =>
                isActive
                  ? `${activeLinkStyle}  xl:before:bg-[#DEF4FC]`
                  : notActiveLinkStyle
              }
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div className="h-5 w-5 bg-[#DEF4FC] rounded-full md:hidden"></div>
                  <h3 className="text-[15px] font-bold uppercase md:text-[11px]">
                    Mercury
                  </h3>
                </div>
                <img
                  alt="Chevron Icon"
                  src={chevron}
                  className="h-2 w-1 md:hidden"
                />
              </div>
            </NavLink>
          </li>
          <li className="py-5 pl-6 pr-8 md:p-0 ">
            <NavLink
              to="/venus"
              onClick={() => setIsActive(false)}
              className={({ isActive }) =>
                isActive
                  ? `${activeLinkStyle} xl:before:bg-[#F7CC7F]`
                  : notActiveLinkStyle
              }
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div className="h-5 w-5 bg-[#F7CC7F] rounded-full md:hidden"></div>
                  <h3 className="text-[15px] font-bold uppercase md:text-[11px]">
                    Venus
                  </h3>
                </div>
                <img
                  alt="Chevron Icon"
                  src={chevron}
                  className="h-2 w-1 md:hidden"
                />
              </div>
            </NavLink>
          </li>
          <li className="py-5 pl-6 pr-8 md:p-0 ">
            <NavLink
              to="/"
              onClick={() => setIsActive(false)}
              className={({ isActive }) =>
                isActive
                  ? `${activeLinkStyle} xl:before:bg-[#545BFE]`
                  : notActiveLinkStyle
              }
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div className="h-5 w-5 bg-[#545BFE] rounded-full md:hidden"></div>
                  <h3 className="text-[15px] font-bold uppercase md:text-[11px]">
                    Earth
                  </h3>
                </div>
                <img
                  alt="Chevron Icon"
                  src={chevron}
                  className="h-2 w-1 md:hidden"
                />
              </div>
            </NavLink>
          </li>
          <li className="py-5 pl-6 pr-8 md:p-0 ">
            <NavLink
              to="/mars"
              onClick={() => setIsActive(false)}
              className={({ isActive }) =>
                isActive
                  ? `${activeLinkStyle} xl:before:bg-[#FF6A45]`
                  : notActiveLinkStyle
              }
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div className="h-5 w-5 bg-[#FF6A45] rounded-full md:hidden"></div>
                  <h3 className="text-[15px] font-bold uppercase md:text-[11px]">
                    Mars
                  </h3>
                </div>
                <img
                  alt="Chevron Icon"
                  src={chevron}
                  className="h-2 w-1 md:hidden"
                />
              </div>
            </NavLink>
          </li>
          <li className="py-5 pl-6 pr-8 md:p-0 ">
            <NavLink
              to="/jupiter"
              onClick={() => setIsActive(false)}
              className={({ isActive }) =>
                isActive
                  ? `${activeLinkStyle} xl:before:bg-[#ECAD7A]`
                  : notActiveLinkStyle
              }
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div className="h-5 w-5 bg-[#ECAD7A] rounded-full md:hidden"></div>
                  <h3 className="text-[15px] font-bold uppercase md:text-[11px]">
                    Jupiter
                  </h3>
                </div>
                <img
                  alt="Chevron Icon"
                  src={chevron}
                  className="h-2 w-1 md:hidden"
                />
              </div>
            </NavLink>
          </li>
          <li className="py-5 pl-6 pr-8 md:p-0 ">
            <NavLink
              to="/saturn"
              onClick={() => setIsActive(false)}
              className={({ isActive }) =>
                isActive
                  ? `${activeLinkStyle} xl:before:bg-[#FCCB6B]`
                  : notActiveLinkStyle
              }
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div className="h-5 w-5 bg-[#FCCB6B] rounded-full md:hidden"></div>
                  <h3 className="text-[15px] font-bold uppercase md:text-[11px]">
                    Saturn
                  </h3>
                </div>
                <img
                  alt="Chevron Icon"
                  src={chevron}
                  className="h-2 w-1 md:hidden"
                />
              </div>
            </NavLink>
          </li>
          <li className="py-5 pl-6 pr-8 md:p-0 ">
            <NavLink
              to="/uranus"
              onClick={() => setIsActive(false)}
              className={({ isActive }) =>
                isActive
                  ? `${activeLinkStyle} xl:before:bg-[#65F0D5]`
                  : notActiveLinkStyle
              }
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div className="h-5 w-5 bg-[#65F0D5] rounded-full md:hidden"></div>
                  <h3 className="text-[15px] font-bold uppercase md:text-[11px]">
                    Uranus
                  </h3>
                </div>
                <img
                  alt="Chevron Icon"
                  src={chevron}
                  className="h-2 w-1 md:hidden"
                />
              </div>
            </NavLink>
          </li>
          <li className="py-5 pl-6 pr-8 md:p-0 ">
            <NavLink
              to="neptune"
              onClick={() => setIsActive(false)}
              className={({ isActive }) =>
                isActive
                  ? `${activeLinkStyle} xl:before:bg-[#497EFA]`
                  : notActiveLinkStyle
              }
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div className="h-5 w-5 bg-[#497EFA] rounded-full md:hidden"></div>
                  <h3 className="text-[15px] font-bold uppercase md:text-[11px]">
                    Neptune
                  </h3>
                </div>
                <img
                  alt="Chevron Icon"
                  src={chevron}
                  className="h-2 w-1 md:hidden"
                />
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
