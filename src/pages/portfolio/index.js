import React, { useState } from 'react';
import ProjectData from '../../projectData';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Portfolio = () => {
  const last = ProjectData.length - 1;
  const [display, setDisplay] = useState([ProjectData[0], ProjectData[1], ProjectData[2]])
  const [currentProject, setCurrentProject] = useState(1);
  const [prevProject, setPrevProject] = useState(0);
  const [nextProject, setNextProject] = useState(2);

  const prev = () => {
    setPrevProject(prevProject === 0 ? last : prevProject - 1);
    setCurrentProject(currentProject === 0 ? last : currentProject - 1);
    setNextProject(nextProject === 0 ? last : nextProject - 1);
    setDisplay([ProjectData[prevProject], ProjectData[currentProject], ProjectData[nextProject]])
  }

  const next = () => {
    setPrevProject(prevProject === last ? 0 : prevProject + 1);
    setCurrentProject(currentProject === last ? 0 : currentProject + 1);
    setNextProject(nextProject === last ? 0 : nextProject + 1);
    setDisplay([ProjectData[prevProject], ProjectData[currentProject], ProjectData[nextProject]])
  }

  return (
    <div className="flex flex-col md:flex-row md:w-2/3 justify-center items-center space-x-5 space-y-5 place-items-center" >
      <AiOutlineArrowLeft onClick={prev} className='absolute left-8 text-3xl inset-y-1/2 bg-black text-white cursor-pointer' />
      {display.map((project, index) => (
        <div className={index === 1 ? "transition duration-500 ease-in-out z-20 w-full h-80 flex md:flex-col md:w-full md:h-auto rounded overflow-hidden my-s border-10 transform hover:scale-110 z-10"
          : index === 0 ? 'invisible transition duration-500 ease-in-out z-0 w-full h-80 flex md:visible md:flex-col md:w-1/2 md:h-auto rounded shadow-lg my-s border-2 transform hover:scale-110 cursor-pointer relative z-0'
            : index === 2 ? 'invisible transition duration-500 ease-in-out z-0 w-full h-80 flex md:visible md:flex-col md:w-1/2 md:h-auto rounded shadow-lg my-s border-2 transform hover:scale-110 cursor-pointer relative z-0'
              : 'hidden'}>
          <img
            className='h-full w-full shadow-xl'
            src={`./images/${project.image}`}
            alt={project.title} />
          <section className={index === 1 ? 'visible object-scale-down mt-8 px-8 py-2 text-center' : 'hidden'}>
            <h1 className="font-bold text-xl mb-2">{project.title}</h1>
            <p className="text-grey-darker text-base">{project.description}</p>
            <p className="font-bold">{project.technology}</p>
            <div className="px-6 py-4">
              <a href={project.url} className="inline-block bg-grey-lighter rounded-full px-3 py-1">Deployed App</a>
              <a href={project.repo} className="inline-block bg-grey-lighter rounded-full px-3 py-1">Repo</a>
            </div>
          </section>
        </div>
      ))}
      <AiOutlineArrowRight onClick={next} className='absolute right-8 text-3xl inset-y-1/2 bg-black text-white cursor-pointer' />
    </div>
  );
}

export default Portfolio;

