import {Routes,Route} from "react-router"
import Home from "./pages/home"
import Shop from "./pages/shop"

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>} />
            <Route path="/shop" element={<Shop/>} />
     </Routes>
    </>
  )
}

export default App
