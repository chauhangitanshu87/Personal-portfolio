import React from 'react';
import { FaPython, FaDatabase, FaHtml5, FaReact } from 'react-icons/fa'; // Importing icons

const Skills = () => {
  return (
    <section id="skills" className="skills container my-5">
      <h2 className="text-center mb-4">Technical Skills</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <ul className="list-group">
            <li className="list-group-item d-flex align-items-center">
              <FaPython className="me-3" style={{ color: '#3572A5', fontSize: '1.5rem' }} /> Python
            </li>
            <li className="list-group-item d-flex align-items-center">
              <FaDatabase className="me-3" style={{ color: '#006400', fontSize: '1.5rem' }} /> SQL
            </li>
            <li className="list-group-item d-flex align-items-center">
              <FaHtml5 className="me-3" style={{ color: '#E34F26', fontSize: '1.5rem' }} /> HTML & CSS
            </li>
            <li className="list-group-item d-flex align-items-center">
              <FaReact className="me-3" style={{ color: '#61DBFB', fontSize: '1.5rem' }} /> React JS
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;





