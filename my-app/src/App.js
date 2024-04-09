import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { LandingPage, HomePage, Navbar, Register, LoginPage, Community, Plumbing, Medicine, SoftwareEng, Lawyer, Teaching} from "./Components";
import { SignupPage } from "./Components/Pages/SignupPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Signup } from "./Components/Pages/Register/Signup";
import { CoursesDashboard } from "./Components/Pages/Courses-Page/Course-Dashboard";
import { DynamicCourses } from "./Components/Pages/Courses-Page/Course-Dashboard/Courses";


function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/" element={<LandingPage/>}></Route>
        <Route path="/HomePage" element=
        {<HomePage/>}></Route>
        <Route path="/LoginPage" element={<LoginPage/>}></Route>
        <Route path="/SignupPage" element={<SignupPage/>}></Route>
      <Route path="/Course-Dashboard" element={<CoursesDashboard/>}></Route>
      <Route path="/Courses" element={<DynamicCourses/>}></Route>
      <Route path="/Community-Page" element={<Community/>}></Route>
      <Route path="/Plumbing" element={<Plumbing/>}></Route>
      <Route path="/medicine" element={<Medicine/>}></Route>
      <Route path="/Software-Eng" element={<SoftwareEng/>}></Route>
      <Route path="/Law" element={<Lawyer/>}></Route>
      <Route path="/Teaching" element={<Teaching/>}></Route>


      
      </Routes>
      
    </Router>
  );
}

export default App;
