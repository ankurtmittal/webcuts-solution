import React, { useEffect, useRef } from 'react';
import "./App.css";
import SliderComponent from "./components/Slidercomponent";
import AOS from 'aos';
import 'aos/dist/aos.css';
import react from "./images/react.png";
import node from "./images/node.png";
import html from "./images/html.png";
import php from "./images/phpp.png";
import laravel from "./images/laravel.png";
import wordpress from "./images/wordpress.png";
import slider1 from "./images/slider1.jpg";
import slider2 from "./images/slider2.jpg";
import slider3 from "./images/slider3.jpg";
import android from "./images/android.jpg";
import website from "./images/website.jpg";
import marketing from "./images/ecommerce.jfif";
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const TopSection = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <SliderComponent />
            <h1 className="service-heading"> Our Services  </h1>
            <div>
                <div className="row">
                    <section className="section" data-aos="fade-right" data-aos-duration="1000">
                        <img src={android} alt="android" />
                        <h1 className="text-big">
                            Android App Developement
                        </h1>
                        <p className="text-big" style={{ fontSize: '18px', fontFamily: 'Helvetica', fontStyle: 'initial' }}>
                            App development services encompass the full cycle of creating mobile or web applications, from planning and design to development, testing, and deployment. Using technologies like Swift, Kotlin, React Native, or Flutter, teams ensure apps are secure, performant, and user-friendly. Ongoing maintenance and updates guarantee apps remain reliable and aligned with evolving needs, supported by efficient project management to ensure timely delivery.
                            Effective project management methodologies like agile ensure transparency and timely delivery throughout the development lifecycle,
                        </p>
                        <Link to="/mobile-app"> <button className="btn btn-primary">View More </button></Link>
                    </section>
                    <section className="section" data-aos="fade-right" data-aos-duration="1000">
                        <img src={website} alt="website" />
                        <h1 className="text-big" id="program1">
                            Web Application
                        </h1>
                        <p className="text-big" style={{ fontSize: '18px', fontFamily: 'Helvetica', fontStyle: 'initial' }}>
                            Web development frameworks like PHP (with Laravel), Node.js, and others streamline the creation of dynamic and scalable web applications. PHP, particularly with Laravel, provides a robust environment for building secure and feature-rich websites. Node.js, known for its event-driven architecture, excels in real-time applications and APIs, enhancing developer productivity. These frameworks empower developers to create efficient, responsive, and modern web solutions tailored to diverse business requirements and choices.
                        </p>
                        <Link to="/website"><button className="btn btn-primary">View More </button></Link>
                    </section>
                    <section className="section" data-aos="fade-right" data-aos-duration="1000">
                        <img src={marketing} alt="marketing" />
                        <h1 className="text-big" id="program2">
                            E-commerce
                        </h1>
                        <p className="text-big" style={{ fontSize: '18px', fontFamily: 'Helvetica', fontStyle: 'initial' }}>
                            WordPress and Shopify are popular e-commerce platforms known for their ease of use and robust features. WordPress, through plugins like WooCommerce, offers extensive customization options for building online stores on its flexible content management system. Shopify, a fully hosted solution, simplifies store management with its intuitive interface, handling everything from payments to shipping seamlessly. Both platforms are trusted by businesses worldwide for their reliability, scalability, and ability to support a wide range of e-commerce needs.
                        </p>
                        <Link to="/ecommerce"><Button variant="primary">View More </Button></Link>
                    </section>
                </div>

            </div>
            {/********* our techonolgy section start **********/}
            <div style={{ backgroundColor: '#d3d3d359' }}>
                <h1 className="technologies-heading">   Technologies We Use  </h1>
                <div className="main-techonology">
                    <section className="technology-section" data-aos="fade-left" data-aos-duration="1000">
                        <img src={php} alt="react" />
                        <h5 style={{ fontFamily: 'sans-serif', fontStyle: 'bold' }}>Php</h5>
                    </section>
                    <section className="technology-section" data-aos="fade-left" data-aos-duration="1000">
                        <img src={html} alt="react" />
                        <h5 style={{ fontFamily: 'sans-serif', fontStyle: 'bold' }}>Html</h5>
                    </section>
                    <section className="technology-section" data-aos="fade-left" data-aos-duration="1000">
                        <img src={wordpress} alt="react" />
                        <h5 style={{ fontFamily: 'sans-serif', fontStyle: 'bold' }}>Wordpress</h5>
                    </section>
                    <section className="technology-section" data-aos="fade-left" data-aos-duration="1000">
                        <img src={laravel} alt="react" />
                        <h5 style={{ fontFamily: 'sans-serif', fontStyle: 'bold' }}>Laravel</h5>
                    </section>
                    <section className="technology-section" data-aos="fade-left" data-aos-duration="1000">
                        <img src={node} alt="react" />
                        <h5 style={{ fontFamily: 'sans-serif', fontStyle: 'bold' }}>Node js</h5>
                    </section>
                    <section className="technology-section" data-aos="fade-left" data-aos-duration="1000">
                        <img src={react} alt="react" />
                        <h5 style={{ fontFamily: 'sans-serif', fontStyle: 'bold' }}>React.js</h5>
                    </section>
                </div>
            </div>
            {/*        Why choose us start  */}
            <h1 className="specification-heading">  Why Choose Us  </h1>
            <div className="main-specification">
                <section className="specification-section" data-aos="fade-right" data-aos-duration="1000">
                    <h1 className="text-big">
                        On-time Delivery
                    </h1>
                    <p className="text-small" style={{ fontSize: '17px', fontStyle: 'oblique' }}>
                        At our core, we prioritize on-time delivery as a cornerstone of our service.
                        We understand the critical importance of meeting deadlines and strive to provide
                        end-to-end solutions that are not only innovative and effective but also
                        delivered punctually and within your allocated budget. Timeliness isn't
                        just a goal for us; it's a commitment to ensuring your projects are completed
                        efficiently, allowing you to stay ahead of the competition and seize opportunities
                        before they arise. Let's collaborate to bring your vision to life with precision and promptness.
                    </p>
                </section>
                {/*              vertical line between two section   */}
                <div className="vertical-line"></div>
                {/*               end section        */}
                <section className="specification-section">
                    <img src={slider1} alt="slider1" data-aos="fade-left" data-aos-duration="1000" />
                </section>
            </div>


            <div className="main-specification">
                <section className="specification-section">
                    <img src={slider2} alt="slider2" data-aos="fade-right" data-aos-duration="1000" />
                </section>
                {/*              vertical line between two section   */}
                <div className="vertical-line"></div>
                {/*               end section        */}
                <section className="specification-section" data-aos="fade-left" data-aos-duration="1000">
                    <h1 className="text-big">
                        24/7 Live support
                    </h1>
                    <p className="text-small" style={{ fontSize: '17px', fontStyle: 'oblique' }}>
                        Securing your dream job in today's competitive landscape, exacerbated
                        by the challenges posed by COVID-19, demands a strategic approach to
                        highlight your skills and potential effectively. With traditional avenues disrupted,
                        adapting to virtual platforms and utilizing digital networking tools are essential for
                        standing out to employers. Leveraging online job boards, enhancing your LinkedIn profile,
                        and participating in virtual career fairs can significantly expand your job search reach.
                        Additionally, refining your resume and cover letter to reflect remote work capabilities
                        and emphasizing adaptable skills are crucial steps in navigating the evolving job market
                    </p>
                </section>

            </div>

            <div className="main-specification">
                <section className="specification-section" data-aos="fade-right" data-aos-duration="1000">
                    <h1 className="text-big">
                        Creative Design
                    </h1>
                    <p className="text-small" style={{ fontSize: '17px', fontStyle: 'oblique' }}>
                        In the current job market, particularly influenced by the challenges
                        of COVID-19, showcasing creativity in design has become a powerful strategy
                        to stand out to employers. Creative design isn't just about aesthetics; it's about
                        problem-solving and innovation, qualities that are increasingly valued in a rapidly evolving
                        digital landscape. Whether you're applying for graphic design roles, UX/UI positions, or even
                        marketing opportunities, demonstrating your ability to think outside the box and adapt to
                        new mediums can set you apart. Utilizing online portfolios, showcasing projects that
                        highlight your design process.
                    </p>
                </section>
                {/*              vertical line between two section   */}
                <div className="vertical-line"></div>
                {/*               end section        */}
                <section className="specification-section">
                    <img src={slider3} alt="slider3" data-aos="fade-left" data-aos-duration="1000" />
                </section>
            </div>
        </div>
    );
}

export default TopSection;

