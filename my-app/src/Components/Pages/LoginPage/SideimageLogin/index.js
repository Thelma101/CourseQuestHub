import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image"
import Loginimage from "../Loginimage.jpeg";
import backarrow from "../../../../Assets/Images/backarrow.svg";
import { Link } from "react-router-dom";

export function Sideimagelogin() {
    return (
        <Container className="p-3 overflow-auto" >
            <div className="mx-auto" >
                <Link to={"/"}>
                <Image src={backarrow} alt="" className="img-fluid img-thumbnail bg-light" width="45rem"/>
                </Link>
            </div>
            <div className="d-flex justify-content-center align-items-center mx-auto p-3" width="250px">
                <div className="">
                    <Image src={Loginimage} alt="wallpaper" height={400} />   
                </div>
            </div>
            
        </Container>
    );
};