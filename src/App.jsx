import { Routes, Route } from "react-router-dom";
import { ComplexNavbar } from "./components/Header"; // Navbar component
import { SimpleFooter } from "./components/Footer"; // Navbar component
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Services from "./pages/Services";
import MyProfile from "./pages/MyProfile";



export default function App() {
  return (
    <div>
      {/* Navbar */}
      <ComplexNavbar />

      {/* Page Content */}
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/Resume" element={<Resume/>} />
         <Route path="/services" element={<Services />} />      
         <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </div>
      <SimpleFooter />
    </div>
  );
}
