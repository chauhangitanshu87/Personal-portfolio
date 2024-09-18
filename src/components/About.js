import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const About = () => {
  return (
    <section id="about" className="container my-5">
      <h2 className="text-center mb-4">About Me</h2>
      <p className="lead text-center mb-4">
        I'm a B.Tech graduate from Galgotias University. I have a strong passion for coding, machine learning, and web development. I love building efficient web applications using React and Python.
      </p>
      <div className="text-center">
        <h4 className="mb-4">Education</h4>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card border-primary">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0">B.Tech</h5>
              </div>
              <div className="card-body">
                <p className="card-text">Galgotias University, Greater Noida (UP)</p>
                <p className="card-text">Branch: Computer Science</p>
                <p className="card-text">CGPA: 8.39</p>
                <p className="card-text">Passing Year: 2024</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card border-secondary">
              <div className="card-header bg-danger text-white">
                <h5 className="mb-0">12th Grade</h5>
              </div>
              <div className="card-body">
                <p className="card-text">Sarang Convent School Dhampur (UP)</p>
                <p className="card-text">Marks: 66.8%</p>
                <p className="card-text">Passing Year: 2019</p>
                <p className="card-text">Board of Education: CBSE</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card border-success">
              <div className="card-header bg-success text-white">
                <h5 className="mb-0">10th Grade</h5>
              </div>
              <div className="card-body">
                <p className="card-text">PMS School Dhampur (UP)</p>
                <p className="card-text">CGPA: 7.2</p>
                <p className="card-text">Passing Year: 2017</p>
                <p className="card-text">Board of Education: CBSE</p>
              </div>
            </div>
          </div>
        </div>
        {/* Resume Download Link */}
        <div className="mt-5">
          <a
            href="Gitanshu Chauhan RESUME.pdf"
            className="btn btn-outline-dark btn-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;




