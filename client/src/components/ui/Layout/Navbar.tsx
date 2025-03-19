import Link from "next/link";
import React from "react";
import { MenuItems } from "@/types/Home";
import { Button } from "../button";
import { Sheet, SheetContent, SheetTrigger } from "../sheet";
import { Menu } from "lucide-react";
// import { DarkMode } from "@/components/DarkMode";

const menuItems: MenuItems[] = [
  { id: 0, name: "Home", link: "/" },
  { id: 1, name: "Find Doctors", link: "/doctors-list" },
  { id: 2, name: "Our Services", link: "/services" },
  { id: 3, name: "About Us", link: "/about-us" },
  { id: 4, name: "Contact Us", link: "/contact-us" },
];
export default function Navbar() {


  return (
    <nav className="flex w-full h-20 bg-[#e6f2ff] justify-around items-center">
      {/* {LOGO} */}
      <Link href={"/"} className="text-xl font-semibold">
        Vets-For-Pets
      </Link>

      {/* Desktop Navigation */}
      <div className="border hidden md:flex border-white bg-[#EAF4FE] p-2 rounded-2xl">
        {menuItems.map((item) => (
          <span
            key={item.id}
            className="flex-row  px-4  text-gray-700 hover:font-bold hover:text-blue-800"
          >
            <Link href={item.link}>{item.name}</Link>
          </span>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button aria-label="Mobile Navigation" variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <span
                  key={item.id}
                  className="flex-row m-5 px-4  text-gray-700 hover:font-bold hover:text-blue-800"
                >
                  <Link href={item.link}>{item.name}</Link>
                </span>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <button className="bg-black font-semibold text-white p-3 rounded-3xl hover:text-black hover:bg-white hover:border hover:border-black">
        <Link className="p-4" href={"/login"}>
          Get Started
        </Link>
      </button>
      {/* <DarkMode /> */}
    </nav>
  );
}
