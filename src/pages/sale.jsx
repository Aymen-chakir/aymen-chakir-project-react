import MiniNav from "../component/mininav"
import Nav from "../component/Navbar"
import Footer from "../component/footer"
import Minisection from "../component/minisec"

function Sale(params) {
    return (
        <div className="w-full h-full flex flex-col gap-5">
            <div>
                <MiniNav />
                <Nav />
            </div>
            <Minisection />
            <Footer />
        </div>
    )
}
export default Sale