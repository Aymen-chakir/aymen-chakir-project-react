import MiniNav from "../component/mininav"
import Nav from "../component/Navbar"
import Footer from "../component/footer"
import Aboutt from "../component/aboutt"
import Minisection from "../component/minisec"


function About(params) {
    return(
        <div>
            <MiniNav/>
            <Nav/>
            <Minisection/>
            <Aboutt/>
            <Footer/>
        </div>
    )
}
export default About