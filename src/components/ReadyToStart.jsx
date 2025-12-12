
import { MdOutlineMessage } from "react-icons/md";

const ReadyToStart = () => {
  return (
    <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden">

      <div className="absolute w-[600px] sm:w-[800px] md:w-[900px] h-[600px] sm:h-[800px] md:h-[900px] rounded-full 
        bg-[radial-gradient(circle_at_center,rgba(33,91,255,0.8),rgba(0,0,0,0.6)_60%,rgba(0,0,0,1)_100%)]
        blur-[100px] sm:blur-[120px] opacity-60"
      ></div>

      <div className="relative z-10 px-4 sm:px-6 py-2 sm:py-3 bg-linear-to-r from-[#5373FF] to-[#EE0000] 
        text-white/80 text-xs sm:text-sm rounded-full shadow-lg backdrop-blur-xl border border-white/10 mb-4 sm:mb-6">
        Ready to <span className="text-white font-semibold">Get Started?</span>
      </div>

      <h1 className="relative z-10 text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight px-2">
        Secure Your Cloud Infrastructure
        <br />
        <span className="bg-linear-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
          Today
        </span>
      </h1>

      <p className="relative z-10 text-gray-300 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 max-w-xl md:max-w-2xl px-2">
        Join industry leaders in building secure, AI-powered cloud infrastructure
      </p>

      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 mt-8 sm:mt-10">

        <button className="px-8 sm:px-10 py-3 sm:py-4 rounded-2xl text-white font-medium text-base sm:text-lg
          bg-linear-to-r from-[#486bff] to-[#2242ff]
          shadow-[0_0_40px_10px_rgba(60,100,255,0.35)]
          hover:shadow-[0_0_60px_15px_rgba(60,100,255,0.55)]
          transition-all">
          Start Free Trial →
        </button>

        <button className="px-8 sm:px-10 py-3 sm:py-4 rounded-2xl text-white/90 font-medium text-base sm:text-lg
          bg-white/10 border border-white/20 backdrop-blur-xl 
          hover:bg-white/20 transition flex items-center gap-2">
          <MdOutlineMessage size={24} /> Contact Sales
        </button>
      </div>
    </section>
  );
};

export default ReadyToStart;
