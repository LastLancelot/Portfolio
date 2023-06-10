
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "./style.css";
import Home from "./Home";
import About from "./About";
import Film from "./Film";

export default function App() {
  return (
    <>
    <div className="navbar">
      <div className="linksPosStyle">
      <Link to="/" className="linksStyle">Home</Link>
      </div>
      <div className="linksPosStyle">
      <Link to="/Film" className="linksStyle">Film</Link>
      </div>
      <div className="linksPosStyle">
      <Link to="/about" className="linksStyle">About</Link>
      </div>

    </div>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Film" element={<Film />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
    </>
  );
}

