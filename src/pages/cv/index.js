import React from 'react';

const CV = () => {
  return (
    <div className="md:grid gap-8 md:grid-cols-2">
      <section >
       <div className="">
          <div className="">
            <div className="">
              <h2>University of Manchester</h2>
            </div>
            <div className="">
              <h2>Full Stack Web Devloper Certificate</h2>
              <p>Intensive training program encompassing all aspects of full stack web development. Worked individually and as part of a small team to develop full stack apps, utilising agile methodology; and tech such as Git version control, Miro for wireframing and planning, Slack for communication.</p>
            </div>
          </div>
          <div className="flex flex-row items-stretch justify-between">
            <div className="flex-1 b-r-2 p-r-20px">
              <h2>Aquinas 6th Form College</h2>
            </div>
            <div className="flex-2 text-justify">
              <h2>A levels</h2>
              <ul className="list-disc">
                <li>Mathematics</li>
                <li>Chemistry</li>
                <li>Physics</li>
                <li>Computing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1>Work Experience</h1>
        <div>
          <div className="flex flex-row divide-x-2">
            <div>
              <h2>HMCTS</h2>
              <h3>2021-present</h3>
            </div>
            <div className="text-justify">
              <h2>Video Hearing Administrator</h2>
              <p>Administrative support for the Family Court in Manchester. Responsible for providing technical support for remote hearings, processing applications and other administrative duties as required.</p>
            </div>
          </div>
          <div className="flex flex-row divide-x-2">
            <div>
              <h2>Hawksmoor, Manchester</h2>
              <h3>2015-2020</h3>
            </div>
            <div className="text-justify">
              <h2>Restaurant Manager</h2>
              <p>I established Hawksmoor Manchester as one of the top restaurants in the north of England from opening and have consistently delivered sales growth every year since the opening in 2015. Recruited, trained, developed and managed a team of up to 20 staff in the restaurant; as well as creating and implementing new processes to deliver more effective recruitment.</p>
              <ul className="list-disc">
                <li>Placed in the Top Ten places to eat in the North</li>
                <li>Won the Best Front of House Award at Manchester Food and Drink Awards twice in three years</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row divide-x-2">
            <div>
              <h2>Artisan Kicthen and Bar</h2>
              <h3>2013-2015</h3>
            </div>
            <div className="">
              <h2>Front of House Trainer</h2>
              <p>Worked as part of the opening team, including training new hires, and setting objectives.</p>
              <ul className="list-disc">
                <li>Managed all aspects of the busy premium restaurant with net sales of over £100k a week.</li>
                <li>Promoted into a training role, taking responsibility for the standards and training of the restaurant team.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CV;