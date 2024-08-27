import React, { useState, useEffect } from 'react';
import aboutus from "../../images/aboutus.jfif";
import mission from "../../images/mission.jpg";
import "./about.css";
import SignUp from "../SignupForm/signup";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const AboutUs = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    AOS.init();
}, []);

  return (
    <div className="main-aboutus">
      <section className="aboutus-section" data-aos="fade-right" data-aos-duration="2000">
        <h3>About Us</h3>
        <h1 className="text-big">
          Helping businesses succeed through the power of video.
        </h1>
        <p className="text-small" style={{ fontSize: '17px', fontStyle: 'oblique' }}>
          At our core, we prioritize on-time delivery as a cornerstone of our service.
          We understand the critical importance of meeting deadlines and strive to provide
          end-to-end solutions that are not only innovative and effective but also
          delivered punctually and within your allocated budget. Timeliness isn't
          just a goal for us; it's a commitment to ensuring your projects are completed
        </p>
        <button type="button" className="btn btn-primary" onClick={openModal}>Sign Up for free</button>
      </section>

      {showModal && <SignUp closeModal={closeModal} />}

      <section className="specification-section">
        <img src={aboutus} alt="aboutus" data-aos="fade-left" data-aos-duration="2000" />
      </section>

      <div className="ourmission-section">
        <h1 style={{ textAlign: "center", color: "blue" }}>Our Mission</h1>
        <p style={{ fontSize: '25px', fontStyle: 'fantasy' }}  data-aos="fade-right" data-aos-duration="2000">
          Most companies have mission statements, but many of them are outdated and
          were created before HR leaders had clear guidelines on what makes an effective
          mission statement. Whether your company needs to create a mission statement
          from scratch or is looking to refresh your existing one, this article is
          designed to help you understand the ins and outs of creating an effective mission statement.
        </p>
        <img src={mission} alt="mission" data-aos="fade-left" data-aos-duration="2000" />
        <p style={{ fontSize: '25px', fontStyle: 'fantasy' }} data-aos="fade-right" data-aos-duration="2000">
          Most companies have mission statements, but many of them are outdated and
          were created before HR leaders had clear guidelines on what makes an effective
          mission statement. Whether your company needs to create a mission statement
          from scratch or is looking to refresh your existing one, this article is
          designed to help you understand the ins and outs of creating an effective mission statement.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
