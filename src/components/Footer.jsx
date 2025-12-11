import { FaLinkedinIn } from "react-icons/fa6";
import { LuTwitter } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { IoShieldOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-20 px-26">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
     
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl bg-linear-to-br from-[#5373FF] to-[#3D5AE6] flex items-center justify-center text-white
              shadow-[0_0_40px_10px_rgba(80,80,255,0.35)] font-bold"
            >
              <IoShieldOutline size={24} />
            </div>
            <span className="text-2xl font-semibold">HawkStack</span>
          </div>

          <p className="text-gray-400 leading-relaxed max-w-xs">
            Enterprise AI & Cloud Security Solutions for modern businesses
          </p>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4">Product</h3>
          <ul className="space-y-3 text-gray-400">
            <li>Features</li>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>API Reference</li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-gray-400">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-3 text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Security</li>
            <li>Compliance</li>
          </ul>
        </div>
      </div>

  
      <div className="max-w-7xl mx-auto mt-16 border-t border-white/20"></div>

    
      <div className="max-w-7xl mx-auto flex justify-between items-center mt-6">
  
        <p className="text-gray-400 text-sm">
          © 2025 HawkStack × RedHat. All rights reserved.
        </p>

       
        <div className="flex items-center gap-6 text-[#5373FF] text-2xl">
          <FaLinkedinIn />
          <LuTwitter />
          <FiGithub />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
