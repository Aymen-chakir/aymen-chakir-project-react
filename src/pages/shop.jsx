import MiniNav from "../component/mininav"
import Nav from "../component/Navbar"
import Minisection from "../component/minisec"
import Categories from "../component/shopcategories"
function Shop() {
    return(
        <div>
            <MiniNav/>
             <Nav/>
             <Minisection/>
             <Categories/>
        </div>
    )
}
export default Shop