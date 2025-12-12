
import { PiMedal } from "react-icons/pi";
import { FiCheckCircle } from "react-icons/fi";

const CertifiedSystem = () => {
  return (
    <>
      <section className="relative w-full bg-linear-to-b from-black to-[#0F172B] text-white py-16 md:py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center text-center overflow-hidden">
        <div
          className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center 
                     bg-linear-to-b from-red-500 via-purple-500 to-blue-500 mb-4 sm:mb-6 drop-shadow-2xl"
        >
          <PiMedal size={26} />
        </div>

        <h1 className="relative z-10 text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight">
          <span className="bg-linear-to-r from-[#5373FF] to-[#EE0000] bg-clip-text text-transparent">
            Red Hat Certified System
          </span>
          <br />
          Administrator (RHCSA®)
        </h1>

        <p className="relative z-10 max-w-3xl text-gray-300 mt-4 md:mt-6 text-sm sm:text-base md:text-lg px-4">
          An IT professional who can perform core system administration on Red
          Hat Enterprise Linux. Credential earned after passing RHCSA Exam
          (EX200).
        </p>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-10 md:mt-16 w-full max-w-5xl px-4">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition">
            <div className="flex justify-center mb-3">
              <span className="text-red-500">
                <FiCheckCircle size={22} />
              </span>
            </div>
            <p className="text-gray-300 text-sm">Performance-Based Exam</p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition">
            <div className="flex justify-center mb-3">
              <span className="text-blue-500">
                <FiCheckCircle size={22} />
              </span>
            </div>
            <p className="text-gray-300 text-sm">Industry Recognized</p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition">
            <div className="flex justify-center mb-3">
              <span className="text-green-500">
                <FiCheckCircle size={22} />
              </span>
            </div>
            <p className="text-gray-300 text-sm">Career Advancement</p>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-40 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[rgba(237,7,7,0.12)] blur-[70px] opacity-60"></div>
        </div>
      </section>
    </>
  );
};

export default CertifiedSystem;
