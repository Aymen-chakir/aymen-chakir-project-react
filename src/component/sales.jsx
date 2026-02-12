import allimg from "../constant/images"
import { motion } from "framer-motion";
function Sales() {
    return (
        <div className="w-full h-[70vh] flex justify-center gap-10 items-center bg-[#F2F2F2]  ">
            <div className=" relative w-[40%] h-[80%] bg-blue-500 flex flex-col justify-center items-center overflow-hidden ">
                <div className="w-[100%] h-[100%]">
                    <motion.img
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        src={allimg.bg_video_1} alt=""
                        className="h-[100%]" />
                </div>
                <div className=" absolute h-[20%] w-[50%] flex flex-col text-white justify-between items-center ">
                    <h1>The Beauty</h1>
                    <h1 className="text-5xl font-bold">LOOKBOOK</h1>
                    <p>VIEW COLLECTION</p>
                </div>
            </div>
            <div className="w-[40%] h-[80%] relative ">
                <div className="h-[100%] overflow-hidden ">
                    <motion.img whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className=" w-[100%] h-[100%] bg-cover" src={allimg.shopItem8} alt="" />
                </div>
                <div className=" absolute left-40 bottom-0 h-[50%] flex flex-col justify-center gap-5 items-center  ">
                    <div className="flex gap-5 flex-col items-center ">
                        <h1>Boxy2 T-shirt with Roll Sleeve</h1>
                        <p>$20.00</p>
                    </div>
                    <div className="flex gap-5 text-gray-500 ">
                        <div className="w-[60px] h-[60px] border-1 border-gray-400 flex items-center">
                            13 days
                        </div>
                        <div className="w-[60px] h-[60px] border-1 border-gray-400 flex items-center"> 12 hrs</div>
                        <div className="w-[60px] h-[60px] border-1 border-gray-400 flex items-center"> -18 min</div>
                        <div className="w-[60px] h-[60px] border-1 border-gray-400 items-center flex">-50secs</div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sales