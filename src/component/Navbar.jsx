import { Link } from "react-router-dom"
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function Nav(params) {
    return (
        <div className=" w-full h-[80px] flex justify-around items-center">
            <div className="text-[#252752] font-bold text-4xl">fashe <span className="text-[#E65540]">.</span></div>
            <div className="w-[600px] flex justify-between items-center text-gray-600">
                <Link to={'/'}>Home</Link>
                <Link to={"/shop"}>Shop</Link>
                <Link to={'/sale'}>Sale</Link>
                <Link to={'/features'}>Features</Link>
                <Link to={'/blog'}>Blog</Link>
                <Link to={'/about'}>About</Link>
                <Link to={"/contact"}>Contact</Link>
            </div>
            <div className="flex text-4xl   text-gray-600 justify-around w-[120px]">
                <div><FaRegCircleUser />
                </div>
                <div className="border-l-2 px-2">
                    <HiOutlineShoppingBag />
                </div>
            </div>

        </div>
    )
}
export default Nav