import React from "react";
import Typewriter from "typewriter-effect";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div id="skills-section">
      <div className=" bg-black h-[130vh] border-b-4 border-purple-500">
        <h1 className="text-center uppercase text-4xl p-10 font-extrabold bg-gradient-to-r  from-cyan-500 to-green-500 bg-clip-text text-transparent">
          {" "}
          <Typewriter
            options={{
              strings: ["skills ", "my toolbox"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <div className="flex flex-col items-center  p-12">
          {/* <!-- First Row --> */}
          <div className="flex justify-evenly w-full">
            <div
              data-aos="fade-down"
              data-aos-duration="2000"
              className="flex flex-col items-center "
            >
              <FaHtml5 className="text-orange-600 text-9xl shadow-[0_6px_25px_rgba(234,88,12,0.9)] hover:scale-110 " />
              <h1 className="text-white text-2xl p-6">HTML</h1>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="2000"
              className="flex flex-col items-center"
            >
              <FaCss3Alt className="text-blue-600 text-9xl shadow-[0_6px_25px_rgba(2,132,249,0.9)] hover:scale-110" />
              <h1 className="text-white text-2xl p-6">CSS</h1>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="2000"
              className="flex flex-col items-center"
            >
              <SiTypescript className="text-sky-600 text-9xl shadow-[0_6px_25px_rgba(2,132,159,0.9)] hover:scale-110" />
              <h1 className="text-white text-2xl p-6">TypeScript</h1>
            </div>
          </div>

          {/* <!-- Second Row --> */}
          <div className="flex justify-evenly w-full mt-14">
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="flex flex-col items-center"
            >
              <IoLogoJavascript className="text-yellow-400 text-9xl shadow-[0_6px_25px_rgba(250,204,21,0.9)] hover:scale-110" />
              <h1 className="text-white text-2xl p-6">JavaScript</h1>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="flex flex-col items-center"
            >
              <RiTailwindCssFill className="text-teal-400 text-9xl shadow-[0_6px_25px_rgba(45,214,191,0.9)] hover:scale-110" />
              <h1 className="text-white text-2xl p-6">Tailwind CSS</h1>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="flex flex-col items-center"
            >
              <RiNextjsFill className="text-slate-200 text-9xl shadow-[0_6px_25px_rgba(226,232,240,0.9)] hover:scale-110" />
              <h1 className="text-white text-2xl p-6">Next.js</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
