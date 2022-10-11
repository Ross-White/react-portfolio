import React from 'react';

const About = () => {
  return (
    <div className='container h-4/5 space-y-16 m-8 flex flex-col justify-center'>
      <div className="flex flex-col md:flex-row rounded-xl">
        <img className="w-full object-cover md:w-1/3 float-left rounded-xl" src="./images/wm_cartoonize_rkJSA_lisbon (1).jpg" alt="ross-cartoon" />
        <p className='m-8 text-center text-2xl'>
        Full stack web developer with proven track record of delivering quality, maintainable code. Demonstrable ability to develop skills quickly and thrive in new environments. With a commitment to maximising the potential of technology to drive advances in all aspects of society, I am passionate about the impact I can have in the tech field within any organisation. Previous extensive background as a results-driven and people-focussed manager in the hospitality industry with a history of recruiting, training and developing award winning teams.        </p>
      </div>
      <div className='w-full'>
        <h2 className='m-4 text-center font-bold text-2xl'>Technical Skills</h2>
        <p className="m-4 text-center text-2xl" >HTML | CSS | JavaScript | React | NodeJS | Express | MySQL | MongoDB | GraphQL | TailwindCSS | AWS | Git</p>
      </div>
    </div>
  );
}

export default About;