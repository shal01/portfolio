import React from "react";
import {
  FaBootstrap,
  FaCss3,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaPython,
} from "react-icons/fa";
import { FaJava } from "react-icons/fa";
const Skills = () => {
  return (
    <div className="md:h-screen grid grid-cols-6 gap-5  bg-violet-500/30  w-full">
      <div className="col-span-6   p-5">
        <h1 className="text-center text-2xl p-5 font-bold">Skills</h1>
        <div className="grid grid-cols-8 gap-5">
          <div className="bg-white px-5 py-2 rounded-3xl col-span-8 md:col-span-2 shadow-2xl ">
            <h1 className="text-center font-bold md:text-xl text-gray-500">Python</h1>
          </div>
          <div className="bg-white px-5 py-2 rounded-3xl col-span-8 md:col-span-2 shadow-2xl ">
            <h1 className="text-center font-bold md:text-xl text-gray-500">Django</h1>
          </div>
          <div className="bg-white px-5 py-2 rounded-3xl col-span-8 md:col-span-2 shadow-2xl ">
            <h1 className="text-center font-bold md:text-xl text-gray-500">Java</h1>
          </div>
          <div className="bg-white px-5 py-2 rounded-3xl col-span-8 md:col-span-2 shadow-2xl ">
            <h1 className="text-center font-bold md:text-xl text-gray-500">Javascript</h1>
          </div>
          <div className="bg-white px-5 py-2 rounded-3xl col-span-8 md:col-span-2 shadow-2xl ">
            <h1 className="text-center font-bold md:text-xl text-gray-500">RestAPI</h1>
          </div>
          <div className="bg-white px-5 py-2 rounded-3xl col-span-8 md:col-span-2 shadow-2xl ">
            <h1 className="text-center font-bold md:text-xl text-gray-500">ORM</h1>
          </div>
          <div className="bg-white px-5 py-2 rounded-3xl col-span-8 md:col-span-2 shadow-2xl ">
            <h1 className="text-center font-bold md:text-xl text-gray-500">AWS</h1>
          </div>
          <div className="bg-white px-5 py-2 rounded-3xl col-span-8 md:col-span-2 shadow-2xl ">
            <h1 className="text-center font-bold md:text-xl text-gray-500">CSS</h1>
          </div>
          <div className="bg-white px-5 py-2 rounded-3xl col-span-8 md:col-span-2 shadow-2xl ">
            <h1 className="text-center font-bold md:text-xl text-gray-500">Html</h1>
          </div>
          <div className="bg-white px-5 py-2 rounded-3xl col-span-8 md:col-span-2 shadow-2xl ">
            <h1 className="text-center font-bold md:text-xl text-gray-500">OOPS</h1>
          </div>
          <div className="bg-white px-5 py-2 rounded-3xl col-span-8 md:col-span-2 shadow-2xl ">
            <h1 className="text-center font-bold md:text-xl text-gray-500">PostgreSql</h1>
          </div>
          <div className="bg-white px-5 py-2 rounded-3xl col-span-8 md:col-span-2 shadow-2xl ">
            <h1 className="text-center font-bold md:text-xl text-gray-500">Git</h1>
          </div>
          <div className="bg-white px-5 py-2 rounded-3xl col-span-8 md:col-span-2 shadow-2xl ">
            <h1 className="text-center font-bold md:text-xl text-gray-500">Github</h1>
          </div>
         
          <div className="bg-white px-5 py-2 rounded-3xl col-span-8 md:col-span-2 shadow-2xl ">
            <h1 className="text-center font-bold md:text-xl text-gray-500">DSA</h1>
          </div>
          <div className="bg-white px-5 py-2 rounded-3xl col-span-8 md:col-span-2 shadow-2xl ">
            <h1 className="text-center font-bold md:text-xl text-gray-500">Boostrap</h1>
          </div>
          
          {/* <div className='bg-white'>
                    <h1 className='text-center'>Strong Problem Solving and Debugging skill</h1>
                </div> */}
        </div>
        {/* <ul className='flex '>
                 <li className='flex items-center'>
                    <FaPython size={'4rem'} />
                    <span>Python</span>
                 </li>
                 <li>
                    <span>Djago</span>
                 </li>
                 <li className='flex items-center'>
                    <FaJava size={'4rem'}/>
                    <span>Java</span>
                 </li>
                 <li className='flex items-center'>
                    <FaJs size={'4rem'}/>
                    <span>JavaScript</span>
                 </li>
                 <li className='flex items-center'>
                   
                    <FaCss3Alt size={'4rem'}/>
                    <span>Css</span>
                 </li>
                 <li className='flex items-center'>
                     <FaHtml5 size={'4rem'}/>
                    <span>Html</span>
                 </li>
                 <li className='flex items-center'>
                    
                    <span>OOPS</span>
                 </li>
                 <li className='flex items-center'>
                    <FaDatabase size={'4rem'} />
                    <span>Postgresql</span>
                 </li>
                 <li className='flex items-center'>
                    <span>ORM</span>
                 </li>
                 <li className='flex items-center'>
                    <FaGitAlt size={'4rem'} />
                     <span>Git</span>
                 </li>
                 <li className='flex items-center'>
                    <FaGithub size={'4rem'}/>
                    <span>Github</span>
                 </li>
                 <li className='flex items-center'>
                    <span>Django RestFramework</span>
                 </li>
                 <li className='flex items-center'>
                    
                    <span>DSA</span>
                 </li>
                 <li className='flex items-center'>
                    <FaBootstrap size={'4rem'} />
                    <span>Boostrap</span>
                 </li>
                 
             </ul> */}
      </div>
      <div className="col-span-6 p-5 text-2xl font-bold ">
        <h1 className="text-center underline">Education</h1>
        <h1 className="text-center text-gray-600  shadow-2xl ">
          Bachelors In Computer Application University Of Calicut 2018 – 2021 |
          Thrissur, Kerala
        </h1>
      </div>
      <div className="col-span-6 p-5 text-2xl font-bold ">
        <h1 className="text-center underline"> Experience</h1>
        <h1 className="text-center text-gray-600">Luminar Technolab</h1>
        <h1 className="text-center text-gray-600 " >
          Python Django Full Stack Developer Intern 2021 – 2022 | Cochin, Kerala
        </h1>
        <p></p>
      </div>
    </div>
  );
};

export default Skills;
