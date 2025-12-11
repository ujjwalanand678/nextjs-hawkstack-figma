import React from "react";

const ExploreServices = () => {
  const services = [
    {
      title: "Red Hat OpenShift",
      subtitle: "Build & deploy at scale",
      iconBg: "from-red-500 to-red-700",
      icon: (
        <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white rounded-sm" />
        </div>
      ),
    },
    {
      title: "Red Hat Enterprise Linux",
      subtitle: "Flexible, reliable platform",
      iconBg: "from-blue-500 to-blue-700",
      icon: (
        <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white rounded-sm" />
        </div>
      ),
    },
    {
      title: "Red Hat AI",
      subtitle: "Deliver AI value with your own data",
      iconBg: "from-green-500 to-green-700",
      icon: (
        <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full" />
        </div>
      ),
    },
    {
      title: "Red Hat Ansible Automation Platform",
      subtitle: "Enterprise automation",
      iconBg: "from-red-500 via-purple-500 to-blue-500",
      icon: (
        <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white rounded-sm" />
        </div>
      ),
    },
  ];

  return (
    <>
      <section className="w-full text-center py-20 px-6 bg-[#111]">
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-16">
          Explore Red Hat Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-xl shadow-[0_8px_20px_rgba(0,0,0,0.35)] hover:scale-[1.02] transition-all"
            >
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${s.iconBg} flex items-center justify-center mb-6`}
              >
                {s.icon}
              </div>

              <h3 className="text-xl font-medium text-white mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.subtitle}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ExploreServices;
