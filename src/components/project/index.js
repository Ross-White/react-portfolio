import React from 'react';

const Project = (props) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-s">
      {/* <img className="w-full" src={image} /> */}
      <div className="px-6 py-4">
        <h1 className="font-bold text-xl mb-2">{props.title}</h1>
        <p className="text-grey-darker text-base">{props.description}</p>
        <p className="text-grey-darker text-base">Technology used:</p>
        <p><i>{props.technology}</i></p>        
      </div>
      <div className="px-6 py-4">
        <a href={props.url} className="inline-block bg-grey-lighter rounded-full px-3 py-1">Deployed App</a>
        <a href={props.repo} className="inline-block bg-grey-lighter rounded-full px-3 py-1">Repo</a>
      </div>
    </div>
  );
}

export default Project;