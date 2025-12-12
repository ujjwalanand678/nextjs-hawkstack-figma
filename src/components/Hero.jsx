import Image from "next/image";
import hero from "@/assets/images/hero.png";
import hero1 from "@/assets/images/hero1.png";
import hero2 from "@/assets/images/hero2.png";
import { PiMedalLight } from "react-icons/pi";
import { IoShield } from "react-icons/io5";

const Hero = () => {
  return (
    <main className="bg-black px-4 sm:px-10 md:px-20 lg:px-26 py-12 grid grid-cols-1 md:grid-cols-2 gap-1 items-center">
      <section className="text-white">
        <div
          className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full 
          bg-[rgba(83,115,255,0.1)] border border-[#5373FF]/40 text-[#9caff5] 
          text-xs sm:text-sm font-medium shadow-[0_0_15px_rgba(83,115,255,0.15)] mb-6"
        >
          <PiMedalLight size={18} className="text-[rgba(83,115,255,1)]" />
          Red Hat Certified Training
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
          <span className="bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            RHCSA Certification &
          </span>
          <br />
          Enterprise Cloud Solutions
        </h1>

        <p className="text-gray-300 mt-6 max-w-xl text-sm sm:text-base">
          Master Red Hat Enterprise Linux and accelerate your career with
          industry-recognized certifications and hands-on cloud training.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-500/40 text-white font-semibold">
            Enroll for RHCSA / Training
          </button>

          <button className="text-white px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
            View Course
          </button>
        </div>

        <div className="mt-12 flex flex-wrap gap-6 text-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-300">
              99.9%
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm">Uptime SLA</p>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-red-400">
              500K+
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm">Threats Blocked</p>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-green-400">
              24/7
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm">Monitoring</p>
          </div>
        </div>
      </section>

      <section className="relative flex justify-center md:justify-end">
        <div className="relative w-[260px] sm:w-[320px] md:w-[360px] lg:w-[440px]">
          <Image
            src={hero}
            alt="3D Cubes"
            height={423}
          width={440}
            className="drop-shadow-[0_50px_70px_rgba(238,0,0,0.25)]"
          />

          <Image
            src={hero1}
            alt="Cloud Lock"
            className="absolute top-6 sm:top-10 left-2 sm:left-4 w-[140px] sm:w-[180px] animate-cloud"
          />

          <Image
            src={hero2}
            alt="RHCSA Badge"
            className="absolute bottom-10 sm:bottom-16 left-2 sm:left-4 w-[120px] sm:w-[150px] up-down"
          />

          <div className="absolute top-1/3 right-0 translate-x-1 sm:translate-x-4 -translate-y-1/2 px-4 py-3 rounded-2xl shadow-lg border border-white/10 flex items-center gap-3 bg-gray-800/70 up-down backdrop-blur-md">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-xl flex items-center justify-center text-white">
              <IoShield size={20} />
            </div>
            <div>
              <p className="text-gray-300 text-xs sm:text-sm">
                Security Status
              </p>
              <p className="text-white text-sm sm:text-base">
                All Systems Protected
              </p>
            </div>
          </div>

          <div className="absolute bottom-6 right-0 translate-x-1 sm:translate-x-4 bg-gray-900/70 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-lg border border-white/10 backdrop-blur-md flex gap-4">
            <div className="text-left">
              <p className="text-blue-400 text-xl sm:text-2xl font-semibold leading-none">
                10M+
              </p>
              <p className="text-gray-300 text-xs sm:text-sm mt-1">
                Events/Day
              </p>
            </div>

            <div className="w-px h-10 bg-gray-600/40"></div>

            <div className="text-left">
              <p className="text-red-500 text-xl sm:text-2xl font-semibold leading-none">
                50ms
              </p>
              <p className="text-gray-300 text-xs sm:text-sm mt-1">Response</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
