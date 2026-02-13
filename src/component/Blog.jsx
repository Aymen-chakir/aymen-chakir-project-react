import allimg from "../constant/images"
import { motion } from "framer-motion";
function Blog({className = ''}) {
    return (
        <div className="w-[99vw] h-[80vh]  flex flex-col justify-around items-center ">
            <div className=" text-4xl">OUR BLOG</div>

            <div className="w-[80%] h-[80%]  flex ">
                <div className={`flex  gap-10 ${className} `} >
                    <div className="w-[35%] text-gray-500 ">
                        <div className="overflow-hidden">
                            <motion.img
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.6 }}
                                className="w-[100%] h-[100%]" src={allimg.blog_1} alt="" />
                        </div> <div className="h-40 flex flex-col justify-around ">
                            <h1 className="text-1xl text-black">New York SS 2018 Street Style : By Annina Mislin</h1>
                            <p>by fashe-theme Admin on Dec 28,2017</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                        </div>
                    </div>
                    <div className="w-[35%] text-gray-500">
                        <div
                            className="overflow-hidden">  <motion.img
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.6 }} className="w-[100%] h-[100%]" src={allimg.blog_2} alt="" />
                        </div>
                        <div className="h-40 flex flex-col justify-around ">
                            <h1 className="text-1xl text-black" >New York SS 2018 Street Style : By Annina Mislin</h1>
                            <p>by fashe-theme Admin on Dec 28,2017</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p></div>                    </div>
                    <div className="w-[35%] text-gray-500">
                        <div className="overflow-hidden">
                            <motion.img
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.6 }}
                                className="w-[100%] h-[100%]" src={allimg.blog_3} alt="" />
                        </div>
                        <div className="h-40 flex flex-col justify-around ">
                            <h1 className="text-1xl text-black">New York SS 2018 Street Style : By Annina Mislin</h1>
                            <p>by fashe-theme Admin on Dec 28,2017</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}
export default Blog