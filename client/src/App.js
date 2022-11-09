import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Listing from "./pages/Listing";
import Navber from "./components/Navbar/Navbar";
function App() {
  return (    
    <>
    <Navber/>
    <Routes>      
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
      </Routes>
    </>
  );
}

export default App;
