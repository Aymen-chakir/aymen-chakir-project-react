import allimg from "../constant/images"
import { motion } from "framer-motion";
function Secound() {
    return (
        <div className="h-[110vh] flex  justify-center items-center ">
            <div className="w-[80vw] h-[110vh] flex justify-between gap-5">
                <div className="w-[30%] h-[100%] flex flex-col  gap-5 ">
                    <div className="h-[60%] relative overflow-hidden ">
                        <motion.img
                            src={allimg.cards1}
                            alt=""
                            className="w-full h-full"  
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                        />
                        <motion.button
                            whileHover={{ scale: 1 }}
                            className="absolute bottom-5 bg-white text-black left-25 h-15 hover:bg-[#E65540] hover:text-white  w-50 text-amber-200">DRESSES</motion.button>

                    </div>
                    <div className="h-[40%] relative overflow-hidden">
                        <motion.img
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="w-full h-full" src={allimg.cards4} alt="" />
                        <button className="bg-white text-black absolute bottom-5 left-25 h-15 hover:bg-[#E65540] hover:text-white w-50 text-amber-200">SUNGLASSES</button>

                    </div>
                </div>
                <div className="w-[30%] h-[100%] flex flex-col  gap-5  ">
                    <div className=" h-[40%] relative overflow-hidden">
                        <motion.img
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="w-full h-full" src={allimg.cards2} alt="" />
                        <button className=" bg-white text-black absolute bottom-5 left-25 h-15 hover:bg-[#E65540] hover:text-white w-50 text-amber-200">WATCHES</button>

                    </div>
                    <div className=" h-[60%] relative overflow-hidden">
                        <motion.img
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="w-full h-full" src={allimg.cards5} alt="" />
                        <button className=" bg-white text-black absolute bottom-5 left-25 h-15 hover:bg-[#E65540] hover:text-white w-50 text-amber-200">FOOTERWEAR</button>

                    </div>
                </div>
                <div className="w-[30%] h-[100%] flex flex-col  gap-5  ">
                    <div className="h-[60%] relative overflow-hidden ">
                        <motion.img
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="w-full h-full" src={allimg.cards3} alt="" />
                        <button className=" bg-white text-black absolute bottom-5 left-25 h-15 hover:bg-[#E65540] hover:text-white w-50 text-amber-200">BAGS</button>
                    </div>
                    <div className="h-[40%] relative overflow-hidden">
                        <motion.img
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="w-full h-full" src={allimg.cards6} alt="" />
                        <motion.button
                            className="absolute bottom-5 bg-white text-black left-25 h-15 hover:bg-[#E65540] hover:text-white  w-50 text-amber-200">DRESSES</motion.button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Secound