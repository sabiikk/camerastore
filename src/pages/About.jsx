import React from 'react'
import Header from '../components/Header'
import '../pages/about.css';
import Footer from '../components/Footer';

function About() {
  return (
    <>
    <Header/>
     <div style={{maxwidth: '800px;'}} className="container mt-2" >
      <h1 className="text-center mb-4">About Us</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://img.freepik.com/free-photo/traveler-photographer-studio-portrait-handsome-bearded_613910-12325.jpg?t=st=1729251719~exp=1729255319~hmac=94c1c20bfe637f1963a136d2ce07b8fbb23cecd31fdf9caa9c37fd486572d236&w=740"
            alt="About Us"
            className="img-fluid rounded mb-4"
          />
        </div>
        <div className="col-md-6">
          <h2>Our Mission</h2>
          <p>
            We are committed to providing high-quality products that enhance the 
            lives of our customers. Our goal is to deliver innovative solutions 
            and exceptional service to our clients.
          </p>
          <h2>Our Vision</h2>
          <p>
            Our vision is to be a leader in the industry, recognized for our 
            dedication to quality and customer satisfaction. We strive to foster 
            a culture of continuous improvement and collaboration.
          </p>
          <h2>Get in Touch</h2>
          <p>
            If you have any questions or would like to know more about our 
            products, feel free to reach out to us via our contact page.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="row mt-5">
        <div className="col-md-12">
          <h2 className="text-center mb-4">Why Choose Us</h2>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="https://img.freepik.com/free-vector/premium-certified-quality-stamp_78370-1800.jpg?t=st=1729251826~exp=1729255426~hmac=00653c424368d9c10501ed5814a75b21dd9f2840cfcadb6462861ba3b36b69ad&w=740"
              alt="Quality"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Quality Products</h5>
              <p className="card-text">
                We ensure that all our products meet the highest quality standards 
                to provide you with the best experience.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="https://img.freepik.com/free-vector/illustration-business-people_53876-5886.jpg?t=st=1729251936~exp=1729255536~hmac=249e10f609594ce9d295d2cc098684f1e710ff578af5f0b597508136cc299b71&w=740"
              alt="Support"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Exceptional Support</h5>
              <p className="card-text">
                Our dedicated support team is here to assist you with any queries 
                or issues you may have.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img
              src="https://img.freepik.com/premium-vector/light-bulb-icon-solution-with-gear-logo-design-concept-idea_393879-5664.jpg?w=740"
              alt="Innovation"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Innovative Solutions</h5>
              <p className="card-text">
                We continually innovate to bring you cutting-edge solutions that 
                meet your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default About