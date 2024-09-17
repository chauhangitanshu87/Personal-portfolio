import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Home = () => {
  return (
    <section className="hero d-flex flex-column justify-content-center align-items-center bg-light py-5">
      <div className="container text-center">
        <img 
          src="IMG-20221104-WA0022.jpg"
          alt="Gitanshu Chauhan"
          className="img-fluid rounded-circle mb-4"
          style={{ maxWidth: '200px' }}
        />
        <h2 className="display-4 mb-3">Hi, I'm Gitanshu Chauhan</h2>
        <p className="lead mb-4">Aspiring Frontend Developer | Computer Science Graduate</p>
        <div>
          <Link to="/projects" className="btn btn-primary btn-lg mx-2">View My Work</Link>
          <Link to="/contact" className="btn btn-primary btn-lg mx-2">Contact Me</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;

