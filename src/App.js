import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import NavBar from "./components/navBar";
import Home from "./pages/home";
import About from "./pages/about";
import Resume from "./pages/resume";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="App">
      <div className="min-h-[100vh] dark:bg-background">
        <NavBar />
        <Footer />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/my-resume" element={<Resume />} />
            <Route path="/contact-me" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
