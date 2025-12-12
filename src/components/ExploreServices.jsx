
import { LuBox } from "react-icons/lu";
import { SiGitbook } from "react-icons/si";
import { LuBrain } from "react-icons/lu";
import { FaNetworkWired } from "react-icons/fa6";

const ExploreServices = () => {
  const services = [
    {
      title: "Red Hat OpenShift",
      subtitle: "Build & deploy at scale",
      iconBg: "from-[#EE0000] to-[#CC0000]",
      icon: <LuBox size={24} className="text-white" />,
    },
    {
      title: "Red Hat Enterprise Linux",
      subtitle: "Flexible, reliable platform",
      iconBg: "from-[#5373FF] to-[#4060DD]",
      icon: <SiGitbook size={24} className="text-white" />,
    },
    {
      title: "Red Hat AI",
      subtitle: "Deliver AI value with your own data",
      iconBg: "from-[#468966] to-[#357755]",
      icon: <LuBrain size={24} className="text-white" />,
    },
    {
      title: "Red Hat Ansible Automation Platform",
      subtitle: "Enterprise automation",
      iconBg: "from-[#EE0000] to-[#5373FF]",
      icon: <FaNetworkWired size={24} className="text-white" />,
    },
  ];

  return (
    <>
      <section className="relative w-full text-center py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#1A1A1A] overflow-hidden">
        <div className="absolute right-[-10px] w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-[rgba(60,120,255,0.28)] blur-[100px]"></div>

        <div className="absolute left-[-10px] w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-[rgba(255,50,50,0.28)] blur-[110px]"></div>

        <h2 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-8 md:mb-12 z-10">
          Explore Red Hat Services
        </h2>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto z-10 px-2">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 rounded-2xl bg-linear-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl shadow-[0_8px_20px_rgba(0,0,0,0.35)] hover:scale-[1.02] transition-all"
            >
              <div
                className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-linear-to-br ${s.iconBg} flex items-center justify-center mb-4 md:mb-6`}
              >
                {s.icon}
              </div>

              <h3 className="text-md md:text-lg text-left text-white mb-1">{s.title}</h3>
              <p className="text-gray-400 text-left text-xs md:text-sm">{s.subtitle}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ExploreServices;
