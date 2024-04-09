import React from "react";
import { Greeting }from "./Welcome-Video"
import { HomeNavbar } from "./HomeNavBar";
import { Footer } from "../../Footer";
import { TakeQuiz } from "./TakeQuiz";
import { PopularCourses } from "./FindCourse";
import { MeetMentors } from "./Meet-mentors";
import { JoinCommunity } from "./Community-Button";
import { WatchVideo } from "./watch video";


export const HomePage = () => {
    return(
<div>
    <HomeNavbar/>
    <Greeting/>
    <WatchVideo/>
    <TakeQuiz/>
    <PopularCourses/>
    <MeetMentors/>
    <JoinCommunity/>
    <Footer/>
</div>
    )
}