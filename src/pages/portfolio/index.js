import React from 'react';
import ProjectData from '../../projectData.json';
import Project from '../../components/project';

const Portfolio = () => {
  return (
    <div>
      {ProjectData.ProjectData.map((projects) => (
        <Project title={projects.title} description={projects.description} image={projects.image} technology={projects.technology} url={projects.url} repo={projects.repo} />
      ))}
    </div>
  );
}

export default Portfolio;