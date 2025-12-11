import React from "react";

const CertifiedSystem = () => {
  return (
    <>
      <section className="w-full bg-[#060B19] text-white py-24 px-6 flex flex-col items-center text-center">
        {/* Gradient Icon Box */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center 
                  bg-gradient-to-br from-pink-500 via-red-500 to-blue-500
                  mb-6 shadow-[0_10px_35px_rgba(0,0,0,0.4)]"
        >
          <svg
            width="30"
            height="30"
            stroke="white"
            strokeWidth="2"
            fill="none"
          >
            <circle cx="15" cy="12" r="6"></circle>
            <path d="M8 22c2-3 10-3 12 0"></path>
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
            Red Hat Certified System
          </span>
          <br />
          Administrator (RHCSA®)
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl text-gray-300 mt-6 text-lg">
          An IT professional who can perform core system administration on Red
          Hat Enterprise Linux. Credential earned after passing RHCSA Exam
          (EX200).
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-5xl">
          {/* Card 1 */}
          <div
            className="p-8 rounded-2xl border border-gray-700/40 bg-white/5 backdrop-blur-md
                    hover:bg-white/10 transition"
          >
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                <span className="text-red-500 text-xl">✔</span>
              </div>
            </div>
            <p className="font-semibold">Performance-Based Exam</p>
          </div>

          {/* Card 2 */}
          <div
            className="p-8 rounded-2xl border border-gray-700/40 bg-white/5 backdrop-blur-md
                    hover:bg-white/10 transition"
          >
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <span className="text-blue-500 text-xl">✔</span>
              </div>
            </div>
            <p className="font-semibold">Industry Recognized</p>
          </div>

          {/* Card 3 */}
          <div
            className="p-8 rounded-2xl border border-gray-700/40 bg-white/5 backdrop-blur-md
                    hover:bg-white/10 transition"
          >
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <span className="text-green-500 text-xl">✔</span>
              </div>
            </div>
            <p className="font-semibold">Career Advancement</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CertifiedSystem;
