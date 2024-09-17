import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills container my-5">
      <h2 className="text-center mb-4">Technical Skills</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Using Bootstrap's list-group for a clean, structured list of skills */}
          <ul className="list-group">
            <li className="list-group-item">Python</li>
            <li className="list-group-item">SQL</li>
            <li className="list-group-item">HTML & CSS</li>
            <li className="list-group-item">React JS</li>
           
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;




