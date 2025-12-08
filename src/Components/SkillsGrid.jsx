import {skills} from "../data/Skills";

import React from 'react'

const SkillsGrid = () => {
  return (
    <div className="w-full grid grid-cols-4 gap-4 lg:grid-cols-8 justify-center px-48 align items-center text-center">
      {skills.map((skills)=>(
        <div key = {skills.name}>
        <img 
          src = {`/Icons/${skills.file}`}
          alt = {skills.name}
          loading="lazy"
          className="l-15 w-15 align mx-auto"
        />
        <span className="text-sm mt-0.5 text-gray-900">{skills.name}</span>
        </div>

      ))}
    </div>
  )
}

export default SkillsGrid