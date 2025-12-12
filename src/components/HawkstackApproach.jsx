
import { GrCubes } from "react-icons/gr";
import { PiRocketLaunchBold } from "react-icons/pi";
import { GoGoal } from "react-icons/go";

const HawkstackApproach = () => {
  return (
    <>
      <section className="w-full bg-white py-12 md:py-24 px-4 md:px-12 lg:px-26 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4">
          <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            HawkStack’s
          </span>{" "}
          Approach
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-8 md:mb-16 text-sm md:text-lg px-2">
          HawkStack Technologies accelerates digital evolution with DevOps,
          Cloud, Automation, and Security expertise—driving innovation and
          faster time-to-market.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-2">
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.08)] border border-gray-200 text-left">
            <div className="w-12 h-12 md:w-15 md:h-15 rounded-2xl bg-linear-to-b from-[#EE0000] to-[#CC0000] flex items-center justify-center text-white text-2xl mb-4">
              <GrCubes size={20} />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-1">Logic{"'"}s Framework</h3>
            <p className="text-gray-600 font-medium text-[13px] md:text-[14px]">
              Precision-engineered structures & analytics
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.08)] border border-gray-200 text-left">
            <div className="w-12 h-12 md:w-15 md:h-15 rounded-2xl bg-linear-to-b from-[#5373FF] to-[#4060DD] flex items-center justify-center text-white text-2xl mb-4">
              <PiRocketLaunchBold size={20} />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-1">Innovation{"'"}s Leap</h3>
            <p className="text-gray-600 font-medium text-[13px] md:text-[14px]">
              Data-driven, agile methodologies
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.08)] border border-gray-200 text-left">
            <div className="w-12 h-12 md:w-15 md:h-15 rounded-2xl bg-linear-to-b from-[#468966] to-[#357755] flex items-center justify-center text-white text-2xl mb-4">
              <GoGoal size={20} />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-1">Insight{"'"}s Depth</h3>
            <p className="text-gray-600 font-medium text-[13px] md:text-[14px]">
              Predictive modeling & deep analytics
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HawkstackApproach;
