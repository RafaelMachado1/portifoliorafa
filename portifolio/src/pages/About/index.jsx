import React from "react";

const About = ({ isDarkMode }) => {
  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <h1>About Page</h1>
    </div>
  );
};

export default About;
