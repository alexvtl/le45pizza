
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Pages/Home/home"
import Header from "./Components/Header/header"
import Order from "./Pages/Order/order"
import Footer from "./Components/Footer/footer"
import Menu from "./Pages/Menu/menu"

function App() {
  

  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/commandes" element={<Order/>}/> 
    <Route path="/menu" element={<Menu/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App
