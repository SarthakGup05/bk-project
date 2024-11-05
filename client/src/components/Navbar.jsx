import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCallSharp, IoMenu, IoNotifications } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaTelegram, FaYoutube } from "react-icons/fa";

export function NavBar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-[40px]">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/Avyakt-murli"
          className="flex items-center text-xl xl:text-[13px] font-semibold uppercase"
        >
          Avyakt Murli
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/devine"
          className="flex items-center text-xl xl:text-[13px] font-semibold uppercase"
        >
          Divine Experience
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/article"
          className="flex items-center text-xl xl:text-[13px] font-semibold uppercase"
        >
          Articles
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/product"
          className="flex items-center text-xl xl:text-[13px] font-semibold uppercase"
        >
          Media
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/product"
          className="flex items-center text-xl xl:text-[13px] font-semibold uppercase"
        >
          Meditation Experience
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <div className="bg-white w-full fixed top-0 z-20 shadow-xl">
      <div className="container bg-white mx-auto">
        <div className="bg-white shadow-none h-max max-w-full rounded-none px-4">
          {/* Mobile Button */}
          <div className="flex lg:hidden items-center justify-center h-full gap-9">
            <div className="px-3 py-2 rounded text-[14px] text-white bg-[url('/images/gBg.avif')] bg-center bg-cover">
              <Link to="/exam" className="inline-block">
                <button className="px-4 py-2 bg-white text-gray-600 font-semibold rounded-lg shadow hover:bg-gray-200 transition duration-200">
                  Online Exams
                </button>
              </Link>
            </div>
          </div>
          <div className="grid lg:grid-cols-7 mb-2">
            <div className="col-span-3 hidden lg:block">
              <div className="flex items-center h-full gap-5">
                <NavLink
                  to="/exam"
                  className="px-3 py-1 rounded text-[14px] text-white bg-center bg-cover"
                  style={{
                    background:
                      "linear-gradient(117deg, rgba(255,106,0,1) 0%, rgba(255,200,161,1) 24%, rgba(252,104,0,1) 53%, rgba(255,175,119,1) 84%, rgba(255,106,0,1) 100%)",
                  }}
                >
                  <span className="font-semibold">Online Exams</span>
                </NavLink>
              </div>
            </div>
            <div className="flex justify-between items-center w-full lg:col-span-4">
              <IconButton
                variant="text"
                className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden pr-8"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <RxCross2 className="text-4xl" />
                ) : (
                  <IoMenu className="text-4xl" />
                )}
              </IconButton>
              <NavLink to="/">
                <img
                  src="/assets/images/logo/logo1.png"
                  className="w-[250px]"
                  alt="Logo"
                />
              </NavLink>

              <div className="flex items-center gap-[10px]">
                <NavLink className="pe-7 border-e-2 border-orange-400">
                  <IoNotifications className="text-orange-800 text-xl lg:text-2xl" />
                </NavLink>
                <a href="http://tiny.cc/aoshindiwapp">
                  <IoLogoWhatsapp className="text-green-800 text-xl lg:text-2xl" />
                </a>
                <a href="https://t.me/angelofshivahindi">
                  <FaTelegram className="text-blue-600 text-xl lg:text-2xl" />
                </a>
                <a href="https://www.youtube.com/@AngelofShiva">
                  <FaYoutube className="text-red-800 text-xl lg:text-2xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center text-blue-gray-900">
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
            </div>
          </div>
          <MobileNav open={openNav}>{navList}</MobileNav>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
