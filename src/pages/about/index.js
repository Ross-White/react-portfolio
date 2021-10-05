import React from 'react';

const About = () => {
  return (
    <div className='container h-4/5 m-8 space-x-16 space-y-16'>
      <div className="flex flex-col md:flex-row rounded-xl">
        <img className="w-full object-cover md:w-1/3 float-left rounded-xl" src="./images/wm_cartoonize_rkJSA_lisbon (1).jpg" />
        <p className='m-8 text-center text-2xl'>
        I'm Ross, a full stack web developer with an extensive background as a manager in the hospitality industry. Having decided to make a creer change and follow my passion for new tech and problem solving, I recently graduated from the University of Manchester Coding Boot Camp, and now I am excited about starting my career as a developer. Experience of building full stack web apps from the ground up, individually and as part of a small distributed team, utilising tech such as Git, Miro and Slack to work collaboratively in a remote team. Always happy to take on a challenge, I enjoy testing myself learning new technologies and languages, as well as findling elegant solutions to problems.
        </p>
      </div>
      <div className='grid justify-items-center'>
        <h2 className='m-4 text-2xl'>Technical Skills</h2>
        <ul className='grid grid-cols-2 list-disc list-inside m-4 text-2xl'>
          <div>
            <li>React</li>
            <li>Node</li>
            <li>Express</li>
            <li>AWS</li>
          </div>
          <div>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
            <li>TailwindCSS</li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default About;