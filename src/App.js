import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Trending from "./pages/Trending";
import Subscribed from "./pages/Subscribed";
import Add from "./pages/Add";
import Friends from "./pages/Friends";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div style={{ paddingBottom: "80px" }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/subscribed" element={<Subscribed />} />
          <Route path="/add" element={<Add />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
