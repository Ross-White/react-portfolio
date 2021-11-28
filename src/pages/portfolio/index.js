import React, { useState } from 'react';
import ProjectData from '../../projectData';

const Portfolio = () => {
  const last = ProjectData.length - 1;
  // const [display, setDisplay] = useState([ProjectData[0], ProjectData[1], ProjectData[2]])

  const [currentProject, setCurrentProject] = useState(1);
  const [prevProject, setPrevProject] = useState(0);
  const [nextProject, setNextProject] = useState(2);

  const changeProject = (event) => (index) => {
    console.log(event);
    let newProject = event;
    setPrevProject(newProject -1 === 0 ? last : newProject - 1);
    setCurrentProject(newProject);
    setNextProject(newProject + 1 === last ? 0 : newProject + 1);
    console.log(prevProject, currentProject, nextProject)
    // setDisplay([ProjectData[prevProject], ProjectData[currentProject], ProjectData[nextProject]]);
    // console.log(display);
  }

  return (
     <div className="flex flex-col md:flex-row md:w-2/3 justify-center items-center space-x-5 space-y-5 place-items-center" >
      {ProjectData.map((project, index) => (
        <div className={index === currentProject ? "transition duration-500 ease-in-out z-20 w-full h-80 flex md:flex-col md:w-full md:h-2/3 rounded overflow-hidden my-s border-10 transform hover:scale-110 hover:shadow-2xl z-10"
          : index === prevProject ? 'invisible transition duration-500 ease-in-out z-0 w-full h-80 flex md:visible md:flex-col md:w-1/2 md:h-1/3 rounded overflow-hidden shadow-lg my-s border-2 transform hover:scale-110 cursor-pointer relative z-0'
            : index === nextProject ? 'invisible transition duration-500 ease-in-out z-0 w-full h-80 flex md:visible md:flex-col md:w-1/2 md:h-1/3 rounded overflow-hidden shadow-lg my-s border-2 transform hover:scale-110 cursor-pointer relative z-0'
              : 'hidden'}
          onClick={changeProject(index)}>
          <img
            className='h-full w-full shadow-xl'
            src={`./images/${project.image}`}
            alt={project.title} />
          <section className={index === currentProject ? 'visible mt-8' : 'hidden'}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>{project.technology}</p>
            <div className="px-6 py-4">
              <a href={project.url} className="inline-block bg-grey-lighter rounded-full px-3 py-1">Deployed App</a>
              <a href={project.repo} className="inline-block bg-grey-lighter rounded-full px-3 py-1">Repo</a>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;

