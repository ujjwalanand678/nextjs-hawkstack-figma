import React from "react";

const CertificationDetails = () => {
  return (<><section className="w-full bg-[#fdfdfd] py-20 px-6 md:px-12 lg:px-24 text-center">

  {/* Heading */}
  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
    Certification Details
  </h2>

  {/* Subtitle */}
  <p className="text-gray-500 mt-3 mb-10 text-lg">
    Everything you need to know about RHCSA certification
  </p>

  {/* Tabs */}
  <div className="flex justify-center gap-4 mb-14">

    {/* Active Tab */}
    <button className="flex items-center gap-2 px-6 py-3 rounded-xl 
                       bg-red-500 text-white font-medium shadow-md">
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="2" width="12" height="16" rx="2"></rect>
        <line x1="8" y1="6" x2="12" y2="6"></line>
      </svg>
      Skills
    </button>

    {/* Inactive Tabs */}
    <button className="flex items-center gap-2 px-6 py-3 rounded-xl 
                       bg-gray-200 text-gray-600 font-medium hover:bg-gray-300">
      Audience
    </button>

    <button className="flex items-center gap-2 px-6 py-3 rounded-xl 
                       bg-gray-200 text-gray-600 font-medium hover:bg-gray-300">
      Exams
    </button>

    <button className="flex items-center gap-2 px-6 py-3 rounded-xl 
                       bg-gray-200 text-gray-600 font-medium hover:bg-gray-300">
      Training
    </button>

  </div>

  {/* Main Skill Cards Container */}
  <div className="max-w-6xl mx-auto bg-white p-12 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.08)]">

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Card */}
      <div className="p-6 rounded-2xl border border-gray-200 bg-white">
        <div className="w-10 h-10 bg-red-500 text-white rounded-xl flex items-center justify-center mb-4">
          ✓
        </div>
        <h3 className="font-semibold text-lg text-gray-800">Essential Tools</h3>
        <p className="text-gray-500 text-sm">Command-line environments & file management</p>
      </div>

      <div className="p-6 rounded-2xl border border-gray-200 bg-white">
        <div className="w-10 h-10 bg-red-500 text-white rounded-xl flex items-center justify-center mb-4">
          ✓
        </div>
        <h3 className="font-semibold text-lg text-gray-800">Shell Scripts</h3>
        <p className="text-gray-500 text-sm">Automate tasks with bash scripting</p>
      </div>

      <div className="p-6 rounded-2xl border border-gray-200 bg-white">
        <div className="w-10 h-10 bg-red-500 text-white rounded-xl flex items-center justify-center mb-4">
          ✓
        </div>
        <h3 className="font-semibold text-lg text-gray-800">System Operations</h3>
        <p className="text-gray-500 text-sm">Booting, processes, services, VMs</p>
      </div>

      <div className="p-6 rounded-2xl border border-gray-200 bg-white">
        <div className="w-10 h-10 bg-red-500 text-white rounded-xl flex items-center justify-center mb-4">
          ✓
        </div>
        <h3 className="font-semibold text-lg text-gray-800">Storage Management</h3>
        <p className="text-gray-500 text-sm">LVM, partitions & file systems</p>
      </div>

      <div className="p-6 rounded-2xl border border-gray-200 bg-white">
        <div className="w-10 h-10 bg-red-500 text-white rounded-xl flex items-center justify-center mb-4">
          ✓
        </div>
        <h3 className="font-semibold text-lg text-gray-800">Security</h3>
        <p className="text-gray-500 text-sm">Firewall & SELinux configuration</p>
      </div>

      <div className="p-6 rounded-2xl border border-gray-200 bg-white">
        <div className="w-10 h-10 bg-red-500 text-white rounded-xl flex items-center justify-center mb-4">
          ✓
        </div>
        <h3 className="font-semibold text-lg text-gray-800">Containers</h3>
        <p className="text-gray-500 text-sm">Basic container management</p>
      </div>

    </div>

  </div>

</section>
</>);
};

export default CertificationDetails;
