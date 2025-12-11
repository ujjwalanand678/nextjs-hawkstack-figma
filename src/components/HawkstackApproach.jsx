import React from "react";

const HawkstackApproach = () => {
  return (<><section className="w-full bg-white py-24 px-6 md:px-12 lg:px-24 text-center">

  {/* Title */}
  <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
    <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
      HawkStack’s
    </span>{" "}
    Approach
  </h2>

  {/* Subtitle */}
  <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
    HawkStack Technologies accelerates digital evolution with DevOps, Cloud, 
    Automation, and Security expertise—driving innovation and faster time-to-market.
  </p>

  {/* Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

    {/* Card 1 */}
    <div className="bg-white rounded-3xl p-10 shadow-[0_10px_35px_rgba(0,0,0,0.08)] border border-gray-200 text-left">
      <div className="w-14 h-14 rounded-2xl bg-red-500 flex items-center justify-center text-white text-2xl mb-6">
        <i>📦</i>
      </div>
      <h3 className="text-xl font-semibold mb-2">Logic{"'"}s Framework</h3>
      <p className="text-gray-600 text-sm">Precision-engineered structures & analytics</p>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-3xl p-10 shadow-[0_10px_35px_rgba(0,0,0,0.08)] border border-gray-200 text-left">
      <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center text-white text-2xl mb-6">
        <i>🚀</i>
      </div>
      <h3 className="text-xl font-semibold mb-2">Innovation{"'"}s Leap</h3>
      <p className="text-gray-600 text-sm">Data-driven, agile methodologies</p>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-3xl p-10 shadow-[0_10px_35px_rgba(0,0,0,0.08)] border border-gray-200 text-left">
      <div className="w-14 h-14 rounded-2xl bg-green-600 flex items-center justify-center text-white text-2xl mb-6">
        <i>🎯</i>
      </div>
      <h3 className="text-xl font-semibold mb-2">Insight{"'"}s Depth</h3>
      <p className="text-gray-600 text-sm">Predictive modeling & deep analytics</p>
    </div>

  </div>

</section>
</>);
};

export default HawkstackApproach;
