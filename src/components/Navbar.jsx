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
    <nav className="absolute top-0 left-0 w-full z-50">
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

        <button className="hidden lg:inline-block px-6 py-2 rounded-full font-semibold bg-gradient-to-br from-[#E4B40D] to-[#FBD966] text-black">
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
                        <button className="px-6 py-2 rounded-full font-semibold bg-gradient-to-br from-[#E4B40D] to-[#FBD966] text-black">
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
    </nav>
  );
}
