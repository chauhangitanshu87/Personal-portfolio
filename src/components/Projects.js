import React from 'react';


const Projects = () => {
  return (
    <section id="projects" className="projects container my-5">
      <h2 className="text-center mb-4">Projects</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h3 className="card-title">Covid-19 Disease Prediction</h3>
              <p className="card-text">Used Linear Regression and KNN algorithms to predict upcoming COVID-19 cases and classify diseases.</p>
              <a href="https://github.com/chauhangitanshu87/covid19-prediction" target="_blank" rel="noopener noreferrer" className="btn btn-dark">View on GitHub</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h3 className="card-title">React News Portal</h3>
              <p className="card-text">A web application that fetches real-time news articles using the News API service and displays them in a user-friendly way.</p>
              <a href="https://github.com/chauhangitanshu87/react-news-portal" target="_blank" rel="noopener noreferrer" className="btn btn-dark">View on GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
