import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Signupform} from "../SignupPage/Signupform";
import { Sideimage } from "./Sideimage";
// import { Navbar } from "../../Navbar";


export function SignupPage() {
  return (

    <Container className=" container-fluid min-vh-100" >
      <div className="border rounded-5 p-3 bg-white shadow" width="930px" >
      <Row className="rounded justify-content-center align-items-center overflow-auto mx-auto">
        <Col className="col-md-6 img-fluid flex-column  ">
          <Sideimage/>
        </Col>
        <Col className="col-md-6">
          <Signupform/>
        </Col>
      </Row>
      </div>
    </Container>
  );
}