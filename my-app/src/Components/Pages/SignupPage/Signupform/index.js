import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"

export function Signupform () {

    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()


    const handlesubmit = (e) => {
      e.preventDefault()
      axios.post("http://localhost:3001/CQHUser",{firstname,lastname,phone,email,password})
      .then(result => {console.log(result)
      navigate("/HomePage")
      })
      .catch(err => console.log(err))
    }


    return (
        <Container fluid className="p-4 vh-100">
        
        <div className="text-center py-3">
          <h2>Welcome To CourseQuestHub</h2>
          Enter your details to create your account
        </div>
        <Form onSubmit={handlesubmit}>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name"
            onChange={(e) => setFirstname(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" 
            onChange={(e) => setLastname(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel" placeholder="Phone" 
            onChange={(e) => setPhone(e.target.value)} />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}  />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label> Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" 
            onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree to CourseQuestHub User Agreement and Privacy Policy" />
            </Form.Group>
            
          <div className="d-grid gap-2" >
              <Button variant="primary" type="" size="lg" > Sign Up </Button>
          </div>
          
        </Form>
  
        <div className="fst-italic text-center mx-auto p-4">
          Already have an account? <Link to="/LoginPage">Login</Link>
        </div>
      </Container>
    );
};