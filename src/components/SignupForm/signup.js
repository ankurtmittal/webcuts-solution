import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import "./signup.css";

const SignUp = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.username) formErrors.username = 'Username is required';
    if (!formData.email) formErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = 'Email is invalid';
    if (!formData.password) formErrors.password = 'Password is required';
    
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log(formData);
      setSuccessMessage('Form submitted successfully!');
      
      // Reset form data after submission
      setFormData({
        username: '',
        email: '',
        password: '',
      });

      // Clear any previous errors
      setErrors({});

      // Close modal after form submission
      closeModal();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times; Close</span>
        <Container>
          <Card>
            <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
            <Card.Body className="enquiryform">
              {successMessage && <Alert variant="success">{successMessage}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Enter username"
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>
                <br />

                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email"
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <br />

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter password"
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
                <br />

                <Button variant="primary" type="submit">
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default SignUp;
