import NavBar from "./components/NavBar"
import Home from "./components/Home"
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Projects from "./components/Projects";
import Langtech from "./components/LangTech";
import Experience from "./components/Experience"

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Langtech />
      <Experience />
      <Projects />

      <SocialLinks />
    </div>
  );
}

export default App;