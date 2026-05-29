import {FaGithub,FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 py-6 px-6 md:px-12 lg:px-16">

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

        <div className="text-[#E2E8F0] font-medium">
          Krishnaa M Pai
        </div>

        <div className="text-gray-500">
          Designed & built using Figma, React and tailwind
        </div>

        <div className="flex items-center gap-4 text-xl">

          <a
            href="https://github.com/krishnaampai"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-[#A78BFA] transition duration-300"
          >
            <FaGithub/>
          </a>

          <a
            href="https://linkedin.com/in/krishnaa-m-pai"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-[#A78BFA] transition duration-300"
          >
            <FaLinkedin/>
          </a>

          <a
            href="mailto:krishnaampai.mec@gmail.com"
            className="text-gray-400 hover:text-[#A78BFA] transition duration-300"
          >
            <HiOutlineMail/>
          </a>

        </div>

      </div>

    </footer>
  )
}

export default Footer