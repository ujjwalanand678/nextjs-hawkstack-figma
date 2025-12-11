import { GrCubes } from "react-icons/gr";
import { PiRocketLaunchBold } from "react-icons/pi";
import { GoGoal } from "react-icons/go";

const HawkstackApproach = () => {
  return (
    <>
      <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-26 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            HawkStack’s
          </span>{" "}
          Approach
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
          HawkStack Technologies accelerates digital evolution with DevOps,
          Cloud, Automation, and Security expertise—driving innovation and
          faster time-to-market.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-10 shadow-[0_10px_35px_rgba(0,0,0,0.08)] border border-gray-200 text-left">
            <div className="rotate-icon w-15 h-15 rounded-2xl bg-linear-to-b from-[#EE0000] to-[#CC0000] flex items-center justify-center text-white text-2xl mb-6">
              <GrCubes size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-1">
              Logic{"'"}s Framework
            </h3>
            <p className="text-gray-600 font-medium text-[14px]">
              Precision-engineered structures & analytics
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-[0_10px_35px_rgba(0,0,0,0.08)] border border-gray-200 text-left">
            <div className="rotate-icon w-15 h-15 rounded-2xl bg-linear-to-b from-[#5373FF] to-[#4060DD]  flex items-center justify-center text-white text-2xl mb-6">
              <PiRocketLaunchBold size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-1">
              Innovation{"'"}s Leap
            </h3>
            <p className="text-gray-600 font-medium text-[14px]">
              Data-driven, agile methodologies
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-[0_10px_35px_rgba(0,0,0,0.08)] border border-gray-200 text-left">
            <div className=" rotate-icon w-15 h-15 rounded-2xl bg-linear-to-b from-[#468966] to-[#357755]  flex items-center justify-center text-white text-2xl mb-6">
              <GoGoal size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-1">Insight{"'"}s Depth</h3>
            <p className="text-gray-600 font-medium text-[14px]">
              Predictive modeling & deep analytics
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HawkstackApproach;
