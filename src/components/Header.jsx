"use client"
import logo1 from "@/assets/images/logo1.png";
import logo2 from "@/assets/images/logo2.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black w-full px-4 sm:px-8 md:px-16 lg:px-26 py-3 flex items-center justify-between">
      
      <div className="flex items-center gap-3 sm:gap-4">
        <Image src={logo2} alt="logo" width={80} height={100} className="w-14 sm:w-20" />
        <Image src={logo1} alt="logo" width={80} height={100} className="w-14 sm:w-20" />
      </div>

      <nav className="hidden md:flex text-white text-sm gap-8 font-medium">
        <Link href="#">Home</Link>
        <Link href="#">HawkStack Approach</Link>
        <Link href="#">Red Hat Services</Link>
        <Link href="#">RHCSA Certification</Link>
      </nav>

      <div className="hidden md:flex items-center gap-4">
        <Link href="#">
          <button className="bg-[#242424] text-gray-100 py-2 px-5 rounded-full hover:bg-gray-800 hover:scale-105 transition">
            Contact Us
          </button>
        </Link>
        <Link href="#">
          <button className="bg-[#5373FF] text-gray-100 py-2 px-5 rounded-full hover:bg-blue-600 hover:scale-105 transition">
            Talk to Learning Team
          </button>
        </Link>
      </div>

      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setOpen(!open)}
      >
        {open ? <HiX /> : <HiOutlineMenu />}
      </button>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-black border-t border-white/10 flex flex-col items-center gap-6 py-6 z-50">

          <nav className="flex flex-col text-white text-base gap-4 font-medium">
            <Link href="#" onClick={() => setOpen(false)}>Home</Link>
            <Link href="#" onClick={() => setOpen(false)}>HawkStack Approach</Link>
            <Link href="#" onClick={() => setOpen(false)}>Red Hat Services</Link>
            <Link href="#" onClick={() => setOpen(false)}>RHCSA Certification</Link>
          </nav>

          <div className="flex flex-col gap-3 w-10/12">
            <Link href="#" onClick={() => setOpen(false)}>
              <button className="w-full bg-[#242424] py-3 rounded-full text-white hover:bg-gray-800 transition">
                Contact Us
              </button>
            </Link>
            <Link href="#" onClick={() => setOpen(false)}>
              <button className="w-full bg-[#5373FF] py-3 rounded-full text-white hover:bg-blue-600 transition">
                Talk to Learning Team
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
