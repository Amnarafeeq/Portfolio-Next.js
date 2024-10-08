import Image from "next/image";
import { Button } from "../components/ui/button";
import Typewriter from "typewriter-effect";
import { FaCloudDownloadAlt, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { MdMarkEmailUnread } from "react-icons/md";

export function HomePageDetail() {
  return (
    <div className=" flex  ">
      <div data-aos="fade-right"
           data-aos-duration="3000" className=" flex  flex-col  items-center p-3">
        {/* image */}

        <Image
          src="/Images/img4.jpg"
          alt="profile-pic"
          width={220}
          height={300}
          
          className="  border-purple-800 	border-2 rounded-[10%] mt-10 hover:scale-105"
        />

        <div className="flex flex-col pt-5">
          {/* Social Media Accounts */}

          <div className="flex justify-evenly  text-white text-3xl ">
            {/* linkedin */}

            <div>
              <Link href="https://www.linkedin.com/in/amna-rafeeq-823b3a300/" target="_blank" className="hover:text-blue-600 ">
                <FaLinkedin  className="hover:scale-150"/>
              </Link>
            </div>

            {/* Github */}

            <div>
              <Link href="https://github.com/Amnarafeeq" target="_blank" className="hover:text-gray-600 ">
                <FaGithubSquare className="hover:scale-150" />
              </Link>
            </div>
            <div>
              <Link href="mailto:amnarafeeq68@gmail.com" target="_blank" className="hover:text-purple-700 ">
                <MdMarkEmailUnread className="hover:scale-150" />
              </Link>
            </div>
          </div>

          {/* Download Button */}

          <Link href="./Images/cv.pdf" target="_blank" className="mt-4">
            <Button className=" bg-gradient-to-r from-cyan-600 to-blue-600 text-base font-semibold hover:opacity-85 hover:scale-105">
              <FaCloudDownloadAlt className="mr-2" /> Download CV
            </Button>
          </Link>
        </div>
      </div>
      {/* Name */}

      <div  data-aos="fade-left"
           data-aos-duration="3000" className=" w-96 flex flex-col  justify-center">
        <h1 className="text-blue-500 font-semibold text-2xl px-8">Hi I'm</h1>
        <h1 className="text-5xl font-serif font-extrabold uppercase text-center bg-gradient-to-r from-purple-600  to-pink-400  bg-clip-text text-transparent">
          Amna
        </h1>
        <h1 className="text-center text-xl font-semibold bg-gradient-to-r  from-yellow-400 to-orange-600 bg-clip-text text-transparent">
          {" "}
          <Typewriter
            options={{
              strings: ["Web Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className=" pl-8 pt-4 text-base text-justify  bg-gradient-to-r  from-sky-400 to-green-500 bg-clip-text text-transparent">
          I am currently immersed in learning frontend development, driven by a
          passion for creating visually appealing and user-friendly web
          experiences. My journey in this field has been fueled by curiosity and
          a desire to bring ideas to life through code.
        </p>
      </div>
    </div>
  );
}
