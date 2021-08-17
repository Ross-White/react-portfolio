import React from 'react';

const About = () => {
  return (
    <div className='container h-4/5'>
      <h1 className='m-4'>About Me</h1>
      <p className='m-4 text-justify'>
      Full stack web developer with extensive background as a results-driven and people-focussed manager in the hospitality industry. 
      Recent graduate of The University of Manchester Coding Bootcamp. Having excelled at learning new technologies and demonstrated 
      natural problem-solving ability, looking to apply my enthusiasm for learning and personal development to a new role. Proven track 
      record of recruiting, training, and motivating teams to achieve outstanding results and awards. Excellent stakeholder management, 
      workflow coordination and communication skills in fast-moving environments, with an ability to work well under pressure.
      </p>
      <div className='grid justify-items-center'>
        <h2 className='m-4'>Technical Skills</h2>
        <ul className='grid grid-cols-2 list-disc list-inside m-4'>
          <div>
            <li>React</li>
            <li>Node</li>
            <li>Express</li>
            <li>Apollo</li>
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