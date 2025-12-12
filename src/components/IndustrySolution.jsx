import { FaBuildingColumns } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaSignal } from "react-icons/fa";
import { LuFactory } from "react-icons/lu";
import { TbActivityHeartbeat } from "react-icons/tb";

const IndustrySolution = () => {
  const industries = [
    {
      title: "Banking & Insurance",
      subtitle: "Secure, compliant infrastructure",
      iconBg: "from-[#EE0000] to-[#CC0000]",
      icon: <FaBuildingColumns size={26} className="text-white" />,
    },
    {
      title: "E-commerce & Retail",
      subtitle: "Scalable customer experiences",
      iconBg: "from-[#5373FF] to-[#4060DD]",
      icon: <HiOutlineShoppingCart size={26} className="text-white" />,
    },
    {
      title: "Telecom",
      subtitle: "High-performance networks",
      iconBg: "from-[#468966] to-[#357755]",
      icon: <FaSignal size={26} className="text-white" />,
    },
    {
      title: "Manufacturing",
      subtitle: "Digital transformation",
      iconBg: "from-[#EE0000] to-[#5373FF]",
      icon: <LuFactory size={26} className="text-white" />,
    },
    {
      title: "Healthcare & Technology",
      subtitle: "Innovation & reliability",
      iconBg: "from-[#5373FF] to-[#468966]",
      icon: <TbActivityHeartbeat size={26} className="text-white" />,
    },
  ];

  return (
    <section className="w-full text-center py-16 md:py-24 px-4 sm:px-8 md:px-14 lg:px-20 relative">

      <div className="inline-block px-4 sm:px-5 py-2 sm:py-3 bg-linear-to-r from-blue-200 to-pink-200 rounded-full text-gray-700 text-xs sm:text-sm mb-5 sm:mb-6">
        Industry Solutions
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-3 sm:mb-4">
        Powering Industries
      </h2>

      <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-10 sm:mb-14 md:mb-16 max-w-xl mx-auto px-2">
        Delivering Red Hat consulting excellence across diverse sectors
      </p>

      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-5 
        gap-5 sm:gap-6 md:gap-8 
        max-w-7xl mx-auto
      ">
        {industries.map((item, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 rounded-2xl bg-linear-to-br from-[#F9FAFB] to-[#FFFFFF] 
            border border-gray-200 shadow-[0_8px_20px_rgba(0,0,0,0.06)] 
            hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] transition-all"
          >
            <div
              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-linear-to-br ${item.iconBg} 
              flex items-center justify-center mb-4 sm:mb-6 mx-auto drop-shadow-xl`}
            >
              {item.icon}
            </div>

            <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-1 sm:mb-2">
              {item.title}
            </h3>

            <p className="text-gray-500 text-xs sm:text-sm">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 sm:mt-12 md:mt-14">
        <button className="
          px-6 sm:px-8 md:px-10 
          py-3 sm:py-4 
          bg-linear-to-r from-red-500 to-blue-500 
          text-white rounded-xl 
          text-sm sm:text-md md:text-lg 
          shadow-lg hover:scale-105 transition
        ">
          Discuss Your Industry Needs
        </button>
      </div>
    </section>
  );
};

export default IndustrySolution;
