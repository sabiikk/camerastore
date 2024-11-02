import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nimages from "./components/Nimages";
import Home from "./pages/Home";
import Auth from "./Auth";
import Cart from "./pages/Cart";
import Allproduct from "./pages/Allproduct";
import About from "./pages/About";
import Fhome from "./pages/Fhome";
import Addproject from "./components/Addproject";
import Profile from "./components/Profile";


function App() {
  return (
    <>

      <Routes>
        {/* <Route path="/" element={<Fhome/>}/> */}
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Auth/>}/>
        <Route path="/register" element={<Auth  register={"register"} />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product" element={<Allproduct/>}/>
        <Route path="/addproduct" element={<Addproject/>}/>
        <Route path="/profile" element={<Profile/>}/>


      </Routes>
    
     
     
    </>
  );
}

export default App;
