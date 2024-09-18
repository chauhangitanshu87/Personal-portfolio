import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'; // Added LinkedIn icon

function Contact() {
  return (
    <section id="contact" className="container my-5 py-5" style={styles.section}>
      <h2 className="text-center mb-4" style={styles.heading}>Get in Touch</h2>
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <p className="lead mb-4">Feel free to reach out to me at:</p>
          <div className="contact-info">
            <p>
              <FaEnvelope className="me-2" style={styles.icon} />
              <strong>Email:</strong> 
              <a href="mailto:gitanshuchauhan186@gmail.com" style={styles.link}>
                gitanshuchauhan186@gmail.com
              </a>
            </p>
            <p>
              <FaGithub className="me-2" style={styles.icon} />
              <strong>GitHub:</strong> 
              <a href="https://github.com/chauhangitanshu87" target="_blank" rel="noopener noreferrer" style={styles.link}>
                github.com/chauhangitanshu87
              </a>
            </p>
            <p>
              <FaLinkedin className="me-2" style={styles.icon} />
              <strong>LinkedIn:</strong> 
              <a href="https://www.linkedin.com/in/gitanshu-chauhan-b561a1233" target="_blank" rel="noopener noreferrer" style={styles.link}>
                linkedin.com/in/gitanshu-chauhan-b561a1233
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    color: '#343a40',
  },
  icon: {
    color: '#343a40',
    marginRight: '10px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default Contact;
