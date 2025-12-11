import { IoBookOutline } from "react-icons/io5";


const CertificationDetails = () => {
const medalIconBox =
  "w-10 h-10 bg-gradient-to-b from-[#EE0000] to-[#CC0000] text-white rounded-xl flex items-center justify-center mb-4 shadow-[0_5px_5px_0px_rgba(0,0,0,0.30)]";


  return (<><section className="w-full bg-[#fdfdfd] py-20 px-6 md:px-12 lg:px-24 text-center">

  <h2 className="text-5xl font-semibold text-gray-800">
    Certification Details
  </h2>

  <p className="text-gray-500 mt-3 mb-10 text-md">
    Everything you need to know about RHCSA certification
  </p>

  <div className="flex justify-center gap-4 mb-14">

   
    <button className="flex items-center gap-2 px-6 py-3 rounded-xl 
                       bg-linear-to-b from-[#EE0000] to-[#CC0000] text-white font-medium shadow-md">
  <IoBookOutline />
      Skills
    </button>

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

 
  <div className="max-w-6xl mx-auto bg-white p-12 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.08)]">

    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

 
      <div className="p-6 rounded-2xl border border-gray-200 bg-white">
        <div className={medalIconBox}>
          ✓
        </div>
        <h3 className="font-medium text-lg text-gray-800 text-left">Essential Tools</h3>
        <p className="text-gray-500 text-sm text-left">Command-line environments & file management</p>
      </div>

      <div className="p-6 rounded-2xl border border-gray-200 bg-white">
        <div className={medalIconBox}>
          ✓
        </div>
        <h3 className="font-medium text-lg text-gray-800 text-left">Shell Scripts</h3>
        <p className="text-gray-500 text-sm text-left">Automate tasks with bash scripting</p>
      </div>

      <div className="p-6 rounded-2xl border border-gray-200 bg-white">
        <div className={medalIconBox}>
          ✓
        </div>
        <h3 className="font-medium text-lg text-gray-800 text-left">System Operations</h3>
        <p className="text-gray-500 text-sm text-left">Booting, processes, services, VMs</p>
      </div>

      <div className="p-6 rounded-2xl border border-gray-200 bg-white">
        <div className={medalIconBox}>
          ✓
        </div>
        <h3 className="font-medium text-lg text-gray-800 text-left">Storage Management</h3>
        <p className="text-gray-500 text-sm text-left">LVM, partitions & file systems</p>
      </div>

      <div className="p-6 rounded-2xl border border-gray-200 bg-white">
        <div className={medalIconBox}>
          ✓
        </div>
        <h3 className="font-medium text-lg text-gray-800 text-left">Security</h3>
        <p className="text-gray-500 text-sm text-left">Firewall & SELinux configuration</p>
      </div>

      <div className="p-6 rounded-2xl border border-gray-200 bg-white">
        <div className={medalIconBox}>
          ✓
        </div>
        <h3 className="font-medium text-lg text-gray-800 text-left">Containers</h3>
        <p className="text-gray-500 text-sm text-left">Basic container management</p>
      </div>

    </div>

  </div>

</section>
</>);
};

export default CertificationDetails;
