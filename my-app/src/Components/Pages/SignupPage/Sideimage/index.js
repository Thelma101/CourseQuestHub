import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image"
import StudentwithIpad from "../StudentwithIpad.jpeg";
import backarrow from "../../../../Assets/Images/backarrow.svg";
import { Link } from "react-router-dom";

export function Sideimage() {
    return (
        <Container className="p-3 overflow-auto" >
            <div className="mx-auto px-4 py-3" >
                <Link to={"/"}>
                <Image src={backarrow} alt="" className="img-fluid img-thumbnail bg-light" width="45rem"/>
                </Link>
            </div>
            <div className="d-flex justify-content-center align-items-center mx-auto p-3" width="250px">
                <div className="">
                    <Image src={StudentwithIpad} alt="wallpaper" height={550} />   
                </div>
            </div>
            
        </Container>
    );
};