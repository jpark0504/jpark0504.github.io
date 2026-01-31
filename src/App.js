import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/experience" element={<Experience/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;