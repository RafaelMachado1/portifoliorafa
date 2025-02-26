import React from "react";

const Projects = ({ isDarkMode }) => {
  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <h1>Projects Page</h1>
    </div>
  );
};

export default Projects;
