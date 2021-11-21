import React, { Component } from 'react';
import ProjectData from '../../projectData';
// import Project from '../../components/project';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";


class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProject: 0,
      paused: false,
    };
  }

  componentDidMount() {
      if (this.state.paused === false) {
        let newProject =
          this.newProject === ProjectData.length - 1 ? 0 :
          this.state.currentProject + 1;
        this.setState({ currentProject: newProject });
      }
  }

  nextProject = () => {
    let newProject =
      this.state.currentProject === ProjectData.length - 1
        ? 0
        : this.state.currentProject + 1;
    this.setState({ currentProject: newProject });
  };

  prevProject = () => {
    let newProject =
      this.state.currentProject === 0
        ? ProjectData.length - 1
        : this.state.currentProject - 1;
    this.setState({ currentProject: newProject });
  };

  setCurrentProject = (index) => {
    this.setState({ currentProject: index });
  };

  render() {
    return (
      <div className="flex flex-col md:flex-row md:w-2/3 flex-wrap justify-center items-center space-x-5 space-y-5 place-items-center" >
        <AiOutlineLeft onClick={this.prevProject} className='absolute left-8 text-3xl inset-y-1/2 bg-black text-white cursor-pointer' />
        {ProjectData.map((project, index) => {
          return (
            // <Project 
            //   key={index} 
            //   currentProject={this.state.currentProject} 
            //   title={project.title}
            //   description={project.description} 
            //   image={project.image} 
            //   technology={project.technology}
            //   url={project.url} 
            //   repo={project.repo} />
            <div key={index} className={index === this.state.currentProject ? "w-full h-80 flex md:flex-col md:w-2/3 md:h-2/3 rounded overflow-hidden shadow-lg my-s bg-scondary-color border-2" : 'hidden'}>
              <div className="flex md:flex-col justify-center">
                <img className="w-1/2 object-scale-down" src={`./images/${project.image}`} alt={project.title} />
                <div className="px-8 py-2">
                  <h1 className="font-bold text-xl mb-2">{project.title}</h1>
                  <p className="text-grey-darker text-base">{project.description}</p>
                  <p className="font-bold">{project.technology}</p>
                </div>
                <div className="px-6 py-4">
                  <a href={project.url} className="inline-block bg-grey-lighter rounded-full px-3 py-1">Deployed App</a>
                  <a href={project.repo} className="inline-block bg-grey-lighter rounded-full px-3 py-1">Repo</a>
                </div>
              </div>
              <AiOutlineRight onClick={this.nextProject} className='absolute right-8 text-3xl inset-y-1/2 bg-black text-white cursor-pointer' />
            </div>
          );
        }
        )}
      </div>
    );
  }
}

export default Portfolio;