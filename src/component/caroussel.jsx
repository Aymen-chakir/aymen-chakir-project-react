import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

function Caroussel(params) {
    return(
        <>
         <div className="w-full h-[550px] bg-blue-400">
            <FaChevronLeft/>

            <FaChevronRight/>

        </div>
        <div></div></>
       
    )
}
export default Caroussel