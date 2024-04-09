import { Navbar } from "../../Navbar";
import { RegisterButton } from "./CareerPath";
import { MidSection } from "./MidSection";
import { Mission } from "./UniqueFeatures";
import { Testimonials } from "./Partners";
import { Footer } from "../../Footer";
import { Vision } from "./Vision";
import { Article } from "./Article";

export const LandingPage = () => {
    return(
        <div>
            <Navbar/>
            <RegisterButton/>
            <MidSection/>
            <Mission/>
            <Testimonials/>
            <Vision/>
            <Article/>
            <Footer/>
        </div>
    )
}