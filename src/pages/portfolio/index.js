import React from 'react';
import ProjectData from '../../projectData.json';
import Project from '../../components/project';

const Portfolio = () => {
  return (
    <div className="flex flex-row justify-center items-center space-x-5 space-y-5 place-items-center" >
      {ProjectData.ProjectData.map((projects) => (
        <Project key={projects.title} title={projects.title} description={projects.description} image={projects.image} technology={projects.technology} url={projects.url} repo={projects.repo} />
      ))}
    </div>
  );
}

export default Portfolio;