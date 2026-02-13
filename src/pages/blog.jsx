import MiniNav from "../component/mininav";
import Nav from "../component/Navbar";
import Footer from "../component/footer";
import Data from "../json/data.json";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Blog from "../component/Blog";

function Bllog() {
  return (
    <div className="flex flex-col gap-5">
      {/* Navbar */}
      <MiniNav />
      <Nav />
     <Blog/>


      <div className="relative h-40 md:h-52 mb-12 overflow-hidden rounded-lg bg-gray-800">
        <div className="absolute inset-0 bg-[url('public/banner-08.jpg')] bg-cover bg-center flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">NEWS</h1>
        </div>
      </div>

      <div className="container w-full overflow-hidden px-4 md:px-8 lg:px-16 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Data.map((blog) => (
          <motion.div
            key={blog.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
              <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 mb-4">${blog.price}</p>
              <Link
                to={`/Details/${blog.id}`}
                className="mt-auto text-white bg-black hover:bg-red-600 text-center py-2 rounded transition"
              >
                View Product
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Bllog;
