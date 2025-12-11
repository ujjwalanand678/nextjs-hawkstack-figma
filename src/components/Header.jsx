import logo1 from "@/assets/images/logo1.png";
import logo2 from "@/assets/images/logo2.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-black flex justify-between items-center py-3 px-26">
      <div className="flex items-center gap-4">
        <Image src={logo2} alt="logo" width={100} height={120} />
        <Image src={logo1} alt="logo" width={100} height={120} />
      </div>
      <div className="text-white text-xs gap-8 flex font-medium ">
        <Link href="#">Home</Link>
        <Link href="#">HawkStack Approach</Link>
        <Link href="#">Red Hat Services</Link>
        <Link href="#">RHCSA Certification</Link>
      </div>
      <div className="text-white gap-4 flex">
        <Link href="#">
          <button className="bg-[#242424] py-2 px-4 rounded-full hover:bg-gray-800 cursor-pointer hover:scale-105 transition-transform duration-200">
            Contact Us
          </button>
        </Link>
        <Link href="#" >
          <button className="bg-[#5373FF] py-2 px-4 rounded-full hover:bg-blue-600 hover:scale-105 transition-transform duration-200">
            Talk to Learning Team
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
