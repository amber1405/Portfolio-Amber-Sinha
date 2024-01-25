import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="flex min-h-screen w-screen flex-col bg-[#000814] font-inter">
      <Navbar />
      <Hero />
      <Skills />
    </div>
  );
}

export default App;
