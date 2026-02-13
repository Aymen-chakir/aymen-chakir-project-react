import {Routes,Route} from "react-router"
import Home from "./pages/home"
import Shop from "./pages/shop"
import Contact from "./pages/contact"
function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>} />
       <Route path="/shop" element={<Shop/>} />
       <Route path="/contact" element={<Contact/>} />
     </Routes>
    </>
  )
}

export default App
