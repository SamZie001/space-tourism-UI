"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/shared/logo.svg";
import hamburger from "@/assets/shared/icon-hamburger.svg";
import close from "@/assets/shared/icon-close.svg";

const NavList = ({ direction }: { direction: "row" | "col" }) => {
  const pathname = usePathname();

  interface INavRoutes {
    label: string;
    href: string;
  }

  const routes: INavRoutes[] = [
    { label: "home", href: "/" },
    { label: "destination", href: "/destination" },
    { label: "crew", href: "/crew" },
    { label: "technology", href: "/technology" },
  ];
  return (
    <ul
      className={`flex ${direction === "row" ? "h-full flex-row space-x-7 pl-12 pr-10 lg:pl-20" : "flex-col space-y-5"}`}
    >
      {routes.map((route, ind) => (
        <li
          key={ind}
          className={`withTransition | border-transparent hover:border-secondary/20 ${
            direction === "row"
              ? "flex items-center border-b-4"
              : "border-r-4 pl-10"
          } ${pathname === route.href ? "border-white" : ""}`}
        >
          <a
            href={route.href}
            className={`nav-text | flex space-x-2 uppercase ${direction === "row" ? "h-full items-center" : "w-full"}`}
          >
            <span className="font-extrabold">0{ind}</span>{" "}
            <span>{route.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="mb-10 flex h-[88px] w-full items-center justify-between p-5 md:p-0 lg:mt-5">
      <Link href="/" className="md:ml-4">
        <Image src={logo} alt="" width={48} height={48} />
      </Link>
      {/* mobile */}
      <div className="md:hidden">
        <Image
          src={hamburger}
          alt=""
          width={24}
          height={21}
          className="cursor-pointer"
          onClick={() => setShow(true)}
        />

        {/* Side mobile nav */}
        <div
          className={`${show ? "animate-slide-in-right" : "animate-slide-out-right"} fixed -right-full top-0 flex h-screen w-3/5 flex-col space-y-8 bg-primary/50 backdrop-blur-lg`}
        >
          <Image
            src={close}
            alt=""
            width={24}
            height={21}
            className="mx-5 my-12 ml-auto mt-7 cursor-pointer"
            onClick={() => setShow(false)}
          />
          <NavList direction="col" />
        </div>
      </div>

      {/* Tablet */}
      <div className="relative hidden h-full bg-secondary/5 backdrop-blur-xl md:block">
        <div className="absolute -left-[60%] top-[50%] hidden h-[3px] w-[460px] bg-secondary/5 backdrop-blur-lg lg:block"></div>
        <NavList direction="row" />
      </div>
    </div>
  );
};

export default Navbar;
