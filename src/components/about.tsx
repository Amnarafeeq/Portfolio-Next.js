import React from "react";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <div id="about-section">
      <div className="h-[240vh]  mt-28 bg-black  flex items-center justify-evenly flex-col border-b-4 border-indigo-500">
        <h1 className="text-center uppercase text-4xl font-extrabold  bg-gradient-to-r  from-blue-800 to-yellow-600 bg-clip-text text-transparent ">
          <Typewriter
            options={{
              strings: [" about me", "Discover Amna"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        {/* 1st para */}
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className=" bg-black p-4 w-1/2 rounded-md   shadow-[0_4px_20px_rgba(255,255,255,0.7)]"
        >
          <h1 className=" text-2xl p-2 font-semibold bg-gradient-to-r  from-indigo-300 via-purple-600 to-pink-300 bg-clip-text text-transparent max-sm:text-base">
            {" "}
            <Typewriter
              options={{
                strings: [" Creative and Technical Expertise"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-gray-300 p-2 leading-6 max-sm:text-sm ">
            With a deep understanding of web technologies and a creative eye for
            design, I merge the artistic with the technical to build websites
            that are not just visually appealing but also highly performant. My
            current focus is on learning and mastering modern frameworks like
            Next.js and tools like Tailwind CSS. This ongoing journey allows me
            to stay ahead of the curve in web development trends. I am dedicated
            to continuous learning and adapting, committed to bringing the
            latest innovations to my work..
          </p>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className=" bg-black p-6 w-1/2 rounded-md mt-6  shadow-[0_4px_20px_rgba(255,255,255,0.7)]"
        >
          <h1 className=" text-2xl p-2 font-semibold bg-gradient-to-r  from-pink-300 to-red-700  bg-clip-text text-transparent max-sm:text-base">
            {" "}
            <Typewriter
              options={{
                strings: [" Front-End Development Enthusiast:"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-gray-300 p-2 leading-6 max-sm:text-sm">
            I am a passionate and dedicated front-end developer, constantly
            evolving my skills to create visually appealing and user-friendly
            web experiences. Currently, I am honing my expertise in HTML, CSS,
            JavaScript, and modern frameworks to build responsive and dynamic
            websites.
          </p>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className=" bg-black p-4 w-1/2 rounded-md   shadow-[0_4px_20px_rgba(255,255,255,0.7)] max-sm:hidden "
        >
          <h1 className=" text-2xl p-2 font-semibold bg-gradient-to-r  from-indigo-300 via-purple-600 to-pink-300 bg-clip-text text-transparent">
            {" "}
            <Typewriter
              options={{
                strings: [" Expanding into Cloud and AI:"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-gray-300 p-2 leading-6">
            In addition to my journey in front-end development, I am also
            expanding my knowledge in cloud technologies and applied generative
            AI. As I work towards earning a certification in Cloud Applied
            Generative AI, I am excited to integrate cutting-edge AI solutions
            into web development, pushing the boundaries of what’s possible in
            the digital world.
          </p>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className=" bg-black p-6 w-1/2 rounded-md   shadow-[0_4px_20px_rgba(255,255,255,0.7)] max-sm:hidden "
        >
          <h1 className=" text-2xl p-2 font-semibold bg-gradient-to-r  from-pink-300 to-red-700 bg-clip-text text-transparent">
            {" "}
            <Typewriter
              options={{
                strings: [" Blending Creativity with Innovation:"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-gray-300 p-2 leading-6 ">
            I'm excited to be on a journey of learning and growth in this
            dynamic field. Each project is an opportunity to learn something
            new, and I’m eager to take on challenges that will help me become a
            proficient and creative web developer. My goal is to blend my
            creative front-end skills with advanced cloud and AI technologies to
            craft innovative and intelligent web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
