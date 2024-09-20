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
              <a href="https://github.com/chauhangitanshu87/Covid-Prediction-Using-ML-" target="_blank" rel="noopener noreferrer" className="btn btn-dark">View on GitHub</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h3 className="card-title">React News Portal</h3>
              <p className="card-text">A web application that fetches real-time news articles using the News API service and displays them in a user-friendly way.</p>
              <a href="https://github.com/chauhangitanshu87/News-Portal" target="_blank" rel="noopener noreferrer" className="btn btn-dark">View on GitHub</a>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h3 className="card-title">Product Reviews Sentimental Analysis Using Machine Learning.</h3>
              <p className="card-text">In this project, I have classified product reviews from E-commerce website into positive,
                negative, and neutral category, with the help of machine learning and Natural language
                Processing.</p>
              <a href="https://github.com/chauhangitanshu87/Product-Reviews-Sentimental-Analysis" target="_blank" rel="noopener noreferrer" className="btn btn-dark">View on GitHub</a>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h3 className="card-title">
                Text-Utilities Website</h3>
              <p className="card-text">The objective of a Text Utils website is to provide users with a variety of tools and utilities to manipulate, analyze, and enhance text.</p>
              <a href="https://github.com/chauhangitanshu87/Text-Utilities" target="_blank" rel="noopener noreferrer" className="btn btn-dark">View on GitHub</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
