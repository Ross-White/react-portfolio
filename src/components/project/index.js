import React from 'react';

const Project = (props) => {
  return (
    <div className="w-full flex md:flex-col md:w-1/4 rounded overflow-hidden shadow-lg my-s bg-scondary-color border-2">
      <div>
          <img className="w-1/2 object-contain" src={props.image} alt={props.title} />
        <div className="px-6 py-4">
          <h1 className="font-bold text-xl mb-2">{props.title}</h1>
          <p className="text-grey-darker text-base">{props.description}</p>
          <p className="font-bold">{props.technology}</p>        
        </div>
        <div className="px-6 py-4">
          <a href={props.url} className="inline-block bg-grey-lighter rounded-full px-3 py-1">Deployed App</a>
          <a href={props.repo} className="inline-block bg-grey-lighter rounded-full px-3 py-1">Repo</a>
        </div>
      </div>
    </div>
  );
}

export default Project;