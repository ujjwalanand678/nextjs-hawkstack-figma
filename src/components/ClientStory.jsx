import { TbQuote } from "react-icons/tb";
import { FaStar } from "react-icons/fa";

const ClientStory = () => {
  const testimonials = [
    {
      iconBg: "bg-linear-to-b from-[#EE0000] to-[#CC0000]",
      icon: <TbQuote size={30} />,
      starsColor: "text-red-500",
      quote:
        "HawkStack delivered exceptional results in our cloud migration project. Their Red Hat expertise was invaluable.",
      badge: "Kyndrl",
      badgeBg: "bg-linear-to-b from-[#EE0000] to-[#CC0000]",
      name: "Technology Director",
      role: "Global Technology Services",
      dotColor: "bg-red-500",
      linear: "bg-linear-to-br from-[#1a1a1a] via-[#1a1a1a] to-[#4d0f0f]",
    },
    {
      iconBg: "bg-linear-to-b from-[#5373FF] to-[#4060DD]",
      icon: <TbQuote size={30} />,
      starsColor: "text-red-500",
      quote:
        "Professional team with deep technical knowledge. They helped us modernize our infrastructure with confidence.",
      badge: "HCL",
      badgeBg: "bg-linear-to-b from-[#5373FF] to-[#4060DD]",
      name: "IT Operations Manager",
      role: "Enterprise Infrastructure",
      dotColor: "bg-blue-500",
      linear: "bg-linear-to-br from-[#1a1a1a] via-[#1a1a1a] to-[#10254d]",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#0c0c0e] text-center px-6 py-20 overflow-hidden">
      <div className="absolute top-[-200px] left-[15%] w-[700px] h-[700px] bg-[rgba(50,90,255,0.3)] rounded-full blur-[160px]"></div>

      <div className="absolute top-[200px] right-[10%] w-[750px] h-[750px] bg-[rgba(255,40,40,0.32)] rounded-full blur-[170px]"></div>

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#111115]/50 to-[#0c0c0e] pointer-events-none"></div>

      <div className="relative z-10 inline-block px-5 py-3 bg-linear-to-r from-[#EE000033] to-[#5373FF33] rounded-full text-gray-200 text-md mb-6 border border-gray-600">
        Client Success Stories
      </div>

      <h2 className="relative z-10 text-5xl font-medium text-white">
        Client Testimonials
      </h2>

      <p className="relative z-10 text-gray-300 mt-3 mb-14 text-sm">
        Real results from enterprise leaders who trust HawkStack
      </p>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`rounded-2xl p-10 border border-white/20 bg-white/8 backdrop-blur-xl relative`}
          >
            <div
              className={`w-12 h-12 ${t.iconBg} rounded-lg flex items-center justify-center text-white text-xl mb-4`}
            >
              {t.icon}
            </div>

            <div className={`flex gap-1 mb-4 ${t.starsColor}`}>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
            </div>

            <p className="text-gray-200 text-lg text-left italic leading-relaxed mb-6">
              {'"'}
              {t.quote}
              {'"'}
            </p>

            <span
              className={`relative right-52 px-3 py-3 text-sm  text-gray-100 rounded-lg ${t.badgeBg}`}
            >
              {t.badge}
            </span>

            <div className="mt-4 text-left">
              <p className="text-gray-300 font-medium">{t.name}</p>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </div>

            <div
              className={`absolute bottom-16 right-10 w-2 h-2 rounded-full ${t.dotColor}`}
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto mt-20 p-10 rounded-2xl bg-linear-to-r from-[#2c2d38] via-[#1c223a] to-[#1c1e1e] border border-white/10 backdrop-blur-md shadow-[0px_0px_40px_rgba(0,0,0,0.3)]">
        <h3 className="text-2xl md:text-3xl font-semibold text-white">
          Ready to transform your infrastructure?
        </h3>

        <p className="text-gray-400 mt-3 mb-8">
          Join the ranks of successful enterprises powered by HawkStack
        </p>

        <button
          className=" px-10 py-3 
    bg-linear-to-r from-red-500 to-blue-500 
    text-white rounded-lg text-lg shadow-xl
    transition 
    hover:bg-linear-to-r hover:from-blue-500 hover:to-red-500
  "
        >
          Get Started with HawkStack →
        </button>
      </div>

      {/* Footer */}
      <p className="relative z-10 text-gray-500 text-sm mt-10">
        Trusted by Fortune 500 companies worldwide
      </p>
    </section>
  );
};

export default ClientStory;
