import React from 'react';


const Certifications = () => {
  return (
    <section id="certifications" className="certifications container my-5">
      <h2 className="text-center mb-4">Certifications</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Introduction to Programming using Python</h5>
              <p className="card-text">Cisco Networking Academy</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Data Analytics Innovation Camp 2022</h5>
              <p className="card-text">CSRBOX</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">IEEE Conference Presentation Certificate 2024   </h5>
              <p className="card-text">Presented research paper in IEEE Conference</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
