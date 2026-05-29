import {experience} from "../data/Experience";

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-[#111827] py-10">
      <button className="rounded-xl bg-[#A78BFA]/20 border border-[#A78BFA]/30 text-[#E2E8F0] text-sm px-3 py-1 mx-auto flex justify-center backdrop-blur-md">
        Volunteer work
      </button>

      <div className="relative max-w-3xl mx-auto py-16 px-6">

        <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-[#A78BFA]/40 md:-translate-x-1/2"></div>

        <div className="flex flex-col gap-4">
          {experience.map((item,index)=>(
            <div key={index} className={`flex ${index%2===0 ? "md:justify-start" : "md:justify-end"} justify-end relative`}>

              <div className="absolute left-2.5 md:left-1/2 top-10 w-4 h-4 rounded-full bg-[#A78BFA] md:-translate-x-1/2"></div>

              <div className="bg-[#1E293B]/80 border border-white/10 w-[85%] md:w-[320px] rounded-2xl shadow-[0_6px_15px_rgba(0,0,0,0.2)] p-5 backdrop-blur-xl">

                <h2 className="font-bold text-[#A78BFA]">
                  {item.date}
                </h2>

                <p className="mt-0.5 text-[#E2E8F0] font-semibold">
                  {item.org}
                </p>

                <p className="text-gray-300 text-sm mt-1">
                  {item.role}
                </p>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ExperienceSection