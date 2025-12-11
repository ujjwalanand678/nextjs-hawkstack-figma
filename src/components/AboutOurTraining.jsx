import Image from "next/image";
import training from "@/assets/images/training.jpg";
import { IoBookOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { LuLightbulb } from "react-icons/lu";
import { LuTrophy } from "react-icons/lu";

const AboutOurTraining = () => {
  return (
    <section className=" py-24 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-16">
      <div className="relative w-full max-w-2xl">
        <div className="absolute -top-7 -left-7 w-30 h-30 rounded-3xl bg-[rgba(83,115,255,0.10)] "></div>

        <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.45)] z-10">
          <Image
            src={training}
            alt="Training Session"
            className="rounded-3xl"
          />
        </div>
<div className="absolute -bottom-7 -right-7 w-30 h-30 rounded-3xl bg-[rgba(238,0,0,0.1)] z-0"></div>
        <div className="z-12 up-down absolute bottom-1 right-1 bg-white rounded-2xl px-6 py-4 shadow-[0_25px_60px_rgba(0,0,0,0.45)] flex items-center gap-3">
          <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white text-lg">
            <LuTrophy />
          </div>
          <div>
            <p className="text-xl font-bold text-black">98%</p>
            <p className="text-gray-700 text-sm">Pass Rate</p>
          </div>
        </div>
      </div>

      <div className="max-w-xl">
        <div className="inline-flex items-center gap-2 bg-[rgba(83,115,255,0.1)] text-[#5373FF] px-6 py-2 rounded-full text-sm font-medium border border-[#5373FF]/30 mb-4">
          <IoBookOutline size={18} />
          About Our Training
        </div>

        <h2 className="text-5xl font-bold leading-tight mb-6">
          Hands-On{" "}
          <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Enterprise Training
          </span>{" "}
          for Real-World Success
        </h2>

        <p className="text-gray-800 mb-10 leading-relaxed">
          Our expert instructors bring years of enterprise experience to deliver
          comprehensive Red Hat training. From foundational Linux skills to
          advanced cloud architecture, we prepare you for industry certification
          and career advancement.
        </p>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex items-start gap-3">
            <div className="bg-blue-200 inline-flex w-15 h-12 rounded-xl items-center justify-center text-blue-600 font-bold">
              <BsPerson size={20} />
            </div>

            <div>
              <p className="font-semibold">Expert Mentors</p>
              <p className="text-gray-600 text-sm">
                Industry veterans guide your learning journey
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-red-300 inline-flex w-15 h-12 rounded-xl items-center justify-center text-red-600 font-bold">
              <LuLightbulb size={20} />
            </div>

            <div>
              <p className="font-semibold">Practical Labs</p>
              <p className="text-gray-600 text-sm">
                Real cloud environments for hands-on practice
              </p>
            </div>
          </div>
        </div>

        <button
          className="mt-6 px-10 py-4 bg-linear-to-r from-blue-400 to-blue-600
  hover:scale-105 rounded-xl text-white text-lg font-semibold shadow-lg shadow-blue-700/30"
        >
          Explore Programs
        </button>
      </div>
    </section>
  );
};

export default AboutOurTraining;
