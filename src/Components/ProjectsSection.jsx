import {projects} from "../data/Projects";
import {FaGithub} from "react-icons/fa";
import {motion} from "framer-motion";
const ProjectsSection = () => {
  return (
    <section id="projects" className="py-10">
      <button className="rounded-xl bg-[#A78BFA]/20 border border-[#A78BFA]/30 text-[#E2E8F0] text-sm px-3 py-1 mx-auto flex justify-center backdrop-blur-md">
        Projects
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-10 md:px-12 lg:px-32 py-10">
        {projects.map((project,index)=>(
          <motion.div
              key={project.title}
              initial={{opacity:0,y:50}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:false,amount:0.2}}
              transition={{duration:0.8,ease:[0.22,1,0.36,1]}}
              className="bg-[#1E293B]/80 border border-white/10 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.25)] p-6 flex flex-col gap-6 transition duration-300 hover:-translate-y-2 hover:border-[#A78BFA]/40 backdrop-blur-xl"
            >
            <div className="flex-1">
              <div className="w-full h-[220px] md:h-[280px] bg-[#0F172A] rounded-xl overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover"/>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-[#E2E8F0]">
                {project.title}
              </h2>

              <p className="text-gray-300 mt-2 leading-7">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech)=>(
                  <span key={tech} className="px-3 py-1 rounded-full bg-[#A78BFA]/15 text-[#A78BFA] text-xs border border-[#A78BFA]/20">
                    {tech}
                  </span>
                ))}
              </div>

              <a href={project.github} target="_blank" className="mt-4 w-fit flex items-center gap-2 px-4 py-2 rounded-xl bg-[#A78BFA] text-[#0F172A] font-medium transition duration-300 hover:scale-105">
                <FaGithub/>
                GitHub
              </a>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection