import React from 'react';

const CV = () => {
  return (
    <div className="flex flex-row">
      <section className="flex flex-col w-1/4 text-center py-32 px-8 text-xl content-center">
        <h1 className="underline text-3xl">Contact</h1>
        <div className="my-8">
          <p className="my-4">Email: info@ross-white.co.uk</p>
          <p className="my-4">LinkedIn: <a href="https://www.linkedin.com/in/ross-white1/" target="_blank">linkedin.com/in/ross-white1/</a></p>
          <p className="my-4">GitHub: <a href="https://github.com/Ross-White" target="_blank">github.com/Ross-White</a></p>
        </div>
      </section>
      <div className="w-3/4 px-16 my-8 mx-16">
        <section className="justify-center">
          <h1 className="text-center underline text-3xl">Work Experience</h1>
          <div className="my-8">
            <h3 className="font-bold">Virtual Hearing Aministrator</h3>
            <p>HMCTS, Manchester</p>
            <p>Jan 2021-Present</p>
            <p>Administrative support for the Family Court in Manchester. Responsible for providing technical support for remote hearings, processing applications and other administrative duties as required.</p>
          </div>
          <div className="my-8">
            <h3 className="font-bold">Restaurant Manager</h3>
            <p>Hawksmoor, Manchester</p>
            <p>Feb 2015-Oct 2020</p>
            <p>Established Hawksmoor Manchester as one of the top restaurants in the north of England from opening. Recruited, trained, developed, and managed a team of up to 20 staff across the restaurant and kitchen.</p>
            <ul className="list-disc list-inside">
              <li>Placed in the Top Ten places to eat in the North.</li>
              <li>Won the Best Front of House Award at Manchester Food and Drink Awards twice in three years. </li>
            </ul>
          </div>
          <div className="my-8">
            <h3 className="font-bold">Front of House Trainer</h3>
            <p>Artisan, Manchester</p>
            <p>Jun 2013-Feb 2015 </p>
            <p>Worked as part of the opening team, including training new hires, and setting objectives.</p>
            <ul className="list-disc list-inside">
              <li>Managed all aspects of the busy premium restaurant with net sales of over £100k a week.</li>
              <li>Promoted into a training role, taking responsibility for the standards and training of the restaurant team.</li>
            </ul>
          </div>
        </section>
        <section>
          <h1 className="text-center underline text-3xl">Education</h1>
          <div className="my-8">
            <h3 className="font-bold">Certificate, Full Stack Web Development | 2021</h3>
            <p>University of Manchester</p>
          </div>
          <div className="my-8">
            <h3 className="font-bold">A-Levels: Chemistry, Physics, Applied Mathematics, General Studies</h3>
            <h3 className="font-bold">As-Level: Computing</h3>
            <p>St. Thomas Aquinas 6th Form College, Stockport</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CV;