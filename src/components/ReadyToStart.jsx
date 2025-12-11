

const ReadyToStart = () => {
  return (
    <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center text-center px-6 overflow-hidden">

      {/* Massive multi-layer glow behind hero */}
      <div className="absolute w-[900px] h-[900px] rounded-full 
        bg-[radial-gradient(circle_at_center,rgba(33,91,255,0.8),rgba(0,0,0,0.6)_60%,rgba(0,0,0,1)_100%)]
        blur-[120px] opacity-70"
      ></div>

      {/* Top Pill */}
      <div className="relative z-10 px-6 py-2 bg-gradient-to-r from-[#2e46ff] to-[#ff3f68] 
        text-white/80 text-sm rounded-full shadow-lg backdrop-blur-xl border border-white/10 mb-6">
        Ready to <span className="text-white font-semibold">Get Started?</span>
      </div>

      {/* Main Heading */}
      <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-white leading-tight">
        Secure Your Cloud Infrastructure
        <br />
        <span className="bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
          Today
        </span>
      </h1>

      {/* Subtitle */}
      <p className="relative z-10 text-gray-300 text-lg mt-4 max-w-2xl">
        Join industry leaders in building secure, AI-powered cloud infrastructure
      </p>

      {/* Buttons */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 mt-10">

        {/* Start Free Trial - Glow Button */}
        <button className="px-10 py-4 rounded-2xl text-white font-medium text-lg
          bg-gradient-to-r from-[#486bff] to-[#2242ff]
          shadow-[0_0_60px_20px_rgba(60,100,255,0.4)]
          hover:shadow-[0_0_80px_25px_rgba(60,100,255,0.55)]
          transition-all">
          Start Free Trial →
        </button>

        {/* Contact Sales - Glass Button */}
        <button className="px-10 py-4 rounded-2xl text-white/90 font-medium text-lg
          bg-white/10 border border-white/20 backdrop-blur-xl 
          hover:bg-white/20 transition flex items-center gap-2">
          <span>📩</span> Contact Sales
        </button>
      </div>

    </section>
  );
};

export default ReadyToStart;
