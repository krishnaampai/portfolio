import {skills} from "../data/Skills";

const SkillsGrid = () => {
  return (
    <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-8 px-6 md:px-16 lg:px-32 py-10 place-items-center text-center">
      {skills.map((skill)=>(
        <div key={skill.name} className="flex flex-col items-center gap-2 transition duration-300 hover:scale-110">
          <img 
            src={`/Icons/${skill.file}`}
            alt={skill.name}
            loading="lazy"
            className="h-12 w-12 md:h-14 md:w-14"
          />
          <span className="text-sm text-white">{skill.name}</span>
        </div>
      ))}
    </div>
  )
}

export default SkillsGrid