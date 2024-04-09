import React from "react";
import {Signup} from "./Signup";
import { Navbar } from "../../Navbar";
import { Google } from "./Google";

export const Register = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <Signup/>
            </div>
            <Google/>
        </div>
    )
}
