import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="flex min-h-screen w-screen flex-col bg-[#000814] font-inter">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
