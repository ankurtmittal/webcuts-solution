import phone from "../../images/phone-icon.jpg";
import location from "../../images/location-icon.png";
import email from "../../images/email-icon.jpg";
import "./contact.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    AOS.init();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password.trim()) newErrors.password = 'Password is required';

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log(formData); // Handle form submission, e.g., send to an API

      setSuccessMessage('Form submitted successfully!');
      setFormData({
        username: '',
        email: '',
        password: '',
      });
    }
  };

    return (
      <div>

      <div className="main-contactus">

        <div className="contactus-section" >
        <img src={location}  alt="location" />
          <h1>Address</h1>
          <p>Industrial Area, Phase 8, Sector 73, Mohali, Punjab</p>
        </div>

        <div className="contactus-section">
        <img src={email}  alt="email" />
        <h1>Email</h1>
        <p>info@webcuts-solution.com</p>
        </div>

        <div className="contactus-section"  >
        <img src={phone}  alt="phone" />
        <h1>Phone</h1>
        <p>+919876735848</p>
       </div>
      </div>

    <h1 style={{ textAlign: 'center', fontSize:'22px'}}>
         For Any Query and suggestion contact us
     </h1>             
    <Container style={{marginBottom: '80px;'}} >
    <Card>
    <Card.Header className="text-center" style={{padding: '50px;'}}>Registration Form</Card.Header>
    <Card.Body  className="enquiryform">
    {successMessage && <Alert variant="success">{successMessage}</Alert>}
      <Form onSubmit={handleSubmit} >
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control  type="text" name="username" value={formData.username} onChange={handleInputChange}  isInvalid={!!errors.username}
          placeholder="Enter username" />
         <Form.Control.Feedback type="invalid">
           {errors.username}
           </Form.Control.Feedback>
         </Form.Group><br />

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email"  value={formData.email}  onChange={handleInputChange}  isInvalid={!!errors.email} placeholder="Enter email" />
          <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
        </Form.Group><br />

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password"  value={formData.password} onChange={handleInputChange} isInvalid={!!errors.password}  placeholder="Enter password" />
          <Form.Control.Feedback type="invalid">
                {errors.password}
          </Form.Control.Feedback>
        </Form.Group><br />

     <Button variant="primary" type="submit">
          Contact Us
        </Button>
      </Form>
      </Card.Body>
        </Card>
    </Container>
   </div> 

 
        
      );
};

export default RegistrationForm;
