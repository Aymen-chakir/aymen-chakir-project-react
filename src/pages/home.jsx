import MiniNav from "../component/mininav"
import Nav from "../component/Navbar"
import Caroussel from "../component/caroussel"
import Secound from "../component/secoundsection"
import Carousel2 from "../component/caroussel2"
import Sales from "../component/sales"
import Blog from "../component/Blog"
import Footer from "../component/footer"
function Home() {
    return(
        <div className="relative">
            <MiniNav/>
            <Nav/>
            <Caroussel/>
            <Secound/>
            <Carousel2/>
            <Sales/>
            <Blog/>
            <Footer/>
        </div>
    )
}
export default Home