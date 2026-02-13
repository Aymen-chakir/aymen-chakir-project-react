import MiniNav from "../component/mininav"
import Nav from "../component/Navbar"
import Footer from "../component/footer"
import Blog from "../component/Blog"

function Bllog() {
    return (
        <div className="">
            <MiniNav />
            <Nav />
            <div>
                <Blog />
            </div>
            <Footer />
        </div>
    )
}
export default Bllog