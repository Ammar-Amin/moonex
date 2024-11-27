import React from "react";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import logo from "../assets/footer-logo.png";
import { motion } from "framer-motion";

export default function Navbar() {
  const mobileNav = [
    {
      name: "Home",
      path: "/",
      active: true,
    },
    {
      name: "About Us",
      path: "/about",
      active: true,
    },
    {
      name: "Roadmap",
      path: "/roadmap",
      active: true,
    },
    {
      name: "FAQs",
      path: "/faq",
      active: true,
    },
    {
      name: "Contact Us",
      path: "/contact",
      active: true,
    },
  ];

  return (
    <motion.nav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 1 }}
      className="absolute top-0 left-0 w-full z-50"
    >
      <div className="flex-between w-full max-w-7xl mx-auto">
        <div className="w-full lg:w-auto flex justify-between lg:justify-center items-center xl:gap-16">
          <div className="flex-center">
            <img
              src={logo}
              alt=""
              className="w-20 h-[50px] lg:w-36 lg:h-24 object-cover object-top"
            />
            <img
              src={logo}
              alt=""
              className="w-32 h-[49px] ml-[-40px] lg:ml-[-50px] mt-9 lg:w-52 lg:h-20 object-cover object-bottom"
            />
            {/* <span className="ml-[-20px] text-2xl font-bold bg-gradient-to-tr from-[#f0e66d] to-yel text-transparent bg-clip-text">
            Moonex
          </span> */}
          </div>
          <div className="hidden pr-6 lg:pr-0 md:flex justify-center gap-6">
            {mobileNav.map(
              (item) =>
                item.active && (
                  <span key={item.name}>
                    <a
                      href={item.path}
                      className="pl-4 py-1 text-left lg:text-center text-sm lg:text-base font-bold hover:text-yel"
                    >
                      {item.name}
                    </a>
                  </span>
                )
            )}
          </div>
        </div>

        <button className="px-6 py-2 hidden lg:block rounded-full bg-gradient-to-br from-[#E4B40D] to-[#FBD966] text-black transition duration-300 ease-in-out transform border-2 border-transparent hover:border-[#E4B40D] hover:bg-none hover:bg-transparent hover:text-[#E4B40D] hover:shadow-md active:scale-95">
          Connect Wallet
        </button>
        <div className="pr-4 md:hidden">
          {" "}
          <Sheet>
            <SheetTrigger>
              <span className="text-base sm:text-lg lg:text-xl">
                <i className="ri-menu-line text-xl"></i>
              </span>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription>
                  <SheetClose asChild>
                    <span className="h-full flex flex-col gap-2 pt-4">
                      {mobileNav.map(
                        (item) =>
                          item.active && (
                            <SheetClose key={item.name} asChild>
                              <a
                                key={item.name}
                                href={item.path}
                                className="pl-4 py-1 text-left text-slate-400 lg:text-center text-sm md:text-base font-medium hover:underline"
                              >
                                {item.name}
                              </a>
                            </SheetClose>
                          )
                      )}
                    </span>
                  </SheetClose>
                  <SheetClose asChild>
                    <span className="h-full flex flex-col gap-2 pt-4">
                      <SheetClose asChild>
                        <button className="px-6 py-2 rounded-full bg-gradient-to-br from-[#E4B40D] to-[#FBD966] text-black transition duration-300 ease-in-out transform border-2 border-transparent hover:border-[#E4B40D] hover:bg-none hover:bg-transparent hover:text-[#E4B40D] hover:shadow-md active:scale-95">
                          Connect Wallet
                        </button>
                      </SheetClose>
                    </span>
                  </SheetClose>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
