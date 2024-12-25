import { Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      {/* <Dum /> */}
      <About />
    </>
  );
}

export default App;
