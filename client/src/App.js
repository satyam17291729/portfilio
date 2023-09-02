import React from "react"
import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Certificate from "./Components/Certificate";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
function App(){
  return(
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/about"Component={About}/>
      <Route path="/project"Component={Project}/>
      <Route path="/certificate"Component={Certificate}/>
      <Route path="/contact"Component={Contact}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;