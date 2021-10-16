import React from 'react';

const About = () => {
  return (
    <div className='container h-4/5 space-y-16 m-8 flex flex-col justify-center'>
      <div className="flex flex-col md:flex-row rounded-xl">
        <img className="w-full object-cover md:w-1/3 float-left rounded-xl" src="./images/wm_cartoonize_rkJSA_lisbon (1).jpg" alt="ross-cartoon" />
        <p className='m-8 text-center text-2xl'>
        I'm Ross, a full stack web developer with an extensive background as a manager in the hospitality industry. Recently graduated from the University of Manchester Coding Boot Camp, and now I am excited about starting my career as a developer. Experience of building full stack web apps from the ground up, individually and as part of a small distributed team, utilising tech such as Git, Miro and Slack to work collaboratively whilst remote. Natural problem solver, who enjoys the challenge of learning new skills and technologies.
        </p>
      </div>
      <div className='w-full'>
        <h2 className='m-4 text-center font-bold text-2xl'>Technical Skills</h2>
        <p className="m-4 text-center text-2xl" >HTML | CSS | JavaScript | React | NodeJS | Express | MySQL | MongoDB | GraphQL | TailwindCSS | AWS | Git</p>
      </div>
    </div>
  );
}

export default About;