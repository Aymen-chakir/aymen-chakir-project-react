import MiniNav from "../component/mininav"
import Nav from "../component/Navbar"
import Minisection from "../component/minisec"
import Categories from "../component/shopcategories"
import Footer from "../component/footer"

function Shop() {
    return(
        <div>
            <MiniNav/>
             <Nav/>
             <Minisection/>
             <Categories/>
             <Footer/>
        </div>
    )
}
export default Shop 