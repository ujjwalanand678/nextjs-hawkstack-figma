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
      icon: <FaBuildingColumns size={28} className="text-white" />,
    },
    {
      title: "E-commerce & Retail",
      subtitle: "Scalable customer experiences",
      iconBg: "from-[#5373FF] to-[#4060DD]",
      icon: <HiOutlineShoppingCart size={28} className="text-white" />,
    },
    {
      title: "Telecom",
      subtitle: "High-performance networks",
      iconBg: "from-[#468966] to-[#357755]",
      icon: <FaSignal size={28} className="text-white" />,
    },
    {
      title: "Manufacturing",
      subtitle: "Digital transformation",
      iconBg: "from-[#EE0000] to-[#5373FF]",
      icon: <LuFactory size={28} className="text-white" />,
    },
    {
      title: "Healthcare & Technology",
      subtitle: "Innovation & reliability",
      iconBg: "from-[#5373FF] to-[#468966]",
      icon: <TbActivityHeartbeat size={28} className="text-white" />,
    },
  ];

  return (
    <section className="w-full text-center py-24 px-20 relative">
      <div className="inline-block px-5 py-3 bg-linear-to-r from-blue-200 to-pink-200 rounded-full text-gray-700 text-sm mb-6">
        Industry Solutions
      </div>

      <h2 className="text-5xl  font-semibold text-black mb-4">
        Powering Industries
      </h2>

      <p className="text-gray-600 text-sm mb-16">
        Delivering Red Hat consulting excellence across diverse sectors
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {industries.map((item, idx) => (
          <div
            key={idx}
            className="p-8 rounded-2xl bg-linear-to-br from-[#F9FAFB] to-[#FFFFFF] border border-gray-200 shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] transition-all"
          >
            <div
              className={`w-16 h-16 rounded-xl bg-linear-to-br ${item.iconBg} flex items-center justify-center mb-6 mx-auto drop-shadow-xl`}
            >
              {item.icon}
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm">{item.subtitle}</p>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <button className="px-10 py-4 bg-linear-to-r from-red-500 to-blue-500 text-white rounded-xl text-lg shadow-lg hover:bg-linear-to-r hover:from-blue-500 hover:to-red-500 transition drop-shadow-xl">
          Discuss Your Industry Needs
        </button>
      </div>
    </section>
  );
};

export default IndustrySolution;
