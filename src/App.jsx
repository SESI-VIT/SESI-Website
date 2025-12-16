import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SolarIntro from "./intro/SolarIntro";
import HeaderOnly from "./component/header/header.jsx";
import Footer from "./component/footer/footer.jsx";

import Home from "./component/home/home.jsx";
import Events from "./pages/Events";
import Blogs from "./pages/Blogs";
import Achievements from "./pages/Achievements";
import Board from "./pages/board";

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    // Intro plays FIRST
    return <SolarIntro onComplete={() => setShowIntro(false)} />;
  }

  return (
    <BrowserRouter>
      <HeaderOnly />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/board" element={<Board />} />
        <Route path="/gallery" element={<Home />} />
      </Routes>

      <Footer id="contact" />
    </BrowserRouter>
  );
};

export default App;
