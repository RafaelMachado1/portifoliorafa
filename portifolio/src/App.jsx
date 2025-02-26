import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/index.jsx";
import Home from "./pages/Home/index.jsx";
import About from "./pages/About/index.jsx";
import Projects from "./pages/Projects/index.jsx";
import Contact from "./pages/Contact/index.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <GlobalStyles isDarkMode={isDarkMode} />
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Routes>
        <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
        <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
        <Route
          path="/projects"
          element={<Projects isDarkMode={isDarkMode} />}
        />
        <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
      </Routes>
    </Router>
  );
}

export default App;
