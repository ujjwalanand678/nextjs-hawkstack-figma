
import Image from "next/image";
import { LuCuboid } from "react-icons/lu";
import enterprise from "@/assets/images/enterprise.jpg";
import { LuNetwork } from "react-icons/lu";
import { CiLock } from "react-icons/ci";
import { AiOutlineThunderbolt } from "react-icons/ai";

const EnterpriseSolution = () => {
  return (
    <>
      <section className="w-full bg-linear-to-br from-[#050B17] via-[#0A1025] to-[#251C28] text-white py-16 md:py-24 px-4 md:px-12 lg:px-24">
        <div className="flex justify-center mb-4 md:mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm sm:text-base text-white">
            <LuCuboid className="text-blue-500" size={20} />
            Enterprise Solutions
          </div>
        </div>

        <h1 className="text-center text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight mb-2 px-2">
          Build{" "}
          <span className="bg-linear-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
            Secure & Scalable
          </span>{" "}
          Infrastructure
        </h1>

        <p className="text-center text-gray-400 text-sm sm:text-base md:text-[20px] max-w-2xl mx-auto mb-12 px-2">
          Enterprise-grade cloud solutions powered by Red Hat technologies for
          modern DevOps teams
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto px-2">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="hover-black-blue bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 backdrop-blur-lg shadow-sm">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-500 text-lg mb-3">
                <LuNetwork />
              </div>
              <h3 className="font-semibold text-md md:text-lg">Hybrid Cloud</h3>
              <p className="text-gray-400 text-xs md:text-sm w-full">
                Multi-cloud architecture and migration strategies
              </p>
            </div>

            <div className="hover-black-red bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 backdrop-blur-lg shadow-sm">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-red-500/20 flex items-center justify-center text-red-500 text-lg mb-3">
                <LuCuboid />
              </div>
              <h3 className="font-semibold text-md md:text-lg">DevOps Solutions</h3>
              <p className="text-gray-400 text-xs md:text-sm w-full">
                CI/CD pipelines with OpenShift and Kubernetes
              </p>
            </div>

            <div className="hover-black-blue bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 backdrop-blur-lg shadow-sm">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 text-lg mb-3">
                <CiLock />
              </div>
              <h3 className="font-semibold text-md md:text-lg">Security First</h3>
              <p className="text-gray-400 text-xs md:text-sm w-full">
                Zero-trust architecture and compliance
              </p>
            </div>

            <div className="hover-black-red bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 backdrop-blur-lg shadow-sm">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-red-500/20 flex items-center justify-center text-red-500 text-lg mb-3">
                <AiOutlineThunderbolt />
              </div>
              <h3 className="font-semibold text-md md:text-lg">AI-Ready Platforms</h3>
              <p className="text-gray-400 text-xs md:text-sm w-full">
                Infrastructure optimized for ML workloads
              </p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <Image src={enterprise} alt="Infrastructure" className="rounded-3xl w-full h-auto object-cover" />
          </div>
        </div>

        <div className="flex justify-center mt-8 md:mt-12">
          <button className="px-6 md:px-10 py-2.5 md:py-3 text-base md:text-lg font-semibold rounded-xl bg-linear-to-b from-red-500 to-red-700 hover:scale-105 transition shadow-lg shadow-red-700/40">
            Request Consultation
          </button>
        </div>
      </section>
    </>
  );
};

export default EnterpriseSolution;
