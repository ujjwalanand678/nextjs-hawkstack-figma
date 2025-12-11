
const IndustrySolution = () => {
  const industries = [
    {
      title: "Banking & Insurance",
      subtitle: "Secure, compliant infrastructure",
      iconBg: "from-red-500 to-red-700",
      icon: (
        <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white rounded-sm" />
        </div>
      ),
    },
    {
      title: "E-commerce & Retail",
      subtitle: "Scalable customer experiences",
      iconBg: "from-blue-500 to-blue-700",
      icon: (
        <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white rounded-sm" />
        </div>
      ),
    },
    {
      title: "Telecom",
      subtitle: "High-performance networks",
      iconBg: "from-green-500 to-green-700",
      icon: (
        <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full" />
        </div>
      ),
    },
    {
      title: "Manufacturing",
      subtitle: "Digital transformation",
      iconBg: "from-red-500 via-purple-500 to-blue-500",
      icon: (
        <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white rounded-sm" />
        </div>
      ),
    },
    {
      title: "Healthcare & Technology",
      subtitle: "Innovation & reliability",
      iconBg: "from-blue-500 to-green-500",
      icon: (
        <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full" />
        </div>
      ),
    },
  ];

  return (
    <section className="w-full text-center py-24 px-6 relative">
      {/* Soft gradient background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent pointer-events-none"></div>

      {/* Tag */}
      <div className="inline-block px-5 py-1 bg-gradient-to-r from-blue-200 to-pink-200 rounded-full text-gray-700 text-sm mb-6">
        Industry Solutions
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
        Powering Industries
      </h2>

      {/* Subtitle */}
      <p className="text-gray-500 text-lg mb-16">
        Delivering Red Hat consulting excellence across diverse sectors
      </p>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {industries.map((item, idx) => (
          <div
            key={idx}
            className="p-8 rounded-2xl bg-white border border-gray-200 shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] transition-all"
          >
            <div
              className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.iconBg} flex items-center justify-center mb-6 mx-auto`}
            >
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm">{item.subtitle}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-14">
        <button className="px-10 py-3 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-full text-lg shadow-lg hover:opacity-90 transition">
          Discuss Your Industry Needs
        </button>
      </div>
    </section>
  );
};

export default IndustrySolution;
