import React from "react";

const ClientStory = () => {
  const testimonials = [
    {
      iconBg: "bg-red-500",
      icon: "99",
      starsColor: "text-red-500",
      quote:
        "HawkStack delivered exceptional results in our cloud migration project. Their Red Hat expertise was invaluable.",
      badge: "Kyndrl",
      badgeBg: "bg-red-600",
      name: "Technology Director",
      role: "Global Technology Services",
      dotColor: "bg-red-500",
      gradient:
        "bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a] to-[#4d0f0f]",
    },
    {
      iconBg: "bg-blue-500",
      icon: "99",
      starsColor: "text-red-500",
      quote:
        "Professional team with deep technical knowledge. They helped us modernize our infrastructure with confidence.",
      badge: "HCL",
      badgeBg: "bg-blue-600",
      name: "IT Operations Manager",
      role: "Enterprise Infrastructure",
      dotColor: "bg-blue-500",
      gradient:
        "bg-gradient-to-br from-[#1a1a1a] via-[#1a1a1a] to-[#10254d]",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-[#0c0c0e] text-center px-6 py-20 relative overflow-hidden">

      {/* Background subtle radial glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#151518]/40 to-[#0c0c0e] pointer-events-none" />

      {/* Tag */}
      <div className="relative z-10 inline-block px-5 py-1 bg-gradient-to-r from-[#2c2f44] to-[#3a2c4a] rounded-full text-gray-200 text-sm mb-6">
        Client Success Stories
      </div>

      {/* Heading */}
      <h2 className="relative z-10 text-4xl md:text-5xl font-semibold text-white">
        Client Testimonials
      </h2>

      {/* Subtitle */}
      <p className="relative z-10 text-gray-400 mt-3 mb-14">
        Real results from enterprise leaders who trust HawkStack
      </p>

      {/* Testimonials Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`rounded-2xl p-10 border border-white/10 backdrop-blur-xl ${t.gradient} relative`}
          >
            {/* Icon */}
            <div
              className={`w-12 h-12 ${t.iconBg} rounded-lg flex items-center justify-center text-white text-xl mb-4`}
            >
              {t.icon}
            </div>

            {/* Stars */}
            <div className={`flex gap-1 mb-4 ${t.starsColor}`}>
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>

            {/* Quote */}
            <p className="text-gray-200 text-left leading-relaxed mb-6">
              {t.quote}
            </p>

            {/* Badge */}
            <span className={`px-3 py-1 text-xs text-white rounded-full ${t.badgeBg}`}>
              {t.badge}
            </span>

            {/* Person */}
            <div className="mt-4 text-left">
              <p className="text-gray-300 font-medium">{t.name}</p>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </div>

            {/* Small bottom-right dot */}
            <div className={`absolute bottom-4 right-4 w-3 h-3 rounded-full ${t.dotColor}`} />
          </div>
        ))}
      </div>

      {/* CTA BOX */}
      <div className="relative z-10 max-w-3xl mx-auto mt-20 p-10 rounded-2xl bg-gradient-to-r from-[#2c2d38] via-[#1c223a] to-[#1c1e1e] border border-white/10 backdrop-blur-md shadow-[0px_0px_40px_rgba(0,0,0,0.3)]">

        <h3 className="text-2xl md:text-3xl font-semibold text-white">
          Ready to transform your infrastructure?
        </h3>

        <p className="text-gray-400 mt-3 mb-8">
          Join the ranks of successful enterprises powered by HawkStack
        </p>

        {/* CTA Buttons */}
        <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-full text-base hover:opacity-90 transition shadow-lg">
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
