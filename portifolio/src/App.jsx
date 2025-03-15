import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/index.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx"; // Importe o HomePage
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
        <Route path="/" element={<HomePage isDarkMode={isDarkMode} />} /> {/* Renderiza o HomePage */}
      </Routes>
    </Router>
  );
}

export default App;





















