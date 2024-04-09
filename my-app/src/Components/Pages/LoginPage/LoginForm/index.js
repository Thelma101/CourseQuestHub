import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"
import axios from "axios"
import {useNavigate} from "react-router-dom"


export function LoginForm () {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/CQHUserlogin",{email, password})
    .then(result => {
      console.log(result)
      if(result.data === "Success") {
        navigate("/HomePage")
      }
    })
    .catch(err => console.log(err))
  }

    return (
        <Container fluid className=" p-4 mx-auto vh-100">
          <div className="text-center py-3">
            <h2 className="mx-auto">Welcome Back</h2>
            Enter your email and password to access your account
          </div>
          <Form onSubmit={handlesubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" 
              onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"
              onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
    
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                </Col>
                <Col md="auto">
                    <div >
                        <a href="#" alt="password" >Forgot Password</a>
                    </div>
                </Col>
            </Row>
    
    
            <div className="d-grid gap-2" >
                <Button variant="dark" type="" size="lg"> Sign In </Button>
                <Button variant="outline-dark" type="" size="lg"> Sign In with Google </Button>
            </div>
            
          </Form>
    
          <div className="fst-italic text-center p-3">
            Don't have an account? <a>Sign Up</a>
          </div>
        </Container>
      );
    }