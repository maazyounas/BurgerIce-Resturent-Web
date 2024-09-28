import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import PickUp from "./Components/PickUp/PickUp";
import Home from "./Components/Home/Home";
import Signin from "./Components/Signin/Signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./Components/ContactUs/ContactUs";
import Delivery from "./Components/Delivery/Delivery";
import Menu from "./Components/Menu/Menu";


function App() {
  return (
    <div>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/pickup" element={<PickUp />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/menu" element={<Menu />} />
            {/* Optionally, add a default route */}
            <Route path="/" element={<Home />} />
          </Routes>
        </Sidebar>
      </Router>
    </div>
  );
}

export default App;
