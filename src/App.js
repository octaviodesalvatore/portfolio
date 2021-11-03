import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import MyWork from "./Components/MyWork";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <MyWork />
      <Footer />
    </div>
  );
}

export default App;
