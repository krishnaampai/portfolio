import {education} from "../data/Education";

const EducationSection = () => {
  return (
    <section id="education" className="py-10">
      <button className="rounded-xl bg-[#A78BFA]/20 border border-[#A78BFA]/30 text-[#E2E8F0] text-sm px-3 py-1 mx-auto flex justify-center backdrop-blur-md">
        Education
      </button>

      <div className="flex flex-col gap-8 px-6 md:px-12 lg:px-24 py-12 max-w-4xl mx-auto">
        {education.map((item,index)=>(
          <div key={index} className="bg-[#1E293B]/80 border border-white/10 rounded-[2rem] p-8 shadow-[0_10px_20px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 backdrop-blur-xl">

            <p className="text-sm text-[#A78BFA] font-semibold">
              {item.year}
            </p>

            <h2 className="text-3xl font-bold text-[#E2E8F0] mt-3">
              {item.place}
            </h2>

            <p className="text-gray-300 mt-4 text-lg">
              {item.degree}
            </p>

          </div>
        ))}
      </div>
    </section>
  )
}

export default EducationSection