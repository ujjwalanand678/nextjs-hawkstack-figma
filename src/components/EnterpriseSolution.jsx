import Image from "next/image";
import React from "react";
import enterprise from "@/assets/images/enterprise.jpg"

const EnterpriseSolution = () => {
  return (<><section className="w-full min-h-screen bg-gradient-to-br from-[#050B17] via-[#0A1025] to-[#251C28] text-white py-24 px-6 md:px-12 lg:px-24">

  {/* Badge */}
  <div className="flex justify-center mb-6">
    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
                    bg-white/10 border border-white/20 backdrop-blur-md text-sm text-blue-300">
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="8" cy="8" r="6" />
      </svg>
      Enterprise Solutions
    </div>
  </div>

  {/* Heading */}
  <h1 className="text-center text-4xl md:text-5xl font-extrabold leading-tight mb-4">
    Build{" "}
    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      Secure & Scalable
    </span>{" "}
    Infrastructure
  </h1>

  {/* Subheading */}
  <p className="text-center text-gray-300 text-lg max-w-3xl mx-auto mb-16">
    Enterprise-grade cloud solutions powered by Red Hat technologies  
    for modern DevOps teams
  </p>

  {/* Main Content Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* Left Feature Grid */}
    <div className="grid grid-cols-2 gap-6">

      {/* Card 1 */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg shadow-sm">
        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-500 text-xl mb-4">
          🔗
        </div>
        <h3 className="font-semibold text-lg">Hybrid Cloud</h3>
        <p className="text-gray-400 text-sm w-[90%]">
          Multi-cloud architecture and migration strategies
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg shadow-sm">
        <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center text-red-500 text-xl mb-4">
          🧱
        </div>
        <h3 className="font-semibold text-lg">DevOps Solutions</h3>
        <p className="text-gray-400 text-sm w-[90%]">
          CI/CD pipelines with OpenShift and Kubernetes
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg shadow-sm">
        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 text-xl mb-4">
          🔒
        </div>
        <h3 className="font-semibold text-lg">Security First</h3>
        <p className="text-gray-400 text-sm w-[90%]">
          Zero-trust architecture and compliance
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg shadow-sm">
        <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center text-red-500 text-xl mb-4">
          ⚡
        </div>
        <h3 className="font-semibold text-lg">AI-Ready Platforms</h3>
        <p className="text-gray-400 text-sm w-[90%]">
          Infrastructure optimized for ML workloads
        </p>
      </div>

    </div>

    {/* Right Image */}
    <div className="rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
      <Image
        src={enterprise}
        alt="Infrastructure" 
        className="rounded-3xl"
      />
    </div>

  </div>

  {/* CTA Button */}
  <div className="flex justify-center mt-16">
    <button className="px-10 py-4 text-lg font-semibold rounded-xl
                       bg-gradient-to-r from-red-500 to-red-600 
                       hover:scale-105 transition shadow-lg shadow-red-700/40">
      Request Consultation
    </button>
  </div>

</section>
</>);
};

export default EnterpriseSolution;
