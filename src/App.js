import ProgressBar from "./ProgressBar";
import Card from "./components/Card-Fevo/Cart";
import Fevorite from "./components/Card-Fevo/Fevorite";
import Navbar from "./components/layouts/Navbar";
import FoodInfo from "./components/main-comps/FoodInfo";
import Home from "./components/main-comps/Home";
import { Route, Routes } from "react-router-dom";
// for notification
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ProgressBar/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/foodinfo" element={<FoodInfo/>}/>
        <Route path="/card" element={<Card/>}/>
        <Route path="/fevorite" element={<Fevorite/>}/>
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;