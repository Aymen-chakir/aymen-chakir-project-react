import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoChevronDownOutline } from "react-icons/io5";
function MiniNav(params) {
return(
    <div className="w-full h-[50px]  bg-[#F5F5F5] flex justify-around items-center text-gray-600 ">
        <div className="flex w-[150px] text-gray-600 justify-around  ">
            <FaFacebookF />
            <IoLogoTwitter />
            <FaPinterest />
            <FaGoogle />
            <FaInstagram />
        </div>
        <div className=" w-[400px]  flex justify-center items-center text-gray-600">
            <h1>free shupping for standard order over $100</h1>
             </div>
        <div className="flex justify-between items-center w-[250px]">
            <h1>fache@example.com</h1>
            <div className="flex items-center justify-center"><h1>USD</h1><IoChevronDownOutline /></div>
        </div>

    </div>
)
}
export default MiniNav