import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {LoginForm} from "../LoginPage/LoginForm";
import { Sideimage } from "../SignupPage/Sideimage";
// import { Navbar } from "../../Navbar";
import { Sideimagelogin } from "./SideimageLogin";


export function LoginPage() {
  return (
   
    <Container className=" container-fluid min-vh-100" >
      <div className="border rounded-5 p-3 bg-white shadow" width="930px">
      <Row className="rounded justify-content-center mx-auto">
        <Col className="col-md-6 img-fluid flex-column">
          <Sideimagelogin/>
        </Col>
        <Col className="col-md-6">
          <LoginForm/>
        </Col>
      </Row>
      </div>
    </Container>

  );
}