import Card from "./components/Card-Fevo/Card";
import Fevorite from "./components/Card-Fevo/Fevorite";
import Navbar from "./components/layouts/Navbar";
import FoodInfo from "./components/main-comps/FoodInfo";
import Home from "./components/main-comps/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/foodinfo" element={<FoodInfo/>}/>
        <Route path="/card" element={<Card/>}/>
        <Route path="/fevorite" element={<Fevorite/>}/>
      </Routes>      
    </>
  );
};

export default App;