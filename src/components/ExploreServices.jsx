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
      icon: (
      <LuBox size={28} className="text-white"/>
      ),
    },
    {
      title: "Red Hat Enterprise Linux",
      subtitle: "Flexible, reliable platform",
      iconBg: "from-[#5373FF] to-[#4060DD]",
      icon: (
        <SiGitbook size={28} className="text-white" />
      ),
    },
    {
      title: "Red Hat AI",
      subtitle: "Deliver AI value with your own data",
      iconBg: "from-[#468966] to-[#357755]",
      icon: (
       <LuBrain size={28} className="text-white" />
      ),
    },
    {
      title: "Red Hat Ansible Automation Platform",
      subtitle: "Enterprise automation",
      iconBg: "from-[#EE0000] to-[#5373FF]",
      icon: (
      <FaNetworkWired size={28} className="text-white"/>
      ),
    },
  ];

  return (
    <>
      <section className="relative w-full text-center py-24 px-6 bg-[#1A1A1A] overflow-hidden">

        <div className="absolute right-[-10px]  w-[400px] h-[400px] rounded-full bg-[rgba(60,120,255,0.28)] blur-[140px]"></div>

        <div className="absolute left-[-10px]  w-[400px] h-[400px] rounded-full bg-[rgba(255,50,50,0.28)] blur-[150px]"></div>

        <h2 className="relative text-4xl md:text-5xl font-semibold text-white mb-16 z-10">
          Explore Red Hat Services
        </h2>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto z-10">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-linear-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl shadow-[0_8px_20px_rgba(0,0,0,0.35)] hover:scale-[1.02] transition-all"
            >
              <div
                className={`w-16 h-16 rounded-xl bg-linear-to-br ${s.iconBg} flex items-center justify-center mb-6`}
              >
                {s.icon}
              </div>

              <h3 className="text-lg text-left text-white mb-2">{s.title}</h3>
              <p className="text-gray-400 text-left text-sm">{s.subtitle}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ExploreServices;
