import React from 'react';

const CV = () => {
  return (
    <div className="flex flex-row">
      <section className="w-1/6 text-center py-32 text-xl">
        <h1 className="underline text-3xl">Contact</h1>
        <p>email: info@ross-white.co.uk</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/ross-white1/" target="_blank">linkedin.com/in/ross-white1/</a></p>
        <p>GitHub: <a href="https://github.com/Ross-White" target="_blank">github.com/Ross-White</a></p>
      </section>
      <div>
        <section className="">
          <h1 className="text-center">Work Experience</h1>
        </section>
        <section>
          <h1 className="text-center">Education</h1>
        </section>
      </div>
    </div>
  );
}

export default CV;