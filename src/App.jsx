import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FaGithub,FaLinkedin  } from "react-icons/fa";

import './App.css'

function App() {
  return (
    <>
    <div >
      {/*Intro */}
      <section className='px-36 py-10'>
      <h1 className='text-[#E6DAE8] text-6xl font-bold'>Hi, I am Krishnaa 👋</h1>
      <p className='text-[#E6DAE8] text-xl py-5 max-w-4xl'>
        I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
      </p>
      <div className='flex flex-col-1 gap-4'>
        <FaGithub className='text-2xl text-white'/>
        <FaLinkedin className=' text-2xl text-white'/>
      </div>
      </section>
      {/* Skills */}
      <section className='bg-[#695073] h-7'>
        
      </section>
    </div>
    </>
  )
}

export default App
