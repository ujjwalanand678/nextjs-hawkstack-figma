
import { TbQuote } from "react-icons/tb";
import { FaStar } from "react-icons/fa";

const ClientStory = () => {
  const testimonials = [
    {
      iconBg: "bg-linear-to-b from-[#EE0000] to-[#CC0000]",
      icon: <TbQuote size={26} />,
      starsColor: "text-red-500",
      quote:
        "HawkStack delivered exceptional results in our cloud migration project. Their Red Hat expertise was invaluable.",
      badge: "Kyndrl",
      badgeBg: "bg-linear-to-b from-[#EE0000] to-[#CC0000]",
      name: "Technology Director",
      role: "Global Technology Services",
      dotColor: "bg-red-500",
    },
    {
      iconBg: "bg-linear-to-b from-[#5373FF] to-[#4060DD]",
      icon: <TbQuote size={26} />,
      starsColor: "text-red-500",
      quote:
        "Professional team with deep technical knowledge. They helped us modernize our infrastructure with confidence.",
      badge: "HCL",
      badgeBg: "bg-linear-to-b from-[#5373FF] to-[#4060DD]",
      name: "IT Operations Manager",
      role: "Enterprise Infrastructure",
      dotColor: "bg-blue-500",
    },
  ];

  return (
    <section className="relative w-full bg-[#0c0c0e] text-center px-4 sm:px-6 md:px-6 py-12 md:py-20 overflow-hidden">
      <div className="absolute -top-40 left-1/6 w-64 sm:w-72 md:w-[700px] h-64 sm:h-72 md:h-[700px] bg-[rgba(50,90,255,0.25)] rounded-full blur-[120px]"></div>
      <div className="absolute top-[160px] right-1/6 w-64 sm:w-72 md:w-[750px] h-64 sm:h-72 md:h-[750px] bg-[rgba(255,40,40,0.28)] rounded-full blur-[140px]"></div>
      <div className="relative z-10 inline-block px-4 py-2 bg-linear-to-r from-[#EE000033] to-[#5373FF33] rounded-full text-gray-200 text-sm mb-4 border border-gray-600">
        Client Success Stories
      </div>

      <h2 className="relative z-10 text-2xl sm:text-3xl md:text-5xl font-medium text-white">
        Client Testimonials
      </h2>

      <p className="relative z-10 text-gray-300 mt-2 mb-8 text-sm sm:text-base">
        Real results from enterprise leaders who trust HawkStack
      </p>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="rounded-2xl p-6 md:p-10 border border-white/20 bg-white/8 backdrop-blur-xl relative overflow-visible"
          >
            <div
              className={`w-10 h-10 md:w-12 md:h-12 ${t.iconBg} rounded-lg flex items-center justify-center text-white text-lg mb-3`}
            >
              {t.icon}
            </div>

            <div className={`flex gap-1 mb-3 ${t.starsColor}`}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="text-gray-200 text-base md:text-lg text-left italic leading-relaxed mb-4">
              {'"'}{t.quote}{'"'}
            </p>

            <span
              className={`absolute top-4 right-4 md:relative md:top-auto md:right-auto inline-block px-3 py-2 text-sm text-gray-100 rounded-lg ${t.badgeBg}`}
            >
              {t.badge}
            </span>

            <div className="mt-4 text-left">
              <p className="text-gray-300 font-medium">{t.name}</p>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </div>

            <div className={`absolute bottom-4 right-4 w-2.5 h-2.5 rounded-full ${t.dotColor}`} />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto mt-12 p-6 md:p-10 rounded-2xl bg-linear-to-r from-[#2c2d38] via-[#1c223a] to-[#1c1e1e] border border-white/10 backdrop-blur-md shadow-[0px_0px_40px_rgba(0,0,0,0.25)]">
        <h3 className="text-xl md:text-2xl font-semibold text-white">
          Ready to transform your infrastructure?
        </h3>

        <p className="text-gray-400 mt-3 mb-6">
          Join the ranks of successful enterprises powered by HawkStack
        </p>

        <button className="px-6 md:px-10 py-2 md:py-3 bg-linear-to-r from-red-500 to-blue-500 text-white rounded-lg text-base md:text-lg shadow-xl transition">
          Get Started with HawkStack →
        </button>
      </div>

      <p className="relative z-10 text-gray-500 text-sm mt-8">
        Trusted by Fortune 500 companies worldwide
      </p>
    </section>
  );
};

export default ClientStory;
