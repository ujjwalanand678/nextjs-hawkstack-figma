
import { FaLinkedinIn } from "react-icons/fa6";
import { LuTwitter } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { IoShieldOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-12 md:py-20 px-4 md:px-6 lg:px-26">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <div className="col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#5373FF] to-[#3D5AE6] flex items-center justify-center text-white shadow-[0_0_40px_10px_rgba(80,80,255,0.35)] font-bold">
              <IoShieldOutline size={20} />
            </div>
            <span className="text-xl font-semibold">HawkStack</span>
          </div>

          <p className="text-gray-400 leading-relaxed max-w-xs text-sm">
            Enterprise AI & Cloud Security Solutions for modern businesses
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Features</li>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>API Reference</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Security</li>
            <li>Compliance</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 border-t border-white/20"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 mt-6 px-2">
        <p className="text-gray-400 text-sm">
          © 2025 HawkStack × RedHat. All rights reserved.
        </p>

        <div className="flex items-center gap-5 text-[#5373FF] text-xl">
          <FaLinkedinIn />
          <LuTwitter />
          <FiGithub />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
