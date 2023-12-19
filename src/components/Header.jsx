import { FaSearch } from "react-icons/fa";
import { PiDiamondsFourFill } from "react-icons/pi";
import { IoStatsChart } from "react-icons/io5";
import { MdShoppingBasket } from "react-icons/md";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowBack } from "react-icons/io";
import { PiStackSimpleFill } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { MdDocumentScanner } from "react-icons/md";

import { useContext, useState } from "react";
import { MenuContext } from "../context";

const Header = () => {
  const { menu, setMenu } = useContext(MenuContext);
  const [subMenu, setSubMenu] = useState(false);

  const handleMenuShow = () => {
    setMenu(!menu);
  };

  const handleSubMenuShow = () => {
    setSubMenu(!subMenu);
  };

  return (
    <header>
      {menu && (
        <div className="absolute left-0 top-0 z-10 h-full w-[80%] bg-[#1E1E2D] px-8 py-4 text-white md:w-[23%]">
          <div className="flex items-center justify-between md:flex-wrap">
            <h3 className="text-3xl font-extrabold uppercase">Dashboard</h3>
            <IoIosArrowBack
              className="h-7 w-7 cursor-pointer text-[#6993FF] hover:scale-95"
              onClick={handleMenuShow}
            />
          </div>
          <div className="mb-7 mt-10 flex gap-3 text-sm">
            <PiStackSimpleFill className="h-5 w-5 text-[#6993FF]" />
            <p>Dashboard</p>
          </div>
          <p className="mb-6 text-xs uppercase text-[#4A4B68]">custom</p>
          <div>
            <div
              className="flex w-full cursor-pointer items-center gap-4"
              onClick={handleSubMenuShow}
            >
              <TfiLayoutGrid2Alt className="text-[#6993FF]" />
              <p>Applications</p>
              <FaChevronDown className="ml-auto" />
            </div>
            {subMenu && (
              <div>
                <ul className="ml-4 mt-4 flex flex-col gap-4">
                  <li className="flex cursor-pointer justify-between text-xs text-[#888C9F]">
                    <p>- Users</p>
                    <IoIosArrowForward />
                  </li>
                  <li className="flex cursor-pointer justify-between text-xs text-[#888C9F]">
                    <p>- Contacts</p>
                    <IoIosArrowForward />
                  </li>
                  <li className="flex cursor-pointer justify-between text-xs text-[#888C9F]">
                    <p>- Chat</p>
                    <IoIosArrowForward />
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="mt-4 flex items-center gap-4 text-[#888C9F]">
            <MdDocumentScanner />
            <p>Pages</p>
            <IoIosArrowForward className="ml-auto cursor-pointer" />
          </div>
        </div>
      )}
      <div className="flex h-20 items-center justify-between gap-4 bg-white px-4">
        <button onClick={handleMenuShow}>
          <GiHamburgerMenu className="h-7 w-7 cursor-pointer text-[#6993FF] hover:scale-95" />
        </button>
        <div className="flex items-center gap-4">
          <div className="flex gap-5">
            <FaSearch className="h-5 w-5 cursor-pointer text-[#6993FF] hover:scale-95" />
            <PiDiamondsFourFill className="h-5 w-5 cursor-pointer text-[#6993FF] hover:scale-95" />
            <IoStatsChart className="h-5 w-5 cursor-pointer text-[#6993FF] hover:scale-95" />
            <MdShoppingBasket className="h-5 w-5 cursor-pointer text-[#6993FF] hover:scale-95" />
            <TfiLayoutGrid2Alt className="h-5 w-5 cursor-pointer text-[#6993FF] hover:scale-95" />
          </div>
          <p className="text-xs capitalize text-[#959CB6]">Faisal Husain</p>
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#D7F9EF] text-[#0BB783]">
            F
          </div>
        </div>
      </div>
      <div className="border-b"></div>
    </header>
  );
};

export default Header;
