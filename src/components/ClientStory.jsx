

const ClientStory = () => {
  const testimonials = [
    {
      quote:
        "HawkStack delivered exceptional results in our cloud migration project. Their Red Hat expertise was invaluable.",
      name: "Technology Director",
      company: "Global Technology Services",
      badge: "Kyndrl",
      badgeColor: "bg-red-600",
      iconBg: "bg-red-500",
    },
    {
      quote:
        "Professional team with deep technical knowledge. They helped us modernize our infrastructure with confidence.",
      name: "IT Operations Manager",
      company: "Enterprise Infrastructure",
      badge: "HCL",
      badgeColor: "bg-blue-600",
      iconBg: "bg-blue-500",
    },
  ];

  return (
    <section className="w-full py-20 px-6 text-center">
      
      {/* Tag */}
      <span className="px-4 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
        Client Success Stories
      </span>

      {/* Heading */}
      <h2 className="text-4xl font-semibold text-gray-800 mt-6">
        Client Testimonials
      </h2>

      {/* Subtitle */}
      <p className="text-gray-500 mt-2 mb-14">
        Real results from enterprise leaders who trust HawkStack
      </p>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="p-8 rounded-xl border border-gray-200 bg-white text-left"
          >
            {/* Icon */}
            <div
              className={`w-12 h-12 ${t.iconBg} rounded-lg flex items-center justify-center text-white text-xl mb-4`}
            >
              99
            </div>

            {/* Rating */}
            <div className="text-red-500 mb-3">★★★★★</div>

            {/* Quote */}
            <p className="text-gray-700 italic mb-6">{t.quote}</p>

            {/* Badge */}
            <span
              className={`px-3 py-1 text-white text-xs rounded-full ${t.badgeColor}`}
            >
              {t.badge}
            </span>

            {/* Person Details */}
            <div className="mt-4">
              <p className="text-gray-800 font-medium">{t.name}</p>
              <p className="text-gray-500 text-sm">{t.company}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="mt-20 max-w-3xl mx-auto p-10 bg-gray-100 rounded-2xl">
        <h3 className="text-2xl font-semibold text-gray-800">
          Ready to transform your infrastructure?
        </h3>

        <p className="text-gray-500 mt-2 mb-6">
          Join the ranks of successful enterprises powered by HawkStack
        </p>

        <button className="px-8 py-3 bg-blue-600 text-white rounded-full text-base hover:bg-blue-700 transition">
          Get Started with HawkStack →
        </button>
      </div>

      {/* Footer */}
      <p className="text-gray-400 text-sm mt-10">
        Trusted by Fortune 500 companies worldwide
      </p>
    </section>
  );
};

export default ClientStory;
