// import * as React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import "bootstrap/dist/css/bootstrap.css";

// import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";

// import EditProduct from "./components/product/edit.component";
// import ProductList from "./components/product/list.component";
// import CreateProduct from "./components/product/create.component";

// function App() {
//   return (<Router>
//     <Navbar bg="primary">
//       <Container>
//         <Link to={"/"} className="navbar-brand text-white">
//           Basic Crud App
//         </Link>
//       </Container>
//     </Navbar>

//     <Container className="mt-5">
//       <Row>
//         <Col md={12}>
//           <Routes>
//             <Route path="/product/create" element={<CreateProduct />} />
//             <Route path="/product/edit/:id" element={<EditProduct />} />
//             <Route exact path='/' element={<ProductList />} />
//           </Routes>
//         </Col>
//       </Row>
//     </Container>
//   </Router>);
// }

// export default App;
// Filename - App.js


// App.js
import React from "react";
import "./App.css";
import SliderComponent from "./components/Slidercomponent"; // import the Slider component
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobilePhone } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faCode  } from '@fortawesome/free-solid-svg-icons';
import react from "./images/react.png";
import node from "./images/node.png";
import  html from "./images/html.png";
import php from "./images/php.png";
import laravel from "./images/laravel.png";
import wordpress from "./images/wordpress.png";
import slider1 from "./images/slider1.jpg";
import slider2 from "./images/slider2.jpg";
import slider3 from "./images/slider3.jpg";




function App() { 
       
  
        
    return (
        <div>
           <Header />
             <SliderComponent />
             <h1 className="service-heading">   Our  Services  </h1>
             <div className="row">
             <section className="section">
                          <FontAwesomeIcon icon={faMobilePhone} style={{fontSize: '48px', color: 'red'}} />
                        <h1 className="text-big">
                            Android App Developement
                        </h1>
                        <p className="text-small">
                            Hunting down a relevant job requires proper techniques for showcasing your potential to the employer.
                            But with the advent of COVID-19, it has become a bit challenging and competitive to reach out for your dream job.
                        </p>
            </section>
            <section className="section">
                    <FontAwesomeIcon icon={faLaptop} style={{fontSize: '48px', color: 'red'}} />
                        <h1 className="text-big" id="program1">
                            Web Application
                        </h1>
                        <p className="text-small">
                            JavaScript can be used for Client-side developments as well as Server-side developments.
                        </p>
            </section>
            <section className="section">
                    <FontAwesomeIcon icon={faCode } style={{fontSize: '48px', color: 'red'}} />
                        <h1 className="text-big" id="program2">
                            Digital Marketing
                        </h1>
                        <p className="text-small">
                            When  run faster than corresponding Python programs and slower than C++. Like C++, Java does static type checking, but Python does not.
                        </p>
            </section>
        </div>


          <div className="row">
             <section className="section">
                          <FontAwesomeIcon icon={faMobilePhone} style={{fontSize: '48px', color: 'red'}} />
                        <h1 className="text-big">
                            Android App Developement
                        </h1>
                        <p className="text-small">
                            Hunting down a relevant job requires proper techniques for showcasing your potential to the employer.
                            But with the advent of COVID-19, it has become a bit challenging and competitive to reach out for your dream job.
                        </p>
            </section>
            <section className="section">
                    <FontAwesomeIcon icon={faLaptop} style={{fontSize: '48px', color: 'red'}} />
                        <h1 className="text-big" id="program1">
                            Web Application
                        </h1>
                        <p className="text-small">
                            JavaScript can be used for Client-side developments as well as Server-side developments.
                        </p>
            </section>
            <section className="section">
                    <FontAwesomeIcon icon={faCode } style={{fontSize: '48px', color: 'red'}} />
                        <h1 className="text-big" id="program2">
                            Digital Marketing
                        </h1>
                        <p className="text-small">
                            When  run faster than corresponding Python programs and slower than C++. Like C++, Java does static type checking, but Python does not.
                        </p>  
            </section>
            </div>

     {/*        our techonolgy section start  */}
            <h1 className="technologies-heading">   Technologies We Use  </h1>
            <p style={{ textAlign: 'center', fontSize: '20px', margin: '10px' }}>
            Our experts are determined to deliver high-quality services that can transform your 
            business using state-of-the-art technology. It authorizes you to remain ahead of the 
            competition in your industry.
            </p>
          <div className="main-techonology">
             <section className="technology-section">
                      <img src={react}  alt="react" />
                      <h1>React.js</h1>
            </section>
            <section className="technology-section">
                      <img src={laravel}  alt="react" />
                      <h1>Laravel</h1>
            </section>
            <section className="technology-section">
                      <img src={php}  alt="react" />
                      <h1>Php</h1>
            </section>
            <section className="technology-section">
                      <img src={html}  alt="react" />
                      <h1>Html</h1>
            </section>
            <section className="technology-section">
                      <img src={wordpress}  alt="react" />
                      <h1>Wordpress</h1>
            </section>
            <section className="technology-section">
                      <img src={node}  alt="react" />
                      <h1>Node js</h1>
            </section>
            </div>
        {/*        Why choose us start  */}
            <h1 className="specification-heading">  Why Choose Us  </h1>
            <div className="main-specification">
             <section className="specification-section">
                        <h1 className="text-big">
                        On-time Delivery
                        </h1>
                        <p className="text-small">
                        We focus on delivering end-to-end solutions for your brand right on time
                         and within budget. Let's make things happen before your competitor does.
                        </p>
            </section>
             {/*              vertical line between two section   */}
             <div className="vertical-line"></div>
             {/*               end section        */}
            <section className="specification-section">
            <img src={slider1}  alt="slider1" />
            </section>
            </div>
  
   
            <div className="main-specification">
            <section className="specification-section">
            <img src={slider2}  alt="slider2" />
            </section>
              {/*              vertical line between two section   */}
              <div className="vertical-line"></div>
              {/*               end section        */}
             <section className="specification-section">
                        <h1 className="text-big">
                        24/7 Live support
                        </h1>
                        <p className="text-small">
                            Hunting down a relevant job requires proper techniques for showcasing your potential to the employer.
                            But with the advent of COVID-19, it has become a bit challenging and competitive to reach out for your dream job.
                        </p>
            </section>
            
            </div>

            <div className="main-specification">
             <section className="specification-section">
                        <h1 className="text-big">
                        Creative Design
                        </h1>
                        <p className="text-small">
                            Hunting down a relevant job requires proper techniques for showcasing your potential to the employer.
                            But with the advent of COVID-19, it has become a bit challenging and competitive to reach out for your dream job.
                        </p>
            </section>
             {/*              vertical line between two section   */}
             <div className="vertical-line"></div>
             {/*               end section        */}
            <section className="specification-section">
            <img src={slider3}  alt="slider3" />
            </section>
            </div>
           <Footer /> 
        </div>
    );
}

export default App;

