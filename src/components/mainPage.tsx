"use client"
import { useEffect } from "react";
// for animate on scroll library
import AOS from "aos";
import "aos/dist/aos.css"
// import { Detail } from "./detail";
import { HomePageDetail } from "./homepage";
import About from "./about";
import Skills from "./skills";
import Projects from "./project";
import Contact from "./contact";



const MainPage = () =>{
    // useeffect for aos
    useEffect(() =>{
        AOS.init ({
          once:false
        })
      },[])

    return(
          <div className=" overflow-hidden">
  {/* Side Bar */}
  <div>
    <HomePageDetail/>
  </div>
  {/* about */}
     <div>
     <About/>
     </div>
{/* Skills */}
<div>
  <Skills />
</div>
{/* projects */}
<div>
  <Projects/>
</div>
{/* contact */}
<div>
  <Contact/>
</div>
     </div>
    )
}
export default MainPage