"use client";
import React, { useState } from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiMenu,
} from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";
// import CustomNotification from "../customNotification"
import Link from "next/link";
import { usePathname } from "next/navigation";
import Contact from "../contact/Contact";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const isActive = (i: any) => i === pathname;
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="">
      <div className="hidden lg:flex  justify-between items-center contact-details">
        <div className="wrapper md:w-[380px]  lg:w-[450px] xl:w-[500px]">
          <img
            className="md:w-full w-[80%] h-[60%] md:pb-4 md:h-full"
            src="/assets/images/headerSvg.png"
          />
        </div>
        <div className="socials-container hidden md:flex items-center space-x-4 pr-20">
          <Link
            target="_blank"
            href={"https://www.facebook.com/profile.php?id=100084750135073"}
          >
            <div className="rounded-full hover:bg-blue-400 text-2xl p-3">
              <BiLogoFacebook />
            </div>
          </Link>
          <Link target="_blank" href={"https://twitter.com/campaignkart"}>
            <div className="rounded-full hover:bg-blue-400 text-2xl p-3">
              <BiLogoTwitter />
            </div>
          </Link>
          <Link
            target="_blank"
            href={"https://www.instagram.com/campaignakrt/"}
          >
            <div className="rounded-full hover:bg-blue-400 text-2xl p-3">
              <BiLogoInstagram />
            </div>
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex items-center  justify-between md:py-6 px-20">
        <Link shallow href={"/"}>
          <div className="">
            <img
              className="lg:w-[65%] xl:w-full"
              src="/assets/images/logo.png"
            />
          </div>
        </Link>
        <div className="flex items-center ">
          <ul className="flex xl:space-x-10 lg:space-x-5 lg:text-sm xl:text-lg font-medium pr-10">
            <Link shallow href={"/"}>
              <li className={isActive("/") ? "active-class" : ""}>Home</li>
            </Link>
            <Link shallow href={"/about"}>
              <li className={isActive("/about") ? "active-class" : ""}>
                About Us
              </li>
            </Link>
            <Link shallow href={"/services"}>
              <li className={isActive("/services") ? "active-class" : ""}>
                Services
              </li>
            </Link>
            <Link href={"/cases"}>
              <li className={isActive("/cases") ? "active-class" : ""}>
                Cases
              </li>
            </Link>
            <Link shallow href={"/team"}>
              <li className={isActive("/team") ? "active-class" : ""}>Team</li>
            </Link>
            <Link shallow href={"/blog"}>
              <li className={isActive("/blog") ? "active-class" : ""}>Blog</li>
            </Link>
          </ul>
          <div>
            <Link shallow href={"/contact"}>
              <Contact />
            </Link>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div className="flex items-center  justify-between py-4 px-10 md:px-20 lg:hidden">
        <Link shallow href={"/"}>
          <div className="">
            <img
              className="w-[45%] md:w-[65%] xl:w-full"
              src="/assets/images/logo.png"
            />
          </div>
        </Link>
        <div
          className="menu-icon text-3xl text-brand_secondary"
          onClick={toggleMenu}
        >
          <BiMenu />
        </div>
      </div>

      {/* mobile menu */}
      <aside
        className={`fixed z-10 pt-11 top-0 right-0 h-full w-2/3 bg-brand_secondary   text-white  transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col space-y-3">
          <Link shallow href="/">
            <li className="hover:text-brand_secondary cursor-pointer border-b pb-1 pl-2">
              Home
            </li>
          </Link>
          <Link shallow href="/about">
            <li className="hover:text-brand_secondary cursor-pointer border-b pb-1 pl-2">
              About us
            </li>
          </Link>
          <Link shallow href="/services">
            <li className="hover:text-brand_secondary cursor-pointer border-b pb-1 pl-2">
              Services
            </li>
          </Link>
          <Link shallow href={"/team"}>
            <li className="hover:text-brand_secondary cursor-pointer border-b pb-1 pl-2">
              Team
            </li>
          </Link>
          <Link shallow href={"/blog"}>
            <li className="hover:text-brand_secondary cursor-pointer border-b pb-1 pl-2">
              Blog
            </li>
          </Link>
          <Link shallow href={"/cases"}>
            <li className="hover:text-brand_secondary cursor-pointer border-b pb-1 pl-2">
              Cases
            </li>
          </Link>
        </ul>
        <div className="pt-4 pl-2">
          <Link shallow href={"/contact"}>
            <Contact />
          </Link>
        </div>
        <div
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-10 text-white text-3xl hover:text-brand_secondary"
        >
          <RiCloseFill />
        </div>
      </aside>
      {/* <CustomNotification /> */}
    </div>
  );
};

export default Navbar;


