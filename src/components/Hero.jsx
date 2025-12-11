import Image from "next/image";
import hero from "@/assets/images/hero.png";
import hero1 from "@/assets/images/hero1.png";
import hero2 from "@/assets/images/hero2.png";
import { PiMedalLight } from "react-icons/pi";
import { IoShield } from "react-icons/io5";

const Hero = () => {
  return (
    <main className="bg-black grid grid-cols-2 gap-5 items-center justify-center px-26">
      <section className="bg-black text-white py-20 ">
        <div
          className="inline-flex items-center gap-2
             px-6 py-2 
             rounded-full 
             bg-[rgba(83,115,255,0.1)]
             border border-[#5373FF]/40
             text-[#9caff5] text-sm font-medium
             shadow-[0_0_15px_rgba(83,115,255,0.15)] mb-7"
        >
          <PiMedalLight size={18} className="text-[rgba(83, 115, 255, 1)]" />
          Red Hat Certified Training
        </div>

        <h1 className="text-4xl font-extrabold ">
          <span className="bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            RHCSA Certification &
          </span>
          <br />
          Enterprise Cloud Solutions
        </h1>

        <p className="text-gray-300 mt-6 max-w-2xl">
          Master Red Hat Enterprise Linux and accelerate your career with
          industry-recognized certifications and hands-on cloud training.
        </p>

        <div className="mt-10 flex items-center gap-4 flex-wrap">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-500/40 text-white font-semibold">
            Enroll for RHCSA / Training
          </button>

          <div className="">
          <button className="text-white px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl ">View Course</button>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-10 text-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-300">99.9%</h3>
            <p className="text-gray-400 text-sm">Uptime SLA</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-red-400">500K+</h3>
            <p className="text-gray-400 text-sm">Threats Blocked</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-green-400">24/7</h3>
            <p className="text-gray-400 text-sm">Monitoring</p>
          </div>
        </div>
      </section>

      <section className="relative left-15">
        <Image
          src={hero}
          alt="3D Cubes"
          height={423}
          width={440}
          className="relative left-10 drop-shadow-[0_50px_70px_rgba(238,0,0,0.25)]"
        />

        <Image
          src={hero1}
          alt="Cloud Lock"
          height={140}
          width={280}
          className="absolute top-10 left-1 animate-cloud"
        />

        <Image
          src={hero2}
          alt="RHCSA Badge"
          className="absolute bottom-20 left-1 w-45 up-down"
        />

        <div className="absolute top-1/3 right-16 -translate-y-1/2 px-5 py-4 rounded-2xl shadow-lg border border-white/10 flex items-center gap-4 bg-gray-800/70 up-down ">
          <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white"><IoShield size={26} /></div>
          <div>
            <p className="text-gray-300 text-sm">Security Status</p>
            <p className="text-white ">All Systems Protected</p>
          </div>
        </div>

        <div className="absolute flex gap-2 bottom-20 right-16 bg-gray-900/70 px-8 py-4 rounded-2xl shadow-lg border border-white/10 ">
          <div className="text-left">
            <p className="text-blue-400 text-2xl font-semibold leading-none">
              10M+
            </p>
            <p className="text-gray-300 text-sm mt-1">Events/Day</p>
          </div>

          <div className="w-px h-10 bg-gray-600/40 "></div>
          <div className="text-left ">
            <p className="text-red-500 text-2xl font-semibold leading-none">
              50ms
            </p>
            <p className="text-gray-300 text-sm mt-1">Response</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
