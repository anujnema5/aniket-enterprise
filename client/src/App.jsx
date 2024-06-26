import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/navbar/Nav";
import Home from "./components/content/Home";

import Services from "./components/content/Services";
import Project from "./components/content/Project";
import Request from "./components/content/Request";
import Footer from "./components/footer/Footer";
import Whatsapp from "./components/content/Whatsapp";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Nav />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Project />}></Route>
            <Route path="/Request" element={<Request />}></Route>
          </Routes>
          <Whatsapp />
         
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
