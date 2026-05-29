import {useState,useEffect} from "react";
import {HiMenu,HiX} from "react-icons/hi";

const Navbar = () => {

  const [open,setOpen] = useState(false);
  const [active,setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting){
            const id = entry.target.id;
            setActive(id);
            window.history.replaceState(null,"",`#${id}`);
          }
        });
      },
      {
        rootMargin:"-30% 0px -50% 0px",
        threshold:0
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-999 flex items-center justify-between px-6 md:px-12 lg:px-24 py-4 text-white bg-[#0F172A]/70 backdrop-blur-xl border-b border-white/10">

      <h1 className="text-2xl font-bold">
        Krishnaa
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10 text-sm">

        <a href="#home" className={`${active==="home" ? "text-[#A78BFA]" : "text-white"} hover:text-[#A78BFA] transition duration-300`}>
          Home
        </a>

        <a href="#skills" className={`${active==="skills" ? "text-[#A78BFA]" : "text-white"} hover:text-[#A78BFA] transition duration-300`}>
          Skills
        </a>

        <a href="#projects" className={`${active==="projects" ? "text-[#A78BFA]" : "text-white"} hover:text-[#A78BFA] transition duration-300`}>
          Projects
        </a>

        <a href="#experience" className={`${active==="experience" ? "text-[#A78BFA]" : "text-white"} hover:text-[#A78BFA] transition duration-300`}>
          Experience
        </a>

        <a href="#education" className={`${active==="education" ? "text-[#A78BFA]" : "text-white"} hover:text-[#A78BFA] transition duration-300`}>
          Education
        </a>

      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-3xl" onClick={()=>setOpen(!open)}>
        {open ? <HiX/> : <HiMenu/>}
      </button>

      {/* Mobile Menu */}
      <div className={`absolute top-20 left-0 w-full bg-[#1B1320]/95 backdrop-blur-xl flex flex-col items-center gap-8 py-10 transition-all duration-300 md:hidden ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>

        <a href="#home" onClick={()=>setOpen(false)}>Home</a>

        <a href="#skills" onClick={()=>setOpen(false)}>Skills</a>

        <a href="#projects" onClick={()=>setOpen(false)}>Projects</a>

        <a href="#experience" onClick={()=>setOpen(false)}>Experience</a>

        <a href="#education" onClick={()=>setOpen(false)}>Education</a>

      </div>

    </nav>
  )
}

export default Navbar