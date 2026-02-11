import MiniNav from "../component/mininav"
import Nav from "../component/Navbar"
import Caroussel from "../component/caroussel"
import Secound from "../component/secoundsection"

function Home() {
    return(
        <div className="">
            <MiniNav/>
            <Nav/>
            <Caroussel/>
            <Secound/>
        </div>
    )
}
export default Home