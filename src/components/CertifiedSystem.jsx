import { PiMedal } from "react-icons/pi";
import { FiCheckCircle } from "react-icons/fi";

const CertifiedSystem = () => {
  return (
    <>
      <section className="relative w-full min-h-screen bg-linear-to-b from-black to-[#0F172B] text-white py-24 px-6 flex flex-col items-center text-center overflow-hidden">
        

        <div
          className="
            relative z-10
            w-16 h-16 rounded-2xl flex items-center justify-center 
            bg-linear-to-b from-red-500 via-purple-500 to-blue-500
            mb-6
            drop-shadow-xl
          drop-shadow-red-500/50
          "
        >
          <PiMedal size={30} />
        </div>

        <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold leading-tight">
          <span className="bg-linear-to-r from-[#5373FF] to-[#EE0000] bg-clip-text text-transparent">
            Red Hat Certified System
          </span>
          <br />
          Administrator (RHCSA®)
        </h1>

      
        <p className="relative z-10 max-w-3xl text-gray-300 mt-6 text-lg">
          An IT professional who can perform core system administration on Red
          Hat Enterprise Linux. Credential earned after passing RHCSA Exam
          (EX200).
        </p>

      
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-5xl">
        
          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition">
            <div className="flex justify-center mb-4">
              <span className="text-red-500">
                <FiCheckCircle size={26} />
              </span>
            </div>
            <p className="text-gray-300">Performance-Based Exam</p>
          </div>

          
          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition">
            <div className="flex justify-center mb-4">
              <span className="text-blue-500">
                <FiCheckCircle size={26} />
              </span>
            </div>
            <p className="text-gray-300">Industry Recognized</p>
          </div>

         
          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition">
            <div className="flex justify-center mb-4">
              <span className="text-green-500">
                <FiCheckCircle size={26} />
              </span>
            </div>
            <p className="text-gray-300">Career Advancement</p>
          </div>
        </div>

        <div className="absolute top-60 inset-0 bg-[radial-gradient(circle_at_center,rgba(237,7,7,0.25),transparent_50%)] opacity-60"></div>
      </section>
    </>
  );
};
 
export default CertifiedSystem;
