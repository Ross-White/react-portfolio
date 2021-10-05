import React from 'react';

const Project = (props) => {
  var image=`./images/${props.image}`
  return (
    <div className="w-full h-80 flex md:flex-col md:w-1/4 rounded overflow-hidden shadow-lg my-s bg-scondary-color border-2">
      <div>
          <img className="w-1/2 object-scale-down" src={image} alt={props.title} />
        <div className="px-8 py-2">
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