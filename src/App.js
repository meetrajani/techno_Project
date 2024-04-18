import logo from "./logo.svg";
import "./CSS/styles.css";
import "./CSS/media.css"
import Home from "./pages/Home";
import Nevbar from "./pages/Nevbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Service from "./pages/Service";
import It_Solution from "./pages/It_Solution";
import Contact_us from "./pages/Contact_us";
import Blog_details from "./pages/Blog_details";
import Element from "./pages/Element";

function App() {
  return (
    <div className="App">
      <Nevbar />
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about_one" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/it_Solution" element={<It_Solution/>}/>
        <Route path="/Element" element={<Element/>}/>
        <Route path="/blog_details" element={<Blog_details/>}/>
        <Route path="/contact_us" element={<Contact_us/>}/>
      </Routes>

      <Footer/>

    </div>
  );
}

export default App;
