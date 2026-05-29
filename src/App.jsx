import { FaGithub,FaLinkedin } from "react-icons/fa";
import SkillsGrid from './Components/SkillsGrid';
import ProjectsSection from './Components/ProjectsSection';
import ExperienceSection from './Components/ExperienceSection';
import EducationSection from './Components/EducationSection';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './App.css'
import {motion} from "framer-motion";

function App() {
  return (
    <>
      <div className="relative ">

        {/* Glow Blobs */}
        <div className="fixed top-[-120px] left-[-120px] w-[320px] h-[320px] bg-[#A78BFA]/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="fixed bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-pink-400/10 blur-[120px] rounded-full pointer-events-none"></div>

        <Navbar/>

        {/* Intro */}
        <motion.section id="home"
          initial={{opacity:0,y:40}} 
          animate={{opacity:1,y:0}} 
          transition={{duration:0.8}} 
          className='relative px-6 md:px-16 lg:px-32 py-20 min-h-[80vh] flex flex-col justify-center'
        >

          {/* Floating Cards */}
          <div className="hidden lg:block absolute right-28 top-32 w-[260px] h-[160px] bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2rem] rotate-6"></div>

          <div className="hidden lg:block absolute right-44 top-72 w-[220px] h-[140px] bg-[#A78BFA]/10 border border-[#A78BFA]/20 backdrop-blur-xl rounded-[2rem] -rotate-6"></div>

          <div className="relative z-10">
            <p className="text-[#A78BFA] text-sm tracking-[0.3em] uppercase mb-4">
              Full Stack Developer
            </p>

            <h1 className='text-[#E2E8F0] text-5xl md:text-7xl font-bold leading-tight max-w-4xl'>
              Hi, I am Krishnaa 👋
            </h1>

            <p className='text-gray-300 text-lg md:text-xl py-6 max-w-3xl leading-8'>
             Computer Science student at MEC passionate about building web applications, exploring AI/ML and solving real-world problems through technology.
            </p>

            <div className='flex gap-5'>
              <a href="https://github.com/krishnaampai">
                <FaGithub className='text-3xl text-[#E2E8F0] hover:text-[#A78BFA] transition duration-300'/>
              </a>

              <a href="https://www.linkedin.com/in/krishnaa-m-pai/">
                <FaLinkedin className='text-3xl text-[#E2E8F0] hover:text-[#A78BFA] transition duration-300'/>
              </a>
            </div>
          </div>

        </motion.section>

        {/* Skills */}
        <section id='skills' className='bg-[#1E293B]/70 border-y border-white/10 backdrop-blur-xl flex flex-col py-6 items-center'>
          <button className='rounded-xl bg-[#A78BFA]/20 border border-[#A78BFA]/30 text-[#E2E8F0] text-sm px-3 py-1 mx-auto backdrop-blur-md'>
            Skills
          </button>

          <SkillsGrid/>
        </section>

        <div className="space-y-20 md:space-y-28">
          <ProjectsSection/>
          <ExperienceSection/>
          <EducationSection/>
          <Footer/>
        </div>

      </div>
    </>
  )
}

export default App