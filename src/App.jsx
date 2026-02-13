import { Routes, Route } from "react-router"
import Home from "./pages/home"
import Shop from "./pages/shop"
import Contact from "./pages/contact"
import Sale from "./pages/sale"
import Futur from "./pages/features"
import Bllog from "./pages/blog"
import About from "./pages/about"
import Sign from "./component/signe"
import Login from "./component/login"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/sale' element={<Sale />} />
        <Route path='/futur' element={<Futur />} />
        <Route path="/blog" element={<Bllog />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign" element={<Sign />} />
         <Route path="/login" element={<Login />} />

      </Routes>
    </>
  )
}

export default App
